(function anonymous(shape,inst,memo,syms
) {
return function (payload, ctx) {
const input = payload.value;
const newResult = memo.alloc(inst, payload, {}, ctx);
const key_0 = shape["VIEW_USERS"]._zod.run({ value: input["VIEW_USERS"], issues: [] }, ctx);
  if (key_0.issues.length) {
    let key_0_ab = false;
    for (let i = 0; i < key_0.issues.length; i++) {
      const iss = key_0.issues[i];
      iss.path = iss.path ? ["VIEW_USERS", ...iss.path] : ["VIEW_USERS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_0_ab = true;
    }
    if (key_0_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["VIEW_USERS"] = key_0.value;
const key_1 = shape["VIEW_GROUPS"]._zod.run({ value: input["VIEW_GROUPS"], issues: [] }, ctx);
  if (key_1.issues.length) {
    let key_1_ab = false;
    for (let i = 0; i < key_1.issues.length; i++) {
      const iss = key_1.issues[i];
      iss.path = iss.path ? ["VIEW_GROUPS", ...iss.path] : ["VIEW_GROUPS"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_1_ab = true;
    }
    if (key_1_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["VIEW_GROUPS"] = key_1.value;
const key_2 = shape["VIEW_ROLES"]._zod.run({ value: input["VIEW_ROLES"], issues: [] }, ctx);
  if (key_2.issues.length) {
    let key_2_ab = false;
    for (let i = 0; i < key_2.issues.length; i++) {
      const iss = key_2.issues[i];
      iss.path = iss.path ? ["VIEW_ROLES", ...iss.path] : ["VIEW_ROLES"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_2_ab = true;
    }
    if (key_2_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["VIEW_ROLES"] = key_2.value;
payload.value = newResult;
return payload;
};
})