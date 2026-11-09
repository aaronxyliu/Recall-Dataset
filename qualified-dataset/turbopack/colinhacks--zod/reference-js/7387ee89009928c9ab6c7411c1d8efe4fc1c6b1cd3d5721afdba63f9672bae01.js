"use client";
import { jsx as t, jsxs as r, Fragment as d } from "react/jsx-runtime";
import { ErrorBoundary as p, Shadow as u, RootProvider as g, WebWidgetInteractionType as b, EmbeddedChat as e, useModal as A, useWidget as M, dataAttr as h, Modal as m, PortalWithTheme as s } from "@inkeep/cxkit-styled";
import { Fragment as F } from "react";
import { WidgetToggle as I } from "./widget-toggle.js";
import { ModalContent as C } from "./modal.js";
function R(a) {
  const { baseSettings: n, aiChatSettings: o } = a;
  return /* @__PURE__ */ t(p, { children: /* @__PURE__ */ t(
    u,
    {
      wrapperStyles: {
        height: "inherit",
        width: "inherit"
      },
      children: /* @__PURE__ */ t(
        g,
        {
          config: {
            baseSettings: n,
            aiChatSettings: o
          },
          componentType: b.EmbeddedChat,
          children: /* @__PURE__ */ t(k, { ...a })
        }
      )
    }
  ) });
}
function T(a) {
  const { children: n, onToggleView: o, isHidden: c, shouldAutoFocusInput: i = !o } = a;
  return /* @__PURE__ */ t(e.Provider, { isHidden: c, shouldAutoFocusInput: i, children: n });
}
function k(a) {
  return /* @__PURE__ */ t(T, { ...a, children: /* @__PURE__ */ t(B, { ...a }) });
}
function B(a) {
  const { onToggleView: n, variant: o, header: c = S } = a, i = A(), l = M();
  return /* @__PURE__ */ t(i && !l ? C : F, { children: /* @__PURE__ */ r(
    e.Wrapper,
    {
      variant: o ?? (n ? "no-shadow" : "container-with-shadow"),
      "data-composite": h(!!a.onToggleView || i?.isOpen),
      children: [
        /* @__PURE__ */ t(e.ConversationLoading, {}),
        /* @__PURE__ */ r(e.Root, { children: [
          /* @__PURE__ */ t(c, { ...a }),
          /* @__PURE__ */ t(x, {}),
          /* @__PURE__ */ t(f, {})
        ] }),
        /* @__PURE__ */ t(P, {}),
        /* @__PURE__ */ t(V, {})
      ]
    }
  ) });
}
function S(a) {
  const { onToggleView: n, askAILabel: o, searchLabel: c } = a, i = !!n;
  return /* @__PURE__ */ t(e.Header, { "data-show-toolbar": h(i), children: i ? /* @__PURE__ */ r(e.HeaderToolbar, { children: [
    /* @__PURE__ */ r(e.HeaderToolbarWrapper, { children: [
      /* @__PURE__ */ t(e.ToolbarHeader, {}),
      /* @__PURE__ */ r(e.Disclaimer, { children: [
        /* @__PURE__ */ t(e.DisclaimerTrigger, {}),
        /* @__PURE__ */ r(e.DisclaimerContent, { side: "bottom", align: "start", children: [
          /* @__PURE__ */ t(e.DisclaimerText, {}),
          /* @__PURE__ */ t(e.DisclaimerArrow, {})
        ] })
      ] })
    ] }),
    /* @__PURE__ */ t(
      I,
      {
        onToggleView: n,
        askAILabel: o,
        searchLabel: c,
        view: "chat"
      }
    ),
    /* @__PURE__ */ t(m.Close, {})
  ] }) : /* @__PURE__ */ t(m.Close, {}) });
}
function x() {
  return /* @__PURE__ */ t(e.Content, { children: /* @__PURE__ */ r(e.ContentScrollArea, { children: [
    /* @__PURE__ */ t(e.ContentScrollAreaViewport, { children: /* @__PURE__ */ t(v, {}) }),
    /* @__PURE__ */ t(e.ContentScrollAreaScrollbar, { children: /* @__PURE__ */ t(e.ContentScrollAreaThumb, {}) }),
    /* @__PURE__ */ t(e.ContentScrollAreaCorner, {})
  ] }) });
}
function v() {
  return /* @__PURE__ */ t(e.Messages, { children: ({ messages: a }) => /* @__PURE__ */ r(d, { children: [
    /* @__PURE__ */ t(w, {}),
    a.map((n) => /* @__PURE__ */ r(e.MessageWrapper, { message: n, children: [
      /* @__PURE__ */ t(H, {}),
      /* @__PURE__ */ t(e.MessageLoading, {}),
      /* @__PURE__ */ r(e.MessageContentWrapper, { children: [
        /* @__PURE__ */ t(e.MessageContent, { children: /* @__PURE__ */ t(e.Message, {}) }),
        /* @__PURE__ */ t(y, {}),
        /* @__PURE__ */ t(L, {}),
        /* @__PURE__ */ t(D, {})
      ] })
    ] }, n.id))
  ] }) });
}
function w() {
  return /* @__PURE__ */ r(e.IntroMessageWrapper, { children: [
    /* @__PURE__ */ r(e.MessageHeader, { children: [
      /* @__PURE__ */ t(e.MessageAvatar, { children: /* @__PURE__ */ r(e.MessageAvatarContent, { children: [
        /* @__PURE__ */ t(e.MessageAvatarFallback, {}),
        /* @__PURE__ */ t(e.MessageAvatarImage, {})
      ] }) }),
      /* @__PURE__ */ t(e.MessageName, {})
    ] }),
    /* @__PURE__ */ r(e.MessageContentWrapper, { children: [
      /* @__PURE__ */ t(e.MessageContent, { children: /* @__PURE__ */ t(e.Message, {}) }),
      /* @__PURE__ */ r(e.Disclaimer, { children: [
        /* @__PURE__ */ t(e.DisclaimerLabel, {}),
        /* @__PURE__ */ t(e.DisclaimerTrigger, {}),
        /* @__PURE__ */ r(e.DisclaimerContent, { children: [
          /* @__PURE__ */ t(e.DisclaimerText, {}),
          /* @__PURE__ */ t(e.DisclaimerArrow, {})
        ] })
      ] }),
      /* @__PURE__ */ r(e.ExampleQuestions, { children: [
        /* @__PURE__ */ t(e.ExampleQuestionsLabel, {}),
        /* @__PURE__ */ t(e.ExampleQuestionsList, { children: (a) => a.map((n) => /* @__PURE__ */ t(e.ExampleQuestion, { children: /* @__PURE__ */ t(e.ExampleQuestionButton, { question: n }) }, n)) })
      ] })
    ] })
  ] });
}
function H() {
  return /* @__PURE__ */ r(e.MessageHeader, { children: [
    /* @__PURE__ */ t(e.MessageAvatar, { children: /* @__PURE__ */ r(e.MessageAvatarContent, { children: [
      /* @__PURE__ */ t(e.MessageAvatarFallback, {}),
      /* @__PURE__ */ t(e.MessageAvatarImage, {})
    ] }) }),
    /* @__PURE__ */ t(e.MessageName, {})
  ] });
}
function y() {
  return /* @__PURE__ */ r(e.MessageAttachments, { children: [
    /* @__PURE__ */ t(e.MessageAttachmentsList, { children: (a) => a.map((n) => /* @__PURE__ */ r(e.MessageAttachmentsItem, { attachment: n, children: [
      /* @__PURE__ */ t(e.MessageAttachmentsItemIcon, {}),
      /* @__PURE__ */ t(e.MessageAttachmentsItemTitle, {})
    ] }, n.id)) }),
    /* @__PURE__ */ t(e.MessageAttachmentsPreview, { children: /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t(e.MessageAttachmentsPreviewOverlay, { children: /* @__PURE__ */ r(e.MessageAttachmentsPreviewContent, { children: [
      /* @__PURE__ */ t(e.MessageAttachmentsPreviewHeader, {}),
      /* @__PURE__ */ t(e.MessageAttachmentsPreviewClose, {}),
      /* @__PURE__ */ t(e.MessageAttachmentsPreviewBody, {})
    ] }) }) }) })
  ] });
}
function L() {
  return /* @__PURE__ */ r(e.MessageToolbar, { children: [
    /* @__PURE__ */ t(e.MessageToolActions, { children: (a) => a.map((n, o) => /* @__PURE__ */ t(e.MessageToolAction, { action: n }, `action-${o}`)) }),
    /* @__PURE__ */ t(e.MessageAction, { action: "copy" }),
    /* @__PURE__ */ t(e.MessageAction, { action: "upvote" }),
    /* @__PURE__ */ t(e.MessageAction, { action: "downvote" })
  ] });
}
function D() {
  return /* @__PURE__ */ r(e.MessageSources, { children: [
    /* @__PURE__ */ t(e.MessageSourcesHeader, {}),
    /* @__PURE__ */ t(e.MessageSourcesList, { children: (a) => a.map((n, o) => /* @__PURE__ */ r(e.MessageSourceItem, { href: n.url, source: n, children: [
      /* @__PURE__ */ t(e.MessageSourceItemBreadcrumbs, { children: n.breadcrumbs?.map((c) => /* @__PURE__ */ r(F, { children: [
        c,
        /* @__PURE__ */ t(e.MessageSourceItemBreadcrumbIcon, {})
      ] }, c)) }),
      /* @__PURE__ */ t(e.MessageSourceItemIcon, {}),
      /* @__PURE__ */ t(e.MessageSourceItemTitle, {}),
      /* @__PURE__ */ t(e.MessageSourceItemTag, {}),
      /* @__PURE__ */ t(e.MessageSourceItemDescription, { children: (c) => c.map((i, l) => /* @__PURE__ */ t(
        e.MessageSourceItemDescriptionPart,
        {
          part: i
        },
        `part-${l}`
      )) }),
      /* @__PURE__ */ t(e.MessageSourceItemIndicator, {})
    ] }, o)) })
  ] });
}
function f() {
  return /* @__PURE__ */ r(e.Footer, { children: [
    /* @__PURE__ */ t(E, {}),
    /* @__PURE__ */ t(W, {})
  ] });
}
function E() {
  return /* @__PURE__ */ r(e.InputFieldset, { children: [
    /* @__PURE__ */ r(e.InputGroup, { children: [
      /* @__PURE__ */ t(e.Input, {}),
      /* @__PURE__ */ t(e.SendButton, { children: /* @__PURE__ */ t(e.SendButtonIcon, {}) })
    ] }),
    /* @__PURE__ */ r(e.AttachmentsBar, { children: [
      /* @__PURE__ */ t(e.AttachmentsBarList, { children: (a) => a.map((n) => /* @__PURE__ */ r(e.AttachmentsBarAttachment, { attachment: n, children: [
        /* @__PURE__ */ t(e.AttachmentsBarAttachmentIcon, {}),
        /* @__PURE__ */ t(e.AttachmentsBarAttachmentTitle, {}),
        /* @__PURE__ */ t(e.AttachmentsBarAttachmentDelete, {})
      ] }, n.id)) }),
      /* @__PURE__ */ r(e.AttachmentsBarActions, { children: [
        /* @__PURE__ */ r(e.AttachmentsBarInfoTip, { children: [
          /* @__PURE__ */ t(e.AttachmentsBarInfoTipIcon, {}),
          /* @__PURE__ */ t(e.AttachmentsBarInfoTipText, {})
        ] }),
        /* @__PURE__ */ t(e.AttachmentsBarInputs, { children: (a) => a.map((n) => /* @__PURE__ */ t(e.AttachmentsBarInput, { input: n, children: n.displayName }, n.id)) })
      ] }),
      /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t(e.AttachmentsBarModal, { children: /* @__PURE__ */ t(e.AttachmentsBarModalOverlay, { children: /* @__PURE__ */ r(e.AttachmentsBarModalContent, { children: [
        /* @__PURE__ */ r(e.AttachmentsBarModalHeader, { children: [
          /* @__PURE__ */ t(e.AttachmentsBarModalHeading, {}),
          /* @__PURE__ */ t(e.AttachmentsBarModalDescription, {}),
          /* @__PURE__ */ t(e.AttachmentsBarModalHelp, {})
        ] }),
        /* @__PURE__ */ t(e.AttachmentsBarModalClose, {}),
        /* @__PURE__ */ t(e.AttachmentsBarModalBody, { children: /* @__PURE__ */ r(e.AttachmentsBarForm, { children: [
          /* @__PURE__ */ r(e.AttachmentsBarFormTitle, { children: [
            /* @__PURE__ */ t(e.AttachmentsBarFormTitleLabel, {}),
            /* @__PURE__ */ t(e.AttachmentsBarFormTitleInput, {}),
            /* @__PURE__ */ t(e.AttachmentsBarFormTitleError, {})
          ] }),
          /* @__PURE__ */ r(e.AttachmentsBarFormContent, { children: [
            /* @__PURE__ */ t(e.AttachmentsBarFormContentLabel, {}),
            /* @__PURE__ */ t(e.AttachmentsBarFormContentInput, {}),
            /* @__PURE__ */ t(e.AttachmentsBarFormContentError, {})
          ] }),
          /* @__PURE__ */ t(e.AttachmentsBarFormSubmitButton, {})
        ] }) })
      ] }) }) }) })
    ] })
  ] });
}
function W() {
  return /* @__PURE__ */ r(e.ActionBar, { children: [
    /* @__PURE__ */ r(e.TaglineContainer, { children: [
      /* @__PURE__ */ t(e.TaglineText, {}),
      /* @__PURE__ */ t(e.TaglineLogo, {})
    ] }),
    /* @__PURE__ */ r(e.Actions, { children: [
      /* @__PURE__ */ t(e.HelpActions, { children: ({ pinned: a, unpinned: n }) => /* @__PURE__ */ r(d, { children: [
        a.map((o) => /* @__PURE__ */ t(e.HelpAction, { action: o }, o.name)),
        n.length > 0 && /* @__PURE__ */ t(e.HelpActionsTrigger, {}),
        /* @__PURE__ */ r(e.HelpActionsMenu, { children: [
          /* @__PURE__ */ t(e.HelpActionsMenuArrow, {}),
          n.map((o) => /* @__PURE__ */ r(e.HelpActionsMenuItem, { action: o, children: [
            /* @__PURE__ */ t(e.HelpActionsMenuItemIcon, { action: o }),
            o.name
          ] }, o.name))
        ] })
      ] }) }),
      /* @__PURE__ */ r(e.ChatAction, { action: "copy", children: [
        /* @__PURE__ */ t(e.ChatActionLabel, { action: "copy" }),
        /* @__PURE__ */ t(e.ChatActionFeedback, { action: "copy" })
      ] }),
      /* @__PURE__ */ r(e.ChatAction, { action: "share", children: [
        /* @__PURE__ */ t(e.ChatActionLabel, { action: "share" }),
        /* @__PURE__ */ t(e.ChatActionFeedback, { action: "share" })
      ] }),
      /* @__PURE__ */ t(e.ChatAction, { action: "clear" }),
      /* @__PURE__ */ t(e.ChatAction, { action: "stop" })
    ] })
  ] });
}
function P() {
  return /* @__PURE__ */ t(s, { children: /* @__PURE__ */ t(e.FeedbackModal, { children: /* @__PURE__ */ t(e.FeedbackModalOverlay, { children: /* @__PURE__ */ r(e.FeedbackModalContent, { children: [
    /* @__PURE__ */ t(e.FeedbackModalHeader, {}),
    /* @__PURE__ */ t(e.FeedbackModalClose, {}),
    /* @__PURE__ */ t(e.FeedbackModalBody, { children: /* @__PURE__ */ r(e.FeedbackForm, { children: [
      /* @__PURE__ */ r(e.FeedbackItem, { name: "unrelated_response", children: [
        /* @__PURE__ */ t(e.FeedbackItemCheckbox, { children: /* @__PURE__ */ t(e.FeedbackItemCheckboxIndicator, {}) }),
        /* @__PURE__ */ t(e.FeedbackItemLabel, {}),
        /* @__PURE__ */ t(e.FeedbackItemDescription, {})
      ] }),
      /* @__PURE__ */ r(e.FeedbackItem, { name: "inaccurate_statement", children: [
        /* @__PURE__ */ t(e.FeedbackItemCheckbox, { children: /* @__PURE__ */ t(e.FeedbackItemCheckboxIndicator, {}) }),
        /* @__PURE__ */ t(e.FeedbackItemLabel, {}),
        /* @__PURE__ */ t(e.FeedbackItemDescription, {})
      ] }),
      /* @__PURE__ */ r(e.FeedbackItem, { name: "inaccurate_code_snippet", children: [
        /* @__PURE__ */ t(e.FeedbackItemCheckbox, { children: /* @__PURE__ */ t(e.FeedbackItemCheckboxIndicator, {}) }),
        /* @__PURE__ */ t(e.FeedbackItemLabel, {}),
        /* @__PURE__ */ t(e.FeedbackItemDescription, {})
      ] }),
      /* @__PURE__ */ r(e.FeedbackItem, { name: "irrelevant_citations", children: [
        /* @__PURE__ */ t(e.FeedbackItemCheckbox, { children: /* @__PURE__ */ t(e.FeedbackItemCheckboxIndicator, {}) }),
        /* @__PURE__ */ t(e.FeedbackItemLabel, {})
      ] }),
      /* @__PURE__ */ t(e.FeedbackSubmitButton, {})
    ] }) })
  ] }) }) }) });
}
function V() {
  return /* @__PURE__ */ r(e.FormWrapper, { children: [
    /* @__PURE__ */ t(e.FormClose, {}),
    /* @__PURE__ */ r(e.Form, { children: [
      /* @__PURE__ */ r(e.FormHeader, { children: [
        /* @__PURE__ */ t(e.FormHeading, {}),
        /* @__PURE__ */ t(e.FormDescription, {})
      ] }),
      /* @__PURE__ */ t(e.FormContent, { children: (a) => /* @__PURE__ */ r(d, { children: [
        a.map((n, o) => /* @__PURE__ */ r(e.FormField, { field: n, autoFocus: o === 0, children: [
          /* @__PURE__ */ t(e.FormFieldLabel, {}),
          n.inputType === "text" && /* @__PURE__ */ t(e.FormFieldText, {}),
          n.inputType === "email" && /* @__PURE__ */ t(e.FormFieldEmail, {}),
          n.inputType === "file" && /* @__PURE__ */ t(e.FormFieldFile, {}),
          n.inputType === "textarea" && /* @__PURE__ */ t(e.FormFieldTextArea, {}),
          n.inputType === "checkbox" && /* @__PURE__ */ t(e.FormFieldCheckbox, { children: /* @__PURE__ */ t(e.FormFieldCheckboxIndicator, {}) }),
          n.inputType === "select" && /* @__PURE__ */ r(e.FormFieldSelect, { children: [
            /* @__PURE__ */ r(e.FormFieldSelectTrigger, { children: [
              /* @__PURE__ */ t(e.FormFieldSelectValue, {}),
              /* @__PURE__ */ t(e.FormFieldSelectIcon, {})
            ] }),
            /* @__PURE__ */ t(e.FormFieldSelectContent, { children: /* @__PURE__ */ t(e.FormFieldSelectViewport, { children: n.items.map((c) => /* @__PURE__ */ r(e.FormFieldSelectItem, { value: c.value, children: [
              /* @__PURE__ */ t(e.FormFieldSelectItemText, { children: c.label }),
              /* @__PURE__ */ t(e.FormFieldSelectItemIndicator, {})
            ] }, c.value)) }) })
          ] }),
          n.inputType === "combobox" && /* @__PURE__ */ r(e.FormFieldCombobox, { children: [
            /* @__PURE__ */ r(e.FormFieldComboboxControl, { children: [
              n.multiple && /* @__PURE__ */ t(e.FormFieldComboboxSelectedTags, {}),
              /* @__PURE__ */ t(e.FormFieldComboboxInput, {}),
              /* @__PURE__ */ t(e.FormFieldComboboxTrigger, {})
            ] }),
            /* @__PURE__ */ t(e.FormFieldComboboxPositioner, { children: /* @__PURE__ */ t(e.FormFieldComboboxContent, { children: /* @__PURE__ */ t(e.FormFieldComboboxItemList, {}) }) })
          ] }),
          /* @__PURE__ */ t(e.FormFieldDescription, {}),
          /* @__PURE__ */ t(e.FormFieldError, {})
        ] }, n.name)),
        /* @__PURE__ */ t(e.FormError, {})
      ] }) }),
      /* @__PURE__ */ r(e.FormFooter, { children: [
        /* @__PURE__ */ t(e.FormCancel, {}),
        /* @__PURE__ */ t(e.FormSubmit, {})
      ] })
    ] }),
    /* @__PURE__ */ r(e.FormSuccess, { children: [
      /* @__PURE__ */ t(e.FormSuccessHeading, {}),
      /* @__PURE__ */ t(e.FormSuccessMessage, {}),
      /* @__PURE__ */ t(e.FormSuccessButton, {})
    ] })
  ] });
}
export {
  R as InkeepEmbeddedChat,
  k as InkeepEmbeddedChatImpl,
  B as InkeepEmbeddedChatImplContent,
  T as InkeepEmbeddedChatProvider
};
