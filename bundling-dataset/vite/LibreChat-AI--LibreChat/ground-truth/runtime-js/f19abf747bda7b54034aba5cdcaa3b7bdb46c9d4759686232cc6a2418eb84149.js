(function anonymous(shape,inst,memo,syms
) {
return function (payload, ctx) {
const input = payload.value;
const newResult = memo.alloc(inst, payload, {}, ctx);
const key_0 = shape["ADMIN"]._zod.run({ value: input["ADMIN"], issues: [] }, ctx);
  const key_0_present = "ADMIN" in input;
  if (key_0.issues.length) {
    let key_0_ab = false;
    for (let i = 0; i < key_0.issues.length; i++) {
      const iss = key_0.issues[i];
      iss.path = iss.path ? ["ADMIN", ...iss.path] : ["ADMIN"];
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
      path: ["ADMIN"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_0_present) {
    newResult["ADMIN"] = key_0.value;
  }

const key_1 = shape["USER"]._zod.run({ value: input["USER"], issues: [] }, ctx);
  const key_1_present = "USER" in input;
  if (key_1.issues.length) {
    let key_1_ab = false;
    for (let i = 0; i < key_1.issues.length; i++) {
      const iss = key_1.issues[i];
      iss.path = iss.path ? ["USER", ...iss.path] : ["USER"];
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
      path: ["USER"]
    });
    if (ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }
  if (key_1_present) {
    newResult["USER"] = key_1.value;
  }

payload.value = newResult;
return payload;
};
})