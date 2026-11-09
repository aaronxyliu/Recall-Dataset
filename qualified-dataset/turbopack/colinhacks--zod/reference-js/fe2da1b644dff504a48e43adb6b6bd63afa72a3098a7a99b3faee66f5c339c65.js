"use client";
import { useRef as r, useState as V, useImperativeHandle as d, useEffect as b } from "react";
import { composeRefs as a } from "../utils.js";
function _(f) {
  const {
    defaultView: c = "search",
    aiChatSettings: i,
    baseSettings: g,
    searchSettings: o,
    shouldAutoFocusInput: h = !0,
    onToggleView: l,
    ref: m,
    ...S
  } = f, t = r(null), R = a(t, i?.chatFunctionsRef), u = r(null), w = a(u, o?.searchFunctionsRef), p = {
    ...i,
    chatFunctionsRef: R
  }, F = {
    ...o,
    searchFunctionsRef: w
  }, [n, s] = V(c), I = (e) => {
    e.autoSubmit && e.query && t.current?.submitMessage(e.query), l?.(e), s(e.view);
  };
  return d(m, () => ({
    setView: s
  })), b(() => {
    n === "chat" ? t.current?.focusInput() : u.current?.focusInput();
  }, [n]), {
    config: {
      baseSettings: g,
      aiChatSettings: p,
      searchSettings: F
    },
    defaultView: c,
    view: n,
    setView: s,
    onToggleView: I,
    shouldAutoFocusInput: h,
    ...S
  };
}
export {
  _ as useWidgetImpl
};
