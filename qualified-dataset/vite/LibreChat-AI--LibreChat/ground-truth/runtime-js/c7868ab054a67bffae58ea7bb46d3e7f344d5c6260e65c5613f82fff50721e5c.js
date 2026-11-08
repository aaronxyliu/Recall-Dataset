(function anonymous(shape,inst,memo,syms
) {
return function (payload, ctx) {
const input = payload.value;
const newResult = memo.alloc(inst, payload, {}, ctx);
const key_0 = shape["maxEndpointFilters"]._zod.run({ value: input["maxEndpointFilters"], issues: [] }, ctx);
  if (key_0.issues.length) {
    let key_0_ab = false;
    for (let i = 0; i < key_0.issues.length; i++) {
      const iss = key_0.issues[i];
      iss.path = iss.path ? ["maxEndpointFilters", ...iss.path] : ["maxEndpointFilters"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_0_ab = true;
    }
    if (key_0_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["maxEndpointFilters"] = key_0.value;
const key_1 = shape["maxEndpointNameLength"]._zod.run({ value: input["maxEndpointNameLength"], issues: [] }, ctx);
  if (key_1.issues.length) {
    let key_1_ab = false;
    for (let i = 0; i < key_1.issues.length; i++) {
      const iss = key_1.issues[i];
      iss.path = iss.path ? ["maxEndpointNameLength", ...iss.path] : ["maxEndpointNameLength"];
      payload.issues.push(iss);
      if (iss.continue !== true) key_1_ab = true;
    }
    if (key_1_ab && ctx && ctx.abortEarly) {
      payload.value = newResult;
      return payload;
    }
  }

newResult["maxEndpointNameLength"] = key_1.value;
payload.value = newResult;
return payload;
};
})