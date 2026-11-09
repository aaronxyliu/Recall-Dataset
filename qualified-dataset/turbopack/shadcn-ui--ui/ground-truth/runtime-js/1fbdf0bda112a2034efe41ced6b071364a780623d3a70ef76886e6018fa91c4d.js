(function anonymous(shape,payload,ctx
) {
  const input = payload.value;
  const newResult = {};
  const key_0 = shape["$schema"]._zod.run({ value: input["$schema"], issues: [] }, ctx);
    if (key_0.issues.length) {
      if ("$schema" in input) {
        payload.issues = payload.issues.concat(key_0.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["$schema", ...iss.path] : ["$schema"]
        })));
      }
    }
    
    if (key_0.value === undefined) {
      if ("$schema" in input) {
        newResult["$schema"] = undefined;
      }
    } else {
      newResult["$schema"] = key_0.value;
    }
    
  
  const key_1 = shape["extends"]._zod.run({ value: input["extends"], issues: [] }, ctx);
    if (key_1.issues.length) {
      if ("extends" in input) {
        payload.issues = payload.issues.concat(key_1.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["extends", ...iss.path] : ["extends"]
        })));
      }
    }
    
    if (key_1.value === undefined) {
      if ("extends" in input) {
        newResult["extends"] = undefined;
      }
    } else {
      newResult["extends"] = key_1.value;
    }
    
  
  const key_2 = shape["name"]._zod.run({ value: input["name"], issues: [] }, ctx);
    const key_2_present = "name" in input;
    if (key_2.issues.length) {
      payload.issues = payload.issues.concat(key_2.issues.map(iss => ({
        ...iss,
        path: iss.path ? ["name", ...iss.path] : ["name"]
      })));
    }
    if (!key_2_present && !key_2.issues.length) {
      payload.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: undefined,
        path: ["name"]
      });
    }
    if (key_2_present) {
      if (key_2.value === undefined) {
        newResult["name"] = undefined;
      } else {
        newResult["name"] = key_2.value;
      }
    }
  
  const key_3 = shape["title"]._zod.run({ value: input["title"], issues: [] }, ctx);
    if (key_3.issues.length) {
      if ("title" in input) {
        payload.issues = payload.issues.concat(key_3.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["title", ...iss.path] : ["title"]
        })));
      }
    }
    
    if (key_3.value === undefined) {
      if ("title" in input) {
        newResult["title"] = undefined;
      }
    } else {
      newResult["title"] = key_3.value;
    }
    
  
  const key_4 = shape["author"]._zod.run({ value: input["author"], issues: [] }, ctx);
    if (key_4.issues.length) {
      if ("author" in input) {
        payload.issues = payload.issues.concat(key_4.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["author", ...iss.path] : ["author"]
        })));
      }
    }
    
    if (key_4.value === undefined) {
      if ("author" in input) {
        newResult["author"] = undefined;
      }
    } else {
      newResult["author"] = key_4.value;
    }
    
  
  const key_5 = shape["description"]._zod.run({ value: input["description"], issues: [] }, ctx);
    if (key_5.issues.length) {
      if ("description" in input) {
        payload.issues = payload.issues.concat(key_5.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["description", ...iss.path] : ["description"]
        })));
      }
    }
    
    if (key_5.value === undefined) {
      if ("description" in input) {
        newResult["description"] = undefined;
      }
    } else {
      newResult["description"] = key_5.value;
    }
    
  
  const key_6 = shape["dependencies"]._zod.run({ value: input["dependencies"], issues: [] }, ctx);
    if (key_6.issues.length) {
      if ("dependencies" in input) {
        payload.issues = payload.issues.concat(key_6.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["dependencies", ...iss.path] : ["dependencies"]
        })));
      }
    }
    
    if (key_6.value === undefined) {
      if ("dependencies" in input) {
        newResult["dependencies"] = undefined;
      }
    } else {
      newResult["dependencies"] = key_6.value;
    }
    
  
  const key_7 = shape["devDependencies"]._zod.run({ value: input["devDependencies"], issues: [] }, ctx);
    if (key_7.issues.length) {
      if ("devDependencies" in input) {
        payload.issues = payload.issues.concat(key_7.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["devDependencies", ...iss.path] : ["devDependencies"]
        })));
      }
    }
    
    if (key_7.value === undefined) {
      if ("devDependencies" in input) {
        newResult["devDependencies"] = undefined;
      }
    } else {
      newResult["devDependencies"] = key_7.value;
    }
    
  
  const key_8 = shape["registryDependencies"]._zod.run({ value: input["registryDependencies"], issues: [] }, ctx);
    if (key_8.issues.length) {
      if ("registryDependencies" in input) {
        payload.issues = payload.issues.concat(key_8.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["registryDependencies", ...iss.path] : ["registryDependencies"]
        })));
      }
    }
    
    if (key_8.value === undefined) {
      if ("registryDependencies" in input) {
        newResult["registryDependencies"] = undefined;
      }
    } else {
      newResult["registryDependencies"] = key_8.value;
    }
    
  
  const key_9 = shape["files"]._zod.run({ value: input["files"], issues: [] }, ctx);
    if (key_9.issues.length) {
      if ("files" in input) {
        payload.issues = payload.issues.concat(key_9.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["files", ...iss.path] : ["files"]
        })));
      }
    }
    
    if (key_9.value === undefined) {
      if ("files" in input) {
        newResult["files"] = undefined;
      }
    } else {
      newResult["files"] = key_9.value;
    }
    
  
  const key_10 = shape["tailwind"]._zod.run({ value: input["tailwind"], issues: [] }, ctx);
    if (key_10.issues.length) {
      if ("tailwind" in input) {
        payload.issues = payload.issues.concat(key_10.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["tailwind", ...iss.path] : ["tailwind"]
        })));
      }
    }
    
    if (key_10.value === undefined) {
      if ("tailwind" in input) {
        newResult["tailwind"] = undefined;
      }
    } else {
      newResult["tailwind"] = key_10.value;
    }
    
  
  const key_11 = shape["cssVars"]._zod.run({ value: input["cssVars"], issues: [] }, ctx);
    if (key_11.issues.length) {
      if ("cssVars" in input) {
        payload.issues = payload.issues.concat(key_11.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["cssVars", ...iss.path] : ["cssVars"]
        })));
      }
    }
    
    if (key_11.value === undefined) {
      if ("cssVars" in input) {
        newResult["cssVars"] = undefined;
      }
    } else {
      newResult["cssVars"] = key_11.value;
    }
    
  
  const key_12 = shape["css"]._zod.run({ value: input["css"], issues: [] }, ctx);
    if (key_12.issues.length) {
      if ("css" in input) {
        payload.issues = payload.issues.concat(key_12.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["css", ...iss.path] : ["css"]
        })));
      }
    }
    
    if (key_12.value === undefined) {
      if ("css" in input) {
        newResult["css"] = undefined;
      }
    } else {
      newResult["css"] = key_12.value;
    }
    
  
  const key_13 = shape["envVars"]._zod.run({ value: input["envVars"], issues: [] }, ctx);
    if (key_13.issues.length) {
      if ("envVars" in input) {
        payload.issues = payload.issues.concat(key_13.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["envVars", ...iss.path] : ["envVars"]
        })));
      }
    }
    
    if (key_13.value === undefined) {
      if ("envVars" in input) {
        newResult["envVars"] = undefined;
      }
    } else {
      newResult["envVars"] = key_13.value;
    }
    
  
  const key_14 = shape["meta"]._zod.run({ value: input["meta"], issues: [] }, ctx);
    if (key_14.issues.length) {
      if ("meta" in input) {
        payload.issues = payload.issues.concat(key_14.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["meta", ...iss.path] : ["meta"]
        })));
      }
    }
    
    if (key_14.value === undefined) {
      if ("meta" in input) {
        newResult["meta"] = undefined;
      }
    } else {
      newResult["meta"] = key_14.value;
    }
    
  
  const key_15 = shape["docs"]._zod.run({ value: input["docs"], issues: [] }, ctx);
    if (key_15.issues.length) {
      if ("docs" in input) {
        payload.issues = payload.issues.concat(key_15.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["docs", ...iss.path] : ["docs"]
        })));
      }
    }
    
    if (key_15.value === undefined) {
      if ("docs" in input) {
        newResult["docs"] = undefined;
      }
    } else {
      newResult["docs"] = key_15.value;
    }
    
  
  const key_16 = shape["categories"]._zod.run({ value: input["categories"], issues: [] }, ctx);
    if (key_16.issues.length) {
      if ("categories" in input) {
        payload.issues = payload.issues.concat(key_16.issues.map(iss => ({
          ...iss,
          path: iss.path ? ["categories", ...iss.path] : ["categories"]
        })));
      }
    }
    
    if (key_16.value === undefined) {
      if ("categories" in input) {
        newResult["categories"] = undefined;
      }
    } else {
      newResult["categories"] = key_16.value;
    }
    
  
  const key_17 = shape["type"]._zod.run({ value: input["type"], issues: [] }, ctx);
    const key_17_present = "type" in input;
    if (key_17.issues.length) {
      payload.issues = payload.issues.concat(key_17.issues.map(iss => ({
        ...iss,
        path: iss.path ? ["type", ...iss.path] : ["type"]
      })));
    }
    if (!key_17_present && !key_17.issues.length) {
      payload.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: undefined,
        path: ["type"]
      });
    }
    if (key_17_present) {
      if (key_17.value === undefined) {
        newResult["type"] = undefined;
      } else {
        newResult["type"] = key_17.value;
      }
    }
  
  payload.value = newResult;
  return payload;
})