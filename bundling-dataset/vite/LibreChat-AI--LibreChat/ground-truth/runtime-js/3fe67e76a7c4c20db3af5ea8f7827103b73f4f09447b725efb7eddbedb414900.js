(function anonymous(shape,inst,memo,syms
) {
return function (payload, ctx) {
const input = payload.value;
const newResult = memo.alloc(inst, payload, {}, ctx);
const key_0 = shape["USE"]._zod.run({ value: input["USE"], issues: [] }, ctx);
  if (key_0.issues.length) {
    let key_0_ab = false;
    for (let i = 0; i < key_0.issues.length; i++) {
      const iss = key_0.issues[i];
      iss.path = iss.path ? ["USE", ...iss.path] : ["USE"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_0_ab = true;
    }
    if (key_0_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["USE"] = key_0.value;
const key_1 = shape["CREATE"]._zod.run({ value: input["CREATE"], issues: [] }, ctx);
  if (key_1.issues.length) {
    let key_1_ab = false;
    for (let i = 0; i < key_1.issues.length; i++) {
      const iss = key_1.issues[i];
      iss.path = iss.path ? ["CREATE", ...iss.path] : ["CREATE"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_1_ab = true;
    }
    if (key_1_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["CREATE"] = key_1.value;
const key_2 = shape["UPDATE"]._zod.run({ value: input["UPDATE"], issues: [] }, ctx);
  if (key_2.issues.length) {
    let key_2_ab = false;
    for (let i = 0; i < key_2.issues.length; i++) {
      const iss = key_2.issues[i];
      iss.path = iss.path ? ["UPDATE", ...iss.path] : ["UPDATE"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_2_ab = true;
    }
    if (key_2_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["UPDATE"] = key_2.value;
const key_3 = shape["READ"]._zod.run({ value: input["READ"], issues: [] }, ctx);
  if (key_3.issues.length) {
    let key_3_ab = false;
    for (let i = 0; i < key_3.issues.length; i++) {
      const iss = key_3.issues[i];
      iss.path = iss.path ? ["READ", ...iss.path] : ["READ"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_3_ab = true;
    }
    if (key_3_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["READ"] = key_3.value;
const key_4 = shape["OPT_OUT"]._zod.run({ value: input["OPT_OUT"], issues: [] }, ctx);
  if (key_4.issues.length) {
    let key_4_ab = false;
    for (let i = 0; i < key_4.issues.length; i++) {
      const iss = key_4.issues[i];
      iss.path = iss.path ? ["OPT_OUT", ...iss.path] : ["OPT_OUT"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_4_ab = true;
    }
    if (key_4_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["OPT_OUT"] = key_4.value;
payload.value = newResult;
return payload;
};
})