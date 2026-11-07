(function anonymous(shape,inst,memo,syms
) {
return function (payload, ctx) {
const input = payload.value;
const newResult = memo.alloc(inst, payload, {}, ctx);
const key_0 = shape["refreshMs"]._zod.run({ value: input["refreshMs"], issues: [] }, ctx);
  const key_0_present = "refreshMs" in input;
  if (!key_0.issues.length || key_0_present) {
    if (key_0.issues.length) {
    let key_0_ab = false;
    for (let i = 0; i < key_0.issues.length; i++) {
      const iss = key_0.issues[i];
      iss.path = iss.path ? ["refreshMs", ...iss.path] : ["refreshMs"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_0_ab = true;
    }
    if (key_0_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
    }
    if (key_0_present) {
      newResult["refreshMs"] = key_0.value;
    }
  }

const key_1 = shape["ttsMs"]._zod.run({ value: input["ttsMs"], issues: [] }, ctx);
  const key_1_present = "ttsMs" in input;
  if (!key_1.issues.length || key_1_present) {
    if (key_1.issues.length) {
    let key_1_ab = false;
    for (let i = 0; i < key_1.issues.length; i++) {
      const iss = key_1.issues[i];
      iss.path = iss.path ? ["ttsMs", ...iss.path] : ["ttsMs"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_1_ab = true;
    }
    if (key_1_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
    }
    if (key_1_present) {
      newResult["ttsMs"] = key_1.value;
    }
  }

const key_2 = shape["sharepointMs"]._zod.run({ value: input["sharepointMs"], issues: [] }, ctx);
  const key_2_present = "sharepointMs" in input;
  if (!key_2.issues.length || key_2_present) {
    if (key_2.issues.length) {
    let key_2_ab = false;
    for (let i = 0; i < key_2.issues.length; i++) {
      const iss = key_2.issues[i];
      iss.path = iss.path ? ["sharepointMs", ...iss.path] : ["sharepointMs"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_2_ab = true;
    }
    if (key_2_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
    }
    if (key_2_present) {
      newResult["sharepointMs"] = key_2.value;
    }
  }

const key_3 = shape["cloudfrontMs"]._zod.run({ value: input["cloudfrontMs"], issues: [] }, ctx);
  const key_3_present = "cloudfrontMs" in input;
  if (!key_3.issues.length || key_3_present) {
    if (key_3.issues.length) {
    let key_3_ab = false;
    for (let i = 0; i < key_3.issues.length; i++) {
      const iss = key_3.issues[i];
      iss.path = iss.path ? ["cloudfrontMs", ...iss.path] : ["cloudfrontMs"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_3_ab = true;
    }
    if (key_3_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
    }
    if (key_3_present) {
      newResult["cloudfrontMs"] = key_3.value;
    }
  }

const key_4 = shape["uploadConcurrency"]._zod.run({ value: input["uploadConcurrency"], issues: [] }, ctx);
  const key_4_present = "uploadConcurrency" in input;
  if (!key_4.issues.length || key_4_present) {
    if (key_4.issues.length) {
    let key_4_ab = false;
    for (let i = 0; i < key_4.issues.length; i++) {
      const iss = key_4.issues[i];
      iss.path = iss.path ? ["uploadConcurrency", ...iss.path] : ["uploadConcurrency"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_4_ab = true;
    }
    if (key_4_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
    }
    if (key_4_present) {
      newResult["uploadConcurrency"] = key_4.value;
    }
  }

payload.value = newResult;
return payload;
};
})