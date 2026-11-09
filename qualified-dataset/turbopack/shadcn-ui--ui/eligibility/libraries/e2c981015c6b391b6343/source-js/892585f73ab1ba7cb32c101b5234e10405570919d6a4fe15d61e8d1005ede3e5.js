import { devtoolsMiddleware } from "@tanstack/ai-event-client";
import { undoNullWidening } from "@tanstack/ai-utils";
import { stripToSpecMiddleware } from "../../strip-to-spec-middleware.js";
import { streamToText } from "../../stream-to-response.js";
import { resolveDebugOption } from "../../logger/resolve.js";
import { normalizeToolResult } from "../../utilities/tool-result.js";
import { isProviderExecutedToolCall } from "../../utilities/provider-executed.js";
import { LazyToolManager } from "./tools/lazy-tool-manager.js";
import { ToolCallManager, MiddlewareAbortError, executeToolCalls } from "./tools/tool-calls.js";
import { convertSchemaForStructuredOutput, isStandardSchema, parseWithStandardSchema, convertSchemaToJsonSchema } from "./tools/schema-converter.js";
import { maxIterations } from "./agent-loop-strategies.js";
import { convertMessagesToModelMessages, generateMessageId } from "./messages.js";
import { MiddlewareRunner } from "./middleware/compose.js";
import { provideSandboxRuntime } from "./middleware/sandbox-runtime.js";
import { CapabilityRegistry } from "./middleware/capabilities.js";
import { validateCapabilities } from "./middleware/validate.js";
import { MCPManager } from "./mcp/manager.js";
import { EventType } from "@ag-ui/core";
const kind = "text";
function createChatOptions(options) {
  return options;
}
function combineAbortSignals(a, b) {
  if (!a) return b;
  if (!b) return a;
  if (a.aborted) return a;
  if (b.aborted) return b;
  const controller = new AbortController();
  const onAbort = (source) => () => {
    controller.abort(source.reason);
  };
  a.addEventListener("abort", onAbort(a), { once: true });
  b.addEventListener("abort", onAbort(b), { once: true });
  return controller.signal;
}
class TextEngine {
  adapter;
  params;
  systemPrompts;
  tools;
  loopStrategy;
  toolCallManager;
  lazyToolManager;
  initialMessageCount;
  requestId;
  streamId;
  effectiveRequest;
  effectiveSignal;
  messages;
  iterationCount = 0;
  lastFinishReason = null;
  streamStartTime = 0;
  totalChunkCount = 0;
  currentMessageId = null;
  accumulatedContent = "";
  accumulatedThinking = [];
  currentThinkingContent = "";
  currentThinkingSignature = "";
  eventOptions;
  eventToolNames;
  finishedEvent = null;
  earlyTermination = false;
  toolPhase = "continue";
  cyclePhase = "processText";
  // Client state extracted from initial messages (before conversion to ModelMessage)
  initialApprovals;
  initialClientToolResults;
  // AG-UI protocol IDs
  threadId;
  runIdOverride;
  parentRunIdOverride;
  // Middleware support
  middlewareRunner;
  middlewareCtx;
  sandboxFileQueue = [];
  deferredPromises = [];
  abortReason;
  middlewareAbortController;
  // Combines the caller's signal with middleware abort() so running tools
  // observe both cancellation sources via ctx.abortSignal.
  toolAbortSignal;
  terminalHookCalled = false;
  logger;
  // Structured-output finalization state (populated by runStructuredFinalization)
  structuredOutputResult = null;
  // Native combined mode: tracks whether we've already emitted the synthetic
  // `structured-output.start` event before the schema-constrained final-turn
  // text begins streaming. The event must precede the first
  // TEXT_MESSAGE_START so the client-side StreamProcessor routes the JSON
  // deltas into a StructuredOutputPart instead of a plain TextPart.
  combinedStartEmitted = false;
  // Native combined mode: messageId we want the synthetic
  // `structured-output.start` (and any error emitted before deltas arrive)
  // to carry, so the client matches it to the streaming text deltas.
  combinedStructuredMessageId = null;
  // Holds the validated value when `finalStructuredOutput.validate` is provided
  // and succeeds. Distinct from `structuredOutputResult.data` (the normalized
  // but unvalidated payload from the structured-output.complete chunk).
  validatedStructuredOutput = void 0;
  hasValidatedStructuredOutput = false;
  finalizationError = null;
  finalStructuredOutput;
  constructor(config, logger) {
    this.logger = logger;
    this.adapter = config.adapter;
    this.finalStructuredOutput = config.finalStructuredOutput;
    this.params = config.params;
    this.systemPrompts = config.params.systemPrompts || [];
    this.loopStrategy = config.params.agentLoopStrategy || maxIterations(5);
    this.initialMessageCount = config.params.messages.length;
    const { approvals, clientToolResults } = this.extractClientStateFromOriginalMessages(
      config.params.messages
    );
    this.initialApprovals = approvals;
    this.initialClientToolResults = clientToolResults;
    this.messages = convertMessagesToModelMessages(config.params.messages);
    this.lazyToolManager = new LazyToolManager(
      config.params.tools || [],
      this.messages,
      config.params.lazyToolsConfig
    );
    this.tools = this.lazyToolManager.getActiveTools();
    this.toolCallManager = new ToolCallManager(this.tools);
    this.requestId = this.createId("chat");
    this.streamId = this.createId("stream");
    this.effectiveRequest = config.params.abortController ? { signal: config.params.abortController.signal } : void 0;
    this.effectiveSignal = config.params.abortController?.signal;
    this.threadId = config.params.threadId || config.params.conversationId || this.createId("thread");
    this.runIdOverride = config.params.runId;
    this.parentRunIdOverride = config.params.parentRunId;
    const allMiddleware = [
      devtoolsMiddleware(),
      ...config.middleware || [],
      stripToSpecMiddleware()
    ];
    this.middlewareRunner = new MiddlewareRunner(allMiddleware, logger);
    this.middlewareAbortController = new AbortController();
    this.toolAbortSignal = combineAbortSignals(
      this.effectiveSignal,
      this.middlewareAbortController.signal
    );
    this.middlewareCtx = {
      requestId: this.requestId,
      streamId: this.streamId,
      runId: this.runIdOverride ?? this.requestId,
      threadId: this.threadId,
      // Legacy alias kept on the ctx so middleware that reads
      // `ctx.conversationId` keeps working. Always equals `threadId`.
      conversationId: this.threadId,
      phase: "init",
      iteration: 0,
      chunkIndex: 0,
      signal: this.effectiveSignal,
      abort: (reason) => {
        this.abortReason = reason;
        this.middlewareAbortController?.abort(reason);
      },
      context: config.context,
      defer: (promise) => {
        this.deferredPromises.push(promise);
      },
      // Provider / adapter info
      activity: "chat",
      provider: config.adapter.name,
      model: config.params.model,
      source: "server",
      streaming: true,
      // Config-derived (updated in beforeRun and applyMiddlewareConfig)
      systemPrompts: this.systemPrompts,
      toolNames: void 0,
      options: void 0,
      modelOptions: config.params.modelOptions,
      // Computed
      messageCount: this.initialMessageCount,
      hasTools: this.tools.length > 0,
      // Mutable per-iteration
      currentMessageId: null,
      accumulatedContent: "",
      // References
      messages: this.messages,
      createId: (prefix) => this.createId(prefix),
      // Capability bookkeeping for this request (populated by middleware setup)
      capabilities: new CapabilityRegistry(),
      // Convenience accessors that delegate to a capability handle's own
      // tuple getter/provider, keyed by this context. `getX(ctx)` and
      // `ctx.get(X)` are interchangeable.
      get: (capability) => capability[0](this.middlewareCtx),
      getOptional: (capability) => capability[0](this.middlewareCtx, { optional: true }),
      provide: (capability, value) => capability[1](this.middlewareCtx, value)
    };
    provideSandboxRuntime(this.middlewareCtx, {
      logger: this.logger,
      emit: (event) => {
        this.logger.sandbox(`file ${event.type} ${event.path}`, {
          event: {
            type: event.type,
            path: event.path,
            timestamp: event.timestamp
          }
        });
        void this.middlewareRunner.runSandboxFile(this.middlewareCtx, event).catch((err) => {
          this.logger.errors("sandbox file hook failed", { error: err });
        });
        this.sandboxFileQueue.push(
          this.createCustomEventChunk("sandbox.file", {
            type: event.type,
            path: event.path,
            timestamp: event.timestamp
          })
        );
      },
      emitFileDiff: (value) => {
        this.sandboxFileQueue.push(
          this.createCustomEventChunk("sandbox.file.diff", value)
        );
      }
    });
  }
  /** Get the accumulated content after the chat loop completes */
  getAccumulatedContent() {
    return this.accumulatedContent;
  }
  /** Get the final messages array after the chat loop completes */
  getMessages() {
    return this.messages;
  }
  /** Returns the structured-output result if finalization ran successfully. */
  getStructuredOutputResult() {
    return this.structuredOutputResult;
  }
  /**
   * Returns the validated structured-output value (the result of running
   * `finalStructuredOutput.validate` against the raw structured-output data)
   * wrapped in a `{ value }` object so callers can distinguish "no validation
   * happened" from "validation produced undefined". Returns `null` when no
   * validator was configured or validation hasn't been performed yet.
   */
  getValidatedStructuredOutput() {
    return this.hasValidatedStructuredOutput ? { value: this.validatedStructuredOutput } : null;
  }
  /** Returns the recorded finalization error, if any. */
  getFinalizationError() {
    return this.finalizationError;
  }
  async *run() {
    this.beforeRun();
    this.logger.agentLoop("run started", {
      threadId: this.middlewareCtx.threadId
    });
    try {
      await this.middlewareRunner.runSetup(this.middlewareCtx);
      this.middlewareCtx.phase = "init";
      const initialConfig = this.buildMiddlewareConfig();
      const transformedConfig = await this.middlewareRunner.runOnConfig(
        this.middlewareCtx,
        initialConfig
      );
      this.applyMiddlewareConfig(transformedConfig);
      await this.middlewareRunner.runOnStart(this.middlewareCtx);
      const pendingPhase = yield* this.checkForPendingToolCalls();
      if (pendingPhase === "wait") {
        return;
      }
      const skipAgentLoop = !!this.finalStructuredOutput && this.tools.length === 0 && this.finalStructuredOutput.nativeCombined !== true;
      if (!skipAgentLoop) {
        do {
          if (this.earlyTermination || this.isCancelled()) {
            return;
          }
          this.logger.agentLoop(`iteration=${this.middlewareCtx.iteration}`, {
            iteration: this.middlewareCtx.iteration
          });
          await this.beginCycle();
          if (this.cyclePhase === "processText") {
            this.middlewareCtx.phase = "beforeModel";
            this.middlewareCtx.iteration = this.iterationCount;
            const iterConfig = this.buildMiddlewareConfig();
            const iterTransformedConfig = await this.middlewareRunner.runOnConfig(
              this.middlewareCtx,
              iterConfig
            );
            this.applyMiddlewareConfig(iterTransformedConfig);
            yield* this.streamModelResponse();
          } else {
            yield* this.processToolCalls();
          }
          this.endCycle();
        } while (this.shouldContinue());
      }
      this.logger.agentLoop("run finished", {
        finishReason: this.lastFinishReason
      });
      if (this.finalStructuredOutput && !this.isCancelled() && !this.finalizationError) {
        if (this.finalStructuredOutput.nativeCombined === true) {
          yield* this.harvestCombinedStructuredOutput();
        } else {
          yield* this.runStructuredFinalization();
        }
      }
      if (!this.terminalHookCalled && this.toolPhase !== "wait" && !this.isCancelled()) {
        if (this.finalizationError) {
          this.terminalHookCalled = true;
          const errForHook = new Error(
            this.finalizationError.message,
            this.finalizationError.cause !== void 0 ? { cause: this.finalizationError.cause } : void 0
          );
          if (this.finalizationError.code !== void 0) {
            Object.defineProperty(errForHook, "code", {
              value: this.finalizationError.code,
              enumerable: true
            });
          }
          await this.middlewareRunner.runOnError(this.middlewareCtx, {
            error: errForHook,
            duration: Date.now() - this.streamStartTime
          });
        } else {
          this.terminalHookCalled = true;
          await this.middlewareRunner.runOnFinish(this.middlewareCtx, {
            finishReason: this.lastFinishReason,
            duration: Date.now() - this.streamStartTime,
            content: this.accumulatedContent,
            usage: this.finishedEvent?.usage
          });
        }
      }
    } catch (error) {
      if (!this.terminalHookCalled) {
        this.terminalHookCalled = true;
        if (error instanceof MiddlewareAbortError) {
          this.abortReason = error.message;
          await this.middlewareRunner.runOnAbort(this.middlewareCtx, {
            reason: error.message,
            duration: Date.now() - this.streamStartTime
          });
        } else {
          this.logger.errors("chat run failed", {
            error,
            threadId: this.middlewareCtx.threadId
          });
          await this.middlewareRunner.runOnError(this.middlewareCtx, {
            error,
            duration: Date.now() - this.streamStartTime
          });
        }
      }
      if (!(error instanceof MiddlewareAbortError)) {
        throw error;
      }
    } finally {
      if (!this.terminalHookCalled && this.isCancelled()) {
        this.terminalHookCalled = true;
        await this.middlewareRunner.runOnAbort(this.middlewareCtx, {
          reason: this.abortReason,
          duration: Date.now() - this.streamStartTime
        });
      }
      if (this.deferredPromises.length > 0) {
        await Promise.allSettled(this.deferredPromises);
      }
    }
  }
  beforeRun() {
    this.streamStartTime = Date.now();
    const { tools, metadata } = this.params;
    const options = {};
    if (metadata !== void 0) options.metadata = metadata;
    this.eventOptions = Object.keys(options).length > 0 ? options : void 0;
    this.eventToolNames = tools?.map((t) => t.name);
    this.middlewareCtx.options = this.eventOptions;
    this.middlewareCtx.toolNames = this.eventToolNames;
  }
  async beginCycle() {
    if (this.cyclePhase === "processText") {
      await this.beginIteration();
    }
  }
  endCycle() {
    if (this.cyclePhase === "processText") {
      this.cyclePhase = "executeToolCalls";
      return;
    }
    this.cyclePhase = "processText";
    this.iterationCount++;
  }
  async beginIteration() {
    this.currentMessageId = this.createId("msg");
    this.accumulatedContent = "";
    this.accumulatedThinking = [];
    this.currentThinkingContent = "";
    this.currentThinkingSignature = "";
    this.finishedEvent = null;
    this.middlewareCtx.currentMessageId = this.currentMessageId;
    this.middlewareCtx.accumulatedContent = "";
    await this.middlewareRunner.runOnIteration(this.middlewareCtx, {
      iteration: this.iterationCount,
      messageId: this.currentMessageId
    });
  }
  async *streamModelResponse() {
    const { metadata, modelOptions } = this.params;
    const tools = this.tools;
    const toolsWithJsonSchemas = tools.map((tool) => ({
      ...tool,
      inputSchema: tool.inputSchema ? convertSchemaToJsonSchema(tool.inputSchema) : void 0,
      outputSchema: tool.outputSchema ? convertSchemaToJsonSchema(tool.outputSchema) : void 0
    }));
    this.middlewareCtx.phase = "modelStream";
    const providerName = this.adapter.provider ?? this.adapter.name;
    this.logger.request(
      `activity=chat provider=${providerName} model=${this.params.model} messages=${this.messages.length} tools=${this.tools.length} stream=true`,
      {
        provider: providerName,
        model: this.params.model,
        messageCount: this.messages.length,
        toolCount: this.tools.length
      }
    );
    const combinedSchema = this.finalStructuredOutput?.nativeCombined === true ? this.finalStructuredOutput.jsonSchema : void 0;
    for await (const chunk of this.adapter.chatStream({
      model: this.params.model,
      messages: this.messages,
      tools: toolsWithJsonSchemas,
      metadata,
      request: this.effectiveRequest,
      modelOptions,
      systemPrompts: this.systemPrompts,
      logger: this.logger,
      threadId: this.threadId,
      runId: this.runIdOverride,
      parentRunId: this.parentRunIdOverride,
      // Expose provided capabilities (e.g. sandbox) to harness adapters.
      capabilities: this.middlewareCtx,
      // Client approval decisions, for harness interactive-approval resolution.
      approvals: this.initialApprovals,
      ...combinedSchema ? { outputSchema: combinedSchema } : {}
    })) {
      if (this.isCancelled()) {
        break;
      }
      this.totalChunkCount++;
      this.handleStreamChunk(chunk);
      if (this.finalStructuredOutput?.nativeCombined === true && this.finalStructuredOutput.yieldChunks && !this.combinedStartEmitted && chunk.type === EventType.TEXT_MESSAGE_START) {
        this.combinedStartEmitted = true;
        const messageId = typeof chunk.messageId === "string" && chunk.messageId !== "" ? chunk.messageId : generateMessageId();
        this.combinedStructuredMessageId = messageId;
        const synthStart = {
          type: EventType.CUSTOM,
          name: "structured-output.start",
          value: { messageId },
          model: this.params.model,
          timestamp: Date.now(),
          threadId: this.threadId,
          ...this.runIdOverride ? { runId: this.runIdOverride } : {}
        };
        const synthOutputs = await this.middlewareRunner.runOnChunk(
          this.middlewareCtx,
          synthStart
        );
        for (const outputChunk of synthOutputs) {
          yield outputChunk;
          this.middlewareCtx.chunkIndex++;
        }
      }
      const outputChunks = await this.middlewareRunner.runOnChunk(
        this.middlewareCtx,
        chunk
      );
      const suppressAgentLifecycle = !!this.finalStructuredOutput && this.finalStructuredOutput.yieldChunks && this.finalStructuredOutput.nativeCombined !== true;
      for (const outputChunk of outputChunks) {
        if (suppressAgentLifecycle && (outputChunk.type === EventType.RUN_STARTED || outputChunk.type === EventType.RUN_FINISHED)) {
          continue;
        }
        this.logger.output(`type=${outputChunk.type}`, { chunk: outputChunk });
        yield outputChunk;
        this.middlewareCtx.chunkIndex++;
      }
      if (chunk.type === "RUN_FINISHED" && chunk.usage) {
        await this.middlewareRunner.runOnUsage(this.middlewareCtx, chunk.usage);
      }
      yield* this.drainSandboxFileQueue();
      if (this.earlyTermination) {
        break;
      }
    }
    yield* this.drainSandboxFileQueue();
  }
  handleStreamChunk(chunk) {
    switch (chunk.type) {
      // AG-UI Events
      case "TEXT_MESSAGE_CONTENT":
        this.handleTextMessageContentEvent(chunk);
        break;
      case "TOOL_CALL_START":
        this.handleToolCallStartEvent(chunk);
        break;
      case "TOOL_CALL_ARGS":
        this.handleToolCallArgsEvent(chunk);
        break;
      case "TOOL_CALL_END":
        this.handleToolCallEndEvent(chunk);
        break;
      case "RUN_FINISHED":
        this.handleRunFinishedEvent(chunk);
        break;
      case "RUN_ERROR":
        this.handleRunErrorEvent(chunk);
        break;
      case "STEP_STARTED":
        this.handleStepStartedEvent();
        break;
      case "STEP_FINISHED":
        this.handleStepFinishedEvent(chunk);
        break;
    }
  }
  // ===========================
  // AG-UI Event Handlers
  // ===========================
  handleTextMessageContentEvent(chunk) {
    if (chunk.content) {
      this.accumulatedContent = chunk.content;
    } else {
      this.accumulatedContent += chunk.delta;
    }
    this.middlewareCtx.accumulatedContent = this.accumulatedContent;
  }
  handleToolCallStartEvent(chunk) {
    this.toolCallManager.addToolCallStartEvent(chunk);
  }
  handleToolCallArgsEvent(chunk) {
    this.toolCallManager.addToolCallArgsEvent(chunk);
  }
  handleToolCallEndEvent(chunk) {
    this.toolCallManager.completeToolCall(chunk);
  }
  handleRunFinishedEvent(chunk) {
    this.finishedEvent = chunk;
    this.lastFinishReason = chunk.finishReason ?? null;
  }
  handleRunErrorEvent(_chunk) {
    this.earlyTermination = true;
  }
  finalizeCurrentThinkingStep() {
    if (this.currentThinkingContent) {
      this.accumulatedThinking.push({
        content: this.currentThinkingContent,
        ...this.currentThinkingSignature && {
          signature: this.currentThinkingSignature
        }
      });
      this.currentThinkingContent = "";
      this.currentThinkingSignature = "";
    }
  }
  handleStepStartedEvent() {
    this.finalizeCurrentThinkingStep();
  }
  handleStepFinishedEvent(chunk) {
    if (chunk.delta) {
      this.currentThinkingContent += chunk.delta;
    }
    if (chunk.signature) {
      this.currentThinkingSignature = chunk.signature;
    }
  }
  /**
   * Tools available for execution this turn. The discovery tool is dropped
   * from the advertised set (`this.tools`) once every lazy tool is discovered,
   * but a model may still re-request discovery; this widens execution lookup
   * to include it so such calls don't fail with "Unknown tool". Centralised so
   * both execution sites (`processToolCalls` and `checkForPendingToolCalls`)
   * stay in sync.
   */
  resolveExecutableTools(toolCalls) {
    return this.lazyToolManager.getExecutableTools(
      this.tools,
      toolCalls.map((tc) => tc.function.name)
    );
  }
  async *checkForPendingToolCalls() {
    const pendingToolCalls = this.getPendingToolCallsFromMessages();
    if (pendingToolCalls.length === 0) {
      return "continue";
    }
    const finishEvent = this.createSyntheticFinishedEvent();
    const undiscoveredLazyResults = [];
    const executablePendingCalls = pendingToolCalls.filter((tc) => {
      if (this.lazyToolManager.isUndiscoveredLazyTool(tc.function.name)) {
        undiscoveredLazyResults.push({
          toolCallId: tc.id,
          toolName: tc.function.name,
          result: {
            error: this.lazyToolManager.getUndiscoveredToolError(
              tc.function.name
            )
          },
          state: "output-error"
        });
        return false;
      }
      return true;
    });
    if (undiscoveredLazyResults.length > 0) {
      for (const chunk of this.buildToolResultChunks(
        undiscoveredLazyResults,
        finishEvent
      )) {
        yield* this.pipeThroughMiddleware(chunk);
      }
    }
    if (executablePendingCalls.length === 0) {
      return "continue";
    }
    const { approvals, clientToolResults } = this.collectClientState();
    const generator = executeToolCalls(
      executablePendingCalls,
      this.resolveExecutableTools(executablePendingCalls),
      approvals,
      clientToolResults,
      (eventName, data) => this.createCustomEventChunk(eventName, data),
      {
        onBeforeToolCall: async (toolCall, tool, args) => {
          this.logger.tools(`phase=before name=${toolCall.function.name}`, {
            name: toolCall.function.name,
            args
          });
          const hookCtx = {
            toolCall,
            tool,
            args,
            toolName: toolCall.function.name,
            toolCallId: toolCall.id
          };
          return this.middlewareRunner.runOnBeforeToolCall(
            this.middlewareCtx,
            hookCtx
          );
        },
        onAfterToolCall: async (info) => {
          this.logger.tools(`phase=after name=${info.toolName}`, {
            name: info.toolName,
            result: info.result
          });
          await this.middlewareRunner.runOnAfterToolCall(
            this.middlewareCtx,
            info
          );
        }
      },
      this.middlewareCtx.context,
      this.toolAbortSignal
    );
    const executionResult = yield* this.drainToolCallGenerator(generator);
    if (this.isMiddlewareAborted()) {
      this.setToolPhase("stop");
      return "stop";
    }
    await this.middlewareRunner.runOnToolPhaseComplete(this.middlewareCtx, {
      toolCalls: pendingToolCalls,
      results: executionResult.results,
      needsApproval: executionResult.needsApproval,
      needsClientExecution: executionResult.needsClientExecution
    });
    const argsMap = /* @__PURE__ */ new Map();
    for (const tc of pendingToolCalls) {
      argsMap.set(tc.id, tc.function.arguments);
    }
    if (executionResult.needsApproval.length > 0 || executionResult.needsClientExecution.length > 0) {
      if (executionResult.results.length > 0) {
        for (const chunk of this.buildToolResultChunks(
          executionResult.results,
          finishEvent,
          argsMap
        )) {
          yield* this.pipeThroughMiddleware(chunk);
        }
      }
      for (const chunk of this.buildApprovalChunks(
        executionResult.needsApproval,
        finishEvent
      )) {
        yield* this.pipeThroughMiddleware(chunk);
      }
      for (const chunk of this.buildClientToolChunks(
        executionResult.needsClientExecution,
        finishEvent
      )) {
        yield* this.pipeThroughMiddleware(chunk);
      }
      this.setToolPhase("wait");
      return "wait";
    }
    const toolResultChunks = this.buildToolResultChunks(
      executionResult.results,
      finishEvent,
      argsMap
    );
    for (const chunk of toolResultChunks) {
      yield* this.pipeThroughMiddleware(chunk);
    }
    return "continue";
  }
  async *processToolCalls() {
    if (!this.shouldExecuteToolPhase()) {
      this.setToolPhase("stop");
      return;
    }
    const toolCalls = this.toolCallManager.getToolCalls();
    const finishEvent = this.finishedEvent;
    if (!finishEvent || toolCalls.length === 0) {
      this.setToolPhase("stop");
      return;
    }
    this.addAssistantToolCallMessage(toolCalls);
    const undiscoveredLazyResults = [];
    const executableToolCalls = toolCalls.filter((tc) => {
      if (this.lazyToolManager.isUndiscoveredLazyTool(tc.function.name)) {
        undiscoveredLazyResults.push({
          toolCallId: tc.id,
          toolName: tc.function.name,
          result: {
            error: this.lazyToolManager.getUndiscoveredToolError(
              tc.function.name
            )
          },
          state: "output-error"
        });
        return false;
      }
      return true;
    });
    if (undiscoveredLazyResults.length > 0 && this.finishedEvent) {
      for (const chunk of this.buildToolResultChunks(
        undiscoveredLazyResults,
        this.finishedEvent
      )) {
        yield* this.pipeThroughMiddleware(chunk);
      }
    }
    if (executableToolCalls.length === 0) {
      this.toolCallManager.clear();
      this.setToolPhase("continue");
      return;
    }
    this.middlewareCtx.phase = "beforeTools";
    const { approvals, clientToolResults } = this.collectClientState();
    const generator = executeToolCalls(
      executableToolCalls,
      this.resolveExecutableTools(executableToolCalls),
      approvals,
      clientToolResults,
      (eventName, data) => this.createCustomEventChunk(eventName, data),
      {
        onBeforeToolCall: async (toolCall, tool, args) => {
          this.logger.tools(`phase=before name=${toolCall.function.name}`, {
            name: toolCall.function.name,
            args
          });
          const hookCtx = {
            toolCall,
            tool,
            args,
            toolName: toolCall.function.name,
            toolCallId: toolCall.id
          };
          return this.middlewareRunner.runOnBeforeToolCall(
            this.middlewareCtx,
            hookCtx
          );
        },
        onAfterToolCall: async (info) => {
          this.logger.tools(`phase=after name=${info.toolName}`, {
            name: info.toolName,
            result: info.result
          });
          await this.middlewareRunner.runOnAfterToolCall(
            this.middlewareCtx,
            info
          );
        }
      },
      this.middlewareCtx.context,
      this.toolAbortSignal
    );
    const executionResult = yield* this.drainToolCallGenerator(generator);
    this.middlewareCtx.phase = "afterTools";
    if (this.isMiddlewareAborted()) {
      this.setToolPhase("stop");
      return;
    }
    await this.middlewareRunner.runOnToolPhaseComplete(this.middlewareCtx, {
      toolCalls,
      results: executionResult.results,
      needsApproval: executionResult.needsApproval,
      needsClientExecution: executionResult.needsClientExecution
    });
    if (executionResult.needsApproval.length > 0 || executionResult.needsClientExecution.length > 0) {
      if (executionResult.results.length > 0) {
        for (const chunk of this.buildToolResultChunks(
          executionResult.results,
          finishEvent
        )) {
          yield* this.pipeThroughMiddleware(chunk);
        }
      }
      for (const chunk of this.buildApprovalChunks(
        executionResult.needsApproval,
        finishEvent
      )) {
        yield* this.pipeThroughMiddleware(chunk);
      }
      for (const chunk of this.buildClientToolChunks(
        executionResult.needsClientExecution,
        finishEvent
      )) {
        yield* this.pipeThroughMiddleware(chunk);
      }
      this.setToolPhase("wait");
      return;
    }
    const toolResultChunks = this.buildToolResultChunks(
      executionResult.results,
      finishEvent
    );
    for (const chunk of toolResultChunks) {
      yield* this.pipeThroughMiddleware(chunk);
    }
    if (this.lazyToolManager.hasNewlyDiscoveredTools()) {
      this.tools = this.lazyToolManager.getActiveTools();
      this.toolCallManager = new ToolCallManager(this.tools);
      this.setToolPhase("continue");
      return;
    }
    this.toolCallManager.clear();
    this.setToolPhase("continue");
  }
  shouldExecuteToolPhase() {
    return this.finishedEvent?.finishReason === "tool_calls" && this.tools.length > 0 && this.toolCallManager.hasToolCalls();
  }
  addAssistantToolCallMessage(toolCalls) {
    this.finalizeCurrentThinkingStep();
    this.messages = [
      ...this.messages,
      {
        role: "assistant",
        content: this.accumulatedContent || null,
        toolCalls,
        ...this.accumulatedThinking.length > 0 && {
          thinking: this.accumulatedThinking
        }
      }
    ];
  }
  /**
   * Extract client state (approvals and client tool results) from original messages.
   * This is called in the constructor BEFORE converting to ModelMessage format,
   * because the parts array (which contains approval state) is lost during conversion.
   */
  extractClientStateFromOriginalMessages(originalMessages) {
    const approvals = /* @__PURE__ */ new Map();
    const clientToolResults = /* @__PURE__ */ new Map();
    for (const message of originalMessages) {
      if (message.role === "assistant" && message.parts) {
        for (const part of message.parts) {
          if (part.type === "tool-call") {
            if (part.output !== void 0 && !part.approval) {
              clientToolResults.set(part.id, part.output);
            }
            if (part.approval?.id && part.approval?.approved !== void 0 && part.state === "approval-responded") {
              approvals.set(part.approval.id, part.approval.approved);
            }
          }
        }
      }
    }
    return { approvals, clientToolResults };
  }
  collectClientState() {
    const approvals = new Map(this.initialApprovals);
    const clientToolResults = new Map(this.initialClientToolResults);
    for (const message of this.messages) {
      if (message.role === "tool" && message.toolCallId) {
        let output;
        if (Array.isArray(message.content)) {
          output = message.content;
        } else {
          try {
            output = JSON.parse(message.content);
          } catch {
            output = message.content;
          }
        }
        if (output && typeof output === "object" && output.pendingExecution === true) {
          continue;
        }
        clientToolResults.set(message.toolCallId, output);
      }
    }
    return { approvals, clientToolResults };
  }
  buildApprovalChunks(approvals, finishEvent) {
    const chunks = [];
    for (const approval of approvals) {
      chunks.push({
        type: "CUSTOM",
        timestamp: Date.now(),
        model: finishEvent.model,
        name: "approval-requested",
        value: {
          toolCallId: approval.toolCallId,
          toolName: approval.toolName,
          input: approval.input,
          approval: {
            id: approval.approvalId,
            needsApproval: true
          }
        }
      });
    }
    return chunks;
  }
  buildClientToolChunks(clientRequests, finishEvent) {
    const chunks = [];
    for (const clientTool of clientRequests) {
      chunks.push({
        type: "CUSTOM",
        timestamp: Date.now(),
        model: finishEvent.model,
        name: "tool-input-available",
        value: {
          toolCallId: clientTool.toolCallId,
          toolName: clientTool.toolName,
          input: clientTool.input
        }
      });
    }
    return chunks;
  }
  buildToolResultChunks(results, finishEvent, argsMap) {
    const chunks = [];
    for (const result of results) {
      const content = normalizeToolResult(result.result);
      const wireContent = typeof content === "string" ? content : JSON.stringify(content);
      if (argsMap) {
        chunks.push({
          type: "TOOL_CALL_START",
          timestamp: Date.now(),
          model: finishEvent.model,
          toolCallId: result.toolCallId,
          toolCallName: result.toolName,
          toolName: result.toolName
        });
        const args = argsMap.get(result.toolCallId) ?? "{}";
        chunks.push({
          type: "TOOL_CALL_ARGS",
          timestamp: Date.now(),
          model: finishEvent.model,
          toolCallId: result.toolCallId,
          delta: args,
          args
        });
        chunks.push({
          type: "TOOL_CALL_END",
          timestamp: Date.now(),
          model: finishEvent.model,
          toolCallId: result.toolCallId,
          toolCallName: result.toolName,
          toolName: result.toolName,
          result: wireContent,
          ...result.state !== void 0 && { state: result.state }
        });
      }
      chunks.push({
        type: "TOOL_CALL_RESULT",
        timestamp: Date.now(),
        model: finishEvent.model,
        messageId: this.createId("tool-result"),
        toolCallId: result.toolCallId,
        content: wireContent,
        role: "tool",
        ...result.state !== void 0 && { state: result.state }
      });
      const placeholderIdx = this.messages.findIndex((m) => {
        if (m.role !== "tool" || m.toolCallId !== result.toolCallId) {
          return false;
        }
        if (typeof m.content !== "string") return false;
        try {
          return JSON.parse(m.content)?.pendingExecution === true;
        } catch {
          return false;
        }
      });
      const newToolMessage = {
        role: "tool",
        content,
        toolCallId: result.toolCallId
      };
      if (placeholderIdx >= 0) {
        this.messages = [
          ...this.messages.slice(0, placeholderIdx),
          newToolMessage,
          ...this.messages.slice(placeholderIdx + 1)
        ];
      } else {
        this.messages = [...this.messages, newToolMessage];
      }
    }
    return chunks;
  }
  getPendingToolCallsFromMessages() {
    const completedToolIds = /* @__PURE__ */ new Set();
    for (const message of this.messages) {
      if (message.role === "tool" && message.toolCallId) {
        let hasPendingExecution = false;
        if (typeof message.content === "string") {
          try {
            const parsed = JSON.parse(message.content);
            if (parsed.pendingExecution === true) {
              hasPendingExecution = true;
            }
          } catch {
          }
        }
        if (!hasPendingExecution) {
          completedToolIds.add(message.toolCallId);
        }
      }
    }
    const pending = [];
    for (const message of this.messages) {
      if (message.role === "assistant" && message.toolCalls) {
        for (const toolCall of message.toolCalls) {
          if (isProviderExecutedToolCall(toolCall)) {
            continue;
          }
          if (!completedToolIds.has(toolCall.id)) {
            pending.push(toolCall);
          }
        }
      }
    }
    return pending;
  }
  createSyntheticFinishedEvent() {
    return {
      type: "RUN_FINISHED",
      runId: this.createId("pending"),
      threadId: this.threadId,
      model: this.params.model,
      timestamp: Date.now(),
      finishReason: "tool_calls"
    };
  }
  shouldContinue() {
    if (this.cyclePhase === "executeToolCalls") {
      return true;
    }
    return this.loopStrategy({
      iterationCount: this.iterationCount,
      messages: this.messages,
      finishReason: this.lastFinishReason
    }) && this.toolPhase === "continue";
  }
  isAborted() {
    return !!this.effectiveSignal?.aborted;
  }
  isMiddlewareAborted() {
    return !!this.middlewareAbortController?.signal.aborted;
  }
  isCancelled() {
    return this.isAborted() || this.isMiddlewareAborted();
  }
  /**
   * Run the final structured-output adapter call through the middleware
   * pipeline. Yields chunks to the caller only when
   * `this.finalStructuredOutput.yieldChunks` is true; otherwise consumes
   * silently while still piping through middleware.
   *
   * On success, populates this.structuredOutputResult.
   * On failure, populates this.finalizationError.
   */
  async *runStructuredFinalization() {
    if (!this.finalStructuredOutput) {
      throw new Error(
        "runStructuredFinalization called without finalStructuredOutput config"
      );
    }
    this.middlewareCtx.phase = "structuredOutput";
    const baseConfig = this.buildMiddlewareConfig();
    const { tools: _omitTools, ...baseWithoutTools } = baseConfig;
    let structuredConfig = {
      ...baseWithoutTools,
      outputSchema: this.finalStructuredOutput.jsonSchema
    };
    structuredConfig = await this.middlewareRunner.runOnStructuredOutputConfig(
      this.middlewareCtx,
      structuredConfig
    );
    const { outputSchema: pinnedSchema, ...chatConfigSlice } = structuredConfig;
    const postOnConfig = await this.middlewareRunner.runOnConfig(
      this.middlewareCtx,
      { ...chatConfigSlice, tools: baseConfig.tools }
    );
    this.applyMiddlewareConfig(postOnConfig);
    const structuredCallOptions = {
      chatOptions: {
        model: this.params.model,
        messages: this.messages,
        metadata: postOnConfig.metadata,
        modelOptions: postOnConfig.modelOptions,
        systemPrompts: postOnConfig.systemPrompts,
        logger: this.logger,
        threadId: this.threadId,
        runId: this.runIdOverride,
        parentRunId: this.parentRunIdOverride,
        ...this.effectiveRequest ? { request: this.effectiveRequest } : {}
      },
      outputSchema: pinnedSchema
    };
    let fallbackAdapterError = void 0;
    const providerStream = this.adapter.structuredOutputStream ? this.adapter.structuredOutputStream(structuredCallOptions) : fallbackStructuredOutputStream(
      this.adapter,
      structuredCallOptions,
      (err) => {
        fallbackAdapterError = err;
      }
    );
    let startEmitted = false;
    let structuredMessageId = null;
    const extractMessageId = (c) => {
      if (c.type === EventType.TEXT_MESSAGE_START || c.type === EventType.TEXT_MESSAGE_CONTENT || c.type === EventType.TEXT_MESSAGE_END) {
        return typeof c.messageId === "string" && c.messageId !== "" ? c.messageId : null;
      }
      return null;
    };
    const buildSynthesizedStart = () => {
      const idForStart = structuredMessageId ?? generateMessageId();
      structuredMessageId = idForStart;
      return {
        type: EventType.CUSTOM,
        name: "structured-output.start",
        value: { messageId: idForStart },
        model: this.params.model,
        timestamp: Date.now(),
        threadId: this.threadId,
        ...this.runIdOverride ? { runId: this.runIdOverride } : {}
      };
    };
    const pipeThroughMiddleware = async (synthChunk) => this.middlewareRunner.runOnChunk(this.middlewareCtx, synthChunk);
    let runErrorYielded = false;
    for await (const chunk of providerStream) {
      if (this.isCancelled()) {
        break;
      }
      if (!startEmitted && chunk.type === EventType.CUSTOM && chunk.name === "structured-output.start") {
        startEmitted = true;
      }
      if (!structuredMessageId) {
        const extracted = extractMessageId(chunk);
        if (extracted) structuredMessageId = extracted;
      }
      if (this.finalStructuredOutput.yieldChunks) {
        if (!startEmitted && (chunk.type === EventType.TEXT_MESSAGE_START || chunk.type === EventType.TEXT_MESSAGE_CONTENT || chunk.type === EventType.TEXT_MESSAGE_END)) {
          startEmitted = true;
          const synthStart = buildSynthesizedStart();
          const synthOutputs = await pipeThroughMiddleware(synthStart);
          for (const outputChunk of synthOutputs) {
            yield outputChunk;
            this.middlewareCtx.chunkIndex++;
          }
        }
        if (!startEmitted && chunk.type === EventType.RUN_ERROR) {
          startEmitted = true;
          const synthStart = buildSynthesizedStart();
          const synthOutputs = await pipeThroughMiddleware(synthStart);
          for (const outputChunk of synthOutputs) {
            yield outputChunk;
            this.middlewareCtx.chunkIndex++;
          }
        }
      }
      let outboundChunk = chunk;
      if (chunk.type === EventType.CUSTOM && chunk.name === "structured-output.complete") {
        const parsed = readStructuredOutputCompleteValue(chunk.value);
        if (parsed) {
          const object = this.finalStructuredOutput.normalize ? this.finalStructuredOutput.normalize(parsed.object) : parsed.object;
          this.structuredOutputResult = { data: object, rawText: parsed.raw };
          const value = chunk.value;
          if (object !== parsed.object && value && typeof value === "object") {
            outboundChunk = { ...chunk, value: { ...value, object } };
          }
        }
      }
      if (chunk.type === EventType.RUN_FINISHED && chunk.usage) {
        await this.middlewareRunner.runOnUsage(this.middlewareCtx, chunk.usage);
      }
      if (chunk.type === EventType.RUN_ERROR) {
        this.finalizationError = {
          message: chunk.message,
          ...chunk.code ? { code: chunk.code } : {},
          ...fallbackAdapterError !== void 0 ? { cause: fallbackAdapterError } : {}
        };
      }
      const outputChunks = await this.middlewareRunner.runOnChunk(
        this.middlewareCtx,
        outboundChunk
      );
      if (this.finalStructuredOutput.yieldChunks) {
        for (const outputChunk of outputChunks) {
          if (outputChunk.type === EventType.RUN_ERROR) {
            runErrorYielded = true;
          }
          yield outputChunk;
          this.middlewareCtx.chunkIndex++;
        }
      }
      if (this.finalizationError) {
        break;
      }
    }
    if (this.isCancelled()) {
      return;
    }
    if (!this.structuredOutputResult && !this.finalizationError) {
      this.finalizationError = {
        message: "missing structured result",
        code: "structured-output-missing-result"
      };
    }
    if (this.structuredOutputResult && !this.finalizationError && this.finalStructuredOutput.validate) {
      try {
        const validated = this.finalStructuredOutput.validate(
          this.structuredOutputResult.data
        );
        this.validatedStructuredOutput = validated;
        this.hasValidatedStructuredOutput = true;
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        this.finalizationError = {
          message,
          code: "structured-output-validation-failed",
          cause: err
        };
      }
    }
    if (this.finalizationError && this.finalStructuredOutput.yieldChunks && !runErrorYielded) {
      if (!startEmitted) {
        const synthStart = buildSynthesizedStart();
        const startOutputs = await pipeThroughMiddleware(synthStart);
        for (const outputChunk of startOutputs) {
          yield outputChunk;
          this.middlewareCtx.chunkIndex++;
        }
        startEmitted = true;
      }
      const errChunk = {
        type: EventType.RUN_ERROR,
        runId: this.runIdOverride ?? this.requestId,
        model: this.params.model,
        timestamp: Date.now(),
        threadId: this.threadId,
        message: this.finalizationError.message,
        ...this.finalizationError.code ? { code: this.finalizationError.code } : {},
        error: {
          message: this.finalizationError.message,
          ...this.finalizationError.code ? { code: this.finalizationError.code } : {}
        }
      };
      const outputChunks = await this.middlewareRunner.runOnChunk(
        this.middlewareCtx,
        errChunk
      );
      for (const outputChunk of outputChunks) {
        yield outputChunk;
        this.middlewareCtx.chunkIndex++;
      }
    }
  }
  /**
   * Native combined mode: harvest the structured output from the agent
   * loop's accumulated final-turn text (no separate provider call).
   *
   * The adapter wired `outputSchema` into the regular `chatStream` request,
   * so the model's final-turn text is the schema-constrained JSON. We parse
   * `this.accumulatedContent`, populate `this.structuredOutputResult`, emit
   * a synthetic `structured-output.complete` (and a `structured-output.start`
   * if one wasn't emitted earlier — only happens on the streaming path when
   * the model returned no text at all), and run the validate callback when
   * present. Failures populate `this.finalizationError` so the engine's
   * terminal-hook chooser routes to `onError` (per spec §7.3).
   *
   * The `'structuredOutput'` middleware phase intentionally does NOT fire on
   * this path — middleware sees the run through `beforeModel` / `modelStream`
   * as usual. See PR #605 / issue #605 for the design rationale.
   */
  async *harvestCombinedStructuredOutput() {
    if (!this.finalStructuredOutput) {
      throw new Error(
        "harvestCombinedStructuredOutput called without finalStructuredOutput config"
      );
    }
    const yieldChunks = this.finalStructuredOutput.yieldChunks;
    const rawText = this.accumulatedContent;
    if (rawText.length === 0) {
      this.finalizationError = {
        message: "missing structured result",
        code: "structured-output-missing-result"
      };
    } else {
      try {
        const parsed = JSON.parse(rawText);
        const data = this.finalStructuredOutput.normalize ? this.finalStructuredOutput.normalize(parsed) : parsed;
        this.structuredOutputResult = { data, rawText };
      } catch (err) {
        const detail = rawText.slice(0, 200) + (rawText.length > 200 ? "..." : "");
        this.finalizationError = {
          message: `Failed to parse structured output as JSON. Content: ${detail}`,
          code: "structured-output-parse-failed",
          cause: err
        };
      }
    }
    if (this.structuredOutputResult && !this.finalizationError && this.finalStructuredOutput.validate) {
      try {
        const validated = this.finalStructuredOutput.validate(
          this.structuredOutputResult.data
        );
        this.validatedStructuredOutput = validated;
        this.hasValidatedStructuredOutput = true;
      } catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        this.finalizationError = {
          message,
          code: "structured-output-validation-failed",
          cause: err
        };
      }
    }
    if (!yieldChunks) {
      return;
    }
    if (!this.combinedStartEmitted) {
      this.combinedStartEmitted = true;
      const messageId = this.combinedStructuredMessageId ?? generateMessageId();
      this.combinedStructuredMessageId = messageId;
      const synthStart = {
        type: EventType.CUSTOM,
        name: "structured-output.start",
        value: { messageId },
        model: this.params.model,
        timestamp: Date.now(),
        threadId: this.threadId,
        ...this.runIdOverride ? { runId: this.runIdOverride } : {}
      };
      const startOutputs = await this.middlewareRunner.runOnChunk(
        this.middlewareCtx,
        synthStart
      );
      for (const outputChunk of startOutputs) {
        yield outputChunk;
        this.middlewareCtx.chunkIndex++;
      }
    }
    if (this.structuredOutputResult && !this.finalizationError) {
      const completeChunk = {
        type: EventType.CUSTOM,
        name: "structured-output.complete",
        value: {
          object: this.structuredOutputResult.data,
          raw: this.structuredOutputResult.rawText,
          ...this.combinedStructuredMessageId ? { messageId: this.combinedStructuredMessageId } : {}
        },
        model: this.params.model,
        timestamp: Date.now(),
        threadId: this.threadId,
        ...this.runIdOverride ? { runId: this.runIdOverride } : {}
      };
      const completeOutputs = await this.middlewareRunner.runOnChunk(
        this.middlewareCtx,
        completeChunk
      );
      for (const outputChunk of completeOutputs) {
        yield outputChunk;
        this.middlewareCtx.chunkIndex++;
      }
    }
    if (this.finalizationError) {
      const errChunk = {
        type: EventType.RUN_ERROR,
        runId: this.runIdOverride ?? this.requestId,
        model: this.params.model,
        timestamp: Date.now(),
        threadId: this.threadId,
        message: this.finalizationError.message,
        ...this.finalizationError.code ? { code: this.finalizationError.code } : {},
        error: {
          message: this.finalizationError.message,
          ...this.finalizationError.code ? { code: this.finalizationError.code } : {}
        }
      };
      const errOutputs = await this.middlewareRunner.runOnChunk(
        this.middlewareCtx,
        errChunk
      );
      for (const outputChunk of errOutputs) {
        yield outputChunk;
        this.middlewareCtx.chunkIndex++;
      }
    }
  }
  buildMiddlewareConfig() {
    return {
      messages: this.messages,
      systemPrompts: [...this.systemPrompts],
      tools: [...this.tools],
      metadata: this.params.metadata,
      modelOptions: this.params.modelOptions
    };
  }
  applyMiddlewareConfig(config) {
    this.messages = config.messages;
    this.systemPrompts = config.systemPrompts;
    this.tools = config.tools;
    this.params = {
      ...this.params,
      metadata: config.metadata,
      modelOptions: config.modelOptions
    };
    this.middlewareCtx.messages = this.messages;
    this.middlewareCtx.systemPrompts = this.systemPrompts;
    this.middlewareCtx.hasTools = this.tools.length > 0;
    this.middlewareCtx.toolNames = this.tools.map((t) => t.name);
    this.middlewareCtx.modelOptions = config.modelOptions;
  }
  setToolPhase(phase) {
    this.toolPhase = phase;
  }
  /**
   * Pipe a single chunk through the middleware pipeline (strip-to-spec, devtools, etc.)
   * and yield all resulting output chunks.
   */
  async *pipeThroughMiddleware(chunk) {
    const outputChunks = await this.middlewareRunner.runOnChunk(
      this.middlewareCtx,
      chunk
    );
    for (const outputChunk of outputChunks) {
      yield outputChunk;
      this.middlewareCtx.chunkIndex++;
    }
  }
  /**
   * Drain queued `sandbox.file` chunks (emitted via the SandboxRuntime sink)
   * through the middleware pipeline and into the public stream.
   */
  async *drainSandboxFileQueue() {
    while (this.sandboxFileQueue.length > 0) {
      const chunk = this.sandboxFileQueue.shift();
      if (chunk) yield* this.pipeThroughMiddleware(chunk);
    }
  }
  /**
   * Drain an executeToolCalls async generator, yielding any CustomEvent chunks
   * through the middleware pipeline and returning the final ExecuteToolCallsResult.
   */
  async *drainToolCallGenerator(generator) {
    let next = await generator.next();
    while (!next.done) {
      yield* this.pipeThroughMiddleware(next.value);
      next = await generator.next();
    }
    return next.value;
  }
  createCustomEventChunk(eventName, value) {
    return {
      type: "CUSTOM",
      timestamp: Date.now(),
      model: this.params.model,
      name: eventName,
      value
    };
  }
  createId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
  }
}
function chat(options) {
  validateCapabilities(options.middleware ?? [], options.adapter);
  const { outputSchema, stream } = options;
  if (outputSchema && stream === true) {
    return runStreamingStructuredOutput({
      ...options,
      outputSchema,
      stream
    });
  }
  if (outputSchema) {
    return runAgenticStructuredOutput({
      ...options,
      outputSchema
    });
  }
  if (stream === false) {
    return runNonStreamingText({
      ...options,
      outputSchema: void 0,
      stream
    });
  }
  return runStreamingText({
    ...options,
    outputSchema: void 0,
    stream
  });
}
async function* runStreamingText(options) {
  const { adapter, middleware, context, debug, mcp, ...textOptions } = options;
  const model = adapter.model;
  const logger = resolveDebugOption(debug);
  const mcpManager = MCPManager.from(mcp);
  const mcpTools = await mcpManager.discover();
  if (mcpTools.length > 0) {
    textOptions.tools = [...textOptions.tools ?? [], ...mcpTools];
  }
  const engine = new TextEngine(
    {
      adapter,
      params: { ...textOptions, model, logger },
      middleware,
      context
    },
    logger
  );
  try {
    for await (const chunk of engine.run()) {
      yield chunk;
    }
  } finally {
    await mcpManager.dispose();
  }
}
function runNonStreamingText(options) {
  const stream = runStreamingText(
    // eslint-disable-next-line no-restricted-syntax -- generic-stream remap: caller is non-streaming (false), but runStreamingText is invoked internally to collect text; concrete `false`→`true` literals don't structurally overlap.
    options
  );
  return streamToText(stream);
}
async function runAgenticStructuredOutput(options) {
  const {
    adapter,
    outputSchema,
    middleware,
    context,
    debug,
    mcp,
    ...textOptions
  } = options;
  const model = adapter.model;
  const logger = resolveDebugOption(debug);
  if (!outputSchema) {
    throw new Error("outputSchema is required for structured output");
  }
  const { jsonSchema, nullWideningMap } = convertSchemaForStructuredOutput(outputSchema);
  if (!jsonSchema) {
    throw new Error("Failed to convert output schema to JSON Schema");
  }
  const normalize = (data) => undoNullWidening(data, nullWideningMap);
  const validate = isStandardSchema(outputSchema) ? (data) => parseWithStandardSchema(outputSchema, data) : void 0;
  const nativeCombined = adapter.supportsCombinedToolsAndSchema?.(options.modelOptions) === true;
  const mcpManager = MCPManager.from(mcp);
  const mcpTools = await mcpManager.discover();
  if (mcpTools.length > 0) {
    textOptions.tools = [...textOptions.tools ?? [], ...mcpTools];
  }
  const engine = new TextEngine(
    {
      adapter,
      params: { ...textOptions, model, logger },
      middleware,
      context,
      finalStructuredOutput: {
        jsonSchema,
        yieldChunks: false,
        normalize,
        ...validate ? { validate } : {},
        ...nativeCombined ? { nativeCombined: true } : {}
      }
    },
    logger
  );
  try {
    for await (const _chunk of engine.run()) {
    }
  } finally {
    await mcpManager.dispose();
  }
  const finalizationError = engine.getFinalizationError();
  if (finalizationError) {
    const err = new Error(
      finalizationError.message,
      finalizationError.cause !== void 0 ? { cause: finalizationError.cause } : void 0
    );
    if (finalizationError.code !== void 0) {
      Object.defineProperty(err, "code", {
        value: finalizationError.code,
        enumerable: true
      });
    }
    throw err;
  }
  const validated = engine.getValidatedStructuredOutput();
  if (validated) {
    return validated.value;
  }
  const result = engine.getStructuredOutputResult();
  if (!result) {
    throw new Error("structured output finalization produced no result");
  }
  return result.data;
}
function readStructuredOutputCompleteValue(value) {
  if (typeof value !== "object" || value === null) return null;
  if (!("object" in value) || !("raw" in value)) return null;
  const raw = value.raw;
  if (typeof raw !== "string") return null;
  const reasoningField = value.reasoning;
  const reasoning = typeof reasoningField === "string" ? reasoningField : void 0;
  return {
    object: value.object,
    raw,
    ...reasoning !== void 0 ? { reasoning } : {}
  };
}
async function* fallbackStructuredOutputStream(adapter, options, onAdapterError) {
  const { chatOptions } = options;
  const fallbackRand = Math.random().toString(36).slice(2);
  const runId = chatOptions.runId ?? `fallback-${Date.now()}-${fallbackRand}`;
  const threadId = chatOptions.threadId ?? `fallback-${Date.now()}-${fallbackRand}`;
  const messageId = `fallback-${Date.now()}-${fallbackRand}`;
  const model = chatOptions.model;
  const timestamp = Date.now();
  yield {
    type: EventType.RUN_STARTED,
    runId,
    threadId,
    model,
    timestamp
  };
  let result;
  try {
    result = await adapter.structuredOutput(options);
  } catch (error) {
    onAdapterError?.(error);
    const message = error instanceof Error ? error.message : String(error);
    yield {
      type: EventType.RUN_ERROR,
      runId,
      threadId,
      model,
      timestamp,
      message,
      error: { message }
    };
    return;
  }
  yield {
    type: EventType.TEXT_MESSAGE_START,
    messageId,
    role: "assistant",
    model,
    timestamp
  };
  yield {
    type: EventType.TEXT_MESSAGE_CONTENT,
    messageId,
    delta: result.rawText,
    model,
    timestamp
  };
  yield {
    type: EventType.TEXT_MESSAGE_END,
    messageId,
    model,
    timestamp
  };
  yield {
    type: EventType.CUSTOM,
    name: "structured-output.complete",
    value: { object: result.data, raw: result.rawText },
    model,
    timestamp
  };
  yield {
    type: EventType.RUN_FINISHED,
    runId,
    threadId,
    model,
    timestamp,
    finishReason: "stop",
    // Forward adapter-reported token usage so consumers reading
    // `RUN_FINISHED.usage` (and the engine's `runOnUsage` middleware hook) see
    // it on the fallback path, mirroring the native streaming path. The
    // conditional spread avoids emitting `usage: undefined` for adapters that
    // don't report it. See #758.
    ...result.usage ? { usage: result.usage } : {}
  };
}
function runStreamingStructuredOutput(options) {
  const { outputSchema } = options;
  if (!outputSchema) {
    throw new Error("outputSchema is required for streaming structured output");
  }
  const { jsonSchema, nullWideningMap } = convertSchemaForStructuredOutput(outputSchema);
  if (!jsonSchema) {
    throw new Error("Failed to convert output schema to JSON Schema");
  }
  const normalize = (data) => undoNullWidening(data, nullWideningMap);
  return runStreamingStructuredOutputImpl(
    options,
    jsonSchema,
    normalize
  );
}
async function* runStreamingStructuredOutputImpl(options, jsonSchema, normalize) {
  const {
    adapter,
    outputSchema,
    middleware,
    context,
    debug,
    mcp,
    ...textOptions
  } = options;
  const model = adapter.model;
  const logger = resolveDebugOption(debug);
  const nativeCombined = adapter.supportsCombinedToolsAndSchema?.(options.modelOptions) === true;
  const mcpManager = MCPManager.from(mcp);
  const mcpTools = await mcpManager.discover();
  if (mcpTools.length > 0) {
    textOptions.tools = [...textOptions.tools ?? [], ...mcpTools];
  }
  const engine = new TextEngine(
    {
      adapter,
      params: { ...textOptions, model, logger },
      middleware,
      context,
      finalStructuredOutput: {
        jsonSchema,
        yieldChunks: true,
        normalize,
        ...nativeCombined ? { nativeCombined: true } : {}
      }
    },
    logger
  );
  try {
    for await (const chunk of engine.run()) {
      yield chunk;
    }
  } finally {
    await mcpManager.dispose();
  }
}
export {
  chat,
  createChatOptions,
  kind
};
//# sourceMappingURL=index.js.map
