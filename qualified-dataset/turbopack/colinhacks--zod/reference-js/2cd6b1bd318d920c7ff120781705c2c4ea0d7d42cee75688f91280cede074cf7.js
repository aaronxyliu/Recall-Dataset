"use client";
import { jsx as r, jsxs as s } from "react/jsx-runtime";
import { ErrorBoundary as m, Shadow as g, RootProvider as R, WebWidgetInteractionType as A, EmbeddedSearch as e, useInkeepConfig as T, useModal as p, useWidget as w, dataAttr as u, useCommandState as I, useSearch as S, Modal as k } from "@inkeep/cxkit-styled";
import { Fragment as d } from "react";
import { WidgetToggle as v, useToggleView as b } from "./widget-toggle.js";
import { ModalContent as P } from "./modal.js";
function j(t) {
  const { baseSettings: n, searchSettings: l } = t;
  return /* @__PURE__ */ r(m, { children: /* @__PURE__ */ r(g, { children: /* @__PURE__ */ r(
    R,
    {
      config: {
        baseSettings: n,
        searchSettings: l
      },
      componentType: A.EmbeddedSearch,
      children: /* @__PURE__ */ r(L, { ...t })
    }
  ) }) });
}
function f(t) {
  const { children: n, onToggleView: l, isHidden: i, shouldAutoFocusInput: o = !l } = t;
  return /* @__PURE__ */ r(e.Provider, { isHidden: i, shouldAutoFocusInput: o, children: n });
}
function L(t) {
  return /* @__PURE__ */ r(f, { ...t, children: /* @__PURE__ */ r(C, { ...t }) });
}
function C(t) {
  const {
    searchSettings: { view: n }
  } = T(), { onToggleView: l, shouldShowAskAICard: i = !!l && n !== "dual-pane" } = t, o = p(), c = w();
  return /* @__PURE__ */ r(o && !c ? P : d, { children: /* @__PURE__ */ r(
    e.Wrapper,
    {
      "data-show-ask-ai-card": u(i),
      "data-composite": u(!!l || o?.isOpen),
      children: /* @__PURE__ */ s(e.Root, { children: [
        /* @__PURE__ */ r(V, { ...t }),
        /* @__PURE__ */ s(e.Content, { children: [
          /* @__PURE__ */ r(
            y,
            {
              askAICardLabel: t.askAICardLabel,
              askAILabel: t.askAILabel,
              onToggleView: t.onToggleView,
              shouldShowAskAICard: i
            }
          ),
          /* @__PURE__ */ r(E, {})
        ] }),
        /* @__PURE__ */ r(W, {})
      ] })
    }
  ) });
}
function V(t) {
  const { onToggleView: n, askAILabel: l, searchLabel: i } = t, o = I((a) => a.search), { loading: c } = S();
  return /* @__PURE__ */ s(e.InputGroup, { children: [
    !c && /* @__PURE__ */ r(e.InputIcon, {}),
    /* @__PURE__ */ r(e.Loading, {}),
    /* @__PURE__ */ r(e.Input, {}),
    n && /* @__PURE__ */ r(
      v,
      {
        onToggleView: n,
        query: o,
        askAILabel: l,
        searchLabel: i,
        view: "search"
      }
    ),
    /* @__PURE__ */ r(k.Close, {})
  ] });
}
function y(t) {
  const { askAILabel: n, onToggleView: l, shouldShowAskAICard: i, askAICardLabel: o } = t, c = I((h) => h.search), { handleToggle: a } = b({
    onToggleView: l,
    query: c
  });
  return i ? /* @__PURE__ */ s(e.AskAITrigger, { onSelect: () => a("chat", !0), children: [
    /* @__PURE__ */ r(e.AskAITriggerIcon, {}),
    /* @__PURE__ */ s(e.AskAITriggerLabel, { children: [
      o || n || "Ask AI",
      c && /* @__PURE__ */ r(e.AskAITriggerQuery, { children: `${c}` })
    ] }),
    /* @__PURE__ */ r(e.AskAITriggerIndicatorText, { children: "Start conversation" }),
    /* @__PURE__ */ r(e.AskAITriggerIndicator, {})
  ] }) : null;
}
function E() {
  return /* @__PURE__ */ s(e.Results, { children: [
    /* @__PURE__ */ r(e.ResultsLoading, {}),
    /* @__PURE__ */ r(e.ResultsTabList, { children: (t) => t.map((n) => /* @__PURE__ */ r(e.ResultsTab, { tab: n }, n)) }),
    /* @__PURE__ */ r(e.ResultsEmpty, {}),
    /* @__PURE__ */ s(e.ResultsContent, { children: [
      /* @__PURE__ */ r(O, {}),
      /* @__PURE__ */ r($, {})
    ] })
  ] });
}
function O() {
  return /* @__PURE__ */ s(e.ResultsScrollArea, { children: [
    /* @__PURE__ */ r(e.ResultsScrollAreaViewport, { children: /* @__PURE__ */ r(e.ResultsList, { children: (t) => t.map((n) => /* @__PURE__ */ s(e.ResultsItem, { item: n, children: [
      /* @__PURE__ */ r(e.ResultsItemBreadcrumbs, { children: (l) => l.map((i, o) => /* @__PURE__ */ s(d, { children: [
        i,
        /* @__PURE__ */ r(e.ResultsItemBreadcrumbIcon, {})
      ] }, `${i}-${o}`)) }),
      /* @__PURE__ */ r(e.ResultsItemIcon, {}),
      /* @__PURE__ */ r(e.ResultsItemTitle, {}),
      /* @__PURE__ */ r(e.ResultsItemTag, {}),
      /* @__PURE__ */ r(e.ResultsItemDescription, { children: (l) => l.map((i, o) => /* @__PURE__ */ r(
        e.ResultsItemDescriptionPart,
        {
          part: i
        },
        `part-${o}`
      )) }),
      /* @__PURE__ */ r(e.ResultsItemIndicator, {})
    ] }, n.id)) }) }),
    /* @__PURE__ */ r(e.ResultsScrollAreaScrollbar, { children: /* @__PURE__ */ r(e.ResultsScrollAreaThumb, {}) }),
    /* @__PURE__ */ r(e.ResultsScrollAreaCorner, {})
  ] });
}
function $() {
  return /* @__PURE__ */ s(e.ResultsScrollArea, { children: [
    /* @__PURE__ */ r(e.ResultsScrollAreaViewport, { children: /* @__PURE__ */ s(e.ResultsItemPreview, { children: [
      /* @__PURE__ */ s(e.ResultsItemPreviewHeader, { children: [
        /* @__PURE__ */ s(e.ResultsItemPreviewHeading, { children: [
          /* @__PURE__ */ r(e.ResultsItemPreviewTitle, {}),
          /* @__PURE__ */ r(e.ResultsItemPreviewTitleLinkIcon, {})
        ] }),
        /* @__PURE__ */ r(e.ResultsItemPreviewBreadcrumbs, { children: (t) => t.map((n, l) => /* @__PURE__ */ s(d, { children: [
          n,
          /* @__PURE__ */ r(e.ResultsItemPreviewBreadcrumbIcon, {})
        ] }, `${n}-${l}`)) })
      ] }),
      /* @__PURE__ */ r(e.ResultsItemPreviewBody, {}),
      /* @__PURE__ */ s(e.ResultsItemPreviewOutline, { children: [
        /* @__PURE__ */ r(e.ResultsItemPreviewOutlineTitle, {}),
        /* @__PURE__ */ r(e.ResultsItemPreviewOutlineList, { children: (t) => t.map((n, l) => /* @__PURE__ */ s(
          e.ResultsItemPreviewOutlineItem,
          {
            href: n.url ?? void 0,
            "data-is-match": u(n.isMatch),
            children: [
              /* @__PURE__ */ r(e.ResultsItemPreviewOutlineItemIcon, {}),
              /* @__PURE__ */ r(e.ResultsItemPreviewOutlineItemText, { children: n.content }),
              n.url && /* @__PURE__ */ r(e.ResultsItemPreviewOutlineItemLinkIcon, {})
            ]
          },
          `${n.anchor}-${l}`
        )) })
      ] })
    ] }) }),
    /* @__PURE__ */ r(e.ResultsScrollAreaScrollbar, { children: /* @__PURE__ */ r(e.ResultsScrollAreaThumb, {}) }),
    /* @__PURE__ */ r(e.ResultsScrollAreaCorner, {})
  ] });
}
function W() {
  return /* @__PURE__ */ r(e.Footer, { children: /* @__PURE__ */ s(e.TaglineContainer, { children: [
    /* @__PURE__ */ r(e.TaglineText, {}),
    /* @__PURE__ */ r(e.TaglineLogo, {})
  ] }) });
}
export {
  j as InkeepEmbeddedSearch,
  L as InkeepEmbeddedSearchImpl,
  C as InkeepEmbeddedSearchImplContent,
  f as InkeepEmbeddedSearchProvider
};
