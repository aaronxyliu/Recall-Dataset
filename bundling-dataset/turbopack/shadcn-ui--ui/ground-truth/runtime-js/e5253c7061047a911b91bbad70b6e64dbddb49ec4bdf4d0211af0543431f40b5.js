(function anonymous(shape,payload,ctx
) {
  const input = payload.value;
  const newResult = {};
  const key_0 = shape["theme"]._zod.run({ value: input["theme"], issues: [] }, ctx);
    if (key_0.issues.length) {
      if ("theme" in input) {
        payload.issues = payload.issues.concat(key_0.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["theme", ...iss.path] : ["theme"]
        })));
      }
    }
    
    if (key_0.value === undefined) {
      if ("theme" in input) {
        newResult["theme"] = undefined;
      }
    } else {
      newResult["theme"] = key_0.value;
    }
    
  
  const key_1 = shape["light"]._zod.run({ value: input["light"], issues: [] }, ctx);
    if (key_1.issues.length) {
      if ("light" in input) {
        payload.issues = payload.issues.concat(key_1.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["light", ...iss.path] : ["light"]
        })));
      }
    }
    
    if (key_1.value === undefined) {
      if ("light" in input) {
        newResult["light"] = undefined;
      }
    } else {
      newResult["light"] = key_1.value;
    }
    
  
  const key_2 = shape["dark"]._zod.run({ value: input["dark"], issues: [] }, ctx);
    if (key_2.issues.length) {
      if ("dark" in input) {
        payload.issues = payload.issues.concat(key_2.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["dark", ...iss.path] : ["dark"]
        })));
      }
    }
    
    if (key_2.value === undefined) {
      if ("dark" in input) {
        newResult["dark"] = undefined;
      }
    } else {
      newResult["dark"] = key_2.value;
    }
    
  
  payload.value = newResult;
  return payload;
})