"use client";
import { jsx as n } from "react/jsx-runtime";
import { ErrorBoundary as d, Portal as l, Shadow as h, RootProvider as a, Modal as r } from "@inkeep/cxkit-styled";
function p(o) {
  const { componentType: e, children: t, modalSettings: i, ...c } = o;
  return /* @__PURE__ */ n(d, { children: /* @__PURE__ */ n(l, { children: /* @__PURE__ */ n(h, { children: /* @__PURE__ */ n(
    a,
    {
      config: {
        ...c
      },
      componentType: e,
      children: /* @__PURE__ */ n(r.Root, { config: i, children: t })
    }
  ) }) }) });
}
function u(o) {
  return /* @__PURE__ */ n(r.Overlay, { children: /* @__PURE__ */ n(r.Content, { children: o.children }) });
}
export {
  p as InkeepModal,
  u as ModalContent
};
