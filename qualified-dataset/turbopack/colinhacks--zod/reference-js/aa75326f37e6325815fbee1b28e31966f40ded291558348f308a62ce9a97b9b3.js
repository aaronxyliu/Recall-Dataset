"use client";
import { jsx as n } from "react/jsx-runtime";
import { InkeepEmbeddedSearchAndChatImpl as d } from "./embedded-search-and-chat.js";
import { InkeepModal as p } from "./modal.js";
import { useWidgetImpl as s } from "./embedded-search-and-chat.impl.js";
import { WebWidgetInteractionType as l } from "@inkeep/cxkit-styled";
import { composeEventHandlers as f } from "../utils.js";
function k(e) {
  const { modalSettings: t, ...r } = e, { config: i, ...o } = s(r), m = f(t?.onOpenChange, (c) => {
    e.forceDefaultView && !c && o.setView(e.defaultView ?? "search");
  }), a = {
    ...t,
    onOpenChange: m
  };
  return /* @__PURE__ */ n(
    p,
    {
      ...i,
      modalSettings: a,
      componentType: l.CustomTrigger,
      children: /* @__PURE__ */ n(d, { ...o })
    }
  );
}
export {
  k as InkeepModalSearchAndChat
};
