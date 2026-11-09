"use client";
import { jsx as e, jsxs as I } from "react/jsx-runtime";
import { InkeepEmbeddedChatProvider as u, InkeepEmbeddedChatImplContent as b } from "./embedded-chat.js";
import { ErrorBoundary as C, Shadow as f, RootProvider as g, WebWidgetInteractionType as k, useModal as w, WidgetProvider as A } from "@inkeep/cxkit-styled";
import { InkeepEmbeddedSearchProvider as E, InkeepEmbeddedSearchImplContent as S } from "./embedded-search.js";
import { useWidgetImpl as P } from "./embedded-search-and-chat.impl.js";
import { Fragment as v } from "react";
import { ModalContent as W } from "./modal.js";
function B(d) {
  const { config: r, ...o } = P(d);
  return /* @__PURE__ */ e(C, { children: /* @__PURE__ */ e(
    f,
    {
      wrapperStyles: {
        height: "inherit",
        width: "inherit"
      },
      children: /* @__PURE__ */ e(
        g,
        {
          config: r,
          componentType: k.EmbeddedSearchAndChat,
          children: /* @__PURE__ */ e(y, { ...o })
        }
      )
    }
  ) });
}
function y(d) {
  const {
    view: r,
    setView: o,
    shouldShowAskAICard: a,
    onToggleView: h,
    shouldAutoFocusInput: c,
    searchLabel: m,
    askAILabel: p,
    askAICardLabel: s
  } = d, l = w() ? W : v, t = {
    onToggleView: h,
    shouldShowAskAICard: a,
    shouldAutoFocusInput: c,
    searchLabel: m,
    askAILabel: p,
    askAICardLabel: s
  }, n = {
    isHidden: r === "chat",
    ...t
  }, i = {
    isHidden: r === "search",
    ...t
  };
  return /* @__PURE__ */ e(A, { widget: { setView: o, view: r }, children: /* @__PURE__ */ e(E, { ...n, children: /* @__PURE__ */ e(u, { ...i, children: /* @__PURE__ */ I(l, { children: [
    /* @__PURE__ */ e(S, { ...n }),
    /* @__PURE__ */ e(b, { ...i })
  ] }) }) }) });
}
export {
  B as InkeepEmbeddedSearchAndChat,
  y as InkeepEmbeddedSearchAndChatImpl
};
