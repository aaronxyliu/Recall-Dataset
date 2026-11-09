"use client";
import { jsxs as i, jsx as n } from "react/jsx-runtime";
import { ikp as a, widgetToggle as c, dataAttr as o, CustomIcon as r } from "@inkeep/cxkit-styled";
const w = a("div", {
  _id: "view_toggle"
}), l = a("button", {
  _id: "view_toggle_button",
  className: c({ slot: "button" })
}), g = a(r, {
  _id: "view_toggle_icon"
});
function _(e) {
  const { handleToggle: t } = u(e);
  return /* @__PURE__ */ i(w, { className: c({ slot: "root" }), children: [
    /* @__PURE__ */ i(
      l,
      {
        onClick: () => t("search"),
        "data-active": o(e.view === "search"),
        children: [
          /* @__PURE__ */ n(
            g,
            {
              "data-active": o(e.view === "search"),
              iconKey: "switchToSearch",
              className: c({ slot: "icon" })
            }
          ),
          e.searchLabel || "Search"
        ]
      }
    ),
    /* @__PURE__ */ i(
      l,
      {
        onClick: () => t("chat"),
        "data-active": o(e.view === "chat"),
        children: [
          /* @__PURE__ */ n(
            g,
            {
              "data-active": o(e.view === "chat"),
              iconKey: "switchToChat",
              className: c({ slot: "icon" })
            }
          ),
          e.askAILabel || "Ask AI"
        ]
      }
    )
  ] });
}
function u(e) {
  const { onToggleView: t, query: s } = e;
  return { handleToggle: (h, d) => {
    t?.({ view: h, query: s, autoSubmit: d });
  } };
}
export {
  _ as WidgetToggle,
  u as useToggleView
};
