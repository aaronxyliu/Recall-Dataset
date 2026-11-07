(function anonymous(shape,inst,memo,syms
) {
return function (payload, ctx) {
const input = payload.value;
const newResult = memo.alloc(inst, payload, {}, ctx);
const key_0 = shape["enabled"]._zod.run({ value: input["enabled"], issues: [] }, ctx);
  if (key_0.issues.length) {
    let key_0_ab = false;
    for (let i = 0; i < key_0.issues.length; i++) {
      const iss = key_0.issues[i];
      iss.path = iss.path ? ["enabled", ...iss.path] : ["enabled"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_0_ab = true;
    }
    if (key_0_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["enabled"] = key_0.value;
const key_1 = shape["outputChars"]._zod.run({ value: input["outputChars"], issues: [] }, ctx);
  if (key_1.issues.length) {
    let key_1_ab = false;
    for (let i = 0; i < key_1.issues.length; i++) {
      const iss = key_1.issues[i];
      iss.path = iss.path ? ["outputChars", ...iss.path] : ["outputChars"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_1_ab = true;
    }
    if (key_1_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["outputChars"] = key_1.value;
const key_2 = shape["argsChars"]._zod.run({ value: input["argsChars"], issues: [] }, ctx);
  if (key_2.issues.length) {
    let key_2_ab = false;
    for (let i = 0; i < key_2.issues.length; i++) {
      const iss = key_2.issues[i];
      iss.path = iss.path ? ["argsChars", ...iss.path] : ["argsChars"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_2_ab = true;
    }
    if (key_2_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["argsChars"] = key_2.value;
const key_3 = shape["attachmentWorkLimit"]._zod.run({ value: input["attachmentWorkLimit"], issues: [] }, ctx);
  if (key_3.issues.length) {
    let key_3_ab = false;
    for (let i = 0; i < key_3.issues.length; i++) {
      const iss = key_3.issues[i];
      iss.path = iss.path ? ["attachmentWorkLimit", ...iss.path] : ["attachmentWorkLimit"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_3_ab = true;
    }
    if (key_3_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["attachmentWorkLimit"] = key_3.value;
payload.value = newResult;
return payload;
};
})