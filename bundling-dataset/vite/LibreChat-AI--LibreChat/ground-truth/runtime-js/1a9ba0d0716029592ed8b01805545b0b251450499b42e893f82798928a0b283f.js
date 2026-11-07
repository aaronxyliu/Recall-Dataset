(function anonymous(shape,inst,memo,syms
) {
return function (payload, ctx) {
const input = payload.value;
const newResult = memo.alloc(inst, payload, {}, ctx);
const key_0 = shape["PROMPTS"]._zod.run({ value: input["PROMPTS"], issues: [] }, ctx);
  const key_0_present = "PROMPTS" in input;
  if (key_0.issues.length) {
    let key_0_ab = false;
    for (let i = 0; i < key_0.issues.length; i++) {
      const iss = key_0.issues[i];
      iss.path = iss.path ? ["PROMPTS", ...iss.path] : ["PROMPTS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_0_ab = true;
    }
    if (key_0_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_0_present && !key_0.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["PROMPTS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_0_present) {
    newResult["PROMPTS"] = key_0.value;
  }

const key_1 = shape["BOOKMARKS"]._zod.run({ value: input["BOOKMARKS"], issues: [] }, ctx);
  const key_1_present = "BOOKMARKS" in input;
  if (key_1.issues.length) {
    let key_1_ab = false;
    for (let i = 0; i < key_1.issues.length; i++) {
      const iss = key_1.issues[i];
      iss.path = iss.path ? ["BOOKMARKS", ...iss.path] : ["BOOKMARKS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_1_ab = true;
    }
    if (key_1_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_1_present && !key_1.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["BOOKMARKS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_1_present) {
    newResult["BOOKMARKS"] = key_1.value;
  }

const key_2 = shape["MEMORIES"]._zod.run({ value: input["MEMORIES"], issues: [] }, ctx);
  const key_2_present = "MEMORIES" in input;
  if (key_2.issues.length) {
    let key_2_ab = false;
    for (let i = 0; i < key_2.issues.length; i++) {
      const iss = key_2.issues[i];
      iss.path = iss.path ? ["MEMORIES", ...iss.path] : ["MEMORIES"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_2_ab = true;
    }
    if (key_2_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_2_present && !key_2.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["MEMORIES"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_2_present) {
    newResult["MEMORIES"] = key_2.value;
  }

const key_3 = shape["AGENTS"]._zod.run({ value: input["AGENTS"], issues: [] }, ctx);
  const key_3_present = "AGENTS" in input;
  if (key_3.issues.length) {
    let key_3_ab = false;
    for (let i = 0; i < key_3.issues.length; i++) {
      const iss = key_3.issues[i];
      iss.path = iss.path ? ["AGENTS", ...iss.path] : ["AGENTS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_3_ab = true;
    }
    if (key_3_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_3_present && !key_3.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["AGENTS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_3_present) {
    newResult["AGENTS"] = key_3.value;
  }

const key_4 = shape["MULTI_CONVO"]._zod.run({ value: input["MULTI_CONVO"], issues: [] }, ctx);
  const key_4_present = "MULTI_CONVO" in input;
  if (key_4.issues.length) {
    let key_4_ab = false;
    for (let i = 0; i < key_4.issues.length; i++) {
      const iss = key_4.issues[i];
      iss.path = iss.path ? ["MULTI_CONVO", ...iss.path] : ["MULTI_CONVO"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_4_ab = true;
    }
    if (key_4_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_4_present && !key_4.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["MULTI_CONVO"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_4_present) {
    newResult["MULTI_CONVO"] = key_4.value;
  }

const key_5 = shape["TEMPORARY_CHAT"]._zod.run({ value: input["TEMPORARY_CHAT"], issues: [] }, ctx);
  const key_5_present = "TEMPORARY_CHAT" in input;
  if (key_5.issues.length) {
    let key_5_ab = false;
    for (let i = 0; i < key_5.issues.length; i++) {
      const iss = key_5.issues[i];
      iss.path = iss.path ? ["TEMPORARY_CHAT", ...iss.path] : ["TEMPORARY_CHAT"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_5_ab = true;
    }
    if (key_5_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_5_present && !key_5.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["TEMPORARY_CHAT"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_5_present) {
    newResult["TEMPORARY_CHAT"] = key_5.value;
  }

const key_6 = shape["RUN_CODE"]._zod.run({ value: input["RUN_CODE"], issues: [] }, ctx);
  const key_6_present = "RUN_CODE" in input;
  if (key_6.issues.length) {
    let key_6_ab = false;
    for (let i = 0; i < key_6.issues.length; i++) {
      const iss = key_6.issues[i];
      iss.path = iss.path ? ["RUN_CODE", ...iss.path] : ["RUN_CODE"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_6_ab = true;
    }
    if (key_6_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_6_present && !key_6.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["RUN_CODE"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_6_present) {
    newResult["RUN_CODE"] = key_6.value;
  }

const key_7 = shape["WEB_SEARCH"]._zod.run({ value: input["WEB_SEARCH"], issues: [] }, ctx);
  const key_7_present = "WEB_SEARCH" in input;
  if (key_7.issues.length) {
    let key_7_ab = false;
    for (let i = 0; i < key_7.issues.length; i++) {
      const iss = key_7.issues[i];
      iss.path = iss.path ? ["WEB_SEARCH", ...iss.path] : ["WEB_SEARCH"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_7_ab = true;
    }
    if (key_7_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_7_present && !key_7.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["WEB_SEARCH"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_7_present) {
    newResult["WEB_SEARCH"] = key_7.value;
  }

const key_8 = shape["PEOPLE_PICKER"]._zod.run({ value: input["PEOPLE_PICKER"], issues: [] }, ctx);
  const key_8_present = "PEOPLE_PICKER" in input;
  if (key_8.issues.length) {
    let key_8_ab = false;
    for (let i = 0; i < key_8.issues.length; i++) {
      const iss = key_8.issues[i];
      iss.path = iss.path ? ["PEOPLE_PICKER", ...iss.path] : ["PEOPLE_PICKER"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_8_ab = true;
    }
    if (key_8_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_8_present && !key_8.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["PEOPLE_PICKER"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_8_present) {
    newResult["PEOPLE_PICKER"] = key_8.value;
  }

const key_9 = shape["MARKETPLACE"]._zod.run({ value: input["MARKETPLACE"], issues: [] }, ctx);
  const key_9_present = "MARKETPLACE" in input;
  if (key_9.issues.length) {
    let key_9_ab = false;
    for (let i = 0; i < key_9.issues.length; i++) {
      const iss = key_9.issues[i];
      iss.path = iss.path ? ["MARKETPLACE", ...iss.path] : ["MARKETPLACE"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_9_ab = true;
    }
    if (key_9_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_9_present && !key_9.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["MARKETPLACE"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_9_present) {
    newResult["MARKETPLACE"] = key_9.value;
  }

const key_10 = shape["FILE_SEARCH"]._zod.run({ value: input["FILE_SEARCH"], issues: [] }, ctx);
  const key_10_present = "FILE_SEARCH" in input;
  if (key_10.issues.length) {
    let key_10_ab = false;
    for (let i = 0; i < key_10.issues.length; i++) {
      const iss = key_10.issues[i];
      iss.path = iss.path ? ["FILE_SEARCH", ...iss.path] : ["FILE_SEARCH"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_10_ab = true;
    }
    if (key_10_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_10_present && !key_10.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["FILE_SEARCH"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_10_present) {
    newResult["FILE_SEARCH"] = key_10.value;
  }

const key_11 = shape["FILE_CITATIONS"]._zod.run({ value: input["FILE_CITATIONS"], issues: [] }, ctx);
  const key_11_present = "FILE_CITATIONS" in input;
  if (key_11.issues.length) {
    let key_11_ab = false;
    for (let i = 0; i < key_11.issues.length; i++) {
      const iss = key_11.issues[i];
      iss.path = iss.path ? ["FILE_CITATIONS", ...iss.path] : ["FILE_CITATIONS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_11_ab = true;
    }
    if (key_11_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_11_present && !key_11.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["FILE_CITATIONS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_11_present) {
    newResult["FILE_CITATIONS"] = key_11.value;
  }

const key_12 = shape["MCP_SERVERS"]._zod.run({ value: input["MCP_SERVERS"], issues: [] }, ctx);
  const key_12_present = "MCP_SERVERS" in input;
  if (key_12.issues.length) {
    let key_12_ab = false;
    for (let i = 0; i < key_12.issues.length; i++) {
      const iss = key_12.issues[i];
      iss.path = iss.path ? ["MCP_SERVERS", ...iss.path] : ["MCP_SERVERS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_12_ab = true;
    }
    if (key_12_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_12_present && !key_12.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["MCP_SERVERS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_12_present) {
    newResult["MCP_SERVERS"] = key_12.value;
  }

const key_13 = shape["REMOTE_AGENTS"]._zod.run({ value: input["REMOTE_AGENTS"], issues: [] }, ctx);
  const key_13_present = "REMOTE_AGENTS" in input;
  if (key_13.issues.length) {
    let key_13_ab = false;
    for (let i = 0; i < key_13.issues.length; i++) {
      const iss = key_13.issues[i];
      iss.path = iss.path ? ["REMOTE_AGENTS", ...iss.path] : ["REMOTE_AGENTS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_13_ab = true;
    }
    if (key_13_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_13_present && !key_13.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["REMOTE_AGENTS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_13_present) {
    newResult["REMOTE_AGENTS"] = key_13.value;
  }

const key_14 = shape["SKILLS"]._zod.run({ value: input["SKILLS"], issues: [] }, ctx);
  const key_14_present = "SKILLS" in input;
  if (key_14.issues.length) {
    let key_14_ab = false;
    for (let i = 0; i < key_14.issues.length; i++) {
      const iss = key_14.issues[i];
      iss.path = iss.path ? ["SKILLS", ...iss.path] : ["SKILLS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_14_ab = true;
    }
    if (key_14_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_14_present && !key_14.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["SKILLS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_14_present) {
    newResult["SKILLS"] = key_14.value;
  }

const key_15 = shape["SHARED_LINKS"]._zod.run({ value: input["SHARED_LINKS"], issues: [] }, ctx);
  const key_15_present = "SHARED_LINKS" in input;
  if (key_15.issues.length) {
    let key_15_ab = false;
    for (let i = 0; i < key_15.issues.length; i++) {
      const iss = key_15.issues[i];
      iss.path = iss.path ? ["SHARED_LINKS", ...iss.path] : ["SHARED_LINKS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_15_ab = true;
    }
    if (key_15_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_15_present && !key_15.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["SHARED_LINKS"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_15_present) {
    newResult["SHARED_LINKS"] = key_15.value;
  }

const key_16 = shape["SCHEDULES"]._zod.run({ value: input["SCHEDULES"], issues: [] }, ctx);
  const key_16_present = "SCHEDULES" in input;
  if (key_16.issues.length) {
    let key_16_ab = false;
    for (let i = 0; i < key_16.issues.length; i++) {
      const iss = key_16.issues[i];
      iss.path = iss.path ? ["SCHEDULES", ...iss.path] : ["SCHEDULES"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_16_ab = true;
    }
    if (key_16_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (!key_16_present && !key_16.issues.length) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: undefined,
      path: ["SCHEDULES"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_16_present) {
    newResult["SCHEDULES"] = key_16.value;
  }

payload.value = newResult;
return payload;
};
})