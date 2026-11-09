"use client";
function f(n, e) {
  typeof n == "function" ? n(e) : n != null && (n.current = e);
}
function c(...n) {
  return (e) => {
    for (const t of n)
      f(t, e);
  };
}
function i(n, e, { checkForDefaultPrevented: t = !0 } = {}) {
  return function(o) {
    if (n?.(o), t === !1 || !o.defaultPrevented)
      return e?.(o);
  };
}
export {
  i as composeEventHandlers,
  c as composeRefs
};
