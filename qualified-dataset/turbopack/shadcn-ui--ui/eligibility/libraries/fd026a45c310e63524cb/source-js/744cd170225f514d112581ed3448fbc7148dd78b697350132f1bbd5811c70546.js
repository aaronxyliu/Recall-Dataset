import { ChatClient } from "@tanstack/ai-client";
import { createChatDevtoolsBridge } from "@tanstack/ai-client/devtools";
import { useId, useState, useRef, useMemo, useEffect, useCallback } from "react";
function useChat(options) {
  const hookId = useId();
  const clientId = options.id || hookId;
  const [messages, setMessages] = useState(
    options.initialMessages || []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(void 0);
  const [status, setStatus] = useState("ready");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("disconnected");
  const [sessionGenerating, setSessionGenerating] = useState(false);
  const messagesRef = useRef(
    options.initialMessages || []
  );
  const isFirstMountRef = useRef(true);
  const activeClientRef = useRef(null);
  const cleanupInvalidationRef = useRef(
    null
  );
  messagesRef.current = messages;
  const optionsRef = useRef(options);
  optionsRef.current = options;
  const client = useMemo(() => {
    const messagesToUse = options.initialMessages || [];
    isFirstMountRef.current = false;
    const initialOptions = optionsRef.current;
    const transport = initialOptions.connection ? { connection: initialOptions.connection } : { fetcher: initialOptions.fetcher };
    const instance = new ChatClient({
      devtoolsBridgeFactory: createChatDevtoolsBridge,
      ...transport,
      id: clientId,
      initialMessages: messagesToUse,
      ...initialOptions.body !== void 0 && { body: initialOptions.body },
      ...initialOptions.threadId !== void 0 && {
        threadId: initialOptions.threadId
      },
      ...initialOptions.forwardedProps !== void 0 && {
        forwardedProps: initialOptions.forwardedProps
      },
      ...initialOptions.persistence !== void 0 && {
        persistence: initialOptions.persistence
      },
      ...initialOptions.context !== void 0 && {
        context: initialOptions.context
      },
      devtools: {
        ...initialOptions.devtools,
        framework: "react",
        hookName: "useChat",
        outputKind: initialOptions.outputSchema ? "structured" : "chat"
      },
      onResponse: (response) => {
        if (activeClientRef.current !== instance) return;
        void optionsRef.current.onResponse?.(response);
      },
      onChunk: (chunk) => {
        if (activeClientRef.current !== instance) return;
        optionsRef.current.onChunk?.(chunk);
      },
      onFinish: (message) => {
        if (activeClientRef.current !== instance) return;
        optionsRef.current.onFinish?.(message);
      },
      onError: (error2) => {
        if (activeClientRef.current !== instance) return;
        optionsRef.current.onError?.(error2);
      },
      ...initialOptions.tools !== void 0 && {
        tools: initialOptions.tools
      },
      onCustomEvent: (eventType, data, context) => {
        if (activeClientRef.current !== instance) return;
        optionsRef.current.onCustomEvent?.(eventType, data, context);
      },
      ...options.streamProcessor !== void 0 && {
        streamProcessor: options.streamProcessor
      },
      onMessagesChange: (newMessages) => {
        if (activeClientRef.current !== instance) return;
        setMessages(newMessages);
      },
      onLoadingChange: (newIsLoading) => {
        if (activeClientRef.current !== instance) return;
        setIsLoading(newIsLoading);
      },
      onErrorChange: (newError) => {
        if (activeClientRef.current !== instance) return;
        setError(newError);
      },
      onStatusChange: (status2) => {
        if (activeClientRef.current !== instance) return;
        setStatus(status2);
      },
      onSubscriptionChange: (nextIsSubscribed) => {
        if (activeClientRef.current !== instance) return;
        setIsSubscribed(nextIsSubscribed);
      },
      onConnectionStatusChange: (nextStatus) => {
        if (activeClientRef.current !== instance) return;
        setConnectionStatus(nextStatus);
      },
      onSessionGeneratingChange: (isGenerating) => {
        if (activeClientRef.current !== instance) return;
        setSessionGenerating(isGenerating);
      }
    });
    activeClientRef.current = instance;
    return instance;
  }, [clientId]);
  useEffect(() => {
    const clientMessages = client.getMessages();
    if (clientMessages !== messagesRef.current) {
      setMessages(clientMessages);
    }
  }, [client]);
  useEffect(() => {
    client.updateOptions({ body: options.body });
  }, [client, options.body]);
  useEffect(() => {
    if (options.forwardedProps !== void 0) {
      client.updateOptions({ forwardedProps: options.forwardedProps });
    }
  }, [client, options.forwardedProps]);
  useEffect(() => {
    if (options.tools !== void 0) {
      client.updateOptions({ tools: options.tools });
    }
  }, [client, options.tools]);
  useEffect(() => {
    client.updateOptions({ context: options.context });
  }, [client, options.context]);
  useEffect(() => {
    if (options.live) {
      client.subscribe();
    } else {
      client.unsubscribe();
    }
  }, [client, options.live]);
  useEffect(() => {
    if (cleanupInvalidationRef.current) {
      clearTimeout(cleanupInvalidationRef.current);
      cleanupInvalidationRef.current = null;
    }
    activeClientRef.current = client;
    client.mountDevtools();
    return () => {
      cleanupInvalidationRef.current = setTimeout(() => {
        if (activeClientRef.current === client) {
          activeClientRef.current = null;
        }
        cleanupInvalidationRef.current = null;
      }, 0);
      if (optionsRef.current.live) {
        client.unsubscribe();
      } else {
        client.stop();
      }
      client.dispose();
    };
  }, [client]);
  const sendMessage = useCallback(
    async (content) => {
      await client.sendMessage(content);
    },
    [client]
  );
  const append = useCallback(
    async (message) => {
      await client.append(message);
    },
    [client]
  );
  const reload = useCallback(async () => {
    await client.reload();
  }, [client]);
  const stop = useCallback(() => {
    client.stop();
  }, [client]);
  const clear = useCallback(() => {
    client.clear();
  }, [client]);
  const setMessagesManually = useCallback(
    (newMessages) => {
      client.setMessagesManually(newMessages);
    },
    [client]
  );
  const addToolResult = useCallback(
    async (result) => {
      await client.addToolResult(result);
    },
    [client]
  );
  const addToolApprovalResponse = useCallback(
    async (response) => {
      await client.addToolApprovalResponse(response);
    },
    [client]
  );
  const renderedMessages = client.getMessages();
  const activeStructuredPart = useMemo(() => {
    let lastUserIndex = -1;
    for (let i = renderedMessages.length - 1; i >= 0; i--) {
      if (renderedMessages[i]?.role === "user") {
        lastUserIndex = i;
        break;
      }
    }
    if (lastUserIndex === -1) return null;
    for (let i = renderedMessages.length - 1; i > lastUserIndex; i--) {
      const m = renderedMessages[i];
      if (m?.role !== "assistant") continue;
      const part = m.parts.find(
        (p) => p.type === "structured-output"
      );
      if (part) return part;
    }
    return null;
  }, [renderedMessages]);
  const partial = useMemo(() => {
    if (!activeStructuredPart) return {};
    const v = activeStructuredPart.partial ?? activeStructuredPart.data;
    return v ?? {};
  }, [activeStructuredPart]);
  const final = useMemo(() => {
    if (!activeStructuredPart || activeStructuredPart.status !== "complete") {
      return null;
    }
    return activeStructuredPart.data;
  }, [activeStructuredPart]);
  return {
    messages: renderedMessages,
    sendMessage,
    append,
    reload,
    stop,
    isLoading,
    error,
    status,
    isSubscribed,
    connectionStatus,
    sessionGenerating,
    setMessages: setMessagesManually,
    clear,
    addToolResult,
    addToolApprovalResponse,
    partial,
    final
  };
}
export {
  useChat
};
//# sourceMappingURL=use-chat.js.map
