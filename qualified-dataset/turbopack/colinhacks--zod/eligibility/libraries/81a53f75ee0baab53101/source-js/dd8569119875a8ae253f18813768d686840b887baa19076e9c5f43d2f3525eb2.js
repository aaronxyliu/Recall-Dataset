"use client";
import { jsxs as u, Fragment as k, jsx as t } from "react/jsx-runtime";
import { ErrorBoundary as A, Shadow as S, RootProvider as w, WebWidgetInteractionType as p, ChatButton as o } from "@inkeep/cxkit-styled";
import { InkeepModal as b } from "./modal.js";
import { InkeepEmbeddedSearchAndChatImpl as v } from "./embedded-search-and-chat.js";
import { useWidgetImpl as y } from "./embedded-search-and-chat.impl.js";
import { InkeepEmbeddedChatImpl as O } from "./embedded-chat.js";
import { composeEventHandlers as T } from "../utils.js";
import { useControllableState as x } from "@radix-ui/react-use-controllable-state";
function R(n) {
  const {
    modalSettings: e,
    label: i,
    defaultView: r = "chat",
    canToggleView: a = !0,
    avatar: l,
    ...s
  } = n, C = {
    ...s,
    shouldShowAskAICard: a ? n.shouldShowAskAICard : !1
  }, { config: c, ...h } = y({ ...C, defaultView: r }), f = (m) => {
    e?.isOpen === void 0 && (n.forceDefaultView && !m && h.setView(r ?? "search"), d(!!m));
  }, [g = !1, d] = x({
    prop: e?.isOpen,
    defaultProp: !1,
    onChange: T(e?.onOpenChange, f)
  }), I = {
    ...e,
    isOpen: g,
    onOpenChange: d
  }, B = () => a ? /* @__PURE__ */ t(v, { ...h }) : /* @__PURE__ */ t(O, { ...s });
  return /* @__PURE__ */ u(k, { children: [
    /* @__PURE__ */ t(A, { children: /* @__PURE__ */ t(S, { wrapperStyles: { display: "contents" }, children: /* @__PURE__ */ t(w, { config: c, componentType: p.ChatButton, children: /* @__PURE__ */ t(E, { label: i, avatar: l, onOpenChange: d }) }) }) }),
    /* @__PURE__ */ t(
      b,
      {
        ...c,
        componentType: p.ChatButton,
        modalSettings: I,
        children: B()
      }
    )
  ] });
}
function E({ label: n = "Ask AI", avatar: e, onOpenChange: i }) {
  const r = (a) => {
    a.button !== 2 && i((l) => !l);
  };
  return /* @__PURE__ */ t(o.Container, { children: /* @__PURE__ */ u(o.ChatButton, { onClick: r, children: [
    /* @__PURE__ */ t(o.ChatButtonText, { children: n }),
    /* @__PURE__ */ t(o.ChatButtonAvatarContent, { children: /* @__PURE__ */ t(o.ChatButtonAvatarImage, { avatar: e }) })
  ] }) });
}
export {
  E as ChatButtonImpl,
  R as InkeepChatButton
};
