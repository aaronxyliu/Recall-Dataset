'use client';
'use strict';

var accordion = require('@base-ui/react/accordion');
var react = require('react');
var lucide_react_star = require('lucide-react');
var cn = require('cn');
var jsxRuntime = require('react/jsx-runtime');
var tailwindVariants = require('tailwind-variants');
var alertDialog = require('@base-ui/react/alert-dialog');
var button$1 = require('@base-ui/react/button');
var mergeProps = require('@base-ui/react/merge-props');
var useRender = require('@base-ui/react/use-render');
var dialog = require('@base-ui/react/dialog');
var popover = require('@base-ui/react/popover');
var menu = require('@base-ui/react/menu');
var tooltip$1 = require('@base-ui/react/tooltip');
var autocomplete = require('@base-ui/react/autocomplete');
var avatar$1 = require('@base-ui/react/avatar');
var separator = require('@base-ui/react/separator');
var reactDayPicker = require('react-day-picker');
var useEmblaCarousel = require('embla-carousel-react');
var checkbox = require('@base-ui/react/checkbox');
var checkboxGroup = require('@base-ui/react/checkbox-group');
var fieldset = require('@base-ui/react/fieldset');
var collapsible = require('@base-ui/react/collapsible');
var combobox = require('@base-ui/react/combobox');
var select = require('@base-ui/react/select');
var scrollArea = require('@base-ui/react/scroll-area');
var cmdk = require('cmdk');
var field = require('@base-ui/react/field');
var contextMenu = require('@base-ui/react/context-menu');
var drawer = require('@base-ui/react/drawer');
var reactHookForm = require('react-hook-form');
var zustand = require('zustand');
var web = require('@react-spring/web');
var menubar = require('@base-ui/react/menubar');
var meter = require('@base-ui/react/meter');
var navigationMenu = require('@base-ui/react/navigation-menu');
var numberField = require('@base-ui/react/number-field');
var otpField = require('@base-ui/react/otp-field');
var previewCard = require('@base-ui/react/preview-card');
var progress = require('@base-ui/react/progress');
var radio = require('@base-ui/react/radio');
var radioGroup = require('@base-ui/react/radio-group');
var reactResizablePanels = require('react-resizable-panels');
var slider = require('@base-ui/react/slider');
var _switch = require('@base-ui/react/switch');
var tabs = require('@base-ui/react/tabs');
var toggle = require('@base-ui/react/toggle');
var toggleGroup = require('@base-ui/react/toggle-group');
var toolbar = require('@base-ui/react/toolbar');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var lucide_react_star__namespace = /*#__PURE__*/_interopNamespace(lucide_react_star);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefault(useEmblaCarousel);

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget);

// src/components/icons.tsx
var icons_exports = {};
__reExport(icons_exports, lucide_react_star__namespace);
var paddingMap = {
  "0": "p-0",
  px: "p-px",
  "0.5": "p-0.5",
  "1": "p-1",
  "1.5": "p-1.5",
  "2": "p-2",
  "2.5": "p-2.5",
  "3": "p-3",
  "3.5": "p-3.5",
  "4": "p-4",
  "5": "p-5",
  "6": "p-6",
  "7": "p-7",
  "8": "p-8",
  "9": "p-9",
  "10": "p-10",
  "11": "p-11",
  "12": "p-12",
  "14": "p-14",
  "16": "p-16",
  "20": "p-20",
  "24": "p-24",
  "28": "p-28",
  "32": "p-32",
  "36": "p-36",
  "40": "p-40",
  "44": "p-44",
  "48": "p-48",
  "52": "p-52",
  "56": "p-56",
  "60": "p-60",
  "64": "p-64",
  "72": "p-72",
  "80": "p-80",
  "96": "p-96",
  true: "px-[var(--zen-padding-x)] py-[var(--zen-padding-y)]"
};
var pxMap = {
  "0": "px-0",
  px: "px-px",
  "0.5": "px-0.5",
  "1": "px-1",
  "1.5": "px-1.5",
  "2": "px-2",
  "2.5": "px-2.5",
  "3": "px-3",
  "3.5": "px-3.5",
  "4": "px-4",
  "5": "px-5",
  "6": "px-6",
  "7": "px-7",
  "8": "px-8",
  "9": "px-9",
  "10": "px-10",
  "11": "px-11",
  "12": "px-12",
  "14": "px-14",
  "16": "px-16",
  "20": "px-20",
  "24": "px-24",
  "28": "px-28",
  "32": "px-32",
  "36": "px-36",
  "40": "px-40",
  "44": "px-44",
  "48": "px-48",
  "52": "px-52",
  "56": "px-56",
  "60": "px-60",
  "64": "px-64",
  "72": "px-72",
  "80": "px-80",
  "96": "px-96",
  true: "px-[var(--zen-padding-x)]"
};
var pyMap = {
  "0": "py-0",
  px: "py-px",
  "0.5": "py-0.5",
  "1": "py-1",
  "1.5": "py-1.5",
  "2": "py-2",
  "2.5": "py-2.5",
  "3": "py-3",
  "3.5": "py-3.5",
  "4": "py-4",
  "5": "py-5",
  "6": "py-6",
  "7": "py-7",
  "8": "py-8",
  "9": "py-9",
  "10": "py-10",
  "11": "py-11",
  "12": "py-12",
  "14": "py-14",
  "16": "py-16",
  "20": "py-20",
  "24": "py-24",
  "28": "py-28",
  "32": "py-32",
  "36": "py-36",
  "40": "py-40",
  "44": "py-44",
  "48": "py-48",
  "52": "py-52",
  "56": "py-56",
  "60": "py-60",
  "64": "py-64",
  "72": "py-72",
  "80": "py-80",
  "96": "py-96",
  true: "py-[var(--zen-padding-y)]"
};
var ptMap = {
  "0": "pt-0",
  px: "pt-px",
  "0.5": "pt-0.5",
  "1": "pt-1",
  "1.5": "pt-1.5",
  "2": "pt-2",
  "2.5": "pt-2.5",
  "3": "pt-3",
  "3.5": "pt-3.5",
  "4": "pt-4",
  "5": "pt-5",
  "6": "pt-6",
  "7": "pt-7",
  "8": "pt-8",
  "9": "pt-9",
  "10": "pt-10",
  "11": "pt-11",
  "12": "pt-12",
  "14": "pt-14",
  "16": "pt-16",
  "20": "pt-20",
  "24": "pt-24",
  "28": "pt-28",
  "32": "pt-32",
  "36": "pt-36",
  "40": "pt-40",
  "44": "pt-44",
  "48": "pt-48",
  "52": "pt-52",
  "56": "pt-56",
  "60": "pt-60",
  "64": "pt-64",
  "72": "pt-72",
  "80": "pt-80",
  "96": "pt-96"
};
var prMap = {
  "0": "pr-0",
  px: "pr-px",
  "0.5": "pr-0.5",
  "1": "pr-1",
  "1.5": "pr-1.5",
  "2": "pr-2",
  "2.5": "pr-2.5",
  "3": "pr-3",
  "3.5": "pr-3.5",
  "4": "pr-4",
  "5": "pr-5",
  "6": "pr-6",
  "7": "pr-7",
  "8": "pr-8",
  "9": "pr-9",
  "10": "pr-10",
  "11": "pr-11",
  "12": "pr-12",
  "14": "pr-14",
  "16": "pr-16",
  "20": "pr-20",
  "24": "pr-24",
  "28": "pr-28",
  "32": "pr-32",
  "36": "pr-36",
  "40": "pr-40",
  "44": "pr-44",
  "48": "pr-48",
  "52": "pr-52",
  "56": "pr-56",
  "60": "pr-60",
  "64": "pr-64",
  "72": "pr-72",
  "80": "pr-80",
  "96": "pr-96"
};
var pbMap = {
  "0": "pb-0",
  px: "pb-px",
  "0.5": "pb-0.5",
  "1": "pb-1",
  "1.5": "pb-1.5",
  "2": "pb-2",
  "2.5": "pb-2.5",
  "3": "pb-3",
  "3.5": "pb-3.5",
  "4": "pb-4",
  "5": "pb-5",
  "6": "pb-6",
  "7": "pb-7",
  "8": "pb-8",
  "9": "pb-9",
  "10": "pb-10",
  "11": "pb-11",
  "12": "pb-12",
  "14": "pb-14",
  "16": "pb-16",
  "20": "pb-20",
  "24": "pb-24",
  "28": "pb-28",
  "32": "pb-32",
  "36": "pb-36",
  "40": "pb-40",
  "44": "pb-44",
  "48": "pb-48",
  "52": "pb-52",
  "56": "pb-56",
  "60": "pb-60",
  "64": "pb-64",
  "72": "pb-72",
  "80": "pb-80",
  "96": "pb-96"
};
var plMap = {
  "0": "pl-0",
  px: "pl-px",
  "0.5": "pl-0.5",
  "1": "pl-1",
  "1.5": "pl-1.5",
  "2": "pl-2",
  "2.5": "pl-2.5",
  "3": "pl-3",
  "3.5": "pl-3.5",
  "4": "pl-4",
  "5": "pl-5",
  "6": "pl-6",
  "7": "pl-7",
  "8": "pl-8",
  "9": "pl-9",
  "10": "pl-10",
  "11": "pl-11",
  "12": "pl-12",
  "14": "pl-14",
  "16": "pl-16",
  "20": "pl-20",
  "24": "pl-24",
  "28": "pl-28",
  "32": "pl-32",
  "36": "pl-36",
  "40": "pl-40",
  "44": "pl-44",
  "48": "pl-48",
  "52": "pl-52",
  "56": "pl-56",
  "60": "pl-60",
  "64": "pl-64",
  "72": "pl-72",
  "80": "pl-80",
  "96": "pl-96"
};
var marginMap = {
  auto: "m-auto",
  "0": "m-0",
  px: "m-px",
  "0.5": "m-0.5",
  "1": "m-1",
  "1.5": "m-1.5",
  "2": "m-2",
  "2.5": "m-2.5",
  "3": "m-3",
  "3.5": "m-3.5",
  "4": "m-4",
  "5": "m-5",
  "6": "m-6",
  "7": "m-7",
  "8": "m-8",
  "9": "m-9",
  "10": "m-10",
  "11": "m-11",
  "12": "m-12",
  "14": "m-14",
  "16": "m-16",
  "20": "m-20",
  "24": "m-24",
  "28": "m-28",
  "32": "m-32",
  "36": "m-36",
  "40": "m-40",
  "44": "m-44",
  "48": "m-48",
  "52": "m-52",
  "56": "m-56",
  "60": "m-60",
  "64": "m-64",
  "72": "m-72",
  "80": "m-80",
  "96": "m-96",
  "-px": "-m-px",
  "-0.5": "-m-0.5",
  "-1": "-m-1",
  "-1.5": "-m-1.5",
  "-2": "-m-2",
  "-2.5": "-m-2.5",
  "-3": "-m-3",
  "-3.5": "-m-3.5",
  "-4": "-m-4",
  "-5": "-m-5",
  "-6": "-m-6",
  "-7": "-m-7",
  "-8": "-m-8",
  "-9": "-m-9",
  "-10": "-m-10",
  "-11": "-m-11",
  "-12": "-m-12",
  "-14": "-m-14",
  "-16": "-m-16",
  "-20": "-m-20",
  "-24": "-m-24"
};
var mxMap = {
  auto: "mx-auto",
  "0": "mx-0",
  px: "mx-px",
  "0.5": "mx-0.5",
  "1": "mx-1",
  "1.5": "mx-1.5",
  "2": "mx-2",
  "2.5": "mx-2.5",
  "3": "mx-3",
  "3.5": "mx-3.5",
  "4": "mx-4",
  "5": "mx-5",
  "6": "mx-6",
  "7": "mx-7",
  "8": "mx-8",
  "9": "mx-9",
  "10": "mx-10",
  "11": "mx-11",
  "12": "mx-12",
  "14": "mx-14",
  "16": "mx-16",
  "20": "mx-20",
  "24": "mx-24",
  "28": "mx-28",
  "32": "mx-32",
  "36": "mx-36",
  "40": "mx-40",
  "-px": "-mx-px",
  "-0.5": "-mx-0.5",
  "-1": "-mx-1",
  "-1.5": "-mx-1.5",
  "-2": "-mx-2",
  "-2.5": "-mx-2.5",
  "-3": "-mx-3",
  "-3.5": "-mx-3.5",
  "-4": "-mx-4"
};
var myMap = {
  auto: "my-auto",
  "0": "my-0",
  px: "my-px",
  "0.5": "my-0.5",
  "1": "my-1",
  "1.5": "my-1.5",
  "2": "my-2",
  "2.5": "my-2.5",
  "3": "my-3",
  "3.5": "my-3.5",
  "4": "my-4",
  "5": "my-5",
  "6": "my-6",
  "7": "my-7",
  "8": "my-8",
  "9": "my-9",
  "10": "my-10",
  "11": "my-11",
  "12": "my-12",
  "14": "my-14",
  "16": "my-16",
  "20": "my-20",
  "24": "my-24",
  "28": "my-28",
  "32": "my-32",
  "36": "my-36",
  "40": "my-40",
  "-px": "-my-px",
  "-0.5": "-my-0.5",
  "-1": "-my-1",
  "-1.5": "-my-1.5",
  "-2": "-my-2",
  "-2.5": "-my-2.5",
  "-3": "-my-3",
  "-3.5": "-my-3.5",
  "-4": "-my-4"
};
var mtMap = {
  auto: "mt-auto",
  "0": "mt-0",
  px: "mt-px",
  "0.5": "mt-0.5",
  "1": "mt-1",
  "1.5": "mt-1.5",
  "2": "mt-2",
  "2.5": "mt-2.5",
  "3": "mt-3",
  "3.5": "mt-3.5",
  "4": "mt-4",
  "5": "mt-5",
  "6": "mt-6",
  "7": "mt-7",
  "8": "mt-8",
  "9": "mt-9",
  "10": "mt-10",
  "11": "mt-11",
  "12": "mt-12",
  "14": "mt-14",
  "16": "mt-16",
  "20": "mt-20",
  "24": "mt-24",
  "28": "mt-28",
  "32": "mt-32",
  "36": "mt-36",
  "40": "mt-40",
  "-px": "-mt-px",
  "-0.5": "-mt-0.5",
  "-1": "-mt-1",
  "-1.5": "-mt-1.5",
  "-2": "-mt-2",
  "-2.5": "-mt-2.5",
  "-3": "-mt-3",
  "-3.5": "-mt-3.5",
  "-4": "-mt-4"
};
var mrMap = {
  auto: "mr-auto",
  "0": "mr-0",
  px: "mr-px",
  "0.5": "mr-0.5",
  "1": "mr-1",
  "1.5": "mr-1.5",
  "2": "mr-2",
  "2.5": "mr-2.5",
  "3": "mr-3",
  "3.5": "mr-3.5",
  "4": "mr-4",
  "5": "mr-5",
  "6": "mr-6",
  "7": "mr-7",
  "8": "mr-8",
  "9": "mr-9",
  "10": "mr-10",
  "11": "mr-11",
  "12": "mr-12",
  "14": "mr-14",
  "16": "mr-16",
  "20": "mr-20",
  "24": "mr-24",
  "28": "mr-28",
  "32": "mr-32",
  "36": "mr-36",
  "40": "mr-40",
  "-px": "-mr-px",
  "-0.5": "-mr-0.5",
  "-1": "-mr-1",
  "-1.5": "-mr-1.5",
  "-2": "-mr-2",
  "-2.5": "-mr-2.5",
  "-3": "-mr-3",
  "-3.5": "-mr-3.5",
  "-4": "-mr-4"
};
var mbMap = {
  auto: "mb-auto",
  "0": "mb-0",
  px: "mb-px",
  "0.5": "mb-0.5",
  "1": "mb-1",
  "1.5": "mb-1.5",
  "2": "mb-2",
  "2.5": "mb-2.5",
  "3": "mb-3",
  "3.5": "mb-3.5",
  "4": "mb-4",
  "5": "mb-5",
  "6": "mb-6",
  "7": "mb-7",
  "8": "mb-8",
  "9": "mb-9",
  "10": "mb-10",
  "11": "mb-11",
  "12": "mb-12",
  "14": "mb-14",
  "16": "mb-16",
  "20": "mb-20",
  "24": "mb-24",
  "28": "mb-28",
  "32": "mb-32",
  "36": "mb-36",
  "40": "mb-40",
  "-px": "-mb-px",
  "-0.5": "-mb-0.5",
  "-1": "-mb-1",
  "-1.5": "-mb-1.5",
  "-2": "-mb-2",
  "-2.5": "-mb-2.5",
  "-3": "-mb-3",
  "-3.5": "-mb-3.5",
  "-4": "-mb-4"
};
var mlMap = {
  auto: "ml-auto",
  "0": "ml-0",
  px: "ml-px",
  "0.5": "ml-0.5",
  "1": "ml-1",
  "1.5": "ml-1.5",
  "2": "ml-2",
  "2.5": "ml-2.5",
  "3": "ml-3",
  "3.5": "ml-3.5",
  "4": "ml-4",
  "5": "ml-5",
  "6": "ml-6",
  "7": "ml-7",
  "8": "ml-8",
  "9": "ml-9",
  "10": "ml-10",
  "11": "ml-11",
  "12": "ml-12",
  "14": "ml-14",
  "16": "ml-16",
  "20": "ml-20",
  "24": "ml-24",
  "28": "ml-28",
  "32": "ml-32",
  "36": "ml-36",
  "40": "ml-40",
  "-px": "-ml-px",
  "-0.5": "-ml-0.5",
  "-1": "-ml-1",
  "-1.5": "-ml-1.5",
  "-2": "-ml-2",
  "-2.5": "-ml-2.5",
  "-3": "-ml-3",
  "-3.5": "-ml-3.5",
  "-4": "-ml-4"
};
var gapMap = {
  "0": "gap-0",
  px: "gap-px",
  "0.5": "gap-0.5",
  "1": "gap-1",
  "1.5": "gap-1.5",
  "2": "gap-2",
  "2.5": "gap-2.5",
  "3": "gap-3",
  "3.5": "gap-3.5",
  "4": "gap-4",
  "5": "gap-5",
  "6": "gap-6",
  "7": "gap-7",
  "8": "gap-8",
  "9": "gap-9",
  "10": "gap-10",
  "11": "gap-11",
  "12": "gap-12",
  "14": "gap-14",
  "16": "gap-16",
  "20": "gap-20",
  "24": "gap-24",
  "28": "gap-28",
  "32": "gap-32",
  "36": "gap-36",
  "40": "gap-40",
  "44": "gap-44",
  "48": "gap-48",
  "52": "gap-52",
  "56": "gap-56",
  "60": "gap-60",
  "64": "gap-64",
  "72": "gap-72",
  "80": "gap-80",
  "96": "gap-96",
  true: "gap-[var(--zen-gap)]"
};
var gapXMap = {
  "0": "gap-x-0",
  px: "gap-x-px",
  "0.5": "gap-x-0.5",
  "1": "gap-x-1",
  "1.5": "gap-x-1.5",
  "2": "gap-x-2",
  "2.5": "gap-x-2.5",
  "3": "gap-x-3",
  "3.5": "gap-x-3.5",
  "4": "gap-x-4",
  "5": "gap-x-5",
  "6": "gap-x-6",
  "7": "gap-x-7",
  "8": "gap-x-8",
  "9": "gap-x-9",
  "10": "gap-x-10",
  "11": "gap-x-11",
  "12": "gap-x-12",
  "14": "gap-x-14",
  "16": "gap-x-16",
  "20": "gap-x-20",
  "24": "gap-x-24",
  "28": "gap-x-28",
  "32": "gap-x-32",
  true: "gap-x-[var(--zen-gap)]"
};
var gapYMap = {
  "0": "gap-y-0",
  px: "gap-y-px",
  "0.5": "gap-y-0.5",
  "1": "gap-y-1",
  "1.5": "gap-y-1.5",
  "2": "gap-y-2",
  "2.5": "gap-y-2.5",
  "3": "gap-y-3",
  "3.5": "gap-y-3.5",
  "4": "gap-y-4",
  "5": "gap-y-5",
  "6": "gap-y-6",
  "7": "gap-y-7",
  "8": "gap-y-8",
  "9": "gap-y-9",
  "10": "gap-y-10",
  "11": "gap-y-11",
  "12": "gap-y-12",
  "14": "gap-y-14",
  "16": "gap-y-16",
  "20": "gap-y-20",
  "24": "gap-y-24",
  "28": "gap-y-28",
  "32": "gap-y-32",
  true: "gap-y-[var(--zen-gap)]"
};
var spaceXMap = {
  "0": "space-x-0",
  px: "space-x-px",
  "0.5": "space-x-0.5",
  "1": "space-x-1",
  "1.5": "space-x-1.5",
  "2": "space-x-2",
  "2.5": "space-x-2.5",
  "3": "space-x-3",
  "3.5": "space-x-3.5",
  "4": "space-x-4",
  "5": "space-x-5",
  "6": "space-x-6",
  "7": "space-x-7",
  "8": "space-x-8",
  "9": "space-x-9",
  "10": "space-x-10",
  "11": "space-x-11",
  "12": "space-x-12",
  "14": "space-x-14",
  "16": "space-x-16",
  "20": "space-x-20",
  "24": "space-x-24",
  "28": "space-x-28",
  "32": "space-x-32",
  "36": "space-x-36",
  "40": "space-x-40",
  "44": "space-x-44",
  "48": "space-x-48",
  "52": "space-x-52",
  "56": "space-x-56",
  "60": "space-x-60",
  "64": "space-x-64",
  "72": "space-x-72",
  "80": "space-x-80",
  "96": "space-x-96"
};
var spaceYMap = {
  "0": "space-y-0",
  px: "space-y-px",
  "0.5": "space-y-0.5",
  "1": "space-y-1",
  "1.5": "space-y-1.5",
  "2": "space-y-2",
  "2.5": "space-y-2.5",
  "3": "space-y-3",
  "3.5": "space-y-3.5",
  "4": "space-y-4",
  "5": "space-y-5",
  "6": "space-y-6",
  "7": "space-y-7",
  "8": "space-y-8",
  "9": "space-y-9",
  "10": "space-y-10",
  "11": "space-y-11",
  "12": "space-y-12",
  "14": "space-y-14",
  "16": "space-y-16",
  "20": "space-y-20",
  "24": "space-y-24",
  "28": "space-y-28",
  "32": "space-y-32",
  "36": "space-y-36",
  "40": "space-y-40",
  "44": "space-y-44",
  "48": "space-y-48",
  "52": "space-y-52",
  "56": "space-y-56",
  "60": "space-y-60",
  "64": "space-y-64",
  "72": "space-y-72",
  "80": "space-y-80",
  "96": "space-y-96"
};
var fontSizeMap = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl"
};
var headingSizeMap = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl"
};
var fontWeightMap = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black"
};
var borderRadiusMap = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
  true: "rounded-[var(--zen-radius)]"
};
var borderWidthMap = {
  sm: "border",
  md: "border-2",
  lg: "border-4",
  xl: "border-8"
};
var shadowMap = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
  inner: "shadow-inner",
  true: "shadow-[var(--zen-shadow)]"
};
var semanticColorMap = {
  primary: { text: "text-fg", bg: "bg-primary" },
  muted: { text: "text-fg-muted", bg: "bg-surface-raised" },
  inverted: { text: "text-surface", bg: "bg-surface-inverted" },
  disabled: { text: "text-fg-disabled", bg: "bg-surface-disabled" },
  transparent: { text: "text-transparent", bg: "bg-transparent" },
  true: { text: "text-fg", bg: "bg-interactive" },
  // Surface colors
  surface: { text: "", bg: "bg-surface" },
  "surface-raised": { text: "", bg: "bg-surface-raised" },
  "surface-sunken": { text: "", bg: "bg-surface-sunken" },
  "surface-overlay": { text: "", bg: "bg-surface-overlay" },
  "surface-inverted": { text: "", bg: "bg-surface-inverted" },
  "surface-disabled": { text: "", bg: "bg-surface-disabled" },
  // Interactive colors
  interactive: { text: "", bg: "bg-interactive" },
  "interactive-hover": { text: "", bg: "bg-interactive-hover" },
  "interactive-pressed": { text: "", bg: "bg-interactive-pressed" }
};
var tailwindColors = /* @__PURE__ */ new Set([
  "gray",
  "slate",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
]);
function isTailwindColor(value) {
  const parts = value.split("-");
  if (parts.length === 2 && tailwindColors.has(parts[0]) && /^\d+$/.test(parts[1])) {
    return true;
  }
  return tailwindColors.has(value);
}
function getTailwindColorClass(value, prefix) {
  if (tailwindColors.has(value)) {
    return `${prefix}-${value}-500`;
  }
  return `${prefix}-${value}`;
}
var displayMap = {
  none: "hidden",
  block: "block",
  inline: "inline",
  "inline-block": "inline-block",
  flex: "flex",
  "inline-flex": "inline-flex",
  grid: "grid",
  "inline-grid": "inline-grid"
};
var positionMap = {
  static: "static",
  relative: "relative",
  absolute: "absolute",
  fixed: "fixed",
  sticky: "sticky"
};
var overflowMap = {
  visible: "overflow-visible",
  hidden: "overflow-hidden",
  clip: "overflow-clip",
  scroll: "overflow-scroll",
  auto: "overflow-auto"
};
var overflowXMap = {
  visible: "overflow-x-visible",
  hidden: "overflow-x-hidden",
  clip: "overflow-x-clip",
  scroll: "overflow-x-scroll",
  auto: "overflow-x-auto"
};
var overflowYMap = {
  visible: "overflow-y-visible",
  hidden: "overflow-y-hidden",
  clip: "overflow-y-clip",
  scroll: "overflow-y-scroll",
  auto: "overflow-y-auto"
};
var cursorMap = {
  auto: "cursor-auto",
  default: "cursor-default",
  pointer: "cursor-pointer",
  wait: "cursor-wait",
  text: "cursor-text",
  move: "cursor-move",
  help: "cursor-help",
  "not-allowed": "cursor-not-allowed",
  none: "cursor-none",
  grab: "cursor-grab",
  grabbing: "cursor-grabbing"
};
var opacityMap = {
  "0": "opacity-0",
  "5": "opacity-5",
  "10": "opacity-10",
  "15": "opacity-15",
  "20": "opacity-20",
  "25": "opacity-25",
  "30": "opacity-30",
  "35": "opacity-35",
  "40": "opacity-40",
  "45": "opacity-45",
  "50": "opacity-50",
  "55": "opacity-55",
  "60": "opacity-60",
  "65": "opacity-65",
  "70": "opacity-70",
  "75": "opacity-75",
  "80": "opacity-80",
  "85": "opacity-85",
  "90": "opacity-90",
  "95": "opacity-95",
  "100": "opacity-100"
};
var pointerEventsMap = {
  none: "pointer-events-none",
  auto: "pointer-events-auto"
};
var flexDirectionMap = {
  row: "flex-row",
  "row-reverse": "flex-row-reverse",
  column: "flex-col",
  "column-reverse": "flex-col-reverse"
};
var flexWrapMap = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
  "wrap-reverse": "flex-wrap-reverse"
};
var justifyContentMap = {
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
  "flex-start": "justify-start",
  "flex-end": "justify-end",
  "space-between": "justify-between",
  "space-around": "justify-around",
  "space-evenly": "justify-evenly",
  stretch: "justify-stretch"
};
var justifyItemsMap = {
  start: "justify-items-start",
  end: "justify-items-end",
  center: "justify-items-center",
  stretch: "justify-items-stretch"
};
var alignContentMap = {
  center: "content-center",
  start: "content-start",
  end: "content-end",
  "flex-start": "content-start",
  "flex-end": "content-end",
  "space-between": "content-between",
  "space-around": "content-around",
  "space-evenly": "content-evenly",
  stretch: "content-stretch",
  baseline: "content-baseline"
};
var alignItemsMap = {
  center: "items-center",
  start: "items-start",
  end: "items-end",
  "flex-start": "items-start",
  "flex-end": "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
};
var alignSelfMap = {
  auto: "self-auto",
  center: "self-center",
  start: "self-start",
  end: "self-end",
  "flex-start": "self-start",
  "flex-end": "self-end",
  stretch: "self-stretch",
  baseline: "self-baseline"
};
var textAlignMap = {
  left: "text-left",
  center: "text-center",
  right: "text-right"
};
var textWrapMap = {
  wrap: "text-wrap",
  nowrap: "text-nowrap",
  balance: "text-balance",
  pretty: "text-pretty"
};
var textTransformMap = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  none: "normal-case"
};
var letterSpacingMap = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest"
};
var lineHeightMap = {
  none: "leading-none",
  tight: "leading-tight",
  snug: "leading-snug",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
  loose: "leading-loose",
  "3": "leading-3",
  "4": "leading-4",
  "5": "leading-5",
  "6": "leading-6",
  "7": "leading-7",
  "8": "leading-8",
  "9": "leading-9",
  "10": "leading-10"
};
var whitespaceMap = {
  normal: "whitespace-normal",
  nowrap: "whitespace-nowrap",
  pre: "whitespace-pre",
  "pre-line": "whitespace-pre-line",
  "pre-wrap": "whitespace-pre-wrap",
  "break-spaces": "whitespace-break-spaces"
};
var wordBreakMap = {
  normal: "break-normal",
  words: "break-words",
  all: "break-all",
  keep: "break-keep"
};
var verticalAlignMap = {
  baseline: "align-baseline",
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom",
  "text-top": "align-text-top",
  "text-bottom": "align-text-bottom",
  sub: "align-sub",
  super: "align-super"
};
var textDecorationStyleMap = {
  solid: "decoration-solid",
  double: "decoration-double",
  dotted: "decoration-dotted",
  dashed: "decoration-dashed",
  wavy: "decoration-wavy"
};
var textIndentMap = {
  "0": "indent-0",
  px: "indent-px",
  "0.5": "indent-0.5",
  "1": "indent-1",
  "1.5": "indent-1.5",
  "2": "indent-2",
  "2.5": "indent-2.5",
  "3": "indent-3",
  "3.5": "indent-3.5",
  "4": "indent-4",
  "5": "indent-5",
  "6": "indent-6",
  "7": "indent-7",
  "8": "indent-8",
  "9": "indent-9",
  "10": "indent-10",
  "11": "indent-11",
  "12": "indent-12",
  "14": "indent-14",
  "16": "indent-16",
  "20": "indent-20",
  "24": "indent-24"
};
var gridAutoFlowMap = {
  row: "grid-flow-row",
  column: "grid-flow-col",
  dense: "grid-flow-dense",
  "row-dense": "grid-flow-row-dense",
  "column-dense": "grid-flow-col-dense"
};
var gridColumnsMap = {
  "1": "grid-cols-1",
  "2": "grid-cols-2",
  "3": "grid-cols-3",
  "4": "grid-cols-4",
  "5": "grid-cols-5",
  "6": "grid-cols-6",
  "7": "grid-cols-7",
  "8": "grid-cols-8",
  "9": "grid-cols-9",
  "10": "grid-cols-10",
  "11": "grid-cols-11",
  "12": "grid-cols-12",
  none: "grid-cols-none",
  subgrid: "grid-cols-subgrid"
};
var gridRowsMap = {
  "1": "grid-rows-1",
  "2": "grid-rows-2",
  "3": "grid-rows-3",
  "4": "grid-rows-4",
  "5": "grid-rows-5",
  "6": "grid-rows-6",
  "7": "grid-rows-7",
  "8": "grid-rows-8",
  "9": "grid-rows-9",
  "10": "grid-rows-10",
  "11": "grid-rows-11",
  "12": "grid-rows-12",
  none: "grid-rows-none",
  subgrid: "grid-rows-subgrid"
};
var borderMap = {
  true: "border border-edge",
  none: "border-0",
  top: "border-t border-edge",
  right: "border-r border-edge",
  bottom: "border-b border-edge",
  left: "border-l border-edge"
};
var semanticBorderColorMap = {
  true: "border-edge",
  transparent: "border-transparent",
  primary: "border-primary",
  muted: "border-edge-muted",
  strong: "border-edge-strong",
  disabled: "border-edge-muted"
};
function mapResponsive(value, mapper) {
  if (value === void 0 || value === null) return "";
  if (typeof value === "object" && !Array.isArray(value)) {
    const classes = [];
    for (const [breakpoint, val] of Object.entries(value)) {
      if (val === void 0) continue;
      const mapped = mapper(val);
      if (mapped) {
        if (breakpoint === "base") {
          classes.push(mapped);
        } else {
          classes.push(`${breakpoint}:${mapped}`);
        }
      }
    }
    return classes.join(" ");
  }
  return mapper(value) || "";
}
function mapDisplay(value) {
  return mapResponsive(value, (v) => displayMap[v] || v);
}
function mapPosition(value) {
  return mapResponsive(value, (v) => positionMap[v]);
}
function mapOverflow(value, axis) {
  const map = axis === "x" ? overflowXMap : axis === "y" ? overflowYMap : overflowMap;
  return mapResponsive(value, (v) => map[v]);
}
function mapCursor(value) {
  return mapResponsive(value, (v) => cursorMap[v]);
}
function mapOpacity(value) {
  return mapResponsive(value, (v) => opacityMap[v]);
}
function mapPointerEvents(value) {
  return mapResponsive(value, (v) => pointerEventsMap[v]);
}
function mapPadding(value, side) {
  const map = side === "x" ? pxMap : side === "y" ? pyMap : side === "t" ? ptMap : side === "r" ? prMap : side === "b" ? pbMap : side === "l" ? plMap : paddingMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapMargin(value, side) {
  const map = side === "x" ? mxMap : side === "y" ? myMap : side === "t" ? mtMap : side === "r" ? mrMap : side === "b" ? mbMap : side === "l" ? mlMap : marginMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapGap(value, axis) {
  const map = axis === "x" ? gapXMap : axis === "y" ? gapYMap : gapMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapSpace(value, axis) {
  const map = axis === "x" ? spaceXMap : spaceYMap;
  return mapResponsive(value, (v) => map[String(v)]);
}
function mapFontSize(value) {
  return mapResponsive(value, (v) => fontSizeMap[v]);
}
function mapHeadingSize(value) {
  return mapResponsive(value, (v) => headingSizeMap[v]);
}
function mapFontWeight(value) {
  return mapResponsive(value, (v) => fontWeightMap[v]);
}
function mapTextColor(value) {
  if (!value) return "";
  if (semanticColorMap[value]) {
    return semanticColorMap[value].text;
  }
  if (isTailwindColor(value)) {
    return getTailwindColorClass(value, "text");
  }
  return "";
}
function mapBackgroundColor(value) {
  if (!value) return "";
  if (semanticColorMap[value]) {
    return semanticColorMap[value].bg;
  }
  if (isTailwindColor(value)) {
    return getTailwindColorClass(value, "bg");
  }
  return "";
}
function mapBorderRadius(value) {
  return mapResponsive(value, (v) => borderRadiusMap[String(v)]);
}
function mapBorderWidth(value) {
  return mapResponsive(value, (v) => borderWidthMap[v]);
}
function mapShadow(value) {
  return mapResponsive(value, (v) => shadowMap[v]);
}
function mapFlexDirection(value) {
  return mapResponsive(value, (v) => flexDirectionMap[v]);
}
function mapFlexWrap(value) {
  return mapResponsive(value, (v) => flexWrapMap[v]);
}
function mapJustifyContent(value) {
  return mapResponsive(value, (v) => justifyContentMap[v]);
}
function mapJustifyItems(value) {
  return mapResponsive(value, (v) => justifyItemsMap[v]);
}
function mapAlignContent(value) {
  return mapResponsive(value, (v) => alignContentMap[v]);
}
function mapAlignItems(value) {
  return mapResponsive(value, (v) => alignItemsMap[v]);
}
function mapAlignSelf(value) {
  return mapResponsive(value, (v) => alignSelfMap[v]);
}
function mapTextAlign(value) {
  return mapResponsive(value, (v) => textAlignMap[v]);
}
function mapTextWrap(value) {
  return mapResponsive(value, (v) => textWrapMap[v]);
}
function mapTextTransform(value) {
  return mapResponsive(value, (v) => textTransformMap[v]);
}
function mapLetterSpacing(value) {
  return mapResponsive(value, (v) => letterSpacingMap[v]);
}
function mapLineHeight(value) {
  return mapResponsive(value, (v) => lineHeightMap[v]);
}
function mapWhitespace(value) {
  return mapResponsive(value, (v) => whitespaceMap[v]);
}
function mapWordBreak(value) {
  return mapResponsive(value, (v) => wordBreakMap[v]);
}
function mapVerticalAlign(value) {
  return mapResponsive(value, (v) => verticalAlignMap[v]);
}
function mapTextDecorationStyle(value) {
  return mapResponsive(value, (v) => textDecorationStyleMap[v]);
}
function mapTextIndent(value) {
  return mapResponsive(value, (v) => textIndentMap[v]);
}
function mapGridAutoFlow(value) {
  return mapResponsive(value, (v) => gridAutoFlowMap[v]);
}
function mapGridColumns(value) {
  return mapResponsive(value, (v) => gridColumnsMap[v]);
}
function mapGridRows(value) {
  return mapResponsive(value, (v) => gridRowsMap[v]);
}
function mapBorder(value) {
  return mapResponsive(value, (v) => borderMap[String(v)]);
}
function mapBorderColor(value) {
  if (!value) return "";
  if (semanticBorderColorMap[value]) {
    return semanticBorderColorMap[value];
  }
  if (isTailwindColor(value)) {
    return getTailwindColorClass(value, "border");
  }
  return "";
}
var semanticCssColorValues = {
  primary: "var(--zen-fg)",
  muted: "var(--zen-fg-muted)",
  disabled: "var(--zen-fg-disabled)"
};
var tailwindColorHex = {
  gray: {
    "50": "#f9fafb",
    "100": "#f3f4f6",
    "200": "#e5e7eb",
    "300": "#d1d5db",
    "400": "#9ca3af",
    "500": "#6b7280",
    "600": "#4b5563",
    "700": "#374151",
    "800": "#1f2937",
    "900": "#111827",
    "950": "#030712"
  },
  slate: {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a",
    "950": "#020617"
  },
  zinc: {
    "50": "#fafafa",
    "100": "#f4f4f5",
    "200": "#e4e4e7",
    "300": "#d4d4d8",
    "400": "#a1a1aa",
    "500": "#71717a",
    "600": "#52525b",
    "700": "#3f3f46",
    "800": "#27272a",
    "900": "#18181b",
    "950": "#09090b"
  },
  neutral: {
    "50": "#fafafa",
    "100": "#f5f5f5",
    "200": "#e5e5e5",
    "300": "#d4d4d4",
    "400": "#a3a3a3",
    "500": "#737373",
    "600": "#525252",
    "700": "#404040",
    "800": "#262626",
    "900": "#171717",
    "950": "#0a0a0a"
  },
  stone: {
    "50": "#fafaf9",
    "100": "#f5f5f4",
    "200": "#e7e5e4",
    "300": "#d6d3d1",
    "400": "#a8a29e",
    "500": "#78716c",
    "600": "#57534e",
    "700": "#44403c",
    "800": "#292524",
    "900": "#1c1917",
    "950": "#0c0a09"
  },
  red: {
    "50": "#fef2f2",
    "100": "#fee2e2",
    "200": "#fecaca",
    "300": "#fca5a5",
    "400": "#f87171",
    "500": "#ef4444",
    "600": "#dc2626",
    "700": "#b91c1c",
    "800": "#991b1b",
    "900": "#7f1d1d",
    "950": "#450a0a"
  },
  orange: {
    "50": "#fff7ed",
    "100": "#ffedd5",
    "200": "#fed7aa",
    "300": "#fdba74",
    "400": "#fb923c",
    "500": "#f97316",
    "600": "#ea580c",
    "700": "#c2410c",
    "800": "#9a3412",
    "900": "#7c2d12",
    "950": "#431407"
  },
  amber: {
    "50": "#fffbeb",
    "100": "#fef3c7",
    "200": "#fde68a",
    "300": "#fcd34d",
    "400": "#fbbf24",
    "500": "#f59e0b",
    "600": "#d97706",
    "700": "#b45309",
    "800": "#92400e",
    "900": "#78350f",
    "950": "#451a03"
  },
  yellow: {
    "50": "#fefce8",
    "100": "#fef9c3",
    "200": "#fef08a",
    "300": "#fde047",
    "400": "#facc15",
    "500": "#eab308",
    "600": "#ca8a04",
    "700": "#a16207",
    "800": "#854d0e",
    "900": "#713f12",
    "950": "#422006"
  },
  lime: {
    "50": "#f7fee7",
    "100": "#ecfccb",
    "200": "#d9f99d",
    "300": "#bef264",
    "400": "#a3e635",
    "500": "#84cc16",
    "600": "#65a30d",
    "700": "#4d7c0f",
    "800": "#3f6212",
    "900": "#365314",
    "950": "#1a2e05"
  },
  green: {
    "50": "#f0fdf4",
    "100": "#dcfce7",
    "200": "#bbf7d0",
    "300": "#86efac",
    "400": "#4ade80",
    "500": "#22c55e",
    "600": "#16a34a",
    "700": "#15803d",
    "800": "#166534",
    "900": "#14532d",
    "950": "#052e16"
  },
  emerald: {
    "50": "#ecfdf5",
    "100": "#d1fae5",
    "200": "#a7f3d0",
    "300": "#6ee7b7",
    "400": "#34d399",
    "500": "#10b981",
    "600": "#059669",
    "700": "#047857",
    "800": "#065f46",
    "900": "#064e3b",
    "950": "#022c22"
  },
  teal: {
    "50": "#f0fdfa",
    "100": "#ccfbf1",
    "200": "#99f6e4",
    "300": "#5eead4",
    "400": "#2dd4bf",
    "500": "#14b8a6",
    "600": "#0d9488",
    "700": "#0f766e",
    "800": "#115e59",
    "900": "#134e4a",
    "950": "#042f2e"
  },
  cyan: {
    "50": "#ecfeff",
    "100": "#cffafe",
    "200": "#a5f3fc",
    "300": "#67e8f9",
    "400": "#22d3ee",
    "500": "#06b6d4",
    "600": "#0891b2",
    "700": "#0e7490",
    "800": "#155e75",
    "900": "#164e63",
    "950": "#083344"
  },
  sky: {
    "50": "#f0f9ff",
    "100": "#e0f2fe",
    "200": "#bae6fd",
    "300": "#7dd3fc",
    "400": "#38bdf8",
    "500": "#0ea5e9",
    "600": "#0284c7",
    "700": "#0369a1",
    "800": "#075985",
    "900": "#0c4a6e",
    "950": "#082f49"
  },
  blue: {
    "50": "#eff6ff",
    "100": "#dbeafe",
    "200": "#bfdbfe",
    "300": "#93c5fd",
    "400": "#60a5fa",
    "500": "#3b82f6",
    "600": "#2563eb",
    "700": "#1d4ed8",
    "800": "#1e40af",
    "900": "#1e3a8a",
    "950": "#172554"
  },
  indigo: {
    "50": "#eef2ff",
    "100": "#e0e7ff",
    "200": "#c7d2fe",
    "300": "#a5b4fc",
    "400": "#818cf8",
    "500": "#6366f1",
    "600": "#4f46e5",
    "700": "#4338ca",
    "800": "#3730a3",
    "900": "#312e81",
    "950": "#1e1b4b"
  },
  violet: {
    "50": "#f5f3ff",
    "100": "#ede9fe",
    "200": "#ddd6fe",
    "300": "#c4b5fd",
    "400": "#a78bfa",
    "500": "#8b5cf6",
    "600": "#7c3aed",
    "700": "#6d28d9",
    "800": "#5b21b6",
    "900": "#4c1d95",
    "950": "#2e1065"
  },
  purple: {
    "50": "#faf5ff",
    "100": "#f3e8ff",
    "200": "#e9d5ff",
    "300": "#d8b4fe",
    "400": "#c084fc",
    "500": "#a855f7",
    "600": "#9333ea",
    "700": "#7e22ce",
    "800": "#6b21a8",
    "900": "#581c87",
    "950": "#3b0764"
  },
  fuchsia: {
    "50": "#fdf4ff",
    "100": "#fae8ff",
    "200": "#f5d0fe",
    "300": "#f0abfc",
    "400": "#e879f9",
    "500": "#d946ef",
    "600": "#c026d3",
    "700": "#a21caf",
    "800": "#86198f",
    "900": "#701a75",
    "950": "#4a044e"
  },
  pink: {
    "50": "#fdf2f8",
    "100": "#fce7f3",
    "200": "#fbcfe8",
    "300": "#f9a8d4",
    "400": "#f472b6",
    "500": "#ec4899",
    "600": "#db2777",
    "700": "#be185d",
    "800": "#9d174d",
    "900": "#831843",
    "950": "#500724"
  },
  rose: {
    "50": "#fff1f2",
    "100": "#ffe4e6",
    "200": "#fecdd3",
    "300": "#fda4af",
    "400": "#fb7185",
    "500": "#f43f5e",
    "600": "#e11d48",
    "700": "#be123c",
    "800": "#9f1239",
    "900": "#881337",
    "950": "#4c0519"
  }
};
function getCssColorValue(value) {
  if (!value) return void 0;
  if (semanticCssColorValues[value]) {
    return semanticCssColorValues[value];
  }
  const parts = value.split("-");
  if (parts.length === 2 && tailwindColors.has(parts[0])) {
    return tailwindColorHex[parts[0]]?.[parts[1]];
  }
  if (tailwindColors.has(value)) {
    return tailwindColorHex[value]?.["500"];
  }
  return void 0;
}
var widthMap = {
  // Spacing scale
  "0": "w-0",
  px: "w-px",
  "0.5": "w-0.5",
  "1": "w-1",
  "1.5": "w-1.5",
  "2": "w-2",
  "2.5": "w-2.5",
  "3": "w-3",
  "3.5": "w-3.5",
  "4": "w-4",
  "5": "w-5",
  "6": "w-6",
  "7": "w-7",
  "8": "w-8",
  "9": "w-9",
  "10": "w-10",
  "11": "w-11",
  "12": "w-12",
  "14": "w-14",
  "16": "w-16",
  "20": "w-20",
  "24": "w-24",
  "28": "w-28",
  "32": "w-32",
  "36": "w-36",
  "40": "w-40",
  "44": "w-44",
  "48": "w-48",
  "52": "w-52",
  "56": "w-56",
  "60": "w-60",
  "64": "w-64",
  "72": "w-72",
  "80": "w-80",
  "96": "w-96",
  // Fractions
  "1/2": "w-1/2",
  "1/3": "w-1/3",
  "2/3": "w-2/3",
  "1/4": "w-1/4",
  "2/4": "w-2/4",
  "3/4": "w-3/4",
  "1/5": "w-1/5",
  "2/5": "w-2/5",
  "3/5": "w-3/5",
  "4/5": "w-4/5",
  "1/6": "w-1/6",
  "2/6": "w-2/6",
  "3/6": "w-3/6",
  "4/6": "w-4/6",
  "5/6": "w-5/6",
  "1/12": "w-1/12",
  "2/12": "w-2/12",
  "3/12": "w-3/12",
  "4/12": "w-4/12",
  "5/12": "w-5/12",
  "6/12": "w-6/12",
  "7/12": "w-7/12",
  "8/12": "w-8/12",
  "9/12": "w-9/12",
  "10/12": "w-10/12",
  "11/12": "w-11/12",
  // Special values
  auto: "w-auto",
  full: "w-full",
  screen: "w-screen",
  svw: "w-svw",
  lvw: "w-lvw",
  dvw: "w-dvw",
  min: "w-min",
  max: "w-max",
  fit: "w-fit"
};
var heightMap = {
  // Spacing scale
  "0": "h-0",
  px: "h-px",
  "0.5": "h-0.5",
  "1": "h-1",
  "1.5": "h-1.5",
  "2": "h-2",
  "2.5": "h-2.5",
  "3": "h-3",
  "3.5": "h-3.5",
  "4": "h-4",
  "5": "h-5",
  "6": "h-6",
  "7": "h-7",
  "8": "h-8",
  "9": "h-9",
  "10": "h-10",
  "11": "h-11",
  "12": "h-12",
  "14": "h-14",
  "16": "h-16",
  "20": "h-20",
  "24": "h-24",
  "28": "h-28",
  "32": "h-32",
  "36": "h-36",
  "40": "h-40",
  "44": "h-44",
  "48": "h-48",
  "52": "h-52",
  "56": "h-56",
  "60": "h-60",
  "64": "h-64",
  "72": "h-72",
  "80": "h-80",
  "96": "h-96",
  // Fractions
  "1/2": "h-1/2",
  "1/3": "h-1/3",
  "2/3": "h-2/3",
  "1/4": "h-1/4",
  "2/4": "h-2/4",
  "3/4": "h-3/4",
  "1/5": "h-1/5",
  "2/5": "h-2/5",
  "3/5": "h-3/5",
  "4/5": "h-4/5",
  "1/6": "h-1/6",
  "2/6": "h-2/6",
  "3/6": "h-3/6",
  "4/6": "h-4/6",
  "5/6": "h-5/6",
  // Special values
  auto: "h-auto",
  full: "h-full",
  screen: "h-screen",
  svh: "h-svh",
  lvh: "h-lvh",
  dvh: "h-dvh",
  min: "h-min",
  max: "h-max",
  fit: "h-fit"
};
var minWidthMap = {
  "0": "min-w-0",
  px: "min-w-px",
  "0.5": "min-w-0.5",
  "1": "min-w-1",
  "1.5": "min-w-1.5",
  "2": "min-w-2",
  "2.5": "min-w-2.5",
  "3": "min-w-3",
  "3.5": "min-w-3.5",
  "4": "min-w-4",
  "5": "min-w-5",
  "6": "min-w-6",
  "7": "min-w-7",
  "8": "min-w-8",
  "9": "min-w-9",
  "10": "min-w-10",
  "11": "min-w-11",
  "12": "min-w-12",
  "14": "min-w-14",
  "16": "min-w-16",
  "20": "min-w-20",
  "24": "min-w-24",
  "28": "min-w-28",
  "32": "min-w-32",
  "36": "min-w-36",
  "40": "min-w-40",
  "44": "min-w-44",
  "48": "min-w-48",
  "52": "min-w-52",
  "56": "min-w-56",
  "60": "min-w-60",
  "64": "min-w-64",
  "72": "min-w-72",
  "80": "min-w-80",
  "96": "min-w-96",
  full: "min-w-full",
  min: "min-w-min",
  max: "min-w-max",
  fit: "min-w-fit"
};
var maxWidthMap = {
  "0": "max-w-0",
  px: "max-w-px",
  "0.5": "max-w-0.5",
  "1": "max-w-1",
  "1.5": "max-w-1.5",
  "2": "max-w-2",
  "2.5": "max-w-2.5",
  "3": "max-w-3",
  "3.5": "max-w-3.5",
  "4": "max-w-4",
  "5": "max-w-5",
  "6": "max-w-6",
  "7": "max-w-7",
  "8": "max-w-8",
  "9": "max-w-9",
  "10": "max-w-10",
  "11": "max-w-11",
  "12": "max-w-12",
  "14": "max-w-14",
  "16": "max-w-16",
  "20": "max-w-20",
  "24": "max-w-24",
  "28": "max-w-28",
  "32": "max-w-32",
  "36": "max-w-36",
  "40": "max-w-40",
  "44": "max-w-44",
  "48": "max-w-48",
  "52": "max-w-52",
  "56": "max-w-56",
  "60": "max-w-60",
  "64": "max-w-64",
  "72": "max-w-72",
  "80": "max-w-80",
  "96": "max-w-96",
  // Container sizes
  none: "max-w-none",
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
  min: "max-w-min",
  max: "max-w-max",
  fit: "max-w-fit",
  prose: "max-w-prose",
  "screen-sm": "max-w-screen-sm",
  "screen-md": "max-w-screen-md",
  "screen-lg": "max-w-screen-lg",
  "screen-xl": "max-w-screen-xl",
  "screen-2xl": "max-w-screen-2xl"
};
var minHeightMap = {
  "0": "min-h-0",
  px: "min-h-px",
  "0.5": "min-h-0.5",
  "1": "min-h-1",
  "1.5": "min-h-1.5",
  "2": "min-h-2",
  "2.5": "min-h-2.5",
  "3": "min-h-3",
  "3.5": "min-h-3.5",
  "4": "min-h-4",
  "5": "min-h-5",
  "6": "min-h-6",
  "7": "min-h-7",
  "8": "min-h-8",
  "9": "min-h-9",
  "10": "min-h-10",
  "11": "min-h-11",
  "12": "min-h-12",
  "14": "min-h-14",
  "16": "min-h-16",
  "20": "min-h-20",
  "24": "min-h-24",
  "28": "min-h-28",
  "32": "min-h-32",
  "36": "min-h-36",
  "40": "min-h-40",
  "44": "min-h-44",
  "48": "min-h-48",
  "52": "min-h-52",
  "56": "min-h-56",
  "60": "min-h-60",
  "64": "min-h-64",
  "72": "min-h-72",
  "80": "min-h-80",
  "96": "min-h-96",
  full: "min-h-full",
  screen: "min-h-screen",
  svh: "min-h-svh",
  lvh: "min-h-lvh",
  dvh: "min-h-dvh",
  min: "min-h-min",
  max: "min-h-max",
  fit: "min-h-fit"
};
var maxHeightMap = {
  "0": "max-h-0",
  px: "max-h-px",
  "0.5": "max-h-0.5",
  "1": "max-h-1",
  "1.5": "max-h-1.5",
  "2": "max-h-2",
  "2.5": "max-h-2.5",
  "3": "max-h-3",
  "3.5": "max-h-3.5",
  "4": "max-h-4",
  "5": "max-h-5",
  "6": "max-h-6",
  "7": "max-h-7",
  "8": "max-h-8",
  "9": "max-h-9",
  "10": "max-h-10",
  "11": "max-h-11",
  "12": "max-h-12",
  "14": "max-h-14",
  "16": "max-h-16",
  "20": "max-h-20",
  "24": "max-h-24",
  "28": "max-h-28",
  "32": "max-h-32",
  "36": "max-h-36",
  "40": "max-h-40",
  "44": "max-h-44",
  "48": "max-h-48",
  "52": "max-h-52",
  "56": "max-h-56",
  "60": "max-h-60",
  "64": "max-h-64",
  "72": "max-h-72",
  "80": "max-h-80",
  "96": "max-h-96",
  none: "max-h-none",
  full: "max-h-full",
  screen: "max-h-screen",
  svh: "max-h-svh",
  lvh: "max-h-lvh",
  dvh: "max-h-dvh",
  min: "max-h-min",
  max: "max-h-max",
  fit: "max-h-fit"
};
function mapWidth(value) {
  return mapResponsive(value, (v) => widthMap[v]);
}
function mapHeight(value) {
  return mapResponsive(value, (v) => heightMap[v]);
}
function mapMinWidth(value) {
  return mapResponsive(value, (v) => minWidthMap[v]);
}
function mapMaxWidth(value) {
  return mapResponsive(value, (v) => maxWidthMap[v]);
}
function mapMinHeight(value) {
  return mapResponsive(value, (v) => minHeightMap[v]);
}
function mapMaxHeight(value) {
  return mapResponsive(value, (v) => maxHeightMap[v]);
}
function isWidthPreset(value) {
  return value in widthMap;
}
function isHeightPreset(value) {
  return value in heightMap;
}
function isMinWidthPreset(value) {
  return value in minWidthMap;
}
function isMaxWidthPreset(value) {
  return value in maxWidthMap;
}
function isMinHeightPreset(value) {
  return value in minHeightMap;
}
function isMaxHeightPreset(value) {
  return value in maxHeightMap;
}
function addStatePrefix(prefix, className) {
  if (!className) return "";
  return className.split(" ").filter(Boolean).map((cls) => `${prefix}:${cls}`).join(" ");
}
function mapStateStyles(prefix, styles) {
  if (!styles) return "";
  const classes = [];
  if (styles.color !== void 0) {
    const colorClass = mapTextColor(
      typeof styles.color === "boolean" ? "true" : String(styles.color)
    );
    if (colorClass) classes.push(addStatePrefix(prefix, colorClass));
  }
  if (styles.backgroundColor !== void 0) {
    const bgClass = mapBackgroundColor(
      typeof styles.backgroundColor === "boolean" ? "true" : String(styles.backgroundColor)
    );
    if (bgClass) classes.push(addStatePrefix(prefix, bgClass));
  }
  if (styles.borderColor !== void 0) {
    const borderClass = mapBorderColor(
      typeof styles.borderColor === "boolean" ? "true" : String(styles.borderColor)
    );
    if (borderClass) classes.push(addStatePrefix(prefix, borderClass));
  }
  if (styles.opacity !== void 0) {
    const opacityClass = mapOpacity(styles.opacity);
    if (opacityClass) classes.push(addStatePrefix(prefix, opacityClass));
  }
  return classes.join(" ");
}
function Accordion({
  className,
  children,
  type,
  allowsMultipleExpanded,
  expandedKeys,
  defaultExpandedKeys,
  onExpandedChange,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    accordion.Accordion.Root,
    {
      ...props,
      "data-slot": "accordion",
      multiple: type === "multiple" || allowsMultipleExpanded,
      value: expandedKeys ? Array.from(expandedKeys) : void 0,
      defaultValue: defaultExpandedKeys ? Array.from(defaultExpandedKeys) : void 0,
      onValueChange: (value) => onExpandedChange?.(new Set(value)),
      className: cn.cn("flex flex-col items-start w-full gap-2 text-sm", className),
      children
    }
  );
}
function AccordionTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(accordion.Accordion.Header, { "data-slot": "accordion-header", className: "m-0 flex text-[length:inherit]", children: /* @__PURE__ */ jsxRuntime.jsxs(
    accordion.Accordion.Trigger,
    {
      ...props,
      "data-slot": "accordion-trigger",
      className: cn.cn(
        "flex flex-1 items-start justify-between gap-4 rounded py-4",
        "text-left text-sm font-medium cursor-pointer outline-none transition-all",
        "hover:underline",
        "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-disabled:pointer-events-none data-disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "[&[data-panel-open]>svg]:rotate-180",
        className
      ),
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronDown, { className: "text-fg-muted translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function AccordionPanel({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    accordion.Accordion.Panel,
    {
      ...props,
      "data-slot": "accordion-panel",
      className: cn.cn(
        "overflow-hidden transition-all duration-300 ease-out",
        "h-(--accordion-panel-height) data-[ending-style]:h-0 data-[starting-style]:h-0",
        className
      ),
      children
    }
  );
}
var AccordionContent = AccordionPanel;
function isAccordionPart(child) {
  return react.isValidElement(child) && (child.type === AccordionTrigger || child.type === AccordionPanel || child.type === AccordionContent);
}
function AccordionItem({
  id,
  value,
  isDisabled,
  className,
  children,
  ...props
}) {
  const items = react.Children.toArray(children);
  const usesParts = items.some(isAccordionPart);
  const [trigger, ...rest] = items;
  return /* @__PURE__ */ jsxRuntime.jsx(
    accordion.Accordion.Item,
    {
      ...props,
      "data-slot": "accordion-item",
      value: value || id,
      disabled: isDisabled,
      className: cn.cn("w-full cursor-pointer group", className),
      children: usesParts ? children : /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(AccordionTrigger, { className: "py-2 font-bold hover:no-underline", children: trigger }),
        /* @__PURE__ */ jsxRuntime.jsx(AccordionPanel, { children: rest })
      ] })
    }
  );
}
var button = tailwindVariants.tv({
  base: [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0",
    "font-medium rounded border border-transparent cursor-pointer",
    "transition-all relative no-underline outline-none",
    "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-invalid:border-status-error aria-invalid:ring-status-error/20",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  ],
  variants: {
    variant: {
      default: [
        "bg-interactive text-fg",
        "hover:bg-interactive-hover",
        "active:bg-interactive-pressed"
      ],
      primary: ["bg-primary text-primary-fg", "hover:opacity-90", "active:opacity-80"],
      outline: [
        "bg-surface border-edge shadow-xs text-fg",
        "hover:border-edge-strong",
        "active:bg-surface-raised",
        "disabled:bg-surface-disabled"
      ],
      quiet: ["bg-transparent", "hover:bg-interactive", "active:bg-interactive-hover"],
      danger: ["bg-status-error text-white", "hover:opacity-90", "active:opacity-80"],
      link: ["bg-transparent text-primary underline-offset-4", "hover:underline"],
      zero: ["bg-transparent border-0", "hover:bg-transparent", "active:bg-transparent"]
    },
    size: {
      xs: "h-6 gap-1 px-2 text-xs",
      sm: "h-8 gap-1.5 px-3 text-sm has-[>svg]:px-2.5",
      md: "h-9 px-4 py-2 text-sm has-[>svg]:px-3",
      lg: "h-10 px-6 text-base has-[>svg]:px-4",
      xl: "h-11 px-8 text-lg has-[>svg]:px-6",
      icon: "size-9",
      "icon-xs": "size-6",
      "icon-sm": "size-8",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
var inputField = tailwindVariants.tv({
  base: [
    "relative flex items-center",
    "h-9 text-base md:text-sm rounded border border-edge bg-surface shadow-xs",
    "text-fg transition-[color,box-shadow,border-color]",
    // Wrapper around a native control (TextField, SearchField, ...)
    "focus-within:border-focus-ring focus-within:ring-[3px] focus-within:ring-focus-ring/50",
    "has-[input:read-only]:bg-surface-raised has-[textarea:read-only]:bg-surface-raised",
    "has-[:disabled]:bg-surface-disabled has-[:disabled]:opacity-50",
    "has-[[aria-invalid=true]]:border-status-error has-[[aria-invalid=true]]:ring-status-error/20",
    // Used directly on a trigger button (Select, DatePicker)
    "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
    "disabled:bg-surface-disabled disabled:opacity-50 disabled:cursor-not-allowed",
    "data-disabled:bg-surface-disabled data-disabled:opacity-50 data-disabled:cursor-not-allowed",
    "aria-invalid:border-status-error aria-invalid:ring-status-error/20"
  ],
  variants: {
    variant: {
      default: "",
      quiet: "h-auto rounded-none border-transparent bg-transparent shadow-none focus-within:ring-0 focus-within:border-b-edge focus-within:border-x-transparent focus-within:border-t-transparent"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var listItem = tailwindVariants.tv({
  base: [
    "flex items-center justify-between",
    "gap-3 text-sm py-2 px-3 min-w-[120px]",
    "cursor-pointer outline-none rounded",
    "text-fg",
    "data-highlighted:bg-interactive",
    "focus-visible:bg-interactive",
    "data-disabled:text-fg-disabled data-disabled:cursor-default",
    "data-selected:font-semibold"
  ]
});
tailwindVariants.tv({
  base: ["zen-layer-modal fixed inset-0", "bg-black/80 flex items-center justify-center"]
});
tailwindVariants.tv({
  base: "relative",
  variants: {
    position: {
      center: "",
      fullscreen: "w-dvw h-dvh rounded-none"
    }
  },
  defaultVariants: {
    position: "center"
  }
});
tailwindVariants.tv({
  base: ["bg-surface-overlay border border-edge-muted rounded-lg shadow-lg p-4"],
  variants: {
    placement: {
      top: "[--tw-translate:translateY(8px)]",
      bottom: "[--tw-translate:translateY(-8px)]",
      left: "[--tw-translate:translateX(8px)]",
      right: "[--tw-translate:translateX(-8px)]"
    }
  }
});
var tooltip = tailwindVariants.tv({
  base: ["bg-surface-inverted text-surface text-sm px-2 py-1 rounded"]
});
tailwindVariants.tv({
  slots: {
    root: [
      "group flex items-center gap-3",
      "text-sm cursor-pointer",
      "data-disabled:text-fg-disabled data-disabled:cursor-default"
    ],
    box: [
      "flex items-center justify-center",
      "w-5 h-5 rounded border border-edge bg-surface",
      "shadow-sm transition-colors",
      "group-data-[checked]:bg-primary group-data-[checked]:border-primary group-data-[checked]:text-primary-fg",
      "group-indeterminate:bg-surface group-indeterminate:text-fg",
      "group-disabled:bg-surface-disabled",
      "group-aria-invalid:border-status-error group-aria-invalid:ring-status-error/20",
      "group-focus-visible:border-focus-ring group-focus-visible:ring-[3px] group-focus-visible:ring-focus-ring/50"
    ],
    icon: [
      "hidden",
      "group-data-[checked]:flex",
      "group-indeterminate:flex",
      "items-center justify-center"
    ]
  }
});
tailwindVariants.tv({
  slots: {
    root: [
      "group flex items-center gap-3",
      "text-sm cursor-pointer",
      "data-disabled:opacity-50 data-disabled:cursor-default"
    ],
    track: [
      "flex items-center w-10 h-6 px-1 rounded-full",
      "bg-interactive",
      "transition-colors",
      "group-data-[checked]:bg-primary",
      "group-focus-visible:border-focus-ring group-focus-visible:ring-[3px] group-focus-visible:ring-focus-ring/50"
    ],
    thumb: [
      "w-4 h-4 rounded-full",
      "bg-surface shadow-sm",
      "transition-transform",
      "group-data-[checked]:translate-x-4"
    ]
  }
});
tailwindVariants.tv({
  slots: {
    root: "flex flex-col",
    list: ["flex gap-1 border-b border-edge-muted"],
    tab: [
      "px-4 py-2 text-sm font-medium cursor-pointer",
      "text-fg-muted outline-none",
      "border-b-2 border-transparent -mb-px",
      "hover:text-fg",
      "data-active:text-fg data-active:border-primary",
      "disabled:text-fg-disabled disabled:cursor-default",
      "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50"
    ],
    panel: "py-4"
  }
});
tailwindVariants.tv({
  base: "text-fg",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl"
    },
    color: {
      default: "",
      muted: "text-fg-muted",
      disabled: "text-fg-disabled"
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black"
    }
  },
  defaultVariants: {
    size: "sm"
  }
});
tailwindVariants.tv({
  base: "font-semibold text-fg",
  variants: {
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl"
    }
  },
  defaultVariants: {
    size: "2xl"
  }
});
var alert = tailwindVariants.tv({
  base: [
    "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border border-edge-muted px-4 py-3 text-sm",
    "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3",
    "[&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current"
  ],
  variants: {
    variant: {
      default: "bg-surface text-fg",
      danger: [
        "border-status-error bg-surface text-status-error",
        "*:data-[slot=alert-description]:text-status-error/90"
      ]
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var emptyMedia = tailwindVariants.tv({
  base: "flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "bg-surface-raised text-fg flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
tailwindVariants.tv({
  base: "inline-flex items-center gap-2",
  slots: {
    dot: "w-2 h-2 rounded-full",
    label: "text-sm"
  },
  variants: {
    color: {
      gray: { dot: "bg-content-muted" },
      green: { dot: "bg-status-success" },
      yellow: { dot: "bg-status-warning" },
      red: { dot: "bg-status-error" },
      blue: { dot: "bg-status-info" }
    }
  },
  defaultVariants: {
    color: "gray"
  }
});
var toast = tailwindVariants.tv({
  base: [
    "flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg",
    "bg-surface-overlay",
    "border border-edge-muted",
    "text-sm"
  ],
  variants: {
    variant: {
      default: "",
      success: "bg-status-success-bg text-status-success-fg",
      error: "bg-status-error-bg text-status-error-fg"
    }
  }
});
var badge = tailwindVariants.tv({
  base: [
    "inline-flex items-center gap-1 rounded-full font-medium whitespace-nowrap",
    "border border-transparent"
  ],
  variants: {
    variant: {
      default: "bg-interactive text-fg",
      primary: "bg-primary text-primary-fg",
      outline: "bg-transparent border-edge text-fg",
      success: "bg-status-success-bg text-status-success-fg",
      warning: "bg-status-warning-bg text-status-warning-fg",
      error: "bg-status-error-bg text-status-error-fg",
      info: "bg-status-info-bg text-status-info-fg",
      // Tailwind base color palette (soft tint + readable text, dark-mode aware)
      slate: "bg-slate-50 text-slate-900 dark:bg-slate-500/20 dark:text-slate-100",
      gray: "bg-gray-50 text-gray-900 dark:bg-gray-500/20 dark:text-gray-100",
      zinc: "bg-zinc-50 text-zinc-900 dark:bg-zinc-500/20 dark:text-zinc-100",
      neutral: "bg-neutral-50 text-neutral-900 dark:bg-neutral-500/20 dark:text-neutral-100",
      stone: "bg-stone-50 text-stone-900 dark:bg-stone-500/20 dark:text-stone-100",
      red: "bg-red-50 text-red-900 dark:bg-red-500/20 dark:text-red-100",
      orange: "bg-orange-50 text-orange-900 dark:bg-orange-500/20 dark:text-orange-100",
      amber: "bg-amber-50 text-amber-900 dark:bg-amber-500/20 dark:text-amber-100",
      yellow: "bg-yellow-50 text-yellow-900 dark:bg-yellow-500/20 dark:text-yellow-100",
      lime: "bg-lime-50 text-lime-900 dark:bg-lime-500/20 dark:text-lime-100",
      green: "bg-green-50 text-green-900 dark:bg-green-500/20 dark:text-green-100",
      emerald: "bg-emerald-50 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-100",
      teal: "bg-teal-50 text-teal-900 dark:bg-teal-500/20 dark:text-teal-100",
      cyan: "bg-cyan-50 text-cyan-900 dark:bg-cyan-500/20 dark:text-cyan-100",
      sky: "bg-sky-50 text-sky-900 dark:bg-sky-500/20 dark:text-sky-100",
      blue: "bg-blue-50 text-blue-900 dark:bg-blue-500/20 dark:text-blue-100",
      indigo: "bg-indigo-50 text-indigo-900 dark:bg-indigo-500/20 dark:text-indigo-100",
      violet: "bg-violet-50 text-violet-900 dark:bg-violet-500/20 dark:text-violet-100",
      purple: "bg-purple-50 text-purple-900 dark:bg-purple-500/20 dark:text-purple-100",
      fuchsia: "bg-fuchsia-50 text-fuchsia-900 dark:bg-fuchsia-500/20 dark:text-fuchsia-100",
      pink: "bg-pink-50 text-pink-900 dark:bg-pink-500/20 dark:text-pink-100",
      rose: "bg-rose-50 text-rose-900 dark:bg-rose-500/20 dark:text-rose-100"
    },
    size: {
      sm: "text-xs px-2 py-0.5",
      md: "text-sm px-2.5 py-0.5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
var avatar = tailwindVariants.tv({
  slots: {
    root: [
      "relative inline-flex items-center justify-center shrink-0 select-none",
      "overflow-hidden rounded-full align-middle bg-interactive"
    ],
    image: "size-full object-cover",
    fallback: ["flex size-full items-center justify-center", "font-medium text-fg uppercase"]
  },
  variants: {
    size: {
      xs: {
        root: "size-6",
        fallback: "text-xs"
      },
      sm: {
        root: "size-8",
        fallback: "text-sm"
      },
      md: {
        root: "size-10",
        fallback: "text-sm"
      },
      lg: {
        root: "size-12",
        fallback: "text-lg"
      },
      xl: {
        root: "size-16",
        fallback: "text-xl"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var tag = tailwindVariants.tv({
  slots: {
    base: [
      "inline-flex items-center gap-1 px-2 py-0.5 rounded text-sm",
      "cursor-default outline-none",
      "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50"
    ],
    removeButton: [
      "flex items-center justify-center rounded-full p-0.5 -mr-1",
      "cursor-pointer outline-none",
      "hover:bg-black/10 dark:hover:bg-white/10",
      "active:bg-black/20 dark:active:bg-white/20"
    ]
  },
  variants: {
    variant: {
      default: {
        base: "bg-interactive text-fg"
      },
      outline: {
        base: "bg-transparent border border-edge text-fg"
      },
      primary: {
        base: "bg-primary text-primary-fg"
      }
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var Alert = react.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "alert",
      role: "alert",
      className: alert({ variant, className })
    }
  )
);
Alert.displayName = "Alert";
var AlertTitle = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "alert-title",
      className: cn.cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)
    }
  )
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "alert-description",
      className: cn.cn(
        "col-start-2 grid justify-items-start gap-1 text-sm text-fg-muted [&_p]:leading-relaxed",
        className
      )
    }
  )
);
AlertDescription.displayName = "AlertDescription";
function Button({
  variant,
  size = "md",
  render: renderProp,
  href,
  target,
  rel,
  preventFocusOnPress = false,
  nativeButton,
  isDisabled,
  disabled,
  onPress,
  onClick,
  onMouseDown,
  className,
  children,
  ...props
}) {
  const buttonClassName = button({ variant, size, className });
  const render = renderProp ?? (href ? /* @__PURE__ */ jsxRuntime.jsx(
    "a",
    {
      href,
      target,
      rel: rel ?? (target === "_blank" ? "noreferrer" : void 0)
    }
  ) : void 0);
  const isNativeButton = nativeButton ?? (render === void 0 || react.isValidElement(render) && render.type === "button");
  const handleClick = (event) => {
    onClick?.(event);
    if (!event.defaultPrevented) {
      onPress?.(event);
    }
  };
  const handleMouseDown = (event) => {
    onMouseDown?.(event);
    if (preventFocusOnPress && !event.defaultPrevented) {
      event.preventDefault();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    button$1.Button,
    {
      "data-slot": "button",
      ...props,
      "data-variant": variant ?? "default",
      "data-size": size,
      render,
      nativeButton: isNativeButton,
      disabled: isDisabled ?? disabled,
      className: buttonClassName,
      onClick: handleClick,
      onMouseDown: handleMouseDown,
      children
    }
  );
}
function resolveRender(render, props, defaultElement, state) {
  if (!render) {
    return defaultElement;
  }
  if (typeof render === "function") {
    return render(props, state ?? {});
  }
  if (react.isValidElement(render)) {
    const renderProps = render.props;
    const merged = mergeProps.mergeProps(props, renderProps);
    const children = renderProps.children !== void 0 ? renderProps.children : props.children;
    const className = [props.className, renderProps.className].filter(Boolean).join(" ") || void 0;
    return react.cloneElement(render, { ...merged, children, className });
  }
  return defaultElement;
}
function toStringValue(value) {
  if (value === void 0 || value === null) return void 0;
  if (typeof value === "boolean") return value ? "true" : void 0;
  return String(value);
}
var Box = react.forwardRef(function Box2({
  display,
  color,
  backgroundColor,
  border,
  borderWidth,
  borderColor,
  borderRadius,
  shadow,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  spaceX,
  spaceY,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  position,
  textAlign,
  top,
  right,
  bottom,
  left,
  overflow,
  overflowX,
  overflowY,
  cursor,
  opacity,
  pointerEvents,
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
  justifyItems,
  justifySelf,
  flexBasis,
  flexGrow,
  flexShrink,
  fill,
  gridArea,
  gridRow,
  gridColumn,
  order,
  zIndex,
  theme,
  hover,
  focus,
  active,
  as = "div",
  render,
  className,
  style,
  children,
  ...props
}, ref) {
  const Component = as;
  const getSizingStyle = (value, isPreset) => {
    if (!value) return void 0;
    if (typeof value === "string" && !isPreset(value)) return value;
    return void 0;
  };
  const classes = cn.cn(
    mapDisplay(display),
    mapTextColor(toStringValue(color)),
    mapBackgroundColor(toStringValue(backgroundColor)),
    mapBorder(border),
    mapBorderWidth(borderWidth),
    mapBorderColor(toStringValue(borderColor)),
    mapBorderRadius(borderRadius),
    mapShadow(shadow),
    mapPadding(padding),
    mapPadding(paddingX, "x"),
    mapPadding(paddingY, "y"),
    mapPadding(paddingTop, "t"),
    mapPadding(paddingRight, "r"),
    mapPadding(paddingBottom, "b"),
    mapPadding(paddingLeft, "l"),
    mapMargin(margin),
    mapMargin(marginX, "x"),
    mapMargin(marginY, "y"),
    mapMargin(marginTop, "t"),
    mapMargin(marginRight, "r"),
    mapMargin(marginBottom, "b"),
    mapMargin(marginLeft, "l"),
    mapSpace(spaceX, "x"),
    mapSpace(spaceY, "y"),
    mapWidth(width),
    mapMinWidth(minWidth),
    mapMaxWidth(maxWidth),
    mapHeight(height),
    mapMinHeight(minHeight),
    mapMaxHeight(maxHeight),
    mapPosition(position),
    mapTextAlign(textAlign),
    mapOverflow(overflow),
    mapOverflow(overflowX, "x"),
    mapOverflow(overflowY, "y"),
    mapCursor(cursor),
    mapOpacity(opacity),
    mapPointerEvents(pointerEvents),
    mapAlignContent(alignContent),
    mapAlignItems(alignItems),
    mapAlignSelf(alignSelf),
    mapJustifyContent(justifyContent),
    mapJustifyItems(justifyItems),
    theme && `${theme}-theme`,
    mapStateStyles("hover", hover),
    mapStateStyles("focus", focus),
    mapStateStyles("active", active),
    className
  );
  const widthStyle = getSizingStyle(width, isWidthPreset);
  const minWidthStyle = getSizingStyle(minWidth, isMinWidthPreset);
  const maxWidthStyle = getSizingStyle(maxWidth, isMaxWidthPreset);
  const heightStyle = getSizingStyle(height, isHeightPreset);
  const minHeightStyle = getSizingStyle(minHeight, isMinHeightPreset);
  const maxHeightStyle = getSizingStyle(maxHeight, isMaxHeightPreset);
  const inlineStyles = {
    ...style,
    ...widthStyle && { width: widthStyle },
    ...minWidthStyle && { minWidth: minWidthStyle },
    ...maxWidthStyle && { maxWidth: maxWidthStyle },
    ...heightStyle && { height: heightStyle },
    ...minHeightStyle && { minHeight: minHeightStyle },
    ...maxHeightStyle && { maxHeight: maxHeightStyle },
    ...top && { top },
    ...right && { right },
    ...bottom && { bottom },
    ...left && { left },
    ...flexBasis && { flexBasis },
    ...flexGrow !== void 0 && { flexGrow },
    ...flexShrink !== void 0 && { flexShrink },
    ...fill && { flex: 1 },
    ...gridArea && { gridArea },
    ...gridRow && { gridRow },
    ...gridColumn && { gridColumn },
    ...order !== void 0 && { order },
    ...zIndex !== void 0 && { zIndex },
    ...justifySelf && { justifySelf }
  };
  const hasInlineStyles = Object.keys(inlineStyles).length > (style ? Object.keys(style).length : 0);
  const renderProps = {
    ...props,
    className: classes || void 0,
    style: hasInlineStyles || style ? inlineStyles : void 0,
    children
  };
  const defaultElement = /* @__PURE__ */ jsxRuntime.jsx(
    Component,
    {
      ref,
      ...props,
      className: classes || void 0,
      style: hasInlineStyles || style ? inlineStyles : void 0,
      children
    }
  );
  return resolveRender(render, renderProps, defaultElement);
});
function Flexbox({
  display = "flex",
  direction,
  wrap,
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  gap,
  gapX,
  gapY,
  className,
  children,
  ...props
}) {
  const classes = cn.cn(
    mapDisplay(display),
    mapFlexDirection(direction),
    mapFlexWrap(wrap),
    mapJustifyContent(justifyContent),
    mapJustifyItems(justifyItems),
    mapAlignContent(alignContent),
    mapAlignItems(alignItems),
    mapGap(gap),
    mapGap(gapX, "x"),
    mapGap(gapY, "y"),
    className
  );
  return /* @__PURE__ */ jsxRuntime.jsx(Box, { ...props, className: classes, children });
}
function Column({ reverse, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Flexbox, { ...props, direction: reverse ? "column-reverse" : "column", children });
}
function Text({
  color,
  size = "sm",
  weight,
  align,
  spacing,
  lineHeight,
  wrap,
  whitespace,
  wordBreak,
  transform,
  indent,
  verticalAlign,
  truncate,
  italic,
  underline,
  strikethrough,
  decorationStyle,
  decorationColor,
  as = "span",
  render,
  className,
  children,
  ...props
}) {
  const Component = as;
  const colorStr = color === true ? "true" : color;
  const decorationColorStr = decorationColor === true ? "true" : decorationColor;
  const classes = cn.cn(
    mapFontSize(size),
    mapFontWeight(weight),
    mapTextAlign(align),
    mapLetterSpacing(spacing),
    mapLineHeight(lineHeight),
    mapTextWrap(wrap),
    mapWhitespace(whitespace),
    mapWordBreak(wordBreak),
    mapTextTransform(transform),
    mapTextIndent(indent),
    mapVerticalAlign(verticalAlign),
    mapTextColor(colorStr),
    truncate && "truncate",
    italic && "italic",
    underline && "underline",
    strikethrough && "line-through",
    mapTextDecorationStyle(decorationStyle),
    decorationColorStr && `decoration-${decorationColorStr}`,
    className
  );
  const renderProps = {
    ...props,
    className: classes,
    children
  };
  const defaultElement = /* @__PURE__ */ jsxRuntime.jsx(Component, { ...props, className: classes, children });
  return resolveRender(render, renderProps, defaultElement);
}
function Heading({
  size = "2xl",
  spacing = "tight",
  weight = "semibold",
  as = "h2",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Text,
    {
      ...props,
      as,
      spacing,
      weight,
      className: cn.cn(mapHeadingSize(size), className),
      children
    }
  );
}
var OverlayContext = react.createContext({
  close: () => void 0,
  kind: "dialog"
});
var OverlayTriggerNestedContext = react.createContext(false);
function useInsideOverlayTrigger() {
  return react.useContext(OverlayTriggerNestedContext);
}
var MenuPrimitiveContext = react.createContext(null);
var MenubarContext = react.createContext(false);
function useOverlayTrigger() {
  return react.useContext(OverlayContext);
}
function OverlayContentProvider({
  children,
  close,
  kind
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(OverlayContext.Provider, { value: { close, kind }, children });
}
var MAX_OVERLAY_SCAN_DEPTH = 12;
function readOverlayType(node) {
  try {
    return node?.type?.zenOverlayType;
  } catch {
    return void 0;
  }
}
function getChildren(element) {
  try {
    return element?.props?.children;
  } catch {
    return void 0;
  }
}
function scanOverlayKind(node, depth) {
  if (depth > MAX_OVERLAY_SCAN_DEPTH) {
    return void 0;
  }
  let found;
  for (const child of react.Children.toArray(node)) {
    if (!react.isValidElement(child)) {
      continue;
    }
    const own = readOverlayType(child);
    if (own === "alert-dialog") {
      return "alert-dialog";
    }
    const nested = scanOverlayKind(getChildren(child), depth + 1);
    if (nested === "alert-dialog") {
      return "alert-dialog";
    }
    found ??= own ?? nested;
  }
  return found;
}
function getOverlayKind(element) {
  try {
    if (!element || !react.isValidElement(element)) {
      return void 0;
    }
    const own = readOverlayType(element);
    if (own === "alert-dialog") {
      return "alert-dialog";
    }
    const nested = scanOverlayKind(getChildren(element), 0);
    if (nested === "alert-dialog") {
      return "alert-dialog";
    }
    return own ?? nested;
  } catch {
    return void 0;
  }
}
function unwrapMenuContent(element) {
  if (!element) {
    return element;
  }
  return getOverlayKind(element) === "popover" ? element.props.children : element;
}
function DialogTrigger({
  children,
  overlayType,
  isOpen,
  defaultOpen,
  onOpenChange
}) {
  const items = react.Children.toArray(children);
  const trigger = items[0];
  const target = items[1];
  const targetOpen = target?.props?.isOpen;
  const targetOpenChange = target?.props?.onOpenChange;
  const targetNonModal = target?.props?.isNonModal;
  const targetTriggerRef = target?.props?.triggerRef;
  const kind = overlayType ?? getOverlayKind(target) ?? "dialog";
  const [uncontrolledOpen, setUncontrolledOpen] = react.useState(defaultOpen ?? false);
  const controlledOpen = isOpen ?? targetOpen;
  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = (nextOpen) => {
    if (controlledOpen === void 0) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
    targetOpenChange?.(nextOpen);
  };
  const content = /* @__PURE__ */ jsxRuntime.jsx(OverlayTriggerNestedContext.Provider, { value: true, children: /* @__PURE__ */ jsxRuntime.jsx(OverlayContentProvider, { close: () => setOpen(false), kind, children: target }) });
  if (kind === "popover") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      popover.Popover.Root,
      {
        open,
        modal: targetNonModal === void 0 ? void 0 : !targetNonModal,
        onOpenChange: setOpen,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            popover.Popover.Trigger,
            {
              "data-slot": "popover-trigger",
              ref: targetTriggerRef,
              render: trigger
            }
          ),
          content
        ]
      }
    );
  }
  if (kind === "alert-dialog") {
    return /* @__PURE__ */ jsxRuntime.jsxs(alertDialog.AlertDialog.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntime.jsx(alertDialog.AlertDialog.Trigger, { "data-slot": "alert-dialog-trigger", render: trigger }),
      content
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(dialog.Dialog.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Trigger, { "data-slot": "dialog-trigger", render: trigger }),
    content
  ] });
}
function TooltipTrigger({
  children,
  delay,
  closeDelay,
  isOpen,
  defaultOpen,
  onOpenChange,
  isDisabled
}) {
  const items = react.Children.toArray(children);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    tooltip$1.Tooltip.Root,
    {
      ...isOpen === void 0 ? { defaultOpen } : { open: isOpen },
      disabled: isDisabled,
      onOpenChange,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          tooltip$1.Tooltip.Trigger,
          {
            "data-slot": "tooltip-trigger",
            delay,
            closeDelay,
            render: items[0]
          }
        ),
        items[1]
      ]
    }
  );
}
function MenuTrigger({ children, isOpen, defaultOpen, onOpenChange }) {
  const items = react.Children.toArray(children);
  const content = unwrapMenuContent(items[1]);
  const [uncontrolledOpen, setUncontrolledOpen] = react.useState(defaultOpen ?? false);
  const open = isOpen ?? uncontrolledOpen;
  const setOpen = (nextOpen) => {
    if (isOpen === void 0) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(menu.Menu.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsxRuntime.jsx(menu.Menu.Trigger, { "data-slot": "menu-trigger", render: items[0] }),
    /* @__PURE__ */ jsxRuntime.jsx(OverlayTriggerNestedContext.Provider, { value: true, children: /* @__PURE__ */ jsxRuntime.jsx(MenuPrimitiveContext.Provider, { value: "menu", children: content }) })
  ] });
}
function FileTrigger({
  children,
  acceptedFileTypes,
  allowsMultiple,
  onSelect
}) {
  const inputRef = react.useRef(null);
  const child = children;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    react.isValidElement(child) && react.cloneElement(child, {
      onClick: (event) => {
        child.props.onClick?.(event);
        if (!event.defaultPrevented) {
          const input = inputRef.current;
          if (input) {
            input.value = "";
            input.click();
          }
        }
      }
    }),
    /* @__PURE__ */ jsxRuntime.jsx(
      "input",
      {
        ref: inputRef,
        "data-slot": "file-trigger-input",
        className: "sr-only",
        type: "file",
        hidden: true,
        tabIndex: -1,
        "aria-hidden": "true",
        accept: acceptedFileTypes?.join(","),
        multiple: allowsMultiple,
        onChange: (event) => onSelect?.(event.target.files)
      }
    )
  ] });
}
function Focusable({ children }) {
  const element = children;
  return react.cloneElement(element, { tabIndex: element.props.tabIndex ?? 0 });
}
function Pressable({
  children,
  onPress
}) {
  const child = children;
  return react.cloneElement(child, {
    onClick: (event) => {
      child.props.onClick?.(event);
      if (!event.defaultPrevented) {
        onPress?.(event);
      }
    }
  });
}
function RouterProvider({ children }) {
  return children;
}
var warnedMissingLabel = false;
function warnMissingLabel() {
  if (process.env.NODE_ENV !== "production" && !warnedMissingLabel) {
    warnedMissingLabel = true;
    console.warn(
      "[react-zen] <Dialog> is missing an accessible name. Pass a `title` or an `aria-label`."
    );
  }
}
function Dialog({ title, description, children, className, ...props }) {
  const { close, kind } = useOverlayTrigger();
  const ariaLabel = props["aria-label"];
  if (!title && !ariaLabel && !props["aria-labelledby"]) {
    warnMissingLabel();
  }
  const titleContent = title ?? ariaLabel;
  const titleClassName = title ? void 0 : "sr-only";
  const heading2 = /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "xl", children: titleContent });
  const primitiveTitle = !titleContent ? null : kind === "alert-dialog" ? /* @__PURE__ */ jsxRuntime.jsx(alertDialog.AlertDialog.Title, { className: titleClassName, render: heading2 }) : kind === "dialog" ? /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Title, { className: titleClassName, render: heading2 }) : kind === "popover" ? /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Title, { className: titleClassName, render: heading2 }) : title ? heading2 : null;
  const descriptionNode = description ? kind === "alert-dialog" ? /* @__PURE__ */ jsxRuntime.jsx(alertDialog.AlertDialog.Description, { render: /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }), children: description }) : kind === "dialog" ? /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Description, { render: /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }), children: description }) : kind === "popover" ? /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Description, { render: /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }), children: description }) : /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted", children: description }) : null;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "dialog",
      className: cn.cn(
        "p-6 shadow-xl bg-surface border border-edge rounded relative outline-none overflow-auto",
        // Inside a popover the `Popover` popup already provides the surface, so the dialog would
        // otherwise paint a second border/shadow on top of it.
        kind === "popover" && "p-0 bg-transparent border-0 shadow-none rounded-none overflow-visible",
        // A fullscreen `Modal` should not show rounded corners or a border on its inner surface.
        "group-data-[placement=fullscreen]/modal:rounded-none group-data-[placement=fullscreen]/modal:border-0 group-data-[placement=fullscreen]/modal:shadow-none group-data-[placement=fullscreen]/modal:size-full",
        className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsxs(Column, { height: "100%", gap: true, children: [
        primitiveTitle,
        descriptionNode,
        typeof children === "function" ? children({ close }) : children
      ] })
    }
  );
}
function Row({ reverse, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Flexbox, { ...props, direction: reverse ? "row-reverse" : "row", children });
}
function AlertDialog({
  title,
  description,
  isDanger,
  isConfirmDisabled,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  className,
  children,
  ...props
}) {
  const { close } = useOverlayTrigger();
  const [isPending, setIsPending] = react.useState(false);
  const handleConfirm = () => {
    let result;
    try {
      result = onConfirm?.();
    } catch {
      return;
    }
    if (result && typeof result.then === "function") {
      setIsPending(true);
      result.then(
        () => {
          setIsPending(false);
          close();
        },
        () => {
          setIsPending(false);
        }
      );
      return;
    }
    close();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Dialog, { ...props, title, className, children: ({ close: closeDialog }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(Column, { gap: "4", children: [
      description && /* @__PURE__ */ jsxRuntime.jsx(alertDialog.AlertDialog.Description, { render: /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }), children: description }),
      typeof children === "function" ? children({ close: closeDialog }) : children,
      /* @__PURE__ */ jsxRuntime.jsxs(Row, { gap: "3", justifyContent: "end", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          alertDialog.AlertDialog.Close,
          {
            "data-slot": "alert-dialog-cancel",
            render: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onPress: onCancel, children: cancelLabel })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            "data-slot": "alert-dialog-action",
            variant: isDanger ? "danger" : "primary",
            isDisabled: isConfirmDisabled || isPending,
            onPress: handleConfirm,
            children: confirmLabel
          }
        )
      ] })
    ] });
  } });
}
AlertDialog.zenOverlayType = "alert-dialog";
function AlertDialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    alertDialog.AlertDialog.Title,
    {
      "data-slot": "alert-dialog-title",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "xl" }),
      className
    }
  );
}
function AlertDialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    alertDialog.AlertDialog.Description,
    {
      "data-slot": "alert-dialog-description",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }),
      className
    }
  );
}
function AlertDialogCancel({ render, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    alertDialog.AlertDialog.Close,
    {
      "data-slot": "alert-dialog-cancel",
      ...props,
      render: render ?? /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline" })
    }
  );
}
function AlertDialogAction({ render, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    alertDialog.AlertDialog.Close,
    {
      "data-slot": "alert-dialog-action",
      ...props,
      render: render ?? /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "primary" })
    }
  );
}
function AspectRatio({ ratio = 1, className, style, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      className: cn.cn(
        "relative w-full overflow-hidden",
        "[&>*]:absolute [&>*]:inset-0 [&>*]:size-full [&>img]:object-cover [&>video]:object-cover",
        className
      ),
      style: { aspectRatio: ratio, ...style },
      children
    }
  );
}
function useFieldId(id) {
  const generatedId = react.useId();
  return id ?? generatedId;
}
var sizeMap = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8"
};
var strokeWidthMap = {
  "0.5": "stroke-[0.5]",
  "1": "stroke-1",
  "1.5": "stroke-[1.5]",
  "2": "stroke-2",
  "3": "stroke-[3]",
  "4": "stroke-[4]"
};
function Icon({
  color,
  size = "sm",
  variant,
  rotate,
  strokeWidth,
  strokeColor,
  fillColor,
  style,
  className,
  children,
  ...props
}) {
  const colorStr = color === true ? "true" : color;
  const wrapperClasses = cn.cn("inline-flex items-center justify-center shrink-0");
  const strokeColorStr = strokeColor === true ? void 0 : strokeColor;
  const fillColorStr = fillColor === true ? void 0 : fillColor;
  const wrapperStyle = {
    ...style,
    transform: rotate ? `rotate(${rotate}deg)` : void 0
  };
  const svgClasses = cn.cn(
    sizeMap[size],
    mapTextColor(colorStr),
    strokeWidth && strokeWidthMap[strokeWidth],
    className
  );
  const svgProps = {
    className: svgClasses
  };
  if (strokeColorStr) {
    svgProps.stroke = getCssColorValue(strokeColorStr);
  }
  if (fillColorStr) {
    svgProps.fill = getCssColorValue(fillColorStr);
  }
  const clonedChild = react.isValidElement(children) ? react.cloneElement(children, svgProps) : children;
  return /* @__PURE__ */ jsxRuntime.jsx("span", { ...props, className: wrapperClasses, style: wrapperStyle, children: clonedChild });
}
var inputGroupControlClasses = [
  "h-auto w-full min-w-0 flex-1 rounded-none border-0 bg-transparent shadow-none",
  "focus-visible:border-0 focus-visible:ring-0",
  "read-only:bg-transparent disabled:bg-transparent disabled:opacity-100"
];
var Input = react.forwardRef(
  ({ className, type, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "input",
    {
      "data-slot": "input",
      ...props,
      ref,
      type,
      className: inputField({
        variant,
        className: cn.cn(
          "w-full min-w-0 px-3 py-1 outline-none",
          "placeholder:text-fg-muted",
          "read-only:bg-surface-raised",
          "disabled:cursor-not-allowed",
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-fg",
          className
        )
      })
    }
  )
);
Input.displayName = "Input";
var Textarea = react.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      ...props,
      ref,
      className: inputField({
        variant,
        className: cn.cn(
          "field-sizing-content block h-auto min-h-16 w-full min-w-0 px-3 py-2 outline-none",
          "placeholder:text-fg-muted",
          "read-only:bg-surface-raised",
          "disabled:cursor-not-allowed",
          className
        )
      })
    }
  )
);
Textarea.displayName = "Textarea";
var InputGroup = react.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "input-group",
      role: props.role ?? "group",
      className: inputField({
        variant,
        className: cn.cn(
          "group/input-group w-full min-w-0 gap-0 p-0",
          "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col",
          "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col",
          "has-[>textarea]:h-auto",
          className
        )
      })
    }
  )
);
InputGroup.displayName = "InputGroup";
var addonClasses = {
  // Inline addons must not add vertical padding around their buttons; the
  // input's padding determines the height of a single-line control.
  "inline-start": "order-first ps-3 py-0 has-[>button]:-ms-1.5",
  "inline-end": "order-last pe-3 py-0 has-[>button]:-me-1.5",
  "block-start": "order-first w-full justify-start px-3 pt-3 pb-2 group-has-[>input]/input-group:pt-2.5",
  "block-end": "order-last w-full justify-start px-3 pt-2 pb-3 group-has-[>input]/input-group:pb-2.5"
};
var InputGroupAddon = react.forwardRef(
  ({ align = "inline-start", className, onClick, ...props }, ref) => {
    const handleClick = (event) => {
      onClick?.(event);
      if (event.defaultPrevented || event.target.closest("button")) {
        return;
      }
      event.currentTarget.parentElement?.querySelector('[data-slot="input-group-control"]')?.focus();
    };
    return /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ...props,
        ref,
        role: props.role ?? "group",
        "data-slot": "input-group-addon",
        "data-align": align,
        className: cn.cn(
          "flex h-auto shrink-0 cursor-text select-none items-center justify-center gap-2 text-sm font-medium text-fg-muted",
          "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
          addonClasses[align],
          className
        ),
        onClick: handleClick
      }
    );
  }
);
InputGroupAddon.displayName = "InputGroupAddon";
var InputGroupButton = react.forwardRef(
  ({ className, size = "xs", type = "button", variant = "quiet", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      ...props,
      ref,
      type,
      variant,
      size,
      "data-slot": "input-group-button",
      className: cn.cn(
        "shrink-0 rounded shadow-none",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )
    }
  )
);
InputGroupButton.displayName = "InputGroupButton";
var InputGroupText = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ...props,
      ref,
      "data-slot": "input-group-text",
      className: cn.cn(
        "flex items-center gap-2 text-sm text-fg-muted [&_svg]:pointer-events-none [&_svg]:size-4",
        className
      )
    }
  )
);
InputGroupText.displayName = "InputGroupText";
var InputGroupInput = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Input,
    {
      ...props,
      ref,
      "data-slot": "input-group-control",
      className: cn.cn(inputGroupControlClasses, "px-3", className)
    }
  )
);
InputGroupInput.displayName = "InputGroupInput";
var InputGroupTextarea = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Textarea,
    {
      ...props,
      ref,
      "data-slot": "input-group-control",
      className: cn.cn(inputGroupControlClasses, "min-h-16 resize-none p-3", className)
    }
  )
);
InputGroupTextarea.displayName = "InputGroupTextarea";
var labelClasses = [
  "flex items-center gap-2 text-sm leading-none font-medium select-none",
  "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50"
];
var Label = react.forwardRef(
  ({ size, weight, className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "label",
    {
      ...props,
      ref,
      "data-slot": "label",
      className: cn.cn(labelClasses, mapFontSize(size), mapFontWeight(weight), className)
    }
  )
);
Label.displayName = "Label";
var Autocomplete = react.forwardRef(
  ({
    id,
    items,
    label,
    placeholder,
    isDisabled,
    disabled,
    showClear,
    onChange,
    onValueChange,
    className,
    inputProps,
    positionerProps,
    renderItem,
    emptyMessage = "No suggestions found.",
    ...props
  }, ref) => {
    const fieldId = useFieldId(id);
    const inputId = inputProps?.id ?? fieldId;
    return /* @__PURE__ */ jsxRuntime.jsx(
      autocomplete.Autocomplete.Root,
      {
        ...props,
        id,
        items,
        disabled: isDisabled ?? disabled,
        onValueChange: (value, details) => {
          onValueChange?.(value, details);
          if (!details.isCanceled) onChange?.(value);
        },
        children: /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "autocomplete", className: cn.cn("relative flex flex-col gap-1", className), children: [
          label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: inputId, children: label }),
          /* @__PURE__ */ jsxRuntime.jsxs(InputGroup, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              autocomplete.Autocomplete.Input,
              {
                placeholder,
                ...inputProps,
                id: inputId,
                ref,
                "data-slot": "autocomplete-input",
                render: /* @__PURE__ */ jsxRuntime.jsx(InputGroupInput, { className: "text-sm" })
              }
            ),
            showClear && /* @__PURE__ */ jsxRuntime.jsx(InputGroupAddon, { align: "inline-end", children: /* @__PURE__ */ jsxRuntime.jsx(
              InputGroupButton,
              {
                size: "icon-xs",
                variant: "quiet",
                "aria-label": "Clear",
                "data-slot": "autocomplete-clear",
                render: /* @__PURE__ */ jsxRuntime.jsx(autocomplete.Autocomplete.Clear, {}),
                children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) })
              }
            ) })
          ] }),
          /* @__PURE__ */ jsxRuntime.jsxs(autocomplete.Autocomplete.Status, { "data-slot": "autocomplete-status", className: "sr-only", children: [
            items.length,
            " suggestion",
            items.length === 1 ? "" : "s",
            " available"
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(autocomplete.Autocomplete.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
            autocomplete.Autocomplete.Positioner,
            {
              align: "start",
              sideOffset: 4,
              ...positionerProps,
              "data-slot": "autocomplete-positioner",
              className: (state) => cn.cn(
                "zen-layer-floating",
                typeof positionerProps?.className === "function" ? positionerProps.className(state) : positionerProps?.className
              ),
              children: /* @__PURE__ */ jsxRuntime.jsxs(
                autocomplete.Autocomplete.Popup,
                {
                  "data-slot": "autocomplete-content",
                  className: "zen-popover w-(--anchor-width) max-w-(--available-width) max-h-[min(23rem,var(--available-height))] overflow-x-hidden overflow-y-auto rounded-md border border-edge bg-surface-overlay p-1 text-fg shadow-lg outline-none",
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(autocomplete.Autocomplete.List, { "data-slot": "autocomplete-list", children: (item) => /* @__PURE__ */ jsxRuntime.jsx(
                      autocomplete.Autocomplete.Item,
                      {
                        value: item,
                        "data-slot": "autocomplete-item",
                        className: listItem(),
                        children: renderItem ? renderItem(item) : item
                      },
                      item
                    ) }),
                    /* @__PURE__ */ jsxRuntime.jsx(autocomplete.Autocomplete.Empty, { "data-slot": "autocomplete-empty", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "px-3 py-4 text-center text-sm text-fg-muted", children: emptyMessage }) })
                  ]
                }
              )
            }
          ) })
        ] })
      }
    );
  }
);
Autocomplete.displayName = "Autocomplete";
function getInitials(name) {
  if (!name) {
    return null;
  }
  return name.split(/\s+/).slice(0, 2).map((word) => word.charAt(0)).join("");
}
function Avatar({ src, alt, fallback, size, className, children, ...props }) {
  const styles = avatar({ size });
  return /* @__PURE__ */ jsxRuntime.jsxs(
    avatar$1.Avatar.Root,
    {
      ...props,
      "data-slot": "avatar",
      "data-size": size ?? "md",
      className: cn.cn(styles.root(), className),
      children: [
        src && /* @__PURE__ */ jsxRuntime.jsx(AvatarImage, { src, alt, className: styles.image() }),
        /* @__PURE__ */ jsxRuntime.jsx(AvatarFallback, { className: styles.fallback(), children: fallback ?? getInitials(alt) }),
        children
      ]
    }
  );
}
function AvatarImage({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    avatar$1.Avatar.Image,
    {
      ...props,
      "data-slot": "avatar-image",
      className: cn.cn("aspect-square size-full object-cover", className)
    }
  );
}
function AvatarFallback({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    avatar$1.Avatar.Fallback,
    {
      ...props,
      "data-slot": "avatar-fallback",
      className: cn.cn(
        "flex size-full items-center justify-center font-medium uppercase text-fg",
        className
      )
    }
  );
}
function AvatarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "avatar-group",
      className: cn.cn(
        "flex items-center -space-x-2",
        "*:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-surface",
        className
      )
    }
  );
}
function Badge({ variant, size, render, className, children, ...props }) {
  const classes = cn.cn(
    badge({ variant, size }),
    "w-fit shrink-0 justify-center overflow-hidden whitespace-nowrap",
    "outline-none transition-[color,box-shadow]",
    "[&>svg]:size-3 [&>svg]:pointer-events-none",
    "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
    "aria-invalid:border-status-error aria-invalid:ring-status-error/20",
    "[a&]:cursor-pointer [a&]:no-underline [a&]:hover:opacity-90",
    className
  );
  return resolveRender(
    render,
    { ...props, className: classes, children, "data-slot": "badge" },
    /* @__PURE__ */ jsxRuntime.jsx("span", { ...props, "data-slot": "badge", "data-variant": variant ?? "default", className: classes, children })
  );
}
function Blockquote({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Text, { ...props, as: "blockquote", className: cn.cn("border-l-2 border-primary pl-5", className), children });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ol",
    {
      ...props,
      "data-slot": "breadcrumb-list",
      className: cn.cn("flex flex-wrap items-center gap-3 text-sm wrap-break-word", className)
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      ...props,
      "data-slot": "breadcrumb-item",
      className: cn.cn("inline-flex items-center gap-3 list-none", className)
    }
  );
}
function BreadcrumbLink({ className, render, children, ...props }) {
  const classes = cn.cn(
    "font-normal text-fg-muted no-underline transition-colors rounded",
    "hover:text-fg",
    "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50 outline-none",
    className
  );
  return resolveRender(
    render,
    { ...props, className: classes, children, "data-slot": "breadcrumb-link" },
    /* @__PURE__ */ jsxRuntime.jsx("a", { ...props, "data-slot": "breadcrumb-link", className: classes, children })
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ...props,
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn.cn("font-normal text-fg", className)
    }
  );
}
function BreadcrumbSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "li",
    {
      ...props,
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn.cn(
        "inline-flex items-center text-fg-muted [&>svg:not([class*='size-'])]:size-3",
        className
      ),
      children: children ?? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {})
    }
  );
}
function BreadcrumbEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      ...props,
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn.cn(
        "flex size-4 items-center justify-center text-fg-muted [&>svg:not([class*='size-'])]:size-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Ellipsis, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
function Breadcrumbs({
  children,
  className,
  isDisabled,
  separator,
  ...props
}) {
  const items = react.Children.toArray(children).filter((child) => react.isValidElement(child));
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      ...props,
      "data-slot": "breadcrumb",
      "aria-label": "Breadcrumb",
      "aria-disabled": isDisabled || void 0,
      className: cn.cn(className),
      children: /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbList, { children: items.map((child, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: breadcrumb positions are stable
        /* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, { children: [
          index > 0 && /* @__PURE__ */ jsxRuntime.jsx(BreadcrumbSeparator, { children: separator }),
          child
        ] }, index)
      )) })
    }
  );
}
function Breadcrumb({ children, className, isDisabled, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    BreadcrumbItem,
    {
      ...props,
      "aria-disabled": isDisabled || void 0,
      className: cn.cn(
        "text-sm",
        "[&_a]:text-fg-muted [&_a]:no-underline [&_a]:font-normal",
        "[&_a:hover]:text-fg",
        isDisabled && "opacity-50",
        className
      ),
      children
    }
  );
}
function Separator({ orientation = "horizontal", className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    separator.Separator,
    {
      ...props,
      "data-slot": "separator",
      orientation,
      className: cn.cn(
        "shrink-0 bg-edge-muted",
        "data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        "data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className
      )
    }
  );
}
function ButtonGroup({ className, orientation = "horizontal", ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      role: props.role ?? "group",
      "data-slot": "button-group",
      "data-orientation": orientation,
      className: cn.cn(
        "flex w-fit items-stretch",
        "has-[>[data-slot=button-group]]:gap-2",
        "[&>[data-slot]]:focus-visible:relative [&>[data-slot]]:focus-visible:z-10",
        "[&>input]:min-w-0 [&>input]:flex-1",
        orientation === "horizontal" ? [
          "[&>[data-slot]]:rounded-e-none",
          "[&>[data-slot]~[data-slot]]:rounded-s-none",
          "[&>[data-slot]~[data-slot]]:border-s-0"
        ] : [
          "flex-col",
          "[&>[data-slot]]:rounded-b-none",
          "[&>[data-slot]~[data-slot]]:rounded-t-none",
          "[&>[data-slot]~[data-slot]]:border-t-0"
        ],
        className
      )
    }
  );
}
function ButtonGroupText({ className, render, children, ...props }) {
  const classes = cn.cn(
    "flex items-center gap-2 rounded border border-edge bg-surface-raised px-4 text-sm font-medium shadow-sm",
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
    className
  );
  const renderProps = {
    ...props,
    className: classes,
    children,
    "data-slot": "button-group-text"
  };
  return resolveRender(
    render,
    renderProps,
    /* @__PURE__ */ jsxRuntime.jsx("div", { ...props, "data-slot": "button-group-text", className: classes, children })
  );
}
function ButtonGroupSeparator({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Separator,
    {
      ...props,
      "data-slot": "button-group-separator",
      orientation,
      className: cn.cn(
        "relative self-stretch",
        "data-[orientation=horizontal]:mx-px data-[orientation=horizontal]:w-auto",
        "data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto",
        className
      )
    }
  );
}
function Calendar({
  className,
  classNames,
  value,
  minValue,
  maxValue,
  defaultValue,
  mode = "single",
  selected,
  onSelect,
  onChange,
  isDisabled,
  isReadOnly,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "quiet",
  components,
  ...props
}) {
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const disabled = [
    ...minValue ? [{ before: minValue }] : [],
    ...maxValue ? [{ after: maxValue }] : []
  ];
  const selection = selected ?? (mode === "single" ? value : void 0);
  const handleSelect = (next) => {
    if (isReadOnly) {
      return;
    }
    onSelect?.(next);
    if (mode === "single") {
      onChange?.(next);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactDayPicker.DayPicker,
    {
      ...props,
      mode,
      showOutsideDays,
      captionLayout,
      selected: selection,
      defaultMonth: defaultValue ?? value,
      disabled: isDisabled || isReadOnly ? true : disabled,
      onSelect: handleSelect,
      className: cn.cn(
        "group/calendar [--cell-size:--spacing(8)]",
        "w-fit max-w-full text-sm",
        // The month grid is a real <table>; host prose styles (docs sites,
        // CMS themes) often style table/th/td with borders, padding, and
        // width. Reset them at matching specificity so zen styles hold.
        "[&_table]:m-0 [&_table]:w-auto [&_table]:border-0 [&_table]:text-[length:inherit]",
        "[&_th]:border-0 [&_th]:p-0 [&_th]:text-center [&_th]:align-middle",
        "[&_td]:border-0 [&_td]:p-0 [&_td]:text-center [&_td]:align-middle",
        "[&_th:first-child]:pl-0 [&_th:last-child]:pr-0",
        "[&_td:first-child]:pl-0 [&_td:last-child]:pr-0",
        className
      ),
      classNames: {
        root: cn.cn(defaultClassNames.root, "w-fit"),
        months: cn.cn(defaultClassNames.months, "relative flex flex-col gap-4 md:flex-row"),
        month: cn.cn(defaultClassNames.month, "flex w-full flex-col gap-4"),
        nav: cn.cn(
          defaultClassNames.nav,
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1"
        ),
        button_previous: cn.cn(
          defaultClassNames.button_previous,
          button({ variant: buttonVariant }),
          "size-7 p-0 select-none aria-disabled:opacity-50"
        ),
        button_next: cn.cn(
          defaultClassNames.button_next,
          button({ variant: buttonVariant }),
          "size-7 p-0 select-none aria-disabled:opacity-50"
        ),
        month_caption: cn.cn(
          defaultClassNames.month_caption,
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size) font-medium"
        ),
        dropdowns: cn.cn(
          defaultClassNames.dropdowns,
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium"
        ),
        dropdown_root: cn.cn(
          defaultClassNames.dropdown_root,
          "relative rounded border border-edge shadow-xs",
          "has-focus:border-focus-ring has-focus:ring-[3px] has-focus:ring-focus-ring/50"
        ),
        dropdown: cn.cn(defaultClassNames.dropdown, "absolute inset-0 bg-surface-overlay opacity-0"),
        caption_label: cn.cn(
          defaultClassNames.caption_label,
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "flex items-center gap-1 rounded pl-2 text-sm [&>svg]:size-3.5 [&>svg]:text-fg-muted"
        ),
        month_grid: cn.cn(defaultClassNames.month_grid, "w-full border-collapse"),
        weekdays: cn.cn(defaultClassNames.weekdays, "flex"),
        weekday: cn.cn(
          defaultClassNames.weekday,
          "flex-1 select-none rounded text-[0.8rem] font-normal text-fg-muted"
        ),
        week: cn.cn(defaultClassNames.week, "mt-2 flex w-full"),
        week_number_header: cn.cn(defaultClassNames.week_number_header, "w-(--cell-size) select-none"),
        week_number: cn.cn(defaultClassNames.week_number, "select-none text-[0.8rem] text-fg-muted"),
        day: cn.cn(
          defaultClassNames.day,
          "group/day relative aspect-square h-full w-full select-none p-0 text-center"
        ),
        range_start: cn.cn(defaultClassNames.range_start, "rounded-l bg-interactive"),
        range_middle: cn.cn(defaultClassNames.range_middle, "rounded-none bg-interactive"),
        range_end: cn.cn(defaultClassNames.range_end, "rounded-r bg-interactive"),
        today: cn.cn(
          defaultClassNames.today,
          "rounded bg-interactive text-fg data-[selected=true]:rounded-none"
        ),
        outside: cn.cn(defaultClassNames.outside, "text-fg-muted aria-selected:text-fg-muted"),
        disabled: cn.cn(defaultClassNames.disabled, "text-fg-disabled opacity-50"),
        hidden: cn.cn(defaultClassNames.hidden, "invisible"),
        ...classNames
      },
      components: {
        Root: ({ className: rootClassName, rootRef, ...rootProps }) => /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "calendar", ref: rootRef, className: cn.cn(rootClassName), ...rootProps }),
        Chevron: ({ className: chevronClassName, orientation }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronLeft, { className: cn.cn("size-4", chevronClassName) });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, { className: cn.cn("size-4", chevronClassName) });
          }
          return /* @__PURE__ */ jsxRuntime.jsx(
            icons_exports.ChevronDown,
            {
              className: cn.cn("size-4", orientation === "up" && "rotate-180", chevronClassName)
            }
          );
        },
        DayButton: (dayButtonProps) => /* @__PURE__ */ jsxRuntime.jsx(CalendarDayButton, { buttonVariant, ...dayButtonProps }),
        WeekNumber: ({ children, ...weekNumberProps }) => /* @__PURE__ */ jsxRuntime.jsx("td", { ...weekNumberProps, children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) }),
        ...components
      }
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  buttonVariant = "quiet",
  ...props
}) {
  const defaultClassNames = reactDayPicker.getDefaultClassNames();
  const ref = react.useRef(null);
  react.useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus();
    }
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "button",
    {
      ref,
      type: "button",
      "data-slot": "calendar-day-button",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      ...props,
      className: cn.cn(
        button({ variant: buttonVariant, size: "icon" }),
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 rounded border-0 font-normal leading-none",
        "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10",
        "group-data-[focused=true]/day:border-focus-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-focus-ring/50",
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-fg",
        "data-[range-start=true]:rounded-l data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-fg",
        "data-[range-end=true]:rounded-r data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-fg",
        "data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-interactive data-[range-middle=true]:text-fg",
        "[&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )
    }
  );
}
var CarouselContext = react.createContext(null);
function useCarousel() {
  const context = react.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  loop,
  showArrows = true,
  showDots,
  opts,
  setApi,
  onIndexChange,
  className,
  children,
  ...props
}) {
  const [carouselRef, emblaApi] = useEmblaCarousel__default.default({
    axis: orientation === "vertical" ? "y" : "x",
    loop,
    ...opts
  });
  const [canScrollPrev, setCanScrollPrev] = react.useState(false);
  const [canScrollNext, setCanScrollNext] = react.useState(false);
  const [selectedIndex, setSelectedIndex] = react.useState(0);
  const [slideCount, setSlideCount] = react.useState(0);
  const onSelect = react.useCallback(() => {
    if (!emblaApi) {
      return;
    }
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    onIndexChange?.(emblaApi.selectedScrollSnap());
  }, [emblaApi, onIndexChange]);
  react.useEffect(() => {
    if (!emblaApi) {
      return;
    }
    setSlideCount(emblaApi.scrollSnapList().length);
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);
  react.useEffect(() => {
    if (emblaApi) {
      setApi?.(emblaApi);
    }
  }, [emblaApi, setApi]);
  const usesParts = react.Children.toArray(children).some(
    (child) => react.isValidElement(child) && child.type === CarouselContent
  );
  const scrollPrev = react.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = react.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = react.useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);
  const handleKeyDown = (event) => {
    props.onKeyDownCapture?.(event);
    if (event.defaultPrevented) {
      return;
    }
    const prevKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
    const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
    if (event.key === prevKey) {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === nextKey) {
      event.preventDefault();
      scrollNext();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api: emblaApi,
        orientation,
        scrollPrev,
        scrollNext,
        scrollTo,
        canScrollPrev,
        canScrollNext,
        selectedIndex,
        slideCount
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ...props,
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          "data-orientation": orientation,
          className: cn.cn("relative", className),
          onKeyDownCapture: handleKeyDown,
          children: [
            usesParts ? children : /* @__PURE__ */ jsxRuntime.jsx(CarouselContent, { children }),
            showArrows && /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
              /* @__PURE__ */ jsxRuntime.jsx(CarouselPrevious, {}),
              /* @__PURE__ */ jsxRuntime.jsx(CarouselNext, {})
            ] }),
            showDots && /* @__PURE__ */ jsxRuntime.jsx(CarouselDots, {})
          ]
        }
      )
    }
  );
}
function CarouselContent({ className, children, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ref: carouselRef, "data-slot": "carousel-content", className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      className: cn.cn("flex", orientation === "vertical" && "max-h-full flex-col", className),
      children
    }
  ) });
}
function CarouselItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn.cn("min-w-0 shrink-0 grow-0 basis-full", className),
      children
    }
  );
}
function CarouselPrevious({
  className,
  variant = "outline",
  children,
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  const isVertical = orientation === "vertical";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      ...props,
      "data-slot": "carousel-previous",
      variant,
      size: "icon",
      "aria-label": props["aria-label"] ?? "Previous slide",
      isDisabled: props.isDisabled ?? !canScrollPrev,
      className: cn.cn(
        "absolute rounded-full",
        isVertical ? "top-2 left-1/2 -translate-x-1/2 rotate-90" : "top-1/2 left-2 -translate-y-1/2",
        className
      ),
      onPress: scrollPrev,
      children: children ?? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronLeft, {})
    }
  );
}
function CarouselNext({
  className,
  variant = "outline",
  children,
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  const isVertical = orientation === "vertical";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      ...props,
      "data-slot": "carousel-next",
      variant,
      size: "icon",
      "aria-label": props["aria-label"] ?? "Next slide",
      isDisabled: props.isDisabled ?? !canScrollNext,
      className: cn.cn(
        "absolute rounded-full",
        isVertical ? "bottom-2 left-1/2 -translate-x-1/2 rotate-90" : "top-1/2 right-2 -translate-y-1/2",
        className
      ),
      onPress: scrollNext,
      children: children ?? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {})
    }
  );
}
function CarouselDots({ className, ...props }) {
  const { slideCount, selectedIndex, scrollTo } = useCarousel();
  if (slideCount <= 1) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "carousel-dots",
      className: cn.cn(
        "absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1.5",
        className
      ),
      children: Array.from({ length: slideCount }, (_, index) => /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          "data-slot": "carousel-dot",
          "data-active": index === selectedIndex || void 0,
          "aria-label": `Go to slide ${index + 1}`,
          "aria-current": index === selectedIndex ? "true" : void 0,
          className: cn.cn(
            "size-2 cursor-pointer rounded-full transition-colors outline-none",
            "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
            index === selectedIndex ? "bg-primary" : "bg-interactive hover:bg-interactive-hover"
          ),
          onClick: () => scrollTo(index)
        },
        `carousel-dot-${index}`
      ))
    }
  );
}
var checkboxStyles = tailwindVariants.tv({
  slots: {
    field: "flex items-center gap-3 text-sm",
    root: [
      "peer flex size-4 shrink-0 items-center justify-center",
      "rounded-[4px] border border-edge bg-surface shadow-xs",
      "cursor-pointer outline-none transition-shadow",
      "data-checked:bg-primary data-checked:border-primary data-checked:text-primary-fg",
      "data-indeterminate:bg-primary data-indeterminate:border-primary data-indeterminate:text-primary-fg",
      "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
      "aria-invalid:border-status-error aria-invalid:ring-status-error/20",
      "disabled:cursor-default disabled:opacity-50 disabled:bg-surface-disabled",
      "data-disabled:cursor-default data-disabled:opacity-50 data-disabled:bg-surface-disabled"
    ],
    indicator: [
      "flex items-center justify-center text-current",
      "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-3.5"
    ],
    label: "cursor-pointer peer-disabled:cursor-default peer-disabled:opacity-50"
  }
});
function Checkbox({
  id,
  label,
  hideLabel,
  className,
  children,
  isSelected,
  checked: checkedProp,
  defaultSelected,
  defaultChecked,
  isDisabled,
  disabled,
  isIndeterminate,
  indeterminate,
  onChange,
  onCheckedChange,
  value,
  ...props
}) {
  const styles = checkboxStyles();
  const fieldId = useFieldId(id);
  const checked = checkedProp ?? isSelected ?? (typeof value === "boolean" ? value : void 0);
  const isIndeterminateValue = isIndeterminate ?? indeterminate;
  const showLabel = !!label && !hideLabel;
  const hasContent = showLabel || children !== void 0;
  const control = /* @__PURE__ */ jsxRuntime.jsx(
    checkbox.Checkbox.Root,
    {
      ...props,
      id: fieldId,
      "data-slot": "checkbox",
      "aria-label": props["aria-label"] ?? (showLabel ? void 0 : label),
      value: typeof value === "string" ? value : void 0,
      checked,
      defaultChecked: defaultSelected ?? defaultChecked,
      disabled: isDisabled ?? disabled,
      indeterminate: isIndeterminateValue,
      className: cn.cn(styles.root(), !hasContent && className),
      onCheckedChange: (next, eventDetails) => {
        onCheckedChange?.(next);
        onChange?.(next);
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(checkbox.Checkbox.Indicator, { "data-slot": "checkbox-indicator", className: styles.indicator(), children: isIndeterminateValue ? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Minus, {}) : /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) })
    }
  );
  if (!hasContent) {
    return control;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "checkbox-field", className: cn.cn(styles.field(), className), children: [
    control,
    showLabel && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, className: styles.label(), children: label }),
    children !== void 0 && /* @__PURE__ */ jsxRuntime.jsx("label", { htmlFor: fieldId, className: styles.label(), children })
  ] });
}
function CheckboxGroup({
  id,
  label,
  isDisabled,
  orientation = "vertical",
  onChange,
  className,
  children,
  ...props
}) {
  const labelId = useFieldId(id);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    fieldset.Fieldset.Root,
    {
      "data-slot": "checkbox-group",
      "data-orientation": orientation,
      disabled: isDisabled,
      "aria-disabled": isDisabled || void 0,
      className: cn.cn("flex flex-col gap-2 border-0 m-0 p-0 min-w-0", className),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(
          fieldset.Fieldset.Legend,
          {
            id: labelId,
            "data-slot": "checkbox-group-label",
            className: "text-sm font-semibold text-fg",
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(
          checkboxGroup.CheckboxGroup,
          {
            ...props,
            "data-slot": "checkbox-group-items",
            "data-orientation": orientation,
            "aria-labelledby": label ? labelId : props["aria-labelledby"],
            disabled: isDisabled,
            "aria-disabled": isDisabled || void 0,
            onValueChange: (value) => onChange?.(value),
            className: cn.cn("flex gap-3", orientation === "vertical" ? "flex-col" : "flex-row flex-wrap"),
            children
          }
        )
      ]
    }
  );
}
function Code({ className, children, size = "sm", ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Text,
    {
      ...props,
      as: "code",
      size,
      weight: "medium",
      className: cn.cn("font-mono bg-surface-sunken rounded p-1", className),
      children
    }
  );
}
function Collapsible({
  isExpanded,
  defaultExpanded,
  isDisabled,
  onExpandedChange,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    collapsible.Collapsible.Root,
    {
      ...props,
      "data-slot": "collapsible",
      open: isExpanded,
      defaultOpen: defaultExpanded,
      disabled: isDisabled,
      onOpenChange: onExpandedChange,
      className: cn.cn("flex flex-col w-full", className),
      children
    }
  );
}
function CollapsibleTrigger({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    collapsible.Collapsible.Trigger,
    {
      ...props,
      "data-slot": "collapsible-trigger",
      className: cn.cn(
        "flex items-center gap-2 cursor-pointer outline-none text-sm",
        "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50 rounded",
        "disabled:text-fg-disabled disabled:cursor-default",
        "data-disabled:text-fg-disabled data-disabled:cursor-default",
        className
      ),
      children
    }
  );
}
function CollapsiblePanel({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    collapsible.Collapsible.Panel,
    {
      ...props,
      "data-slot": "collapsible-panel",
      className: cn.cn(
        "overflow-hidden transition-all duration-300 ease-out",
        "h-(--collapsible-panel-height) data-[starting-style]:h-0 data-[ending-style]:h-0",
        className
      ),
      children
    }
  );
}

// src/lib/constants.ts
var ACCENT_COLORS = [
  "gray",
  "slate",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
];

// src/lib/styles.ts
var highlightColors = {
  gray: "#f3f4f6",
  slate: "#f1f5f9",
  zinc: "#f4f4f5",
  neutral: "#f5f5f5",
  stone: "#f5f5f4",
  red: "#fee2e2",
  orange: "#ffedd5",
  amber: "#fef3c7",
  yellow: "#fef9c3",
  lime: "#ecfccb",
  green: "#dcfce7",
  emerald: "#d1fae5",
  teal: "#ccfbf1",
  cyan: "#cffafe",
  sky: "#e0f2fe",
  blue: "#dbeafe",
  indigo: "#e0e7ff",
  violet: "#ede9fe",
  purple: "#f3e8ff",
  fuchsia: "#fae8ff",
  pink: "#fce7f3",
  rose: "#ffe4e6"
};
function getHighlightColor(color) {
  if (!color) return;
  if (ACCENT_COLORS.includes(color)) {
    return { "--highlight-color": highlightColors[color] || color };
  }
  return { "--highlight-color": color };
}
var ListContext = react.createContext({
  kind: "native",
  selected: /* @__PURE__ */ new Set(),
  toggle: () => void 0
});
function ListPrimitiveProvider({
  kind,
  children
}) {
  const value = react.useMemo(
    () => ({ kind, selected: /* @__PURE__ */ new Set(), toggle: () => void 0 }),
    [kind]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(ListContext.Provider, { value, children });
}
function List({
  id,
  highlightColor,
  isFullscreen,
  label,
  value,
  onChange,
  className,
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  selectionMode = "none",
  style,
  children,
  renderEmptyState,
  ...props
}) {
  const parent = react.useContext(ListContext);
  const [uncontrolled, setUncontrolled] = react.useState(
    () => new Set(Array.from(value || selectedKeys || defaultSelectedKeys || [], String))
  );
  const selected = new Set(Array.from(value || selectedKeys || uncontrolled, String));
  const fieldId = useFieldId(id);
  const toggle = (key) => {
    if (selectionMode === "none") {
      return;
    }
    const itemKey = String(key);
    const next = new Set(selectionMode === "multiple" ? selected : []);
    if (next.has(itemKey)) {
      next.delete(itemKey);
    } else {
      next.add(itemKey);
    }
    if (!value && !selectedKeys) {
      setUncontrolled(next);
    }
    onSelectionChange?.(next);
    onChange?.(Array.from(next, String));
  };
  const classes = cn.cn(
    "grid outline-none overflow-auto gap-1",
    isFullscreen && "zen-layer-floating block p-3 rounded-none fixed inset-0 overflow-auto bg-surface",
    className
  );
  if (parent.kind === "select") {
    return /* @__PURE__ */ jsxRuntime.jsx(select.Select.List, { ...props, id: fieldId, className: classes, style, children });
  }
  if (parent.kind === "combobox") {
    return /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.List, { ...props, id: fieldId, className: classes, style, children });
  }
  const handleKeyDown = (event) => {
    props.onKeyDown?.(event);
    if (event.defaultPrevented || !["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
      return;
    }
    const options = Array.from(
      event.currentTarget.querySelectorAll(
        '[role="option"]:not([aria-disabled="true"])'
      )
    );
    if (options.length === 0) {
      return;
    }
    const current = options.indexOf(document.activeElement);
    let next = 0;
    if (event.key === "ArrowDown") {
      next = current < 0 ? 0 : Math.min(current + 1, options.length - 1);
    } else if (event.key === "ArrowUp") {
      next = current < 0 ? options.length - 1 : Math.max(current - 1, 0);
    } else if (event.key === "End") {
      next = options.length - 1;
    }
    event.preventDefault();
    options[next]?.focus();
  };
  const listbox = /* @__PURE__ */ jsxRuntime.jsx(ListContext.Provider, { value: { kind: "native", selected, toggle }, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      id: fieldId,
      role: "listbox",
      "aria-multiselectable": selectionMode === "multiple" || void 0,
      tabIndex: 0,
      ...props,
      "data-slot": "list",
      className: classes,
      style: { ...style, ...getHighlightColor(highlightColor) },
      onKeyDown: handleKeyDown,
      children: children || renderEmptyState?.({})
    }
  ) });
  if (label) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
      listbox
    ] });
  }
  return listbox;
}
function ListItem({
  id,
  value,
  children,
  className,
  showCheckmark = true,
  isDisabled,
  onClick,
  ...props
}) {
  const context = react.useContext(ListContext);
  const itemValue = value ?? id ?? (typeof children === "string" ? children : "");
  if (context.kind === "select") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      select.Select.Item,
      {
        ...props,
        value: itemValue,
        disabled: isDisabled,
        "data-slot": "list-item",
        className: listItem({ className }),
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(select.Select.ItemText, { children }),
          showCheckmark && /* @__PURE__ */ jsxRuntime.jsx(select.Select.ItemIndicator, { className: "flex shrink-0 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) }) })
        ]
      }
    );
  }
  if (context.kind === "combobox") {
    return /* @__PURE__ */ jsxRuntime.jsxs(
      combobox.Combobox.Item,
      {
        ...props,
        value: String(itemValue),
        disabled: isDisabled,
        "data-slot": "list-item",
        className: listItem({ className }),
        children: [
          children,
          showCheckmark && /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.ItemIndicator, { className: "flex shrink-0 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) }) })
        ]
      }
    );
  }
  const isSelected = context.selected.has(String(itemValue));
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ...props,
      id: id === void 0 ? void 0 : String(id),
      role: "option",
      tabIndex: isDisabled ? void 0 : -1,
      "aria-disabled": isDisabled || void 0,
      "aria-selected": isSelected,
      "data-selected": isSelected || void 0,
      "data-disabled": isDisabled || void 0,
      "data-slot": "list-item",
      className: listItem({ className }),
      onClick: (event) => {
        onClick?.(event);
        if (!event.defaultPrevented && !isDisabled) {
          context.toggle(itemValue);
        }
      },
      onKeyDown: (event) => {
        props.onKeyDown?.(event);
        if (!isDisabled && (event.key === "Enter" || event.key === " ")) {
          event.preventDefault();
          context.toggle(itemValue);
        }
      },
      children: [
        children,
        showCheckmark && isSelected && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) })
      ]
    }
  );
}
function ListSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(select.Select.Separator, { ...props, className: cn.cn("block h-px bg-edge-muted", className) });
}
function ListSection({ title, className, children, ...props }) {
  const { kind } = react.useContext(ListContext);
  if (kind === "select") {
    return /* @__PURE__ */ jsxRuntime.jsxs(select.Select.Group, { ...props, className: cn.cn("[&:not(:last-child)]:mb-4", className), children: [
      title && /* @__PURE__ */ jsxRuntime.jsx(select.Select.GroupLabel, { className: "text-sm font-bold px-2 py-1.5", children: title }),
      children
    ] });
  }
  if (kind === "combobox") {
    return /* @__PURE__ */ jsxRuntime.jsxs(combobox.Combobox.Group, { ...props, className: cn.cn("[&:not(:last-child)]:mb-4", className), children: [
      title && /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.GroupLabel, { className: "text-sm font-bold px-2 py-1.5", children: title }),
      children
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { ...props, role: "group", className: cn.cn("[&:not(:last-child)]:mb-4", className), children: [
    title && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-bold px-2 py-1.5", children: title }),
    children
  ] });
}
var scrollbarClasses = [
  "flex touch-none select-none p-px transition-colors",
  "opacity-0 transition-opacity duration-200 delay-300",
  "data-[hovering]:opacity-100 data-[hovering]:delay-0",
  "data-[scrolling]:opacity-100 data-[scrolling]:delay-0",
  "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5",
  "data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent",
  "data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col",
  "data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent"
];
var thumbClasses = "relative flex-1 rounded-full bg-edge-strong";
function ScrollArea({
  maxHeight,
  orientation = "vertical",
  className,
  style,
  children,
  ...props
}) {
  const showVertical = orientation !== "horizontal";
  const showHorizontal = orientation !== "vertical";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    scrollArea.ScrollArea.Root,
    {
      ...props,
      "data-slot": "scroll-area",
      className: cn.cn("relative overflow-hidden", className),
      style,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          scrollArea.ScrollArea.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full overscroll-contain rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
            style: { maxHeight },
            children: /* @__PURE__ */ jsxRuntime.jsx(scrollArea.ScrollArea.Content, { "data-slot": "scroll-area-content", children })
          }
        ),
        showVertical && /* @__PURE__ */ jsxRuntime.jsx(
          scrollArea.ScrollArea.Scrollbar,
          {
            orientation: "vertical",
            "data-slot": "scroll-area-scrollbar",
            className: cn.cn(scrollbarClasses),
            children: /* @__PURE__ */ jsxRuntime.jsx(scrollArea.ScrollArea.Thumb, { "data-slot": "scroll-area-thumb", className: thumbClasses })
          }
        ),
        showHorizontal && /* @__PURE__ */ jsxRuntime.jsx(
          scrollArea.ScrollArea.Scrollbar,
          {
            orientation: "horizontal",
            "data-slot": "scroll-area-scrollbar",
            className: cn.cn(scrollbarClasses),
            children: /* @__PURE__ */ jsxRuntime.jsx(scrollArea.ScrollArea.Thumb, { "data-slot": "scroll-area-thumb", className: thumbClasses })
          }
        ),
        orientation === "both" && /* @__PURE__ */ jsxRuntime.jsx(scrollArea.ScrollArea.Corner, { "data-slot": "scroll-area-corner" })
      ]
    }
  );
}
function getItemValue(item) {
  if (item == null) {
    return "";
  }
  return typeof item === "object" ? item.value : String(item);
}
function getItemLabel(label) {
  if (typeof label === "string" || typeof label === "number") {
    return String(label);
  }
  if (Array.isArray(label)) {
    return label.map(getItemLabel).join("");
  }
  if (react.isValidElement(label)) {
    return getItemLabel(label.props.children);
  }
  return "";
}
function ComboBox({
  id,
  className,
  label,
  placeholder,
  isDisabled,
  disabled,
  showClear,
  showIcon = true,
  maxHeight,
  onChange,
  onValueChange,
  emptyState,
  renderEmptyState,
  inputProps,
  listProps,
  popoverProps,
  children,
  items,
  itemToStringLabel,
  itemToStringValue,
  "aria-invalid": ariaInvalid,
  ...props
}) {
  const fieldId = useFieldId(id);
  const inputId = inputProps?.id ?? fieldId;
  const normalizedItems = react.useMemo(() => {
    if (items) {
      return items.map((item) => typeof item === "object" ? item : { label: item, value: item });
    }
    return react.Children.toArray(children).flatMap((child) => {
      if (!react.isValidElement(child)) {
        return [];
      }
      const value = String(
        child.props.value ?? child.props.id ?? (typeof child.props.children === "string" ? child.props.children : "")
      );
      return value ? [{ label: child.props.children, value, element: child }] : [];
    });
  }, [items, children]);
  const itemLabels = react.useMemo(
    () => new Map(normalizedItems.map((item) => [item.value, getItemLabel(item.label) || item.value])),
    [normalizedItems]
  );
  const resolveLabel = (item) => {
    if (typeof item === "object") {
      return getItemLabel(item.label) || item.value;
    }
    return itemLabels.get(item) ?? String(item);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    combobox.Combobox.Root,
    {
      ...props,
      items: normalizedItems,
      itemToStringLabel: itemToStringLabel ?? resolveLabel,
      itemToStringValue: itemToStringValue ?? getItemValue,
      isItemEqualToValue: (item, value) => getItemValue(item) === getItemValue(value),
      disabled: isDisabled ?? disabled,
      onValueChange: (value, details) => {
        const next = value == null ? null : getItemValue(value);
        onValueChange?.(next, details);
        onChange?.(next);
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "combobox", className: cn.cn("relative flex flex-col gap-1", className), children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: inputId, children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs(combobox.Combobox.InputGroup, { render: /* @__PURE__ */ jsxRuntime.jsx(InputGroup, {}), children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            combobox.Combobox.Input,
            {
              placeholder,
              ...inputProps,
              id: inputId,
              "aria-invalid": ariaInvalid,
              "data-slot": "combobox-input",
              render: /* @__PURE__ */ jsxRuntime.jsx(InputGroupInput, {})
            }
          ),
          (showClear || showIcon) && /* @__PURE__ */ jsxRuntime.jsxs(InputGroupAddon, { align: "inline-end", children: [
            showClear && /* @__PURE__ */ jsxRuntime.jsx(
              InputGroupButton,
              {
                size: "icon-xs",
                variant: "quiet",
                "aria-label": "Clear selection",
                "data-slot": "combobox-clear",
                render: /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.Clear, {}),
                children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) })
              }
            ),
            showIcon && /* @__PURE__ */ jsxRuntime.jsx(
              InputGroupButton,
              {
                size: "icon-xs",
                variant: "quiet",
                "aria-label": "Open",
                "data-slot": "combobox-trigger",
                render: /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.Trigger, {}),
                children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronDown, {}) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
          combobox.Combobox.Positioner,
          {
            align: "start",
            sideOffset: 4,
            ...popoverProps,
            "data-slot": "combobox-positioner",
            className: cn.cn("zen-layer-floating", popoverProps?.className),
            children: /* @__PURE__ */ jsxRuntime.jsxs(
              combobox.Combobox.Popup,
              {
                "data-slot": "combobox-content",
                className: "zen-popover w-(--anchor-width) max-w-(--available-width) max-h-(--available-height) overflow-x-hidden rounded-md border border-edge bg-surface-overlay shadow-lg outline-none",
                children: [
                  /* @__PURE__ */ jsxRuntime.jsx(ListPrimitiveProvider, { kind: "combobox", children: /* @__PURE__ */ jsxRuntime.jsx(ScrollArea, { maxHeight: maxHeight ?? "min(23rem, var(--available-height))", children: /* @__PURE__ */ jsxRuntime.jsx(List, { ...listProps, className: cn.cn("overflow-visible p-1", listProps?.className), children: /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.Collection, { children: (item) => {
                    if (typeof item !== "object") {
                      return /* @__PURE__ */ jsxRuntime.jsx(ListItem, { value: item, children: resolveLabel(item) }, item);
                    }
                    return item.element ?? /* @__PURE__ */ jsxRuntime.jsx(ListItem, { value: item.value, children: item.label }, item.value);
                  } }) }) }) }),
                  /* @__PURE__ */ jsxRuntime.jsx(combobox.Combobox.Empty, { "data-slot": "combobox-empty", children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex min-h-16 items-center justify-center px-4 py-3 text-center", children: emptyState ?? renderEmptyState?.({}) ?? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm text-fg-muted", children: "No items found." }) }) })
                ]
              }
            )
          }
        ) })
      ] })
    }
  );
}
var placementClasses = {
  center: "zen-modal-center max-h-[calc(100dvh-2rem)]",
  fullscreen: "zen-modal-fullscreen w-dvw h-dvh rounded-none"
};
var viewportClasses = {
  center: "p-4",
  fullscreen: ""
};
function Modal({
  placement = "center",
  children,
  className,
  style,
  isOpen,
  defaultOpen,
  onOpenChange,
  showCloseButton = false,
  ...props
}) {
  const { kind } = useOverlayTrigger();
  const isNested = useInsideOverlayTrigger();
  const isAlert = kind === "alert-dialog";
  const popupClassName2 = cn.cn("group/modal relative isolate", placementClasses[placement], className);
  const viewportClassName = cn.cn(
    "zen-layer-modal fixed inset-0 flex items-center justify-center overflow-y-auto",
    viewportClasses[placement]
  );
  const closeButton = showCloseButton ? isAlert ? /* @__PURE__ */ jsxRuntime.jsx(
    alertDialog.AlertDialog.Close,
    {
      "data-slot": "modal-close",
      className: "absolute top-3 right-3 z-10",
      render: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "quiet", size: "icon-sm", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) }) })
    }
  ) : /* @__PURE__ */ jsxRuntime.jsx(
    dialog.Dialog.Close,
    {
      "data-slot": "modal-close",
      className: "absolute top-3 right-3 z-10",
      render: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "quiet", size: "icon-sm", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) }) })
    }
  ) : null;
  const portal = isAlert ? /* @__PURE__ */ jsxRuntime.jsxs(alertDialog.AlertDialog.Portal, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      alertDialog.AlertDialog.Backdrop,
      {
        "data-slot": "modal-backdrop",
        className: "zen-modal-overlay zen-layer-backdrop fixed inset-0 bg-black/80"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(alertDialog.AlertDialog.Viewport, { className: viewportClassName, children: /* @__PURE__ */ jsxRuntime.jsxs(
      alertDialog.AlertDialog.Popup,
      {
        "data-slot": "modal",
        "data-placement": placement,
        className: popupClassName2,
        style,
        children: [
          closeButton,
          children
        ]
      }
    ) })
  ] }) : /* @__PURE__ */ jsxRuntime.jsxs(dialog.Dialog.Portal, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      dialog.Dialog.Backdrop,
      {
        "data-slot": "modal-backdrop",
        className: "zen-modal-overlay zen-layer-backdrop fixed inset-0 bg-black/80"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Viewport, { className: viewportClassName, children: /* @__PURE__ */ jsxRuntime.jsxs(
      dialog.Dialog.Popup,
      {
        "data-slot": "modal",
        "data-placement": placement,
        className: popupClassName2,
        style,
        children: [
          closeButton,
          children
        ]
      }
    ) })
  ] });
  if (isNested) {
    return portal;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    dialog.Dialog.Root,
    {
      ...isOpen === void 0 ? { defaultOpen } : { open: isOpen },
      onOpenChange,
      children: portal
    }
  );
}
Modal.zenOverlayType = "dialog";
function ModalTrigger(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Trigger, { "data-slot": "modal-trigger", ...props });
}
function ModalClose(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Close, { "data-slot": "modal-close", ...props });
}
function ModalTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    dialog.Dialog.Title,
    {
      "data-slot": "modal-title",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "xl" }),
      className
    }
  );
}
function ModalDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    dialog.Dialog.Description,
    {
      "data-slot": "modal-description",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }),
      className
    }
  );
}
function Command({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command,
    {
      ...props,
      "data-slot": "command",
      className: cn.cn(
        "flex size-full flex-col overflow-hidden rounded-md bg-surface-overlay text-fg",
        className
      ),
      children
    }
  );
}
function CommandInput({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-3 border-b border-edge px-3",
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", className: "shrink-0 text-fg-muted", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Search, {}) }),
        /* @__PURE__ */ jsxRuntime.jsx(
          cmdk.Command.Input,
          {
            ...props,
            "data-slot": "command-input",
            className: cn.cn(
              "flex h-full w-full bg-transparent py-3 text-sm outline-none",
              "placeholder:text-fg-muted",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:text-fg-disabled",
              className
            )
          }
        )
      ]
    }
  );
}
function CommandList({ maxHeight, className, ...props }) {
  const list = /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.List,
    {
      ...props,
      "data-slot": "command-list",
      className: cn.cn(
        "p-2 overflow-x-hidden",
        maxHeight === void 0 && "max-h-[300px] overflow-y-auto",
        className
      )
    }
  );
  if (maxHeight === void 0) {
    return list;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(ScrollArea, { maxHeight, children: list });
}
function CommandEmpty({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Empty,
    {
      ...props,
      "data-slot": "command-empty",
      className: cn.cn("py-6 text-center text-sm text-fg-muted", className)
    }
  );
}
function CommandGroup({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Group,
    {
      ...props,
      "data-slot": "command-group",
      className: cn.cn(
        "overflow-hidden [&:not(:last-child)]:mb-2",
        "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5",
        "[&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-bold [&_[cmdk-group-heading]]:text-fg-muted",
        className
      )
    }
  );
}
function CommandItem({
  icon,
  isDisabled,
  disabled,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    cmdk.Command.Item,
    {
      ...props,
      "data-slot": "command-item",
      disabled: isDisabled ?? disabled,
      className: cn.cn(
        "flex items-center gap-3 px-2 py-1.5 rounded cursor-pointer outline-none text-sm",
        "data-[selected=true]:bg-interactive",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:text-fg-disabled data-[disabled=true]:opacity-50 data-[disabled=true]:cursor-default",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      children: [
        icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: icon }),
        children
      ]
    }
  );
}
function CommandSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    cmdk.Command.Separator,
    {
      ...props,
      "data-slot": "command-separator",
      className: cn.cn("h-px bg-edge-muted my-2 -mx-2", className)
    }
  );
}
function CommandShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ...props,
      "data-slot": "command-shortcut",
      className: cn.cn("ml-auto text-xs tracking-widest text-fg-muted", className)
    }
  );
}
function CommandDialog({
  isOpen,
  open,
  onOpenChange,
  title = "Command Palette",
  description = "Search for a command to run.",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Root, { open: open ?? isOpen, onOpenChange, children: /* @__PURE__ */ jsxRuntime.jsxs(Modal, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "sr-only", children: [
      /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Title, { children: title }),
      /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Description, { children: description })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx(
      Command,
      {
        ...props,
        className: cn.cn(
          "w-[32rem] max-w-[calc(100dvw-2rem)] border border-edge shadow-xl",
          "**:data-[slot=command-input-wrapper]:h-12",
          props.className
        ),
        children
      }
    )
  ] }) });
}
var TIMEOUT = 2e3;
function CopyButton({ value, timeout = TIMEOUT, className, ...props }) {
  const [copied, setCopied] = react.useState(false);
  const timeoutRef = react.useRef(void 0);
  react.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  const handleCopy = async () => {
    const text2 = typeof value === "function" ? value() : value;
    if (text2) {
      await navigator.clipboard.writeText(text2);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), timeout);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      ...props,
      type: "button",
      variant: "quiet",
      size: "icon-xs",
      "data-slot": "copy-button",
      "data-copied": copied || void 0,
      "aria-label": props["aria-label"] ?? "Copy",
      className: cn.cn("shrink-0", className),
      onClick: handleCopy,
      children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { className: "animate-icon-pop", children: copied ? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) : /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Copy, {}) })
    }
  );
}
var fieldOrientationClasses = {
  vertical: "flex-col gap-1 *:w-full [&>.sr-only]:w-auto",
  horizontal: "flex-row items-center gap-2 has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto",
  responsive: "flex-col gap-1 *:w-full @md/field-group:flex-row @md/field-group:items-center @md/field-group:gap-2 @md/field-group:*:w-auto"
};
var Field = react.forwardRef(
  ({ orientation = "vertical", className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    field.Field.Root,
    {
      ...props,
      ref,
      role: props.role ?? "group",
      "data-slot": "field",
      "data-orientation": orientation,
      className: cn.cn("group/field flex w-full", fieldOrientationClasses[orientation], className)
    }
  )
);
Field.displayName = "Field";
var FieldLabel = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    field.Field.Label,
    {
      ...props,
      ref,
      "data-slot": "field-label",
      className: cn.cn(
        labelClasses,
        "group/field-label peer/field-label flex w-fit",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
        className
      )
    }
  )
);
FieldLabel.displayName = "FieldLabel";
var FieldControl = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    field.Field.Control,
    {
      ...props,
      ref,
      "data-slot": "field-control",
      className
    }
  )
);
FieldControl.displayName = "FieldControl";
var FieldDescription = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    field.Field.Description,
    {
      ...props,
      ref,
      "data-slot": "field-description",
      className: cn.cn(
        "text-sm font-normal leading-normal text-fg-muted",
        "[&>a]:underline [&>a]:underline-offset-4",
        className
      )
    }
  )
);
FieldDescription.displayName = "FieldDescription";
var FieldError = react.forwardRef(
  ({ className, children, match, ...props }, ref) => {
    if (match === void 0 && !children) {
      return null;
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      field.Field.Error,
      {
        ...props,
        ref,
        match: match ?? true,
        role: "alert",
        "data-slot": "field-error",
        className: cn.cn("text-sm font-normal text-status-error", className),
        children
      }
    );
  }
);
FieldError.displayName = "FieldError";
var FieldContent = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "field-content",
      className: cn.cn("group/field-content flex flex-1 flex-col gap-1 leading-snug", className)
    }
  )
);
FieldContent.displayName = "FieldContent";
var FieldTitle = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "field-title",
      className: cn.cn(
        "flex w-fit items-center gap-2 text-sm font-medium leading-snug select-none",
        className
      )
    }
  )
);
FieldTitle.displayName = "FieldTitle";
var FieldGroup = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "field-group",
      className: cn.cn(
        "group/field-group @container/field-group flex w-full flex-col gap-4",
        className
      )
    }
  )
);
FieldGroup.displayName = "FieldGroup";
var FieldSet = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "fieldset",
  {
    ...props,
    ref,
    "data-slot": "field-set",
    className: cn.cn("flex w-full min-w-0 flex-col gap-3", className)
  }
));
FieldSet.displayName = "FieldSet";
var FieldLegend = react.forwardRef(
  ({ className, variant = "legend", ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "legend",
    {
      ...props,
      ref,
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn.cn("mb-2 font-medium", variant === "legend" ? "text-base" : "text-sm", className)
    }
  )
);
FieldLegend.displayName = "FieldLegend";
var FieldSeparator = react.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ...props,
      ref,
      "data-slot": "field-separator",
      "data-content": !!children,
      className: cn.cn("relative -my-2 h-5 text-sm", className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(Separator, { className: "absolute inset-0 top-1/2" }),
        children && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            "data-slot": "field-separator-content",
            className: "relative mx-auto block w-fit bg-surface px-2 text-fg-muted",
            children
          }
        )
      ]
    }
  )
);
FieldSeparator.displayName = "FieldSeparator";
var resizeClasses = {
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
  none: "resize-none"
};
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref && typeof ref === "object") {
    ref.current = value;
  }
}
var TextField = react.forwardRef(function TextField2({
  label,
  description,
  error,
  placeholder,
  allowCopy,
  asTextArea,
  resize,
  variant,
  onChange,
  isReadOnly,
  isDisabled,
  readOnly,
  disabled,
  className,
  id,
  children: _children,
  ...props
}, forwardedRef) {
  const fieldId = useFieldId(id);
  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;
  const innerRef = react.useRef(null);
  const [hasValue, setHasValue] = react.useState(() => {
    const initial = props.value ?? props.defaultValue;
    return initial !== void 0 && initial !== null && initial !== "";
  });
  const handleRef = (element) => {
    innerRef.current = element;
    setRef(forwardedRef, element);
  };
  const handleChange = (event) => {
    if (allowCopy) {
      setHasValue(event.target.value !== "");
    }
    onChange?.(event.target.value);
  };
  const isInvalid = props["aria-invalid"] ?? (error ? true : void 0);
  const describedBy = [props["aria-describedby"], description && descriptionId, error && errorId].filter(Boolean).join(" ") || void 0;
  const controlProps = {
    ...props,
    id: fieldId,
    placeholder,
    readOnly: isReadOnly ?? readOnly,
    disabled: isDisabled ?? disabled,
    "aria-invalid": isInvalid,
    "aria-describedby": describedBy,
    className: cn.cn(allowCopy && asTextArea && "pe-12", resize && resizeClasses[resize]),
    onChange: handleChange
  };
  const copyDisabled = props.value !== void 0 ? !props.value : !hasValue;
  const input = /* @__PURE__ */ jsxRuntime.jsxs(
    InputGroup,
    {
      variant: variant === "quiet" ? "quiet" : "default",
      className: cn.cn(variant === "quiet" && "text-[length:inherit]", className),
      children: [
        asTextArea ? /* @__PURE__ */ jsxRuntime.jsx(InputGroupTextarea, { ...controlProps, ref: handleRef }) : /* @__PURE__ */ jsxRuntime.jsx(InputGroupInput, { ...controlProps, ref: handleRef }),
        allowCopy && /* @__PURE__ */ jsxRuntime.jsx(
          InputGroupAddon,
          {
            align: "inline-end",
            className: cn.cn(asTextArea && "absolute end-0 top-1 z-10"),
            children: /* @__PURE__ */ jsxRuntime.jsx(
              CopyButton,
              {
                value: () => innerRef.current?.value ?? "",
                "aria-disabled": copyDisabled,
                className: cn.cn("text-fg-muted hover:text-fg", copyDisabled && "text-fg-disabled")
              }
            )
          }
        )
      ]
    }
  );
  if (!label && !description && !error) {
    return input;
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(field.Field.Root, { "data-slot": "text-field", className: "flex flex-col gap-1", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
    input,
    description && /* @__PURE__ */ jsxRuntime.jsx(FieldDescription, { id: descriptionId, children: description }),
    error && /* @__PURE__ */ jsxRuntime.jsx(FieldError, { id: errorId, children: error })
  ] });
});
function ConfirmationDialog({
  value,
  confirmMessage,
  className,
  children,
  ...props
}) {
  const [canSave, setCanSave] = react.useState(false);
  const handleChange = (e) => {
    setCanSave(e.target.value === value);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(AlertDialog, { ...props, className: cn.cn(className), isConfirmDisabled: !canSave, children: ({ close }) => {
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      typeof children === "function" ? children({ close }) : children,
      /* @__PURE__ */ jsxRuntime.jsxs(Text, { children: [
        confirmMessage || "Type the following value to confirm",
        ":"
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Box,
        {
          paddingX: "3",
          paddingY: "2",
          marginY: "2",
          borderRadius: "md",
          className: "font-mono text-sm bg-surface-sunken",
          children: value
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(TextField, { autoFocus: true, "aria-label": "Confirmation", onChange: handleChange })
    ] });
  } });
}
function Container({
  isCentered = true,
  isFluid,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box,
    {
      ...props,
      className: cn.cn(
        "w-full px-4",
        "sm:max-w-[500px] md:max-w-[740px] lg:max-w-[1000px] xl:max-w-[1240px] 2xl:max-w-[1600px]",
        isCentered && "mx-auto",
        isFluid && "max-w-full p-0",
        className
      ),
      children
    }
  );
}
var MenuContext = react.createContext({
  selected: /* @__PURE__ */ new Set(),
  select: () => void 0,
  selectionMode: "none"
});
var MenuSubmenuTriggerContext = react.createContext(null);
var MenuVariantContext = react.createContext(null);
var motionClassName = [
  "origin-(--transform-origin) transition-[transform,opacity] duration-200 ease-out",
  "data-starting-style:opacity-0 data-starting-style:scale-95",
  "data-ending-style:opacity-0 data-ending-style:scale-95 data-ending-style:ease-in",
  "motion-reduce:transition-none"
].join(" ");
var ITEM_ROLES = '[role="menuitem"],[role="menuitemcheckbox"],[role="menuitemradio"]';
function Menu({
  className,
  children,
  selectionMode = "none",
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  variant,
  ...props
}) {
  const [uncontrolled, setUncontrolled] = react.useState(new Set(defaultSelectedKeys));
  const primitiveKind = react.useContext(MenuPrimitiveContext);
  const inMenubar = react.useContext(MenubarContext);
  const inheritedVariant = react.useContext(MenuVariantContext);
  const resolvedVariant = variant ?? inheritedVariant ?? "default";
  const selected = new Set(selectedKeys || uncontrolled);
  const select = (key) => {
    if (selectionMode === "none") {
      return;
    }
    const next = new Set(selectionMode === "multiple" ? selected : []);
    if (next.has(key)) {
      next.delete(key);
    } else {
      next.add(key);
    }
    if (!selectedKeys) {
      setUncontrolled(next);
    }
    onSelectionChange?.(next);
  };
  const popupClassName2 = cn.cn(
    "min-w-[8rem] p-2 outline-none",
    // `overflow-y-auto` (not `overflow-hidden`) so long menus scroll instead of being clipped.
    "max-h-(--available-height) overflow-y-auto overflow-x-hidden",
    resolvedVariant === "default" && "border border-edge rounded-md shadow-lg bg-surface",
    className
  );
  const context = { selected, select, selectionMode };
  const wrapSelection = (node) => {
    if (selectionMode !== "single" || primitiveKind === null) {
      return node;
    }
    const RadioGroup2 = menu.Menu.RadioGroup;
    const value = selected.values().next().value ?? null;
    return /* @__PURE__ */ jsxRuntime.jsx(RadioGroup2, { value, onValueChange: (next) => select(next), children: node });
  };
  const popupContent = /* @__PURE__ */ jsxRuntime.jsx(MenuContext.Provider, { value: context, children: wrapSelection(children) });
  if (primitiveKind === "context-menu") {
    return /* @__PURE__ */ jsxRuntime.jsx(contextMenu.ContextMenu.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(contextMenu.ContextMenu.Positioner, { className: "zen-layer-floating isolate", children: /* @__PURE__ */ jsxRuntime.jsx(
      contextMenu.ContextMenu.Popup,
      {
        ...props,
        "data-slot": "menu-content",
        className: cn.cn(motionClassName, popupClassName2),
        children: popupContent
      }
    ) }) });
  }
  if (primitiveKind === "menu") {
    return /* @__PURE__ */ jsxRuntime.jsx(menu.Menu.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
      menu.Menu.Positioner,
      {
        sideOffset: 4,
        ...inMenubar ? { align: "start" } : {},
        className: "zen-layer-floating isolate",
        children: /* @__PURE__ */ jsxRuntime.jsx(
          menu.Menu.Popup,
          {
            ...props,
            "data-slot": "menu-content",
            className: cn.cn(motionClassName, popupClassName2),
            children: popupContent
          }
        )
      }
    ) });
  }
  const handleKeyDown = (event) => {
    props.onKeyDown?.(event);
    if (event.defaultPrevented) {
      return;
    }
    const container = event.currentTarget;
    const items = Array.from(container.querySelectorAll(ITEM_ROLES)).filter(
      (item) => item.getAttribute("aria-disabled") !== "true"
    );
    if (!items.length) {
      return;
    }
    const current = items.indexOf(document.activeElement);
    let next = -1;
    if (event.key === "ArrowDown") {
      next = current < 0 ? 0 : (current + 1) % items.length;
    } else if (event.key === "ArrowUp") {
      next = current < 0 ? items.length - 1 : (current - 1 + items.length) % items.length;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = items.length - 1;
    }
    if (next < 0) {
      return;
    }
    event.preventDefault();
    for (const item of items) {
      item.tabIndex = -1;
    }
    items[next].tabIndex = 0;
    items[next].focus();
  };
  return /* @__PURE__ */ jsxRuntime.jsx(MenuContext.Provider, { value: context, children: /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "menu-content",
      role: "menu",
      tabIndex: 0,
      className: popupClassName2,
      onKeyDown: handleKeyDown,
      onFocus: (event) => {
        props.onFocus?.(event);
        if (event.target !== event.currentTarget) {
          return;
        }
        const first = event.currentTarget.querySelector(ITEM_ROLES);
        first?.focus();
      },
      children
    }
  ) });
}
function MenuItem({
  id,
  value,
  icon,
  label,
  showChecked,
  showSubMenuIcon,
  isDisabled,
  closeOnSelect,
  onAction,
  children,
  className,
  onClick,
  ...props
}) {
  const context = react.useContext(MenuContext);
  const primitiveKind = react.useContext(MenuPrimitiveContext);
  const submenuTriggerKind = react.useContext(MenuSubmenuTriggerContext);
  const { selectionMode } = context;
  const key = value ?? id ?? (typeof children === "string" ? children : "");
  const isSelected = context.selected.has(key);
  const withIndicator = showChecked ?? selectionMode !== "none";
  const activate = () => {
    if (!isDisabled) {
      context.select(key);
      onAction?.(key);
    }
  };
  const itemClassName = cn.cn(
    "text-sm flex items-center justify-between gap-3 px-2 py-1.5 rounded cursor-pointer outline-none w-full",
    "data-highlighted:bg-interactive focus-visible:bg-interactive",
    "data-disabled:text-fg-disabled data-disabled:cursor-default",
    "data-selected:font-semibold",
    className
  );
  const body = /* @__PURE__ */ jsxRuntime.jsxs(Row, { alignItems: "center", gap: true, children: [
    icon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { children: icon }),
    label && /* @__PURE__ */ jsxRuntime.jsx(Text, { children: label }),
    children
  ] });
  const staticIndicator = withIndicator && isSelected && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) });
  const subMenuIcon = showSubMenuIcon && /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {}) });
  const sharedProps = {
    ...props,
    "data-slot": "menu-item",
    id: id === void 0 ? void 0 : String(id),
    label,
    disabled: isDisabled,
    "data-selected": isSelected || void 0,
    className: itemClassName
  };
  const withClick = {
    ...sharedProps,
    onClick: (event) => {
      onClick?.(event);
      if (!event.defaultPrevented) {
        activate();
      }
    }
  };
  if (submenuTriggerKind === "context-menu") {
    return /* @__PURE__ */ jsxRuntime.jsxs(contextMenu.ContextMenu.SubmenuTrigger, { ...withClick, children: [
      body,
      subMenuIcon
    ] });
  }
  if (submenuTriggerKind === "menu") {
    return /* @__PURE__ */ jsxRuntime.jsxs(menu.Menu.SubmenuTrigger, { ...withClick, children: [
      body,
      subMenuIcon
    ] });
  }
  if (primitiveKind === "menu" || primitiveKind === "context-menu") {
    const parts = menu.Menu;
    if (selectionMode === "multiple") {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        parts.CheckboxItem,
        {
          ...sharedProps,
          checked: isSelected,
          closeOnClick: closeOnSelect ?? false,
          onCheckedChange: () => {
            if (!isDisabled) {
              context.select(key);
              onAction?.(key);
            }
          },
          children: [
            body,
            withIndicator && /* @__PURE__ */ jsxRuntime.jsx(
              parts.CheckboxItemIndicator,
              {
                className: "flex items-center",
                keepMounted: true,
                render: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "data-[unchecked]:invisible", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) }) })
              }
            )
          ]
        }
      );
    }
    if (selectionMode === "single") {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        parts.RadioItem,
        {
          ...sharedProps,
          value: key,
          closeOnClick: closeOnSelect ?? true,
          onClick: (event) => {
            onClick?.(event);
            if (!event.defaultPrevented && !isDisabled) {
              onAction?.(key);
            }
          },
          children: [
            body,
            withIndicator && /* @__PURE__ */ jsxRuntime.jsx(
              parts.RadioItemIndicator,
              {
                className: "flex items-center",
                keepMounted: true,
                render: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "data-[unchecked]:invisible", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Check, {}) }) })
              }
            )
          ]
        }
      );
    }
    return /* @__PURE__ */ jsxRuntime.jsxs(parts.Item, { ...withClick, closeOnClick: closeOnSelect, children: [
      body,
      staticIndicator,
      subMenuIcon
    ] });
  }
  const staticRole = selectionMode === "multiple" ? "menuitemcheckbox" : selectionMode === "single" ? "menuitemradio" : "menuitem";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      ...props,
      "data-slot": "menu-item",
      id: id === void 0 ? void 0 : String(id),
      role: staticRole,
      tabIndex: isDisabled ? void 0 : -1,
      "aria-disabled": isDisabled || void 0,
      "aria-checked": selectionMode === "none" ? void 0 : isSelected,
      "data-selected": isSelected || void 0,
      "data-disabled": isDisabled || void 0,
      className: itemClassName,
      onClick: (event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          activate();
        }
      },
      onKeyDown: (event) => {
        props.onKeyDown?.(event);
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate();
        }
      },
      children: [
        body,
        staticIndicator,
        subMenuIcon
      ]
    }
  );
}
function MenuSeparator({ className, ...props }) {
  const primitiveKind = react.useContext(MenuPrimitiveContext);
  const separatorClassName = cn.cn("block h-px bg-edge-muted my-2 -mx-2", className);
  if (primitiveKind === "context-menu") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      contextMenu.ContextMenu.Separator,
      {
        ...props,
        "data-slot": "menu-separator",
        className: separatorClassName
      }
    );
  }
  if (primitiveKind === "menu") {
    return /* @__PURE__ */ jsxRuntime.jsx(menu.Menu.Separator, { ...props, "data-slot": "menu-separator", className: separatorClassName });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "menu-separator",
      role: "separator",
      className: separatorClassName
    }
  );
}
function MenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "span",
    {
      ...props,
      "data-slot": "menu-shortcut",
      className: cn.cn("ml-auto text-xs tracking-widest text-fg-muted", className)
    }
  );
}
function MenuSection({
  title,
  maxHeight,
  className,
  style,
  children,
  ...props
}) {
  const primitiveKind = react.useContext(MenuPrimitiveContext);
  const groupClassName = cn.cn("[&:not(:last-child)]:mb-4", className);
  const groupStyle = style;
  const body = maxHeight ? /* @__PURE__ */ jsxRuntime.jsx(ScrollArea, { maxHeight, children }) : children;
  const content = /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    title && (primitiveKind === "context-menu" ? /* @__PURE__ */ jsxRuntime.jsx(contextMenu.ContextMenu.GroupLabel, { className: "text-sm font-bold px-2 py-1.5", children: title }) : primitiveKind === "menu" ? /* @__PURE__ */ jsxRuntime.jsx(menu.Menu.GroupLabel, { className: "text-sm font-bold px-2 py-1.5", children: title }) : /* @__PURE__ */ jsxRuntime.jsx("div", { className: "text-sm font-bold px-2 py-1.5", children: title })),
    body
  ] });
  if (primitiveKind === "context-menu") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      contextMenu.ContextMenu.Group,
      {
        ...props,
        "data-slot": "menu-group",
        className: groupClassName,
        style: groupStyle,
        children: content
      }
    );
  }
  if (primitiveKind === "menu") {
    return /* @__PURE__ */ jsxRuntime.jsx(
      menu.Menu.Group,
      {
        ...props,
        "data-slot": "menu-group",
        className: groupClassName,
        style: groupStyle,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "menu-group",
      role: "group",
      className: groupClassName,
      style: groupStyle,
      children: content
    }
  );
}
function SubMenuTrigger({ children }) {
  const items = react.Children.toArray(children);
  const primitiveKind = react.useContext(MenuPrimitiveContext);
  const targetKind = items[1]?.type?.zenOverlayType;
  const content = targetKind === "popover" ? items[1].props.children : items[1];
  if (primitiveKind === "context-menu") {
    return /* @__PURE__ */ jsxRuntime.jsxs(contextMenu.ContextMenu.SubmenuRoot, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(MenuSubmenuTriggerContext.Provider, { value: "context-menu", children: items[0] }),
      /* @__PURE__ */ jsxRuntime.jsx(MenuPrimitiveContext.Provider, { value: "context-menu", children: content })
    ] });
  }
  if (primitiveKind === "menu") {
    return /* @__PURE__ */ jsxRuntime.jsxs(menu.Menu.SubmenuRoot, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(MenuSubmenuTriggerContext.Provider, { value: "menu", children: items[0] }),
      /* @__PURE__ */ jsxRuntime.jsx(MenuPrimitiveContext.Provider, { value: "menu", children: content })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(popover.Popover.Root, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Trigger, { "data-slot": "submenu-trigger", render: items[0] }),
    /* @__PURE__ */ jsxRuntime.jsx(OverlayTriggerNestedContext.Provider, { value: true, children: items[1] })
  ] });
}
function ContextMenu({ children, isOpen, open, onOpenChange, ...props }) {
  const items = react.Children.toArray(children);
  return /* @__PURE__ */ jsxRuntime.jsxs(contextMenu.ContextMenu.Root, { ...props, open: isOpen ?? open, onOpenChange, children: [
    /* @__PURE__ */ jsxRuntime.jsx(ContextMenuTrigger, { render: items[0] }),
    /* @__PURE__ */ jsxRuntime.jsx(MenuPrimitiveContext.Provider, { value: "context-menu", children: items[1] })
  ] });
}
function ContextMenuTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    contextMenu.ContextMenu.Trigger,
    {
      "data-slot": "context-menu-trigger",
      ...props,
      className: (state) => cn.cn(
        "select-none",
        typeof className === "function" ? className(state) : className
      )
    }
  );
}
var ContextMenuRoot = contextMenu.ContextMenu.Root;
function ContextMenuContent(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(MenuPrimitiveContext.Provider, { value: "context-menu", children: /* @__PURE__ */ jsxRuntime.jsx(Menu, { ...props }) });
}
var PRESET_VALUES = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "none",
  "subgrid"
];
var BREAKPOINT_QUERIES = {
  base: "",
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
  "2xl": "@media (min-width: 1536px)"
};
function isPresetValue(value) {
  return PRESET_VALUES.includes(value);
}
function isResponsiveObject(value) {
  return value !== void 0 && typeof value !== "string" && typeof value === "object";
}
function hasCustomResponsiveValues(value) {
  if (!isResponsiveObject(value)) return false;
  return Object.values(value).some((v) => typeof v === "string" && !isPresetValue(v));
}
function generateResponsiveStyles(id, columns, rows) {
  const styles = [];
  const breakpoints2 = ["base", "sm", "md", "lg", "xl", "2xl"];
  for (const bp of breakpoints2) {
    const rules = [];
    if (isResponsiveObject(columns)) {
      const colValue = columns[bp];
      if (colValue && !isPresetValue(colValue)) {
        rules.push(`grid-template-columns: ${colValue}`);
      }
    }
    if (isResponsiveObject(rows)) {
      const rowValue = rows[bp];
      if (rowValue && !isPresetValue(rowValue)) {
        rules.push(`grid-template-rows: ${rowValue}`);
      }
    }
    if (rules.length > 0) {
      const query = BREAKPOINT_QUERIES[bp];
      const ruleBlock = `.${id} { ${rules.join("; ")}; }`;
      styles.push(query ? `${query} { ${ruleBlock} }` : ruleBlock);
    }
  }
  return styles.join(" ");
}
function Grid({
  display = "grid",
  justifyContent,
  justifyItems,
  alignContent,
  alignItems,
  gap,
  gapX,
  gapY,
  autoFlow,
  rows,
  columns,
  areas,
  className,
  style,
  children,
  ...props
}) {
  const reactId = react.useId();
  const id = `zen-grid-${reactId.replace(/:/g, "")}`;
  const isCustomColumns = typeof columns === "string" && !isPresetValue(columns);
  const isCustomRows = typeof rows === "string" && !isPresetValue(rows);
  const hasResponsiveCustomColumns = hasCustomResponsiveValues(columns);
  const hasResponsiveCustomRows = hasCustomResponsiveValues(rows);
  const needsStyleTag = hasResponsiveCustomColumns || hasResponsiveCustomRows;
  const classes = cn.cn(
    mapDisplay(display),
    mapJustifyContent(justifyContent),
    mapJustifyItems(justifyItems),
    mapAlignContent(alignContent),
    mapAlignItems(alignItems),
    mapGap(gap),
    mapGap(gapX, "x"),
    mapGap(gapY, "y"),
    mapGridAutoFlow(autoFlow),
    !isCustomColumns && !hasResponsiveCustomColumns && mapGridColumns(columns),
    !isCustomRows && !hasResponsiveCustomRows && mapGridRows(rows),
    needsStyleTag && id,
    className
  );
  const inlineStyles = {
    ...style,
    ...isCustomColumns && { gridTemplateColumns: columns },
    ...isCustomRows && { gridTemplateRows: rows },
    ...areas && { gridTemplateAreas: areas }
  };
  const hasInlineStyles = isCustomColumns || isCustomRows || areas || style && Object.keys(style).length > 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    needsStyleTag && /* @__PURE__ */ jsxRuntime.jsx("style", { children: generateResponsiveStyles(id, columns, rows) }),
    /* @__PURE__ */ jsxRuntime.jsx(Box, { ...props, className: classes, style: hasInlineStyles ? inlineStyles : void 0, children })
  ] });
}

// src/lib/utils.ts
function debounce(func, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
}
function mapIdProperty(data) {
  return data.length && data?.[0]?.id === void 0 ? data.map((row, id) => ({ ...row, id })) : data;
}
function DataCard({ data = [], labelWidth = "auto", ...props }) {
  const rows = mapIdProperty(data);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Grid,
    {
      width: "100%",
      columns: `${labelWidth} 1fr`,
      border: true,
      borderRadius: "lg",
      padding: "6",
      ...props,
      children: rows.map((row, index) => {
        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: rows are static display data
          /* @__PURE__ */ jsxRuntime.jsxs(react.Fragment, { children: [
            /* @__PURE__ */ jsxRuntime.jsx(Row, { paddingY: "3", border: "bottom", borderColor: "muted", paddingRight: "6", children: /* @__PURE__ */ jsxRuntime.jsx(Text, { weight: "bold", children: row?.label }) }),
            /* @__PURE__ */ jsxRuntime.jsx(Row, { paddingY: "3", border: "bottom", children: /* @__PURE__ */ jsxRuntime.jsx(Text, { children: row?.value }) })
          ] }, index)
        );
      })
    }
  );
}
var TableSelectionContext = react.createContext(null);
var TableSelectionScopeContext = react.createContext(null);
var gridTemplateColumns = "repeat(auto-fit, minmax(140px, 1fr))";
var alignClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end"
};
var INTERACTIVE_SELECTOR = 'a, button, input, select, textarea, [role="button"], [role="checkbox"]';
function TableContainer({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "table-container",
      className: cn.cn("relative w-full overflow-x-auto", className)
    }
  );
}
function Table({
  children,
  className,
  selectionMode = "none",
  selectedKeys: controlledSelectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  ...props
}) {
  const [uncontrolledSelectedKeys, setUncontrolledSelectedKeys] = react.useState(
    () => new Set(defaultSelectedKeys)
  );
  const [rowKeys, setRowKeys] = react.useState(() => /* @__PURE__ */ new Set());
  const selectedKeys = controlledSelectedKeys === void 0 ? uncontrolledSelectedKeys : new Set(controlledSelectedKeys);
  const updateSelection = react.useCallback(
    (next) => {
      if (controlledSelectedKeys === void 0) {
        setUncontrolledSelectedKeys(next);
      }
      onSelectionChange?.(next);
    },
    [controlledSelectedKeys, onSelectionChange]
  );
  const registerRow = react.useCallback((key) => {
    setRowKeys((current) => {
      if (current.has(key)) {
        return current;
      }
      const next = new Set(current);
      next.add(key);
      return next;
    });
    return () => {
      setRowKeys((current) => {
        if (!current.has(key)) {
          return current;
        }
        const next = new Set(current);
        next.delete(key);
        return next;
      });
    };
  }, []);
  const setRowSelected = react.useCallback(
    (key, selected) => {
      if (selectionMode === "none") {
        return;
      }
      const next = new Set(selectionMode === "multiple" ? selectedKeys : []);
      if (selected) {
        next.add(key);
      } else {
        next.delete(key);
      }
      updateSelection(next);
    },
    [selectedKeys, selectionMode, updateSelection]
  );
  const setAllSelected = react.useCallback(
    (selected) => {
      if (selectionMode !== "multiple") {
        return;
      }
      updateSelection(selected ? new Set(rowKeys) : /* @__PURE__ */ new Set());
    },
    [rowKeys, selectionMode, updateSelection]
  );
  const selection = react.useMemo(
    () => ({
      selectionMode,
      selectedKeys,
      rowKeys,
      registerRow,
      setRowSelected,
      setAllSelected
    }),
    [registerRow, rowKeys, selectedKeys, selectionMode, setAllSelected, setRowSelected]
  );
  return /* @__PURE__ */ jsxRuntime.jsx(TableSelectionContext.Provider, { value: selection, children: /* @__PURE__ */ jsxRuntime.jsx(
    "table",
    {
      ...props,
      role: "table",
      "data-slot": "table",
      "data-selection-mode": selectionMode,
      className: cn.cn("grid text-sm w-full relative", className),
      children
    }
  ) });
}
function TableHeader({ children, className, style, ...props }) {
  const cols = style?.gridTemplateColumns || gridTemplateColumns;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "thead",
    {
      ...props,
      role: "rowgroup",
      "data-slot": "table-header",
      className: cn.cn(
        "[&>tr]:grid [&>tr]:border-b [&>tr]:border-edge [&>tr]:[grid-template-columns:var(--grid-cols)]",
        className
      ),
      style: { "--grid-cols": cols },
      children: /* @__PURE__ */ jsxRuntime.jsx("tr", { role: "row", "data-slot": "table-header-row", children: /* @__PURE__ */ jsxRuntime.jsx(TableSelectionScopeContext.Provider, { value: { type: "header" }, children }) })
    }
  );
}
function TableBody({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx("tbody", { ...props, role: "rowgroup", "data-slot": "table-body", className: cn.cn("contents", className), children });
}
function TableFooter({ children, className, style, ...props }) {
  const cols = style?.gridTemplateColumns || gridTemplateColumns;
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tfoot",
    {
      ...props,
      role: "rowgroup",
      "data-slot": "table-footer",
      className: cn.cn(
        "font-medium",
        "[&>tr]:grid [&>tr]:border-t [&>tr]:border-edge [&>tr]:[grid-template-columns:var(--grid-cols)]",
        className
      ),
      style: { "--grid-cols": cols },
      children: /* @__PURE__ */ jsxRuntime.jsx("tr", { role: "row", "data-slot": "table-footer-row", children })
    }
  );
}
function TableCaption({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "caption",
    {
      ...props,
      "data-slot": "table-caption",
      className: cn.cn("mt-4 text-sm text-fg-muted", className)
    }
  );
}
function TableRow({ children, className, style, id, ...props }) {
  const generatedId = react.useId();
  const selection = react.useContext(TableSelectionContext);
  const isSelectable = selection !== null && selection.selectionMode !== "none";
  if (process.env.NODE_ENV !== "production" && isSelectable && id === void 0) {
    console.warn(
      "[react-zen] <TableRow> requires a stable `id` when the table has a selection mode. A generated id is used as a fallback, which resets the selection whenever the row remounts."
    );
  }
  const rowKey = id !== void 0 ? String(id) : generatedId;
  const isSelected = selection?.selectedKeys.has(rowKey) ?? false;
  const registerRow = selection?.registerRow;
  const firstRowKey = selection ? selection.rowKeys.values().next().value : void 0;
  react.useEffect(() => registerRow?.(rowKey), [registerRow, rowKey]);
  const selectFromEvent = (event) => {
    if (!selection || !isSelectable || event.defaultPrevented) {
      return;
    }
    if (event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR)) {
      return;
    }
    selection.setRowSelected(rowKey, !isSelected);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "tr",
    {
      ...props,
      role: "row",
      "data-slot": "table-row",
      "data-row-id": id,
      "data-selected": isSelected || void 0,
      "aria-selected": isSelectable ? isSelected : void 0,
      tabIndex: isSelectable ? props.tabIndex ?? (rowKey === firstRowKey ? 0 : -1) : void 0,
      className: cn.cn(
        "grid border-b border-edge-muted min-h-10",
        isSelectable && "cursor-pointer outline-none data-[selected]:bg-interactive focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
        className
      ),
      style: { gridTemplateColumns, ...style },
      onClick: (event) => {
        props.onClick?.(event);
        selectFromEvent(event);
      },
      onKeyDown: (event) => {
        props.onKeyDown?.(event);
        if (event.defaultPrevented || !isSelectable) {
          return;
        }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          const sibling = event.key === "ArrowDown" ? event.currentTarget.nextElementSibling : event.currentTarget.previousElementSibling;
          if (sibling instanceof HTMLElement) {
            event.preventDefault();
            sibling.focus();
          }
          return;
        }
        if ((event.key === "Enter" || event.key === " ") && !(event.target instanceof Element && event.target.closest(INTERACTIVE_SELECTOR))) {
          event.preventDefault();
          selection?.setRowSelected(rowKey, !isSelected);
        }
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(TableSelectionScopeContext.Provider, { value: { type: "row", rowKey }, children })
    }
  );
}
function TableColumn({
  children,
  className,
  align,
  isRowHeader: _isRowHeader,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "th",
    {
      ...props,
      role: "columnheader",
      scope: "col",
      "data-slot": "table-column",
      className: cn.cn(
        "flex p-2 text-left font-bold flex-1 first:pl-0 last:pr-0",
        align && alignClasses[align],
        className
      ),
      children
    }
  );
}
var TableHead = TableColumn;
function TableCell({ children, className, align, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "td",
    {
      ...props,
      role: "cell",
      "data-slot": "table-cell",
      className: cn.cn(
        "flex p-2 flex-1 first:pl-0 last:pr-0",
        "[&_a]:font-medium [&_a]:underline [&_a]:decoration-edge [&_a]:underline-offset-4",
        "[&_a:hover]:decoration-primary",
        align && alignClasses[align],
        className
      ),
      children
    }
  );
}
function TableSelectionCheckbox({
  isDisabled,
  onChange,
  ...props
}) {
  const selection = react.useContext(TableSelectionContext);
  const scope = react.useContext(TableSelectionScopeContext);
  if (!selection || !scope) {
    return null;
  }
  const isHeader = scope.type === "header";
  const selectedRowCount = Array.from(selection.rowKeys).filter(
    (key) => selection.selectedKeys.has(key)
  ).length;
  const checked = isHeader ? selection.rowKeys.size > 0 && selectedRowCount === selection.rowKeys.size : scope.rowKey ? selection.selectedKeys.has(scope.rowKey) : false;
  const indeterminate = isHeader && selectedRowCount > 0 && selectedRowCount < selection.rowKeys.size;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Checkbox,
    {
      ...props,
      "aria-label": props["aria-label"] ?? (isHeader ? "Select all rows" : "Select row"),
      isSelected: checked,
      isIndeterminate: indeterminate,
      isDisabled: isDisabled || selection.selectionMode === "none" || isHeader && selection.selectionMode !== "multiple",
      onChange: (selected) => {
        onChange?.(selected);
        if (isHeader) {
          selection.setAllSelected(selected);
        } else if (scope.rowKey) {
          selection.setRowSelected(scope.rowKey, selected);
        }
      }
    }
  );
}
function DataTable({
  data = [],
  displayMode = "table",
  className,
  children,
  ...props
}) {
  const rows = mapIdProperty(data);
  const widths = [];
  const columns = react.Children.map(children, (child) => {
    if (child) {
      widths.push(child?.props?.width || "1fr");
      return { ...child?.props };
    }
    return null;
  })?.filter((n) => n);
  const gridTemplateColumns2 = widths.join(" ");
  if (displayMode === "cards") {
    return /* @__PURE__ */ jsxRuntime.jsx(Grid, { id: "grid", width: "100%", gap: "6", children: rows.map((row, index) => {
      const items = columns?.filter(({ hidden }) => !hidden).map(({ id, label, children: children2 }) => {
        const value = typeof children2 === "function" ? children2(row, index) : children2 ?? row[id];
        return { id, label, value };
      });
      return /* @__PURE__ */ jsxRuntime.jsx(DataCard, { data: items }, `${row.id}-${index}`);
    }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(Table, { ...props, "data-slot": "data-table", className: cn.cn("relative text-sm", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(TableHeader, { style: { gridTemplateColumns: gridTemplateColumns2 }, children: columns?.map(({ id, label, as, hidden, width, ...columnProps }) => {
      if (hidden) {
        return null;
      }
      return /* @__PURE__ */ react.createElement(TableColumn, { ...columnProps, key: id, id }, label);
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(TableBody, { children: rows.map((row, index) => {
      const rowId = row.id !== void 0 && row.id !== null ? String(row.id) : void 0;
      return /* @__PURE__ */ jsxRuntime.jsx(TableRow, { id: rowId, style: { gridTemplateColumns: gridTemplateColumns2 }, children: columns?.map(
        ({
          id,
          label: _label,
          width: _width,
          as,
          hidden,
          className: className2,
          children: children2,
          ...cellProps
        }) => {
          if (hidden) {
            return null;
          }
          const value = typeof children2 === "function" ? children2(row, index) : children2 || row[id];
          return /* @__PURE__ */ react.createElement(
            TableCell,
            {
              ...cellProps,
              key: id,
              className: cn.cn("items-center", className2)
            },
            as ? react.createElement(as, {}, value) : value
          );
        }
      ) }, rowId ?? `row-${index}`);
    }) })
  ] });
}
function DataColumn(_props) {
  return null;
}
function DatePicker({
  id,
  value,
  defaultValue,
  minValue,
  maxValue,
  label,
  placeholder = "Select date",
  locale,
  isDisabled,
  isReadOnly,
  isOpen,
  defaultOpen,
  onOpenChange,
  formatOptions = { dateStyle: "medium" },
  onChange,
  triggerProps,
  buttonProps,
  calendarProps,
  className
}) {
  const fieldId = useFieldId(id ?? triggerProps?.id ?? buttonProps?.id);
  const [uncontrolledOpen, setUncontrolledOpen] = react.useState(defaultOpen ?? false);
  const [uncontrolledValue, setUncontrolledValue] = react.useState(defaultValue);
  const date = value ?? uncontrolledValue;
  const open = isOpen ?? uncontrolledOpen;
  const disabled = isDisabled ?? triggerProps?.disabled ?? buttonProps?.disabled;
  const setOpen = (nextOpen) => {
    if (isOpen === void 0) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen);
  };
  const handleChange = (nextDate) => {
    if (isReadOnly) {
      return;
    }
    if (value === void 0) {
      setUncontrolledValue(nextDate);
    }
    onChange?.(nextDate);
    setOpen(false);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: cn.cn("flex flex-col gap-1", className), "data-slot": "date-picker", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ jsxRuntime.jsxs(popover.Popover.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        popover.Popover.Trigger,
        {
          render: /* @__PURE__ */ jsxRuntime.jsxs(
            "button",
            {
              type: "button",
              ...buttonProps,
              ...triggerProps,
              id: fieldId,
              "data-slot": "date-picker-trigger",
              disabled,
              "aria-readonly": isReadOnly || void 0,
              className: inputField({
                className: cn.cn(
                  "w-full justify-start gap-3 px-3 py-0 whitespace-nowrap cursor-pointer outline-none",
                  "hover:border-edge-strong",
                  buttonProps?.className,
                  triggerProps?.className
                )
              }),
              children: [
                /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.CalendarDays, {}) }),
                date ? new Intl.DateTimeFormat(locale, formatOptions).format(date) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-fg-muted", children: placeholder })
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Positioner, { sideOffset: 4, className: "zen-layer-floating", children: /* @__PURE__ */ jsxRuntime.jsx(
        popover.Popover.Popup,
        {
          "data-slot": "date-picker-popup",
          className: "zen-popover outline-none bg-surface-overlay border border-edge rounded-lg shadow-lg p-4",
          children: /* @__PURE__ */ jsxRuntime.jsx(
            Calendar,
            {
              ...calendarProps,
              value: date,
              minValue,
              maxValue,
              isReadOnly,
              onChange: handleChange
            }
          )
        }
      ) }) })
    ] })
  ] });
}
var sizeMap2 = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-3 h-3"
};
function Dot({ size }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Box, { className: cn.cn("zen-dot", sizeMap2[size]) });
}
var gapMap2 = {
  sm: "1",
  md: "1.5",
  lg: "2"
};
function Dots({ size = "md", className, color: _color, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Row, { ...props, alignItems: "center", gap: gapMap2[size], className, children: [
    /* @__PURE__ */ jsxRuntime.jsx(Dot, { size }),
    /* @__PURE__ */ jsxRuntime.jsx(Dot, { size }),
    /* @__PURE__ */ jsxRuntime.jsx(Dot, { size })
  ] });
}
var DrawerModalContext = react.createContext(true);
function Drawer({ modal: modal2 = true, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(DrawerModalContext.Provider, { value: modal2, children: /* @__PURE__ */ jsxRuntime.jsx(drawer.Drawer.Root, { modal: modal2, ...props }) });
}
var DrawerTrigger = drawer.Drawer.Trigger;
var DrawerClose = drawer.Drawer.Close;
function DrawerTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    drawer.Drawer.Title,
    {
      "data-slot": "drawer-title",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "xl" }),
      className
    }
  );
}
function DrawerDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    drawer.Drawer.Description,
    {
      "data-slot": "drawer-description",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }),
      className
    }
  );
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("div", { ...props, "data-slot": "drawer-header", className: cn.cn("flex flex-col gap-1", className) });
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      "data-slot": "drawer-footer",
      className: cn.cn("mt-auto flex flex-col gap-2", className)
    }
  );
}
var DrawerContent = react.forwardRef(
  ({ children, className, portalProps, ...props }, ref) => {
    const modal2 = react.useContext(DrawerModalContext);
    return /* @__PURE__ */ jsxRuntime.jsxs(drawer.Drawer.Portal, { ...portalProps, children: [
      modal2 !== false && /* @__PURE__ */ jsxRuntime.jsx(
        drawer.Drawer.Backdrop,
        {
          "data-slot": "drawer-backdrop",
          className: "zen-drawer-backdrop zen-layer-backdrop fixed inset-0 bg-black/80"
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(drawer.Drawer.Viewport, { className: "zen-layer-modal fixed inset-0 isolate pointer-events-none", children: /* @__PURE__ */ jsxRuntime.jsx(
        drawer.Drawer.Popup,
        {
          ...props,
          ref,
          "data-slot": "drawer",
          className: (state) => cn.cn(
            "zen-drawer pointer-events-auto border border-edge bg-surface text-fg shadow-xl outline-none",
            typeof className === "function" ? className(state) : className
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(drawer.Drawer.Content, { className: "flex min-h-0 flex-col gap-4 overflow-auto p-6", children })
        }
      ) })
    ] });
  }
);
DrawerContent.displayName = "DrawerContent";
var Empty = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "empty",
      className: cn.cn(
        "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-dashed border-edge p-6 text-center text-balance md:p-12",
        className
      )
    }
  )
);
Empty.displayName = "Empty";
var EmptyHeader = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "empty-header",
      className: cn.cn("flex max-w-sm flex-col items-center gap-2 text-center", className)
    }
  )
);
EmptyHeader.displayName = "EmptyHeader";
var EmptyMedia = react.forwardRef(
  ({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "empty-icon",
      className: emptyMedia({ variant, className })
    }
  )
);
EmptyMedia.displayName = "EmptyMedia";
var EmptyTitle = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "empty-title",
      className: cn.cn("text-lg font-medium tracking-tight", className)
    }
  )
);
EmptyTitle.displayName = "EmptyTitle";
var EmptyDescription = react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
  "p",
  {
    ...props,
    ref,
    "data-slot": "empty-description",
    className: cn.cn(
      "text-fg-muted [&>a:hover]:text-fg text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4",
      className
    )
  }
));
EmptyDescription.displayName = "EmptyDescription";
var EmptyContent = react.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      "data-slot": "empty-content",
      className: cn.cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      )
    }
  )
);
EmptyContent.displayName = "EmptyContent";
function Tooltip({
  children,
  className,
  positionerClassName: positionerClassName2,
  placement,
  side,
  sideOffset = 4,
  showArrow,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(tooltip$1.Tooltip.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    tooltip$1.Tooltip.Positioner,
    {
      ...props,
      side: placement ?? side,
      sideOffset,
      className: cn.cn("zen-layer-floating isolate", positionerClassName2),
      children: /* @__PURE__ */ jsxRuntime.jsxs(
        tooltip$1.Tooltip.Popup,
        {
          "data-slot": "tooltip",
          className: cn.cn(
            "group w-fit max-w-xs outline-none",
            "origin-(--transform-origin) transition-[transform,opacity] duration-200 ease-out",
            "data-starting-style:opacity-0 data-starting-style:scale-95",
            "data-ending-style:opacity-0 data-ending-style:scale-95 data-ending-style:ease-in",
            "motion-reduce:transition-none",
            tooltip(),
            className
          ),
          children: [
            showArrow && /* @__PURE__ */ jsxRuntime.jsx(
              tooltip$1.Tooltip.Arrow,
              {
                "data-slot": "tooltip-arrow",
                className: cn.cn(
                  "w-3 h-1.5",
                  "data-[side=top]:-bottom-1.5 data-[side=top]:rotate-180",
                  "data-[side=bottom]:-top-1.5",
                  "data-[side=left]:-right-[9px] data-[side=left]:rotate-90",
                  "data-[side=right]:-left-[9px] data-[side=right]:-rotate-90"
                ),
                children: /* @__PURE__ */ jsxRuntime.jsx("svg", { "aria-hidden": "true", viewBox: "0 0 12 6", className: "block w-full h-full", children: /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M0 6 6 0l6 6Z", className: "fill-surface-inverted" }) })
              }
            ),
            children
          ]
        }
      )
    }
  ) });
}
var TooltipContent = Tooltip;
var TooltipBubble = react.forwardRef(
  ({ children, className, color: _color, showArrow: _showArrow, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    Box,
    {
      ...props,
      ref,
      "data-slot": "tooltip-bubble",
      className: cn.cn("w-fit max-w-xs", tooltip(), className),
      children
    }
  )
);
TooltipBubble.displayName = "TooltipBubble";
var EDGE_PADDING = 8;
var POINTER_OFFSET = 10;
function FloatingTooltip({
  className,
  style,
  children,
  isOpen = true,
  ...props
}) {
  const ref = react.useRef(null);
  const [position, setPosition] = react.useState({ x: -1e3, y: -1e3 });
  react.useEffect(() => {
    if (!isOpen || typeof window === "undefined") {
      return;
    }
    let frame = 0;
    let pointer = { x: 0, y: 0 };
    const flush = () => {
      frame = 0;
      const rect = ref.current?.getBoundingClientRect();
      const width = rect?.width ?? 0;
      const height = rect?.height ?? 0;
      const half = width / 2;
      const minX = half + EDGE_PADDING;
      const maxX = Math.max(minX, window.innerWidth - half - EDGE_PADDING);
      const minY = height + POINTER_OFFSET + EDGE_PADDING;
      const maxY = Math.max(minY, window.innerHeight - EDGE_PADDING);
      setPosition({
        x: Math.min(Math.max(pointer.x, minX), maxX),
        y: Math.min(Math.max(pointer.y, minY), maxY)
      });
    };
    const handler = (event) => {
      pointer = { x: event.clientX, y: event.clientY };
      if (!frame) {
        frame = requestAnimationFrame(flush);
      }
    };
    document.addEventListener("mousemove", handler, { passive: true });
    return () => {
      document.removeEventListener("mousemove", handler);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, [isOpen]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    TooltipBubble,
    {
      ...props,
      ref,
      role: "tooltip",
      className: cn.cn(
        "zen-layer-floating fixed pointer-events-none -translate-x-1/2 -translate-y-[calc(100%+10px)]",
        className
      ),
      style: { ...style, left: position.x, top: position.y },
      children
    }
  );
}
function Form({
  autoComplete,
  onSubmit,
  error,
  preventSubmit = false,
  // useForm props
  mode,
  disabled,
  reValidateMode,
  defaultValues,
  values,
  errors,
  resetOptions,
  resolver,
  context,
  shouldFocusError,
  shouldUnregister,
  shouldUseNativeValidation,
  progressive,
  criteriaMode,
  delayError,
  // Element props
  className,
  children,
  ...props
}) {
  const formValues = reactHookForm.useForm({
    mode,
    disabled,
    reValidateMode,
    defaultValues,
    values,
    errors,
    resetOptions,
    resolver,
    context,
    shouldFocusError,
    shouldUnregister,
    shouldUseNativeValidation,
    progressive,
    criteriaMode,
    delayError
  });
  const { handleSubmit } = formValues;
  const onKeyDown = !onSubmit || preventSubmit ? (e) => e.key === "Enter" && e.preventDefault() : void 0;
  const lastValues = react.useRef(void 0);
  react.useEffect(() => {
    if (values === void 0) {
      return;
    }
    const serialized = JSON.stringify(values);
    if (lastValues.current === serialized) {
      return;
    }
    lastValues.current = serialized;
    formValues.reset(values);
  }, [formValues, values]);
  react.useEffect(() => {
    if (formValues.formState.isSubmitted) {
      formValues.reset(void 0, { keepDirty: true, keepValues: true });
    }
  }, [error, formValues]);
  return /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.FormProvider, { ...formValues, children: /* @__PURE__ */ jsxRuntime.jsxs(
    "form",
    {
      ...props,
      autoComplete,
      className: cn.cn("flex flex-col relative text-sm gap-3", className),
      onSubmit: onSubmit ? handleSubmit(onSubmit) : void 0,
      onKeyDown,
      children: [
        error && /* @__PURE__ */ jsxRuntime.jsx(Alert, { variant: "danger", children: /* @__PURE__ */ jsxRuntime.jsx(AlertTitle, { className: "justify-self-center", children: error instanceof Error ? error?.message : error }) }),
        typeof children === "function" ? children(formValues) : children
      ]
    }
  ) });
}
function FormButtons({ fill, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Row, { paddingTop: "3", gap: "3", justifyContent: "flex-end", ...props, children });
}
function FormController({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactHookForm.Controller, { ...props, render: children });
}
function FormField({
  id,
  name,
  description,
  label,
  rules,
  className,
  children,
  color: _color,
  ...props
}) {
  const fieldId = useFieldId(id);
  const descriptionId = `${fieldId}-description`;
  const errorId = `${fieldId}-error`;
  const context = reactHookForm.useFormContext();
  const { control } = context;
  const { invalid, error } = context.getFieldState(name);
  const describedBy = [description && descriptionId, invalid && errorId].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(Column, { ...props, gap: "1", className, children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(FormController, { name, control, rules, children: ({ field }) => {
      return react.Children.map(
        typeof children === "function" ? children({ context, field }) : children,
        (child) => {
          if (!child) {
            return null;
          }
          return react.cloneElement(child, {
            ...field,
            id: fieldId,
            "aria-invalid": invalid || void 0,
            "aria-describedby": [child.props?.["aria-describedby"], describedBy].filter(Boolean).join(" ") || void 0
          });
        }
      );
    } }),
    description && /* @__PURE__ */ jsxRuntime.jsx(Text, { id: descriptionId, color: "muted", children: description }),
    invalid && /* @__PURE__ */ jsxRuntime.jsx(Text, { id: errorId, role: "alert", className: "text-status-error", children: error?.message })
  ] });
}
function FormFieldArray({
  id,
  name,
  description,
  label,
  rules,
  className,
  children,
  color: _color,
  ...props
}) {
  const fieldId = useFieldId(id);
  const context = reactHookForm.useFormContext();
  const { formState, control, register } = context;
  const fieldProps = reactHookForm.useFieldArray({
    control,
    name
  });
  register(name, rules);
  const errors = formState?.errors || {};
  const errorMessage = errors[name]?.message;
  return /* @__PURE__ */ jsxRuntime.jsxs(Column, { ...props, gap: "1", className, children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
    description && /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted", children: description }),
    errorMessage && /* @__PURE__ */ jsxRuntime.jsx(Text, { role: "alert", className: "text-status-error", children: errorMessage }),
    children({ ...context, ...fieldProps })
  ] });
}
function FormResetButton({
  values,
  children,
  onPress,
  onClick,
  ...props
}) {
  const { reset } = reactHookForm.useFormContext();
  const handleClick = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) {
      return;
    }
    reset(values);
    onPress?.(e);
  };
  return /* @__PURE__ */ jsxRuntime.jsx(Button, { ...props, type: "reset", onClick: handleClick, children });
}
var sizeMap3 = {
  sm: "w-4 h-4",
  md: "w-7 h-7",
  lg: "w-12 h-12"
};
function Spinner(props) {
  const { size = "md", quiet, className, isDisabled, color: _color, ...domProps } = props;
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box,
    {
      ...domProps,
      role: "status",
      "aria-label": props["aria-label"] ?? "Loading",
      "data-slot": "spinner",
      className: cn.cn("relative inline-flex justify-center items-center", sizeMap3[size], className),
      children: /* @__PURE__ */ jsxRuntime.jsxs("svg", { viewBox: "25 25 50 50", className: "zen-spinner-svg w-full h-full", children: [
        !quiet && /* @__PURE__ */ jsxRuntime.jsx("circle", { className: "zen-spinner-track stroke-interactive", cx: "50", cy: "50", r: "20" }),
        /* @__PURE__ */ jsxRuntime.jsx(
          "circle",
          {
            className: cn.cn(
              "zen-spinner-fill",
              isDisabled ? "stroke-content-disabled" : "stroke-primary"
            ),
            cx: "50",
            cy: "50",
            r: "20"
          }
        )
      ] })
    }
  );
}
function LoadingButton({
  isLoading,
  isDisabled,
  showText = true,
  children,
  ...props
}) {
  const loading = !!isLoading;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      ...props,
      "data-slot": "loading-button",
      "data-loading": loading || void 0,
      "aria-busy": loading,
      isDisabled: isDisabled || loading,
      children: [
        loading && /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(Spinner, { isDisabled }) }),
        showText && children
      ]
    }
  );
}
function FormSubmitButton({
  variant = "primary",
  isDisabled,
  isLoading,
  requireValid = false,
  children,
  ...props
}) {
  const {
    formState: { isDirty, isValid, isSubmitting }
  } = reactHookForm.useFormContext();
  return /* @__PURE__ */ jsxRuntime.jsx(
    LoadingButton,
    {
      ...props,
      type: "submit",
      variant,
      isDisabled: isDisabled ?? (requireValid ? !isDirty || !isValid || isSubmitting : isSubmitting),
      isLoading: isLoading ?? isSubmitting,
      children
    }
  );
}
var OPEN_DELAY = 300;
var CLOSE_DELAY = 500;
function HoverTrigger({
  isOpen,
  defaultOpen,
  onOpenChange,
  onHoverStart,
  onHoverEnd,
  delay = OPEN_DELAY,
  closeDelay = CLOSE_DELAY,
  className,
  children
}) {
  const items = react.Children.toArray(children);
  const [triggerElement, popupElement] = items;
  const handleOpenChange = (open) => {
    onOpenChange?.(open);
    if (open) {
      onHoverStart?.();
    } else {
      onHoverEnd?.();
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    popover.Popover.Root,
    {
      ...isOpen === void 0 ? { defaultOpen } : { open: isOpen },
      onOpenChange: handleOpenChange,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          popover.Popover.Trigger,
          {
            "data-slot": "hover-trigger",
            openOnHover: true,
            delay,
            closeDelay,
            render: triggerElement
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Positioner, { className: "zen-layer-floating isolate", sideOffset: 4, children: /* @__PURE__ */ jsxRuntime.jsx(
          popover.Popover.Popup,
          {
            "data-slot": "hover-content",
            className: cn.cn(
              "max-w-(--available-width) max-h-(--available-height) overflow-y-auto outline-none",
              "bg-surface-overlay border border-edge rounded-lg shadow-lg p-4",
              "origin-(--transform-origin) transition-[transform,opacity] duration-200 ease-out",
              "data-starting-style:opacity-0 data-starting-style:scale-95",
              "data-ending-style:opacity-0 data-ending-style:scale-95 data-ending-style:ease-in",
              "motion-reduce:transition-none",
              className
            ),
            children: /* @__PURE__ */ jsxRuntime.jsx(OverlayTriggerNestedContext.Provider, { value: true, children: /* @__PURE__ */ jsxRuntime.jsx(OverlayContentProvider, { close: () => handleOpenChange(false), kind: "popover", children: popupElement }) })
          }
        ) }) })
      ]
    }
  );
}
var breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
var DEBOUNCE_DELAY_MS = 150;
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = react.useState(null);
  const calculateBreakpoint = react.useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    const width = window.innerWidth;
    let currentBreakpoint = "base";
    for (const [key, minWidth] of Object.entries(breakpoints)) {
      if (width >= minWidth) {
        currentBreakpoint = key;
      }
    }
    setBreakpoint(currentBreakpoint);
  }, []);
  react.useEffect(() => {
    calculateBreakpoint();
    const debouncedResize = debounce(calculateBreakpoint, DEBOUNCE_DELAY_MS);
    window.addEventListener("resize", debouncedResize);
    return () => {
      window.removeEventListener("resize", debouncedResize);
    };
  }, [calculateBreakpoint]);
  return breakpoint;
}
function useDebounce(value, delay) {
  const [debouncedValue, setValue] = react.useState(value);
  react.useEffect(() => {
    const timer = setTimeout(() => {
      setValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
var PALETTES = ["neutral", "slate", "gray", "zinc", "stone"];
var THEME_STORAGE_KEY = "theme";
var PALETTE_STORAGE_KEY = "zen.palette";
function getThemeFromDOM() {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function getPaletteFromDOM() {
  if (typeof window === "undefined") return "neutral";
  const palette = document.documentElement.getAttribute("data-palette");
  return palette && PALETTES.includes(palette) ? palette : "neutral";
}
function getStoredPalette() {
  if (typeof window === "undefined") return "neutral";
  const stored = localStorage.getItem(PALETTE_STORAGE_KEY);
  return stored && PALETTES.includes(stored) ? stored : "neutral";
}
function resolveTheme(preferred, colorScheme) {
  if (preferred) {
    return preferred;
  }
  if (colorScheme === "light" || colorScheme === "dark") {
    return colorScheme;
  }
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}
function applyTheme(theme) {
  if (typeof window === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
function applyPalette(palette) {
  if (typeof window === "undefined") return;
  document.documentElement.setAttribute("data-palette", palette);
}
var useTheme = zustand.create((set, get) => ({
  theme: "light",
  palette: "neutral",
  setTheme: (theme) => {
    set({ theme });
    if (typeof window !== "undefined") {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
      applyTheme(theme);
    }
  },
  setPalette: (palette) => {
    set({ palette });
    if (typeof window !== "undefined") {
      localStorage.setItem(PALETTE_STORAGE_KEY, palette);
      applyPalette(palette);
    }
  },
  syncTheme: () => {
    const theme = getThemeFromDOM();
    const palette = getPaletteFromDOM();
    const state = get();
    if (theme !== state.theme) {
      set({ theme });
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (palette !== state.palette) {
      set({ palette });
    }
  },
  initTheme: (preferred, colorScheme) => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    const initial = resolveTheme(preferred || stored || void 0, colorScheme);
    set({ theme: initial });
    applyTheme(initial);
  },
  initPalette: (preferred) => {
    if (typeof window === "undefined") return;
    const initial = preferred || getStoredPalette();
    set({ palette: initial });
    applyPalette(initial);
  }
}));
function useInitTheme(preferred, colorScheme, preferredPalette) {
  const initTheme = useTheme((s) => s.initTheme);
  const initPalette = useTheme((s) => s.initPalette);
  const syncTheme = useTheme((s) => s.syncTheme);
  react.useLayoutEffect(() => {
    initTheme(preferred, colorScheme);
    initPalette(preferredPalette);
  }, [preferred, colorScheme, preferredPalette, initTheme, initPalette]);
  react.useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "class" || mutation.attributeName === "data-palette") {
          syncTheme();
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, [syncTheme]);
}
var TOAST_CLOSE_ACTION = "close";
function Toast({
  id,
  message,
  title,
  actions = [],
  allowClose = true,
  variant,
  className,
  children,
  onClose,
  color: _color,
  ...props
}) {
  const hasActions = actions?.length > 0;
  return /* @__PURE__ */ jsxRuntime.jsxs(Row, { ...props, "data-slot": "toast", className: cn.cn(toast({ variant }), className), children: [
    /* @__PURE__ */ jsxRuntime.jsxs(Column, { flexGrow: 1, gap: "1", children: [
      title && /* @__PURE__ */ jsxRuntime.jsx(Text, { weight: "semibold", children: title }),
      message && /* @__PURE__ */ jsxRuntime.jsx(Text, { color: title ? "muted" : void 0, children: message })
    ] }),
    hasActions && actions.map((action) => {
      return /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onPress: () => onClose?.(action), children: action }, action);
    }),
    !hasActions && allowClose && /* @__PURE__ */ jsxRuntime.jsx(
      Button,
      {
        variant: "quiet",
        size: "icon-xs",
        "aria-label": "Close",
        "data-slot": "toast-close",
        className: "shrink-0 self-start text-fg-muted hover:text-fg",
        onPress: () => onClose?.(TOAST_CLOSE_ACTION),
        children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {})
      }
    )
  ] });
}
var positionClasses = {
  "top-left": "top-4 left-4 items-start",
  top: "top-4 left-1/2 -translate-x-1/2 items-center",
  "top-right": "top-4 right-4 items-end",
  "bottom-left": "bottom-4 left-4 items-start",
  bottom: "bottom-4 left-1/2 -translate-x-1/2 items-center",
  "bottom-right": "bottom-4 right-4 items-end",
  left: "top-1/2 left-4 -translate-y-1/2 items-start",
  right: "top-1/2 right-4 -translate-y-1/2 items-end"
};
var AnimatedBox = web.animated(Box);
function Toaster({ duration = 0, position = "bottom-right" }) {
  const { toasts } = useToast();
  const [hovered, setHovered] = react.useState(false);
  const transitions = web.useTransition(toasts, {
    from: {
      opacity: 0,
      transform: position?.includes("left") ? "translateX(-100%)" : "translateX(100%)"
    },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: {
      opacity: 0,
      transform: position?.includes("top") ? "translateY(-80%)" : "translateY(80%)"
    },
    config: { duration: 100 }
  });
  react.useEffect(() => {
    if (!duration || hovered || !toasts.length) {
      return;
    }
    const timers = toasts.map((toast2) => {
      const remaining = Math.max(toast2.timestamp + duration - Date.now(), 0);
      return setTimeout(() => removeToast(toast2.id), remaining);
    });
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [duration, toasts, hovered]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    Column,
    {
      gap: "2",
      role: "region",
      "aria-live": "polite",
      "aria-label": "Notifications",
      "data-slot": "toaster",
      className: cn.cn("zen-layer-toast fixed", positionClasses[position]),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      children: transitions((style, item) => {
        const { id, ...props } = item;
        return /* @__PURE__ */ jsxRuntime.jsx(AnimatedBox, { style, children: /* @__PURE__ */ jsxRuntime.jsx(Toast, { ...props, id, onClose: () => removeToast(id) }) }, id);
      })
    }
  );
}
var ToastContext = react.createContext({});
function ToastProvider({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(ToastContext.Provider, { value: props, children: [
    children,
    /* @__PURE__ */ jsxRuntime.jsx(Toaster, { ...props })
  ] });
}

// src/components/hooks/useToast.ts
var TOAST_ID = 1;
var TOAST_DURATION = 0;
var initialState = {
  duration: TOAST_DURATION,
  toasts: []
};
var store = zustand.create(() => ({ ...initialState }));
function removeToast(id) {
  store.setState(({ toasts }) => {
    return { toasts: toasts.filter((toast2) => toast2.id !== id) };
  });
}
function displayToast(message, { duration = TOAST_DURATION, ...options } = {}) {
  const id = `toast-${TOAST_ID++}`;
  store.setState(({ toasts }) => {
    return {
      toasts: [...toasts, { ...options, id, message, timestamp: Date.now() }]
    };
  });
}
function useToast() {
  const { toasts } = store();
  const config = react.useContext(ToastContext);
  const toast2 = (message, options) => {
    displayToast(message, { ...options, ...config });
  };
  return { toast: toast2, toasts };
}
var objectFitMap = {
  fill: "object-fill",
  contain: "object-contain",
  cover: "object-cover",
  none: "object-none",
  "scale-down": "object-scale-down"
};
function Image({
  src,
  alt,
  objectFit,
  isCentered,
  borderRadius,
  shadow,
  className,
  ...props
}) {
  const classes = cn.cn(
    "block max-w-full",
    mapBorderRadius(borderRadius),
    mapShadow(shadow),
    objectFit && objectFitMap[objectFit],
    objectFit && "w-full h-full",
    isCentered && "mx-auto",
    className
  );
  return /* @__PURE__ */ jsxRuntime.jsx("img", { ...props, className: classes, src, alt });
}
function Kbd({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "kbd",
    {
      ...props,
      "data-slot": "kbd",
      className: cn.cn(
        "pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1",
        "rounded-sm bg-interactive px-1 font-sans text-xs font-medium text-fg-muted",
        "[&_svg:not([class*='size-'])]:size-3",
        className
      ),
      children
    }
  );
}
function KbdGroup({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "kbd",
    {
      ...props,
      "data-slot": "kbd-group",
      className: cn.cn("inline-flex items-center gap-1", className),
      children
    }
  );
}
var placementClasses2 = {
  absolute: "absolute inset-0 m-auto",
  center: "m-auto",
  inline: "inline-flex"
};
function Loading({
  size,
  placement = "inline",
  icon = "spinner",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Box,
    {
      ...props,
      role: "status",
      "aria-label": props["aria-label"] ?? "Loading",
      "data-slot": "loading",
      className: cn.cn(
        "relative flex justify-center items-center flex-1 pointer-events-none",
        placementClasses2[placement],
        className
      ),
      children: [
        icon === "dots" && /* @__PURE__ */ jsxRuntime.jsx(Dots, { size }),
        icon === "spinner" && /* @__PURE__ */ jsxRuntime.jsx(Spinner, { size })
      ]
    }
  );
}

// src/components/lib/interaction.ts
function toSelection(value) {
  return value === "all" ? "all" : new Set(value);
}
function selectionToStrings(value) {
  return value === "all" ? [] : Array.from(value, String);
}
function Menubar({ isDisabled, className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    menubar.Menubar,
    {
      ...props,
      "data-slot": "menubar",
      disabled: isDisabled,
      className: cn.cn("flex items-center gap-1 w-fit isolate", className),
      children
    }
  );
}
function MenubarMenu({ label, isDisabled, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(menu.Menu.Root, { ...props, disabled: isDisabled, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      menu.Menu.Trigger,
      {
        "data-slot": "menubar-trigger",
        render: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "quiet", size: "sm", className: "data-popup-open:bg-interactive", children: label })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(MenuPrimitiveContext.Provider, { value: "menu", children: /* @__PURE__ */ jsxRuntime.jsx(MenubarContext.Provider, { value: true, children }) })
  ] });
}
function Meter({
  value,
  minValue,
  maxValue,
  label,
  showValue,
  formatOptions,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    meter.Meter.Root,
    {
      ...props,
      value,
      min: minValue,
      max: maxValue,
      format: formatOptions,
      "data-slot": "meter",
      className: cn.cn("flex flex-col gap-1 w-full", className),
      children: [
        (label || showValue) && /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "meter-header", className: "flex items-center justify-between gap-3", children: [
          label && /* @__PURE__ */ jsxRuntime.jsx(meter.Meter.Label, { "data-slot": "meter-label", render: /* @__PURE__ */ jsxRuntime.jsx(Label, {}), children: label }),
          showValue && /* @__PURE__ */ jsxRuntime.jsx(Text, { className: "tabular-nums", children: /* @__PURE__ */ jsxRuntime.jsx(meter.Meter.Value, { "data-slot": "meter-value" }) })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          meter.Meter.Track,
          {
            "data-slot": "meter-track",
            className: "relative overflow-hidden w-full h-2 rounded-full bg-interactive",
            children: /* @__PURE__ */ jsxRuntime.jsx(
              meter.Meter.Indicator,
              {
                "data-slot": "meter-indicator",
                className: "h-full rounded-full bg-primary transition-all"
              }
            )
          }
        )
      ]
    }
  );
}
var NavbarContext = react.createContext({ showArrow: true });
var triggerClassName = cn.cn(
  "flex items-center gap-1 select-none cursor-pointer rounded-md px-3 py-2",
  "text-sm font-medium text-fg bg-transparent border-0",
  "hover:bg-interactive data-[popup-open]:bg-interactive",
  "outline-none [&:focus-visible]:outline-2 [&:focus-visible]:outline-offset-1 [&:focus-visible]:outline-focus-ring"
);
var itemLinkClassName = cn.cn(
  "flex items-center gap-1 select-none cursor-pointer rounded-md px-3 py-2",
  "hover:bg-interactive",
  "outline-none [&:focus-visible]:outline-2 [&:focus-visible]:outline-offset-1 [&:focus-visible]:outline-focus-ring"
);
var contentClassName = cn.cn(
  "w-max",
  "transition-[opacity,transform,translate] duration-(--duration) ease-(--easing)",
  "data-[starting-style]:opacity-0 data-[ending-style]:opacity-0",
  "data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%]",
  "data-[starting-style]:data-[activation-direction=right]:translate-x-[50%]",
  "data-[ending-style]:data-[activation-direction=left]:translate-x-[50%]",
  "data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]"
);
var positionerClassName = cn.cn(
  "box-border h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)",
  "transition-[top,left,right,bottom] duration-(--duration) ease-(--easing)",
  "data-[instant]:transition-none",
  // Invisible bridge so the pointer can travel from trigger to popup without closing.
  'before:absolute before:content-[""]',
  "data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5",
  "data-[side=top]:before:bottom-[-10px] data-[side=top]:before:right-0 data-[side=top]:before:left-0 data-[side=top]:before:h-2.5"
);
var popupClassName = cn.cn(
  "relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin)",
  // `overflow-hidden` clips the nested menu's square background to the rounded
  // corners so the popup border stays visible all the way around.
  "overflow-hidden rounded-md border border-edge bg-surface shadow-lg outline-none",
  "transition-[opacity,transform,width,height,scale,translate] duration-(--duration) ease-(--easing)",
  "data-[starting-style]:scale-95 data-[starting-style]:opacity-0",
  "data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[ending-style]:duration-150 data-[ending-style]:ease-[ease]"
);
function Navbar({
  showArrow = true,
  className,
  children,
  color: _color,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(NavbarContext.Provider, { value: { showArrow }, children: /* @__PURE__ */ jsxRuntime.jsxs(
    navigationMenu.NavigationMenu.Root,
    {
      "data-slot": "navbar",
      className: cn.cn("relative isolate", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(navigationMenu.NavigationMenu.List, { className: "flex items-center gap-1", children }),
        /* @__PURE__ */ jsxRuntime.jsx(navigationMenu.NavigationMenu.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
          navigationMenu.NavigationMenu.Positioner,
          {
            className: cn.cn("zen-layer-floating isolate", positionerClassName),
            sideOffset: 10,
            collisionPadding: 16,
            style: {
              ["--duration"]: "0.35s",
              ["--easing"]: "cubic-bezier(0.22, 1, 0.36, 1)"
            },
            children: /* @__PURE__ */ jsxRuntime.jsx(navigationMenu.NavigationMenu.Popup, { className: popupClassName, children: /* @__PURE__ */ jsxRuntime.jsx(navigationMenu.NavigationMenu.Viewport, { className: "relative h-full w-full overflow-hidden" }) })
          }
        ) })
      ]
    }
  ) });
}
function NavbarItem({
  label,
  children,
  className,
  color: _color,
  ...props
}) {
  const { showArrow } = react.useContext(NavbarContext);
  if (label) {
    return /* @__PURE__ */ jsxRuntime.jsxs(navigationMenu.NavigationMenu.Item, { ...props, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(navigationMenu.NavigationMenu.Trigger, { className: cn.cn(triggerClassName, className), children: [
        /* @__PURE__ */ jsxRuntime.jsx(Text, { children: label }),
        showArrow && /* @__PURE__ */ jsxRuntime.jsx(navigationMenu.NavigationMenu.Icon, { className: "flex text-fg-muted transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronDown, { className: "size-4" }) })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(navigationMenu.NavigationMenu.Content, { className: contentClassName, children: /* @__PURE__ */ jsxRuntime.jsx(MenuVariantContext.Provider, { value: "plain", children }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(navigationMenu.NavigationMenu.Item, { ...props, className: cn.cn(itemLinkClassName, className), children });
}
function NavbarLink({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    navigationMenu.NavigationMenu.Link,
    {
      className: cn.cn(
        "flex items-center gap-1 select-none rounded-md px-3 py-2 no-underline text-fg",
        "hover:bg-interactive",
        "outline-none [&:focus-visible]:outline-2 [&:focus-visible]:outline-offset-1 [&:focus-visible]:outline-focus-ring",
        className
      ),
      ...props
    }
  );
}
var stepperClasses = [
  "flex items-center justify-center self-stretch px-3 shrink-0",
  "cursor-pointer select-none bg-transparent text-fg",
  "hover:bg-interactive active:bg-interactive-hover",
  "data-disabled:text-fg-disabled data-disabled:cursor-default data-disabled:hover:bg-transparent",
  "disabled:text-fg-disabled disabled:cursor-default disabled:hover:bg-transparent"
];
var NumberField = react.forwardRef(function NumberField2({
  label,
  placeholder,
  minValue,
  maxValue,
  isDisabled,
  isReadOnly,
  isRequired,
  formatOptions,
  onChange,
  decrementLabel = "Decrease",
  incrementLabel = "Increase",
  className,
  id,
  min,
  max,
  disabled,
  readOnly,
  required,
  format,
  ...props
}, ref) {
  const fieldId = useFieldId(id);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    numberField.NumberField.Root,
    {
      ...props,
      ref,
      id: fieldId,
      "data-slot": "number-field",
      min: minValue ?? min,
      max: maxValue ?? max,
      disabled: isDisabled ?? disabled,
      readOnly: isReadOnly ?? readOnly,
      required: isRequired ?? required,
      format: formatOptions ?? format,
      onValueChange: (value) => onChange?.(value),
      className: cn.cn("flex flex-col gap-1", className),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          numberField.NumberField.Group,
          {
            "data-slot": "number-field-group",
            className: cn.cn(inputField(), "p-0 px-0 gap-0 overflow-hidden"),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                numberField.NumberField.Decrement,
                {
                  "aria-label": decrementLabel,
                  "data-slot": "number-field-decrement",
                  className: cn.cn(stepperClasses, "border-r border-edge"),
                  children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Minus, {}) })
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                numberField.NumberField.Input,
                {
                  placeholder,
                  "data-slot": "number-field-input",
                  className: "w-full min-w-0 text-sm text-center tabular-nums bg-transparent py-2 px-3 outline-none placeholder:text-fg-muted"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                numberField.NumberField.Increment,
                {
                  "aria-label": incrementLabel,
                  "data-slot": "number-field-increment",
                  className: cn.cn(stepperClasses, "border-l border-edge"),
                  children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Plus, {}) })
                }
              )
            ]
          }
        )
      ]
    }
  );
});
var slotClasses = [
  "relative flex h-9 w-9 items-center justify-center text-center text-sm",
  "border-y border-r border-edge bg-surface text-fg shadow-xs outline-none",
  "transition-[color,box-shadow,border-color]",
  "first:rounded-l first:border-l last:rounded-r",
  "focus-visible:relative focus-visible:z-10 focus-visible:border-focus-ring",
  "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
  "data-[active]:relative data-[active]:z-10 data-[active]:border-focus-ring",
  "data-[active]:ring-[3px] data-[active]:ring-focus-ring/50",
  "aria-invalid:border-status-error aria-invalid:ring-status-error/20",
  "disabled:cursor-not-allowed"
];
var OTPFieldSeparator = react.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      ...props,
      ref,
      role: "separator",
      "data-slot": "otp-field-separator",
      className: cn.cn("flex items-center text-fg-muted [&_svg]:size-4", className),
      children: children ?? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Minus, {})
    }
  )
);
OTPFieldSeparator.displayName = "OTPFieldSeparator";
var OTPField = react.forwardRef(function OTPField2({
  length = 6,
  label,
  isDisabled,
  isReadOnly,
  isRequired,
  onChange,
  onComplete,
  className,
  id,
  disabled,
  readOnly,
  required,
  ...props
}, ref) {
  const fieldId = useFieldId(id);
  const labelId = `${fieldId}-label`;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "otp-field", className: "flex flex-col gap-1", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { id: labelId, htmlFor: `${fieldId}-0`, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      otpField.OTPField.Root,
      {
        ...props,
        ref,
        id: fieldId,
        length,
        disabled: isDisabled ?? disabled,
        readOnly: isReadOnly ?? readOnly,
        required: isRequired ?? required,
        "aria-labelledby": label ? labelId : props["aria-labelledby"],
        onValueChange: (value) => onChange?.(value),
        onValueComplete: (value) => onComplete?.(value),
        className: cn.cn("flex items-center has-disabled:opacity-50", className),
        children: Array.from({ length }, (_, index) => /* @__PURE__ */ jsxRuntime.jsx(
          otpField.OTPField.Input,
          {
            id: `${fieldId}-${index}`,
            "data-slot": "otp-field-slot",
            className: cn.cn(slotClasses)
          },
          index
        ))
      }
    )
  ] });
});
function PageHeader({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Row,
    {
      width: "100%",
      paddingY: "4",
      alignItems: "center",
      justifyContent: "space-between",
      borderColor: "muted",
      border: "bottom",
      gap: "4",
      ...props,
      children
    }
  );
}
function PageHeaderTitle({
  title,
  description,
  breadcrumb,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(Column, { gap: "1", ...props, children: [
    breadcrumb,
    /* @__PURE__ */ jsxRuntime.jsx(Text, { size: "xl", weight: "semibold", children: title }),
    description && /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted", children: description }),
    children
  ] });
}
function PageHeaderActions({ children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Row, { gap: "2", alignItems: "center", ...props, children });
}
function PaginationContent({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    "ul",
    {
      ...props,
      "data-slot": "pagination-content",
      className: cn.cn("flex list-none items-center gap-1", className)
    }
  );
}
function PaginationItem({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx("li", { ...props, "data-slot": "pagination-item", className: cn.cn("list-none", className) });
}
function PaginationLink({
  className,
  isActive,
  isDisabled,
  size = "icon",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Button,
    {
      variant: isActive ? "outline" : "quiet",
      size,
      nativeButton: false,
      isDisabled,
      className: cn.cn("tabular-nums no-underline", className),
      render: /* @__PURE__ */ jsxRuntime.jsx(
        "a",
        {
          "data-slot": "pagination-link",
          "data-active": isActive || void 0,
          "aria-current": isActive ? "page" : void 0,
          ...props
        }
      ),
      children
    }
  );
}
function PaginationPrevious({
  className,
  text: text2 = "Previous",
  size = "md",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size,
      className: cn.cn("gap-1", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronLeft, {}),
        text2 ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: text2 }) : null
      ]
    }
  );
}
function PaginationNext({
  className,
  text: text2 = "Next",
  size = "md",
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size,
      className: cn.cn("gap-1", className),
      ...props,
      children: [
        text2 ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "hidden sm:block", children: text2 }) : null,
        /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronRight, {})
      ]
    }
  );
}
function PaginationEllipsis({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "span",
    {
      ...props,
      "aria-hidden": "true",
      "data-slot": "pagination-ellipsis",
      className: cn.cn(
        "flex size-9 items-center justify-center text-fg-muted [&>svg:not([class*='size-'])]:size-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Ellipsis, {}),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
function getPageRange(pageCount, page, siblingCount) {
  const totalShown = siblingCount * 2 + 5;
  if (pageCount <= totalShown) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  const start = Math.max(page - siblingCount, 1);
  const end = Math.min(page + siblingCount, pageCount);
  const showLeftEllipsis = start > 2;
  const showRightEllipsis = end < pageCount - 1;
  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = Array.from({ length: 3 + siblingCount * 2 }, (_, i) => i + 1);
    return [...leftRange, "ellipsis", pageCount];
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    const rangeLength = 3 + siblingCount * 2;
    const rightRange = Array.from(
      { length: rangeLength },
      (_, i) => pageCount - rangeLength + i + 1
    );
    return [1, "ellipsis", ...rightRange];
  }
  const middleRange = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return [1, "ellipsis", ...middleRange, "ellipsis", pageCount];
}
function Pagination({
  pageCount,
  totalItems,
  pageSize = 10,
  page,
  defaultPage = 1,
  siblingCount = 1,
  isDisabled,
  onChange,
  renderLink,
  className,
  ...props
}) {
  const [uncontrolledPage, setUncontrolledPage] = react.useState(defaultPage);
  const count = Math.max(pageCount ?? Math.ceil((totalItems ?? 0) / pageSize), 1);
  const currentPage = Math.min(Math.max(page ?? uncontrolledPage, 1), count);
  const setPage = (nextPage) => {
    const clamped = Math.min(Math.max(nextPage, 1), count);
    if (page === void 0) {
      setUncontrolledPage(clamped);
    }
    onChange?.(clamped);
  };
  const renderPage = (target, isActive, label, children) => {
    if (renderLink) {
      return renderLink(target, {
        "aria-current": isActive ? "page" : void 0,
        "aria-label": label,
        children,
        onClick: () => setPage(target)
      });
    }
    return /* @__PURE__ */ jsxRuntime.jsx(
      PaginationLink,
      {
        isActive,
        isDisabled,
        "aria-label": label,
        onClick: () => setPage(target),
        children
      }
    );
  };
  return /* @__PURE__ */ jsxRuntime.jsx(
    "nav",
    {
      ...props,
      role: "navigation",
      "data-slot": "pagination",
      "aria-label": "Pagination",
      className: cn.cn("flex items-center", className),
      children: /* @__PURE__ */ jsxRuntime.jsxs(PaginationContent, { children: [
        /* @__PURE__ */ jsxRuntime.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntime.jsx(
          PaginationPrevious,
          {
            size: "icon",
            text: "",
            isDisabled: isDisabled || currentPage <= 1,
            onClick: () => setPage(currentPage - 1)
          }
        ) }),
        getPageRange(count, currentPage, siblingCount).map(
          (item, index) => item === "ellipsis" ? (
            // biome-ignore lint/suspicious/noArrayIndexKey: ellipsis positions are stable
            /* @__PURE__ */ jsxRuntime.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntime.jsx(PaginationEllipsis, {}) }, `ellipsis-${index}`)
          ) : /* @__PURE__ */ jsxRuntime.jsx(PaginationItem, { children: renderPage(item, item === currentPage, `Page ${item}`, item) }, item)
        ),
        /* @__PURE__ */ jsxRuntime.jsx(PaginationItem, { children: /* @__PURE__ */ jsxRuntime.jsx(
          PaginationNext,
          {
            size: "icon",
            text: "",
            isDisabled: isDisabled || currentPage >= count,
            onClick: () => setPage(currentPage + 1)
          }
        ) })
      ] })
    }
  );
}
var SvgEye = (props) => /* @__PURE__ */ jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { fill: "none", d: "M0 0h256v256H0z" }),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16,
      d: "M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "circle",
    {
      cx: 128,
      cy: 128,
      r: 40,
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16
    }
  )
] });
var Eye_default = SvgEye;
var SvgEyeSlash = (props) => /* @__PURE__ */ jsxRuntime.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256", ...props, children: [
  /* @__PURE__ */ jsxRuntime.jsx("path", { fill: "none", d: "M0 0h256v256H0z" }),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16,
      d: "m48 40 160 176M154.91 157.6a40 40 0 0 1-53.82-59.2M135.53 88.71a40 40 0 0 1 32.3 35.53"
    }
  ),
  /* @__PURE__ */ jsxRuntime.jsx(
    "path",
    {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 16,
      d: "M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 0 0-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0 0 54-12.6"
    }
  )
] });
var EyeSlash_default = SvgEyeSlash;
var PasswordField = react.forwardRef(
  function PasswordField2({
    label,
    className,
    isDisabled,
    isReadOnly,
    isRevealed,
    defaultRevealed = false,
    onRevealChange,
    disabled,
    readOnly,
    autoComplete = "current-password",
    id,
    ...props
  }, ref) {
    const fieldId = useFieldId(id);
    const [uncontrolledRevealed, setUncontrolledRevealed] = react.useState(defaultRevealed);
    const revealed = isRevealed ?? uncontrolledRevealed;
    const isLabelled = Boolean(label || props["aria-label"] || props["aria-labelledby"]);
    const toggleRevealed = () => {
      const next = !revealed;
      if (isRevealed === void 0) {
        setUncontrolledRevealed(next);
      }
      onRevealChange?.(next);
    };
    const input = /* @__PURE__ */ jsxRuntime.jsxs(InputGroup, { className, children: [
      /* @__PURE__ */ jsxRuntime.jsx(
        InputGroupInput,
        {
          ...props,
          ref,
          id: fieldId,
          type: revealed ? "text" : "password",
          autoComplete,
          "aria-label": isLabelled ? props["aria-label"] : "Password",
          disabled: isDisabled ?? disabled,
          readOnly: isReadOnly ?? readOnly
        }
      ),
      /* @__PURE__ */ jsxRuntime.jsx(InputGroupAddon, { align: "inline-end", children: /* @__PURE__ */ jsxRuntime.jsx(
        InputGroupButton,
        {
          size: "icon-xs",
          isDisabled: isDisabled ?? disabled,
          "aria-label": revealed ? "Hide password" : "Show password",
          "aria-pressed": revealed,
          onClick: toggleRevealed,
          children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { children: revealed ? /* @__PURE__ */ jsxRuntime.jsx(EyeSlash_default, {}) : /* @__PURE__ */ jsxRuntime.jsx(Eye_default, {}) })
        }
      ) })
    ] });
    if (label) {
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "password-field", className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
        input
      ] });
    }
    return input;
  }
);
var motionClassName2 = [
  "origin-(--transform-origin) transition-[transform,opacity] duration-200 ease-out",
  "data-starting-style:opacity-0 data-starting-style:scale-95",
  "data-ending-style:opacity-0 data-ending-style:scale-95 data-ending-style:ease-in",
  "motion-reduce:transition-none motion-reduce:data-starting-style:scale-100 motion-reduce:data-ending-style:scale-100"
].join(" ");
function Popover({
  children,
  isFullscreen,
  className,
  isOpen,
  defaultOpen,
  isNonModal,
  triggerRef: _triggerRef,
  onOpenChange,
  sideOffset = 4,
  ...props
}) {
  const isNested = useInsideOverlayTrigger();
  const portal = /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
    popover.Popover.Positioner,
    {
      sideOffset,
      ...props,
      className: cn.cn(
        "zen-layer-floating isolate",
        // Base UI positions the element with inline `position/top/left/transform`
        // styles, so fullscreen must override them with `!important`.
        isFullscreen && "fixed! inset-0! w-auto! h-auto! transform-none!"
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        popover.Popover.Popup,
        {
          "data-slot": "popover",
          className: cn.cn(
            "w-72 max-w-(--available-width) max-h-(--available-height) overflow-y-auto",
            "bg-surface-overlay border border-edge rounded-lg shadow-lg p-4 outline-none",
            motionClassName2,
            isFullscreen && "zen-popover-fullscreen block size-full w-auto! h-auto! max-w-none max-h-none border-0 rounded-none overflow-auto bg-surface transition-none",
            className
          ),
          children
        }
      )
    }
  ) });
  if (isNested) {
    return portal;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    popover.Popover.Root,
    {
      ...isOpen === void 0 ? { defaultOpen } : { open: isOpen },
      modal: isNonModal === void 0 ? void 0 : !isNonModal,
      onOpenChange,
      children: portal
    }
  );
}
Popover.zenOverlayType = "popover";
function PopoverTrigger(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverClose(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(popover.Popover.Close, { "data-slot": "popover-close", ...props });
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    popover.Popover.Title,
    {
      "data-slot": "popover-title",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "lg" }),
      className
    }
  );
}
function PopoverDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    popover.Popover.Description,
    {
      "data-slot": "popover-description",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }),
      className
    }
  );
}
var PreviewCard = previewCard.PreviewCard.Root;
var PreviewCardTrigger = previewCard.PreviewCard.Trigger;
var PreviewCardContent = react.forwardRef(
  ({ className, positionerProps, portalProps, ...props }, ref) => /* @__PURE__ */ jsxRuntime.jsx(previewCard.PreviewCard.Portal, { ...portalProps, children: /* @__PURE__ */ jsxRuntime.jsx(
    previewCard.PreviewCard.Positioner,
    {
      sideOffset: 4,
      align: "center",
      ...positionerProps,
      className: (state) => cn.cn(
        "zen-layer-floating isolate",
        typeof positionerProps?.className === "function" ? positionerProps.className(state) : positionerProps?.className
      ),
      children: /* @__PURE__ */ jsxRuntime.jsx(
        previewCard.PreviewCard.Popup,
        {
          ...props,
          ref,
          "data-slot": "preview-card-content",
          className: (state) => cn.cn(
            "w-80 max-w-(--available-width) max-h-(--available-height) overflow-y-auto rounded-md border border-edge bg-surface-overlay p-4 text-sm text-fg shadow-lg outline-none",
            "origin-(--transform-origin) transition-[transform,opacity] duration-200 ease-out",
            "data-starting-style:opacity-0 data-starting-style:scale-95",
            "data-ending-style:opacity-0 data-ending-style:scale-95 data-ending-style:ease-in",
            "motion-reduce:transition-none",
            typeof className === "function" ? className(state) : className
          )
        }
      )
    }
  ) })
);
PreviewCardContent.displayName = "PreviewCardContent";
function ProgressTrack({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    progress.Progress.Track,
    {
      ...props,
      "data-slot": "progress-track",
      className: cn.cn("relative h-2 w-full overflow-hidden rounded-full bg-interactive", className)
    }
  );
}
function ProgressIndicator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    progress.Progress.Indicator,
    {
      ...props,
      "data-slot": "progress-indicator",
      className: cn.cn("h-full rounded-full bg-primary transition-all", className)
    }
  );
}
function ProgressLabel({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    progress.Progress.Label,
    {
      ...props,
      "data-slot": "progress-label",
      className: cn.cn("text-sm font-semibold text-fg", className)
    }
  );
}
function ProgressValue({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    progress.Progress.Value,
    {
      ...props,
      "data-slot": "progress-value",
      className: cn.cn("text-sm tabular-nums text-fg", className)
    }
  );
}
function ProgressBar({
  className,
  showPercentage,
  label,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    progress.Progress.Root,
    {
      ...props,
      "data-slot": "progress",
      className: cn.cn("flex w-full items-center gap-3", className),
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(ProgressLabel, { children: label }),
        children ?? /* @__PURE__ */ jsxRuntime.jsx(ProgressTrack, { children: /* @__PURE__ */ jsxRuntime.jsx(ProgressIndicator, {}) }),
        showPercentage && /* @__PURE__ */ jsxRuntime.jsx(ProgressValue, {})
      ]
    }
  );
}
var RADIUS = 45;
var CIRCUMFERENCE = RADIUS * 2 * Math.PI;
function ProgressCircle({
  className,
  showPercentage,
  value,
  min = 0,
  max = 100,
  ...props
}) {
  const isIndeterminate = value === null || value === void 0;
  const numericValue = isIndeterminate ? min : value;
  const percentage = Math.max(0, Math.min(100, (numericValue - min) / (max - min) * 100));
  const offset = CIRCUMFERENCE - percentage / 100 * CIRCUMFERENCE;
  return /* @__PURE__ */ jsxRuntime.jsxs(
    progress.Progress.Root,
    {
      ...props,
      "data-slot": "progress-circle",
      value,
      min,
      max,
      className: cn.cn("relative flex items-center justify-center", className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "svg",
          {
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true",
            className: cn.cn(
              "h-24 w-24 -rotate-90 fill-none stroke-[8px]",
              isIndeterminate && "animate-spin"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                "circle",
                {
                  "data-slot": "progress-circle-track",
                  className: "stroke-interactive",
                  cx: "50",
                  cy: "50",
                  r: RADIUS
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(
                "circle",
                {
                  "data-slot": "progress-circle-indicator",
                  className: "stroke-primary transition-[stroke-dashoffset]",
                  cx: "50",
                  cy: "50",
                  r: RADIUS,
                  strokeLinecap: isIndeterminate ? "round" : void 0,
                  strokeDasharray: `${CIRCUMFERENCE} ${CIRCUMFERENCE}`,
                  strokeDashoffset: isIndeterminate ? CIRCUMFERENCE * 0.75 : offset
                }
              )
            ]
          }
        ),
        showPercentage && !isIndeterminate && /* @__PURE__ */ jsxRuntime.jsx(
          progress.Progress.Value,
          {
            "data-slot": "progress-circle-value",
            className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-bold"
          }
        )
      ]
    }
  );
}
function RadioGroup({
  label,
  children,
  className,
  isDisabled,
  isReadOnly,
  onChange,
  ...props
}) {
  const labelId = react.useId();
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-2", children: [
    label && /* @__PURE__ */ jsxRuntime.jsx(Label, { id: labelId, children: label }),
    /* @__PURE__ */ jsxRuntime.jsx(
      radioGroup.RadioGroup,
      {
        ...props,
        "data-slot": "radio-group",
        "aria-labelledby": label ? labelId : props["aria-labelledby"],
        disabled: isDisabled,
        readOnly: isReadOnly,
        onValueChange: onChange,
        className: cn.cn("flex flex-col gap-2", className),
        children
      }
    )
  ] });
}
function Radio({ children, className, isDisabled, id, ...props }) {
  const fieldId = useFieldId(id);
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "radio flex items-center gap-3 text-sm", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      radio.Radio.Root,
      {
        ...props,
        id: fieldId,
        "data-slot": "radio",
        disabled: isDisabled,
        className: cn.cn(
          "peer flex shrink-0 items-center justify-center",
          "size-4 aspect-square rounded-full border border-edge-strong bg-surface shadow-xs",
          "cursor-pointer outline-none transition-[color,box-shadow,border-color]",
          "data-checked:border-primary",
          "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
          "aria-invalid:border-status-error aria-invalid:ring-status-error/20",
          "data-disabled:opacity-50 data-disabled:cursor-not-allowed",
          className
        ),
        children: /* @__PURE__ */ jsxRuntime.jsx(
          radio.Radio.Indicator,
          {
            "data-slot": "radio-indicator",
            className: "size-2 rounded-full bg-primary data-unchecked:hidden"
          }
        )
      }
    ),
    children ? /* @__PURE__ */ jsxRuntime.jsx(
      Label,
      {
        htmlFor: fieldId,
        className: "cursor-pointer peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50",
        children
      }
    ) : null
  ] });
}
function ResizablePanelGroup({
  direction = "horizontal",
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactResizablePanels.Group,
    {
      ...props,
      "data-slot": "resizable-panel-group",
      orientation: direction,
      className: cn.cn("flex size-full", direction === "vertical" && "flex-col", className)
    }
  );
}
function ResizablePanel({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(reactResizablePanels.Panel, { ...props, "data-slot": "resizable-panel", className: cn.cn("overflow-hidden", className) });
}
function ResizableHandle({ withHandle, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    reactResizablePanels.Separator,
    {
      ...props,
      "data-slot": "resizable-handle",
      className: cn.cn(
        // The orientation is read from the `aria-orientation` attribute set by
        // react-resizable-panels instead of a React context.
        "relative flex w-px shrink-0 items-center justify-center bg-edge outline-none",
        "after:absolute after:inset-y-0 after:left-1/2 after:w-2 after:-translate-x-1/2",
        "aria-[orientation=horizontal]:h-px aria-[orientation=horizontal]:w-full",
        "aria-[orientation=horizontal]:after:inset-x-0 aria-[orientation=horizontal]:after:left-0",
        "aria-[orientation=horizontal]:after:h-2 aria-[orientation=horizontal]:after:w-full",
        "aria-[orientation=horizontal]:after:translate-x-0 aria-[orientation=horizontal]:after:-translate-y-1/2",
        "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
        "[&[aria-orientation=horizontal]>div]:rotate-90",
        className
      ),
      children: withHandle && /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          "data-slot": "resizable-handle-grip",
          className: "z-10 flex h-5 w-3.5 items-center justify-center rounded-sm border border-edge bg-surface-raised",
          children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.GripVertical, { className: "size-2.5 text-fg-muted" })
        }
      )
    }
  );
}
var SearchField = react.forwardRef(function SearchField2({
  label,
  placeholder,
  value,
  defaultValue,
  delay = 0,
  onChange,
  onSearch,
  className,
  id,
  ...props
}, forwardedRef) {
  const fieldId = useFieldId(id);
  const inputRef = react.useRef(null);
  const [hasValue, setHasValue] = react.useState(() => Boolean(value ?? defaultValue));
  const onSearchRef = react.useRef(onSearch);
  onSearchRef.current = onSearch;
  const timerRef = react.useRef(void 0);
  const lastDispatched = react.useRef(void 0);
  const dispatchSearch = react.useCallback((nextValue) => {
    clearTimeout(timerRef.current);
    if (lastDispatched.current === nextValue) {
      return;
    }
    lastDispatched.current = nextValue;
    onSearchRef.current?.(nextValue);
  }, []);
  react.useEffect(() => () => clearTimeout(timerRef.current), []);
  const handleValue = (nextValue, immediate = false) => {
    setHasValue(nextValue !== "");
    onChange?.(nextValue);
    clearTimeout(timerRef.current);
    if (immediate || delay === 0 || nextValue === "") {
      dispatchSearch(nextValue);
      return;
    }
    timerRef.current = setTimeout(() => dispatchSearch(nextValue), delay);
  };
  const handleChange = (event) => {
    handleValue(event.target.value);
  };
  const handleClear = () => {
    const input2 = inputRef.current;
    if (input2 && value === void 0) {
      input2.value = "";
      input2.focus();
    }
    handleValue("", true);
  };
  const handleRef = (element) => {
    inputRef.current = element;
    if (typeof forwardedRef === "function") {
      forwardedRef(element);
    } else if (forwardedRef) {
      forwardedRef.current = element;
    }
  };
  const isLabelled = Boolean(label || props["aria-label"] || props["aria-labelledby"]);
  const showClear = value !== void 0 ? value !== "" : hasValue;
  const input = /* @__PURE__ */ jsxRuntime.jsxs(InputGroup, { role: "search", className, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      InputGroupInput,
      {
        ...props,
        ref: handleRef,
        id: fieldId,
        type: "search",
        placeholder,
        value,
        defaultValue,
        "aria-label": isLabelled ? props["aria-label"] : "Search",
        className: "[&::-webkit-search-cancel-button]:hidden",
        onChange: handleChange,
        onKeyDown: (event) => {
          props.onKeyDown?.(event);
          if (event.key === "Enter") {
            handleValue(event.currentTarget.value, true);
          }
        }
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(InputGroupAddon, { align: "inline-start", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { color: "muted", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Search, {}) }) }),
    showClear && /* @__PURE__ */ jsxRuntime.jsx(InputGroupAddon, { align: "inline-end", children: /* @__PURE__ */ jsxRuntime.jsx(
      InputGroupButton,
      {
        size: "icon-xs",
        isDisabled: props.disabled,
        "aria-label": "Clear search",
        className: "text-fg-muted",
        onClick: handleClear,
        children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) })
      }
    ) })
  ] });
  if (label) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { "data-slot": "search-field", className: "flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
      input
    ] });
  }
  return input;
});
function collectSelectItems(children, items = []) {
  react.Children.forEach(children, (child) => {
    if (!react.isValidElement(child)) {
      return;
    }
    if (child.type === ListItem) {
      const props = child.props;
      const value = props.value ?? props.id ?? (typeof props.children === "string" ? props.children : "");
      items.push({ value, label: props.children });
      return;
    }
    collectSelectItems(child.props.children, items);
  });
  return items;
}
function Select({
  value,
  defaultValue,
  label,
  placeholder,
  isLoading,
  isDisabled,
  disabled,
  size = "md",
  allowSearch,
  searchValue,
  searchDelay,
  isFullscreen,
  maxHeight,
  showIcon = true,
  alignItemWithTrigger = false,
  onSearch,
  onChange,
  onValueChange,
  triggerProps,
  buttonProps,
  listProps,
  popoverProps,
  renderValue,
  className,
  children,
  items,
  onOpenChange,
  id,
  ...props
}) {
  const fieldId = useFieldId(id);
  const [search, setSearch] = react.useState("");
  const normalizedItems = react.useMemo(
    () => items?.map((item) => typeof item === "object" ? item : { label: String(item), value: item }),
    [items]
  );
  const collection = react.useMemo(
    () => children || normalizedItems?.map((item) => /* @__PURE__ */ jsxRuntime.jsx(ListItem, { value: item.value, children: item.label }, item.value)),
    [children, normalizedItems]
  );
  const resolvedItems = react.useMemo(
    () => normalizedItems ?? (children ? collectSelectItems(children) : void 0),
    [normalizedItems, children]
  );
  const labels = react.useMemo(
    () => new Map(resolvedItems?.map((item) => [item.value, item.label])),
    [resolvedItems]
  );
  const isEmpty = !collection || Array.isArray(collection) && collection.length === 0;
  const useScrollArea = maxHeight !== void 0 && !isFullscreen;
  const mergedTriggerProps = { ...buttonProps, ...triggerProps };
  const { className: triggerClassName2, ...restTriggerProps } = mergedTriggerProps;
  return /* @__PURE__ */ jsxRuntime.jsx("div", { "data-slot": "select", className: cn.cn("flex flex-col gap-1", className), children: /* @__PURE__ */ jsxRuntime.jsxs(
    select.Select.Root,
    {
      ...props,
      id: fieldId,
      items: resolvedItems,
      value,
      defaultValue,
      disabled: isDisabled ?? disabled,
      onValueChange: (next, details) => {
        onValueChange?.(next, details);
        onChange?.(next);
      },
      onOpenChange: (open, details) => {
        if (!open) {
          setSearch("");
          onSearch?.("");
        }
        onOpenChange?.(open, details);
      },
      children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { htmlFor: fieldId, children: label }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          select.Select.Trigger,
          {
            ...restTriggerProps,
            "data-slot": "select-trigger",
            "data-size": size,
            className: inputField({
              className: cn.cn(
                "w-full justify-between gap-2 px-3 py-0 whitespace-nowrap cursor-pointer outline-none",
                "hover:border-edge-strong",
                "data-[size=sm]:h-8",
                "data-[placeholder]:text-fg-muted",
                "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                triggerClassName2
              )
            }),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                select.Select.Value,
                {
                  placeholder,
                  "data-slot": "select-value",
                  className: "truncate text-start",
                  children: renderValue === void 0 ? void 0 : (selected) => {
                    const defaultChildren = selected == null ? placeholder : labels.get(selected) ?? selected;
                    return typeof renderValue === "function" ? renderValue({ defaultChildren, isPlaceholder: selected == null }) : renderValue || defaultChildren;
                  }
                }
              ),
              showIcon && /* @__PURE__ */ jsxRuntime.jsx(
                select.Select.Icon,
                {
                  "data-slot": "select-icon",
                  className: "flex shrink-0 items-center justify-center text-fg-muted",
                  children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronDown, {}) })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(select.Select.Portal, { children: /* @__PURE__ */ jsxRuntime.jsx(
          select.Select.Positioner,
          {
            align: "start",
            sideOffset: 4,
            alignItemWithTrigger,
            ...popoverProps,
            "data-slot": "select-positioner",
            className: cn.cn(
              "zen-layer-floating",
              // Base UI positions the element with inline `position/top/left/transform`
              // styles, so fullscreen must override them with `!important`.
              isFullscreen && "fixed! inset-0! w-auto! h-auto! transform-none!",
              popoverProps?.className
            ),
            children: /* @__PURE__ */ jsxRuntime.jsxs(
              select.Select.Popup,
              {
                "data-slot": "select-content",
                className: cn.cn(
                  "zen-popover relative flex flex-col outline-none",
                  "max-h-(--available-height) min-w-(--anchor-width) overflow-x-hidden",
                  "rounded-md border border-edge bg-surface-overlay shadow-lg",
                  !useScrollArea && !isFullscreen && !allowSearch && "overflow-y-auto",
                  (allowSearch || useScrollArea) && "overflow-hidden",
                  isFullscreen && "zen-popover-fullscreen size-full rounded-none border-0 shadow-none overflow-hidden"
                ),
                children: [
                  allowSearch && /* @__PURE__ */ jsxRuntime.jsx(
                    SearchField,
                    {
                      className: "w-auto shrink-0 rounded-t-md rounded-b-none border-0 border-b border-edge shadow-none focus-within:border-edge focus-within:ring-0",
                      value: search,
                      onChange: setSearch,
                      onSearch: (value2) => {
                        setSearch(value2);
                        onSearch?.(value2);
                      },
                      delay: searchDelay,
                      defaultValue: searchValue,
                      autoFocus: true,
                      onKeyDown: (event) => {
                        const isNavigationKey = [
                          "Escape",
                          "Tab",
                          "Enter",
                          "ArrowUp",
                          "ArrowDown",
                          "PageUp",
                          "PageDown"
                        ].includes(event.key);
                        if (!isNavigationKey) {
                          event.stopPropagation();
                        }
                      }
                    }
                  ),
                  isLoading && /* @__PURE__ */ jsxRuntime.jsx(Loading, { className: "py-8", icon: "dots", placement: "center", size: "sm" }),
                  !isLoading && isEmpty && /* @__PURE__ */ jsxRuntime.jsx(
                    "div",
                    {
                      "data-slot": "select-empty",
                      className: "px-2 py-8 text-center text-sm text-fg-muted",
                      children: "No results found"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntime.jsxs(ListPrimitiveProvider, { kind: "select", children: [
                    /* @__PURE__ */ jsxRuntime.jsx(
                      select.Select.ScrollUpArrow,
                      {
                        "data-slot": "select-scroll-up-button",
                        className: "top-0 z-1 flex w-full cursor-default items-center justify-center bg-surface-overlay py-1 text-fg-muted",
                        children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronUp, {}) })
                      }
                    ),
                    useScrollArea ? /* @__PURE__ */ jsxRuntime.jsx(
                      ScrollArea,
                      {
                        maxHeight,
                        className: "min-h-0 flex-1",
                        style: { display: isLoading || isEmpty ? "none" : void 0 },
                        children: /* @__PURE__ */ jsxRuntime.jsx(
                          List,
                          {
                            ...listProps,
                            className: cn.cn("overflow-visible p-1", listProps?.className),
                            style: listProps?.style,
                            children: collection
                          }
                        )
                      }
                    ) : /* @__PURE__ */ jsxRuntime.jsx(
                      List,
                      {
                        ...listProps,
                        className: cn.cn("min-h-0 flex-1 p-1", listProps?.className),
                        style: {
                          display: isLoading || isEmpty ? "none" : void 0,
                          ...listProps?.style
                        },
                        children: collection
                      }
                    ),
                    /* @__PURE__ */ jsxRuntime.jsx(
                      select.Select.ScrollDownArrow,
                      {
                        "data-slot": "select-scroll-down-button",
                        className: "bottom-0 z-1 flex w-full cursor-default items-center justify-center bg-surface-overlay py-1 text-fg-muted",
                        children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { "aria-hidden": "true", size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.ChevronDown, {}) })
                      }
                    )
                  ] })
                ]
              }
            )
          }
        ) })
      ]
    }
  ) });
}
var sideClasses = {
  left: "zen-modal-left absolute inset-y-0 left-0 h-full border-r",
  right: "zen-modal-right absolute inset-y-0 right-0 h-full border-l",
  top: "zen-modal-top absolute inset-x-0 top-0 w-full border-b",
  bottom: "zen-modal-bottom absolute inset-x-0 bottom-0 w-full border-t"
};
function hasSheetHeader(node, depth = 0) {
  if (depth > 4) {
    return false;
  }
  return react.Children.toArray(node).some((child) => {
    if (!react.isValidElement(child)) {
      return false;
    }
    if (child.type === SheetHeader) {
      return child.props.showClose !== false;
    }
    return hasSheetHeader(child.props.children, depth + 1);
  });
}
function Sheet({
  side = "right",
  size,
  children,
  className,
  style,
  isOpen,
  defaultOpen,
  onOpenChange,
  showCloseButton,
  ...props
}) {
  const isNested = useInsideOverlayTrigger();
  const isHorizontal = side === "left" || side === "right";
  const sheetStyle = {
    ...isHorizontal ? { width: size ?? "24rem", maxWidth: "100dvw" } : { height: size, maxHeight: "100dvh" },
    ...style
  };
  const showClose = showCloseButton ?? !hasSheetHeader(children);
  const portal = /* @__PURE__ */ jsxRuntime.jsxs(dialog.Dialog.Portal, { ...props, children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      dialog.Dialog.Backdrop,
      {
        "data-slot": "sheet-backdrop",
        className: "zen-modal-overlay zen-layer-backdrop fixed inset-0 bg-black/80"
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Viewport, { className: "zen-layer-modal fixed inset-0 isolate", children: /* @__PURE__ */ jsxRuntime.jsxs(
      dialog.Dialog.Popup,
      {
        "data-slot": "sheet",
        "data-side": side,
        className: cn.cn(
          "relative p-6 overflow-auto outline-none",
          "bg-surface border-edge shadow-xl",
          sideClasses[side],
          className
        ),
        style: sheetStyle,
        children: [
          showClose && /* @__PURE__ */ jsxRuntime.jsx(
            dialog.Dialog.Close,
            {
              "data-slot": "sheet-close",
              className: "absolute top-4 right-4 z-10",
              render: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "quiet", size: "icon-sm", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) }) })
            }
          ),
          children
        ]
      }
    ) })
  ] });
  if (isNested) {
    return portal;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    dialog.Dialog.Root,
    {
      ...isOpen === void 0 ? { defaultOpen } : { open: isOpen },
      onOpenChange,
      children: portal
    }
  );
}
Sheet.zenOverlayType = "dialog";
function SheetHeader({ title, showClose = true, className, children }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn.cn("flex items-start justify-between gap-3 mb-4", className),
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col gap-1", children: [
          title && /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Title, { "data-slot": "sheet-title", render: /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "xl" }), children: title }),
          children
        ] }),
        showClose && /* @__PURE__ */ jsxRuntime.jsx(
          dialog.Dialog.Close,
          {
            "data-slot": "sheet-close",
            render: /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "quiet", size: "xs", "aria-label": "Close", children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) }) })
          }
        )
      ]
    }
  );
}
function SheetTrigger(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose(props) {
  return /* @__PURE__ */ jsxRuntime.jsx(dialog.Dialog.Close, { "data-slot": "sheet-close", ...props });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    dialog.Dialog.Title,
    {
      "data-slot": "sheet-title",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Heading, { size: "xl" }),
      className
    }
  );
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    dialog.Dialog.Description,
    {
      "data-slot": "sheet-description",
      ...props,
      render: props.render ?? /* @__PURE__ */ jsxRuntime.jsx(Text, { color: "muted" }),
      className
    }
  );
}
function Skeleton({ borderRadius = "md", className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Box,
    {
      "aria-hidden": "true",
      ...props,
      "data-slot": "skeleton",
      borderRadius,
      className: cn.cn("block h-4 w-full animate-pulse bg-interactive", className)
    }
  );
}
function SkeletonText({
  lines = 3,
  lastLineWidth = "60%",
  lineHeight = "0.875rem",
  ...props
}) {
  const lineKeys = Array.from({ length: lines }, (_, index) => `line-${index}`);
  return /* @__PURE__ */ jsxRuntime.jsx(Column, { gap: "2", width: "100%", "data-slot": "skeleton-text", ...props, children: lineKeys.map((key, index) => /* @__PURE__ */ jsxRuntime.jsx(
    Skeleton,
    {
      height: lineHeight,
      width: index === lines - 1 ? lastLineWidth : "100%"
    },
    key
  )) });
}
var avatarSizeMap = {
  sm: "2rem",
  md: "2.5rem",
  lg: "3rem"
};
function SkeletonAvatar({ size = "md", ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    Skeleton,
    {
      width: avatarSizeMap[size],
      height: avatarSizeMap[size],
      borderRadius: "full",
      ...props
    }
  );
}
function Slider({
  className,
  showValue = true,
  label,
  isDisabled,
  onChange,
  onChangeEnd,
  value,
  defaultValue,
  min = 0,
  max = 100,
  orientation = "horizontal",
  ...props
}) {
  const labelId = react.useId();
  const thumbValues = Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min];
  return /* @__PURE__ */ jsxRuntime.jsxs(
    slider.Slider.Root,
    {
      ...props,
      "data-slot": "slider",
      "aria-labelledby": label ? labelId : props["aria-labelledby"],
      value,
      defaultValue,
      min,
      max,
      orientation,
      thumbAlignment: "edge",
      disabled: isDisabled,
      onValueChange: onChange,
      onValueCommitted: onChangeEnd,
      className: cn.cn(
        "flex gap-2",
        orientation === "vertical" ? "flex-row h-full" : "flex-col w-full",
        className
      ),
      children: [
        (label || showValue) && /* @__PURE__ */ jsxRuntime.jsxs(Row, { justifyContent: "space-between", alignItems: "center", children: [
          label && /* @__PURE__ */ jsxRuntime.jsx(Label, { id: labelId, children: label }),
          showValue && /* @__PURE__ */ jsxRuntime.jsx(slider.Slider.Value, { className: "text-sm tabular-nums" })
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          slider.Slider.Control,
          {
            "data-slot": "slider-control",
            className: cn.cn(
              "relative flex touch-none select-none items-center",
              "data-disabled:opacity-50",
              "data-[orientation=horizontal]:h-5 data-[orientation=horizontal]:w-full",
              "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-5 data-[orientation=vertical]:flex-col"
            ),
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(
                slider.Slider.Track,
                {
                  "data-slot": "slider-track",
                  className: cn.cn(
                    "relative grow overflow-hidden rounded-full bg-interactive",
                    "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:w-full",
                    "data-[orientation=vertical]:w-2 data-[orientation=vertical]:h-full"
                  ),
                  children: /* @__PURE__ */ jsxRuntime.jsx(
                    slider.Slider.Indicator,
                    {
                      "data-slot": "slider-indicator",
                      className: cn.cn(
                        "rounded-full bg-primary",
                        "data-[orientation=horizontal]:h-full",
                        "data-[orientation=vertical]:w-full"
                      )
                    }
                  )
                }
              ),
              thumbValues.map((_, index) => /* @__PURE__ */ jsxRuntime.jsx(
                slider.Slider.Thumb,
                {
                  index,
                  "data-slot": "slider-thumb",
                  className: cn.cn(
                    "block size-4 shrink-0 rounded-full bg-surface border-2 border-primary shadow",
                    "cursor-pointer outline-none transition-[box-shadow]",
                    "ring-focus-ring/50 hover:ring-4 focus-visible:ring-4 has-[:focus-visible]:ring-4",
                    "disabled:pointer-events-none disabled:opacity-50",
                    "data-disabled:pointer-events-none data-disabled:opacity-50"
                  )
                },
                index
              ))
            ]
          }
        )
      ]
    }
  );
}
var variantColors = {
  info: "bg-status-info",
  success: "bg-status-success",
  warning: "bg-status-warning",
  error: "bg-status-error",
  active: "bg-status-success",
  inactive: "bg-neutral-400",
  none: "bg-transparent"
};
function StatusDot({ color, variant }) {
  return /* @__PURE__ */ jsxRuntime.jsx(Row, { alignItems: "center", justifyContent: "center", className: "relative w-3 h-3", children: /* @__PURE__ */ jsxRuntime.jsx(
    Box,
    {
      borderRadius: "full",
      className: cn.cn("w-2 h-2", variantColors[variant]),
      style: color ? { backgroundColor: color } : void 0
    }
  ) });
}
function StatusLight(props) {
  const { color, variant = "inactive", children, className, ...domProps } = props;
  return /* @__PURE__ */ jsxRuntime.jsxs(Row, { ...domProps, alignItems: "center", gap: "2", className: cn.cn("text-sm", className), children: [
    /* @__PURE__ */ jsxRuntime.jsx(StatusDot, { color, variant }),
    children
  ] });
}
var switchVariants = tailwindVariants.tv({
  slots: {
    root: [
      "peer inline-flex shrink-0 items-center rounded-full border border-transparent",
      "bg-interactive shadow-xs cursor-pointer outline-none",
      "transition-[color,background-color,box-shadow,border-color]",
      "data-checked:bg-primary",
      "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
      "aria-invalid:border-status-error aria-invalid:ring-status-error/20",
      "data-disabled:cursor-not-allowed data-disabled:opacity-50"
    ],
    thumb: [
      "pointer-events-none block rounded-full bg-surface shadow-sm ring-0",
      "transition-transform translate-x-0",
      "data-checked:translate-x-[calc(100%-2px)]"
    ]
  },
  variants: {
    size: {
      sm: { root: "h-3.5 w-6", thumb: "size-3" },
      md: { root: "h-[1.15rem] w-8", thumb: "size-4" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
function Switch({
  label,
  children,
  className,
  size,
  isSelected,
  defaultSelected,
  isDisabled,
  onChange,
  value,
  id,
  ...props
}) {
  const checked = isSelected ?? (typeof value === "boolean" ? value : void 0);
  const styles = switchVariants({ size });
  const fieldId = useFieldId(id);
  const labelContent = label ?? children;
  return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-3 text-sm", children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      _switch.Switch.Root,
      {
        ...props,
        id: fieldId,
        "data-slot": "switch",
        "data-size": size ?? "md",
        value: typeof value === "string" ? value : void 0,
        checked,
        defaultChecked: defaultSelected,
        disabled: isDisabled,
        className: cn.cn(styles.root(), className),
        onCheckedChange: onChange,
        children: /* @__PURE__ */ jsxRuntime.jsx(_switch.Switch.Thumb, { "data-slot": "switch-thumb", className: styles.thumb() })
      }
    ),
    labelContent ? /* @__PURE__ */ jsxRuntime.jsx(
      Label,
      {
        htmlFor: fieldId,
        className: "cursor-pointer peer-data-disabled:cursor-not-allowed peer-data-disabled:opacity-50",
        children: labelContent
      }
    ) : null
  ] });
}
function Tabs({
  children,
  className,
  selectedKey,
  value,
  defaultSelectedKey,
  defaultValue,
  orientation = "horizontal",
  onSelectionChange,
  onValueChange,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    tabs.Tabs.Root,
    {
      ...props,
      "data-slot": "tabs",
      orientation,
      value: value ?? selectedKey,
      defaultValue: defaultValue ?? defaultSelectedKey,
      onValueChange: (next, eventDetails) => {
        onValueChange?.(next, eventDetails);
        if (next !== null && next !== void 0) {
          onSelectionChange?.(String(next));
        }
      },
      className: cn.cn(
        "relative w-full gap-6",
        "flex data-[orientation=horizontal]:flex-col",
        className
      ),
      children
    }
  );
}
function TabList({ children, className, variant = "line", ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsxs(
    tabs.Tabs.List,
    {
      ...props,
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn.cn(
        "group/tabs-list relative flex items-center",
        "[&_a.tab]:font-medium [&_a.tab]:no-underline",
        variant === "line" && [
          "gap-6 border-b border-edge",
          "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
          "data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r"
        ],
        variant === "default" && [
          "w-fit gap-1 rounded bg-interactive p-[3px]",
          "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch"
        ],
        className
      ),
      children: [
        children,
        variant === "line" && /* @__PURE__ */ jsxRuntime.jsx(TabIndicator, {})
      ]
    }
  );
}
function TabIndicator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    tabs.Tabs.Indicator,
    {
      ...props,
      "data-slot": "tabs-indicator",
      className: cn.cn(
        "absolute bg-primary transition-[width,height,translate] duration-200",
        "bottom-0 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left)",
        "data-[orientation=vertical]:bottom-auto data-[orientation=vertical]:right-0",
        "data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-0.5",
        "data-[orientation=vertical]:translate-x-0 data-[orientation=vertical]:translate-y-(--active-tab-top)",
        className
      )
    }
  );
}
function Tab({ id, value, isDisabled, href, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    tabs.Tabs.Tab,
    {
      ...props,
      "data-slot": "tabs-trigger",
      value: value ?? id,
      disabled: isDisabled,
      render: href ? /* @__PURE__ */ jsxRuntime.jsx("a", { href }) : void 0,
      nativeButton: !href,
      className: cn.cn(
        "tab relative flex items-center justify-center gap-2 whitespace-nowrap",
        "cursor-pointer select-none text-sm text-fg-muted outline-none transition-colors",
        "hover:text-fg",
        "data-active:text-fg",
        "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
        "disabled:cursor-default disabled:text-fg-disabled",
        "data-disabled:cursor-default data-disabled:text-fg-disabled",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // `line` variant — the active underline is drawn by <TabIndicator />.
        "group-data-[variant=line]/tabs-list:py-2",
        // `default` (pill) variant
        "group-data-[variant=default]/tabs-list:flex-1 group-data-[variant=default]/tabs-list:rounded",
        "group-data-[variant=default]/tabs-list:px-3 group-data-[variant=default]/tabs-list:py-1",
        "group-data-[variant=default]/tabs-list:data-active:bg-surface",
        "group-data-[variant=default]/tabs-list:data-active:shadow-sm",
        className
      ),
      children
    }
  );
}
function TabPanel({ id, value, children, className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    tabs.Tabs.Panel,
    {
      ...props,
      "data-slot": "tabs-panel",
      value: value ?? id,
      className: cn.cn("flex-1 outline-none", className),
      children
    }
  );
}
var TagContext = react.createContext({
  allowsRemoving: false,
  remove: () => void 0
});
function TagGroup({ label, children, className, onRemove, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    TagContext.Provider,
    {
      value: {
        allowsRemoving: !!onRemove,
        remove: (key) => onRemove?.(/* @__PURE__ */ new Set([key]))
      },
      children: /* @__PURE__ */ jsxRuntime.jsxs("div", { ...props, "data-slot": "tag-group", className: cn.cn("flex flex-col gap-1", className), children: [
        label && /* @__PURE__ */ jsxRuntime.jsx(Label, { children: label }),
        /* @__PURE__ */ jsxRuntime.jsx("ul", { "data-slot": "tag-group-list", className: "flex list-none flex-wrap gap-1 p-0 m-0", children })
      ] })
    }
  );
}
function Tag({ id, variant, children, className, isDisabled, ...props }) {
  const styles = tag({ variant });
  const { allowsRemoving, remove } = react.useContext(TagContext);
  const key = id ?? String(children);
  const isRemovable = allowsRemoving && !isDisabled;
  const handleKeyDown = (event) => {
    props.onKeyDown?.(event);
    if (event.defaultPrevented || !isRemovable) {
      return;
    }
    if (event.key === "Backspace" || event.key === "Delete") {
      event.preventDefault();
      remove(key);
    }
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "li",
    {
      ...props,
      "data-slot": "tag",
      "data-disabled": isDisabled || void 0,
      "aria-disabled": isDisabled || void 0,
      tabIndex: props.tabIndex ?? (isRemovable ? 0 : void 0),
      className: cn.cn(
        styles.base(),
        "list-none",
        "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
        isDisabled && "opacity-50",
        className
      ),
      onKeyDown: handleKeyDown,
      children: [
        children,
        isRemovable && /* @__PURE__ */ jsxRuntime.jsx(
          "button",
          {
            type: "button",
            "data-slot": "tag-remove",
            className: cn.cn(
              styles.removeButton(),
              "focus-visible:ring-[3px] focus-visible:ring-focus-ring/50"
            ),
            "aria-label": `Remove ${typeof children === "string" ? children : "tag"}`,
            onClick: () => remove(key),
            children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "xs", children: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.X, {}) })
          }
        )
      ]
    }
  );
}
function getElement(target) {
  return "current" in target ? target.current : target;
}
function applyTheme2(element, theme) {
  element.setAttribute("data-theme", theme);
  if (theme === "dark") {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }
}
function ThemeButton({
  className,
  variant = "quiet",
  target,
  onPress,
  ...props
}) {
  const globalTheme = useTheme();
  const [localTheme, setLocalTheme] = react.useState(null);
  const initializedRef = react.useRef(false);
  const isLocal = !!target;
  react.useEffect(() => {
    if (isLocal && target && !initializedRef.current) {
      const element = getElement(target);
      if (element) {
        initializedRef.current = true;
        setLocalTheme(globalTheme.theme);
        applyTheme2(element, globalTheme.theme);
      }
    }
  }, [isLocal, target, globalTheme.theme]);
  const theme = isLocal ? localTheme ?? globalTheme.theme : globalTheme.theme;
  const transitions = web.useTransition(theme, {
    initial: { opacity: 1 },
    from: {
      opacity: 0,
      transform: `translateY(${theme === "light" ? "20px" : "-20px"}) scale(0.5)`
    },
    enter: { opacity: 1, transform: "translateY(0px) scale(1.0)" },
    leave: {
      opacity: 0,
      transform: `translateY(${theme === "light" ? "-20px" : "20px"}) scale(0.5)`
    }
  });
  function handleClick(e) {
    const newTheme = theme === "light" ? "dark" : "light";
    if (isLocal && target) {
      const element = getElement(target);
      if (element) {
        applyTheme2(element, newTheme);
        setLocalTheme(newTheme);
      }
    } else {
      globalTheme.setTheme(newTheme);
    }
    onPress?.(e);
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(
    Button,
    {
      ...props,
      className: cn.cn(
        "w-[42px] flex justify-center items-center cursor-pointer [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:absolute",
        className
      ),
      variant,
      onPress: handleClick,
      children: [
        transitions((style, item) => (
          // @ts-expect-error
          /* @__PURE__ */ jsxRuntime.jsx(web.animated.div, { style, children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: item === "light" ? /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Sun, {}) : /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Moon, {}) }) }, item)
        )),
        "\xA0"
      ]
    }
  );
}
var STORAGE_KEY = "theme-mode";
function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeSwitcher({ className }) {
  const { setTheme } = useTheme();
  const [mode, setMode] = react.useState("system");
  react.useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && ["light", "dark", "system"].includes(stored)) {
      setMode(stored);
    }
  }, []);
  react.useEffect(() => {
    if (mode === "system") {
      setTheme(getSystemTheme());
    } else {
      setTheme(mode);
    }
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode, setTheme]);
  react.useEffect(() => {
    if (mode !== "system") return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(getSystemTheme());
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode, setTheme]);
  const options = [
    { value: "light", icon: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Sun, {}), label: "Light" },
    { value: "dark", icon: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Moon, {}), label: "Dark" },
    { value: "system", icon: /* @__PURE__ */ jsxRuntime.jsx(icons_exports.Monitor, {}), label: "System" }
  ];
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      className: cn.cn(
        "inline-flex items-center bg-surface border border-edge rounded-md overflow-hidden",
        className
      ),
      children: options.map((option) => /* @__PURE__ */ jsxRuntime.jsx(
        "button",
        {
          type: "button",
          onClick: () => setMode(option.value),
          "aria-label": option.label,
          "aria-pressed": mode === option.value,
          className: cn.cn(
            "size-9 flex items-center justify-center cursor-pointer outline-none transition-colors",
            "[&:not(:first-child)]:border-l [&:not(:first-child)]:border-edge",
            "hover:bg-interactive",
            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
            mode === option.value ? "bg-interactive text-fg" : "text-fg-muted"
          ),
          children: /* @__PURE__ */ jsxRuntime.jsx(Icon, { size: "sm", children: option.icon })
        },
        option.value
      ))
    }
  );
}
var toggleVariants = tailwindVariants.tv({
  base: [
    "inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap",
    "rounded text-sm font-medium cursor-pointer outline-none",
    "transition-[color,background-color,box-shadow,border-color]",
    "hover:bg-interactive-hover",
    "data-pressed:bg-interactive data-pressed:text-fg",
    "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "data-disabled:pointer-events-none data-disabled:opacity-50",
    "aria-invalid:border-status-error aria-invalid:ring-status-error/20",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
  ],
  variants: {
    variant: {
      default: "bg-transparent border border-transparent",
      outline: "bg-surface border border-edge shadow-xs",
      /** @deprecated Kept for backward compatibility with `<ToggleGroup variant="primary" />`. */
      primary: [
        "bg-transparent border border-transparent",
        "data-pressed:bg-primary data-pressed:text-primary-fg"
      ]
    },
    size: {
      sm: "h-8 min-w-8 px-1.5",
      md: "h-9 min-w-9 px-2",
      lg: "h-10 min-w-10 px-2.5"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "md"
  }
});
function Toggle({
  label,
  children,
  className,
  variant,
  size,
  pressed,
  defaultPressed,
  disabled,
  isSelected,
  defaultSelected,
  isDisabled,
  onChange,
  onPressedChange,
  ...props
}) {
  const labelId = react.useId();
  const toggle$1 = /* @__PURE__ */ jsxRuntime.jsx(
    toggle.Toggle,
    {
      ...props,
      "data-slot": "toggle",
      "aria-labelledby": label ? labelId : props["aria-labelledby"],
      pressed: pressed ?? isSelected,
      defaultPressed: defaultPressed ?? defaultSelected,
      disabled: disabled ?? isDisabled,
      onPressedChange: (nextPressed, event) => {
        onPressedChange?.(nextPressed, event);
        onChange?.(nextPressed);
      },
      className: toggleVariants({ variant, size, className }),
      children
    }
  );
  if (label) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Label, { id: labelId, children: label }),
      toggle$1
    ] });
  }
  return toggle$1;
}
var ToggleGroupContext = react.createContext({});
function ToggleGroup({
  label,
  value,
  defaultValue,
  variant,
  size,
  spacing = 0,
  orientation = "horizontal",
  onChange,
  className,
  children,
  selectionMode = "single",
  selectedKeys,
  defaultSelectedKeys,
  onSelectionChange,
  ...props
}) {
  const labelId = react.useId();
  if (process.env.NODE_ENV !== "production" && value !== void 0 && selectedKeys !== void 0) {
    console.warn(
      "[ToggleGroup] `value` and `selectedKeys` were both provided. `value` takes precedence; `selectedKeys` is a deprecated alias."
    );
  }
  const handleChange = (keys) => {
    onSelectionChange?.(new Set(keys));
    onChange?.(keys);
  };
  const group = /* @__PURE__ */ jsxRuntime.jsx(ToggleGroupContext.Provider, { value: { variant, size, spacing, orientation }, children: /* @__PURE__ */ jsxRuntime.jsx(
    toggleGroup.ToggleGroup,
    {
      ...props,
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      "data-spacing": spacing,
      orientation,
      "aria-labelledby": label ? labelId : props["aria-labelledby"],
      value: value ?? (selectedKeys ? Array.from(selectedKeys) : void 0),
      defaultValue: defaultValue ?? (defaultSelectedKeys ? Array.from(defaultSelectedKeys) : void 0),
      multiple: selectionMode === "multiple",
      onValueChange: handleChange,
      className: cn.cn(
        "group/toggle-group inline-flex w-fit items-center",
        orientation === "vertical" ? "flex-col items-stretch" : "flex-row",
        spacing === 0 ? "gap-0 bg-surface shadow-sm border border-edge rounded overflow-hidden" : void 0,
        className
      ),
      style: spacing ? { gap: `calc(var(--spacing) * ${spacing})` } : void 0,
      children
    }
  ) });
  if (label) {
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "inline-flex flex-col gap-1", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Label, { id: labelId, children: label }),
      group
    ] });
  }
  return group;
}
function ToggleGroupItem({
  id,
  className,
  children,
  variant,
  size,
  isDisabled,
  ...props
}) {
  const context = react.useContext(ToggleGroupContext);
  const resolvedVariant = context.variant ?? variant;
  const resolvedSize = context.size ?? size;
  return /* @__PURE__ */ jsxRuntime.jsx(
    toggle.Toggle,
    {
      ...props,
      "data-slot": "toggle-group-item",
      "data-variant": resolvedVariant,
      "data-size": resolvedSize,
      "data-spacing": context.spacing,
      value: props.value ?? id,
      disabled: isDisabled,
      className: toggleVariants({
        variant: resolvedVariant,
        size: resolvedSize,
        className: cn.cn(
          "shrink-0 rounded-none focus:z-10 focus-visible:z-10",
          "focus-visible:border-focus-ring focus-visible:ring-[3px] focus-visible:ring-focus-ring/50",
          context.spacing === 0 && (context.orientation === "vertical" ? "[&:not(:first-child)]:border-t [&:not(:first-child)]:border-t-edge" : "[&:not(:first-child)]:border-l [&:not(:first-child)]:border-l-edge"),
          className
        )
      }),
      children
    }
  );
}
function Toolbar({ isDisabled, orientation, className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    toolbar.Toolbar.Root,
    {
      ...props,
      "data-slot": "toolbar",
      disabled: isDisabled,
      orientation,
      className: cn.cn(
        "flex items-center gap-1 p-1 rounded-md border border-edge bg-surface shadow-sm w-fit",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        className
      ),
      children
    }
  );
}
function ToolbarGroup({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    toolbar.Toolbar.Group,
    {
      ...props,
      "data-slot": "toolbar-group",
      className: cn.cn(
        "flex items-center gap-1",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
        className
      ),
      children
    }
  );
}
function ToolbarButton({
  isDisabled,
  disabled,
  variant = "quiet",
  size = "md",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    toolbar.Toolbar.Button,
    {
      ...props,
      "data-slot": "toolbar-button",
      "data-variant": variant,
      "data-size": size,
      disabled: isDisabled ?? disabled,
      className: button({ variant, size, className }),
      children
    }
  );
}
function ToolbarLink({ className, children, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(toolbar.Toolbar.Link, { ...props, "data-slot": "toolbar-link", className, children });
}
function ToolbarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntime.jsx(
    toolbar.Toolbar.Separator,
    {
      ...props,
      "data-slot": "toolbar-separator",
      className: cn.cn(
        "shrink-0 bg-edge-muted",
        // Base UI sets `data-orientation` to the separator's own orientation,
        // which is the inverse of the toolbar's.
        "data-[orientation=vertical]:mx-1 data-[orientation=vertical]:h-5 data-[orientation=vertical]:w-px data-[orientation=vertical]:self-center",
        "data-[orientation=horizontal]:my-1 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full",
        className
      )
    }
  );
}
var defaultToastConfig = {
  duration: 3e3
};
function ZenProvider({
  children,
  theme,
  colorScheme,
  palette,
  toast: toast2,
  tooltip: tooltip2
}) {
  useInitTheme(theme, colorScheme, palette);
  return /* @__PURE__ */ jsxRuntime.jsx(tooltip$1.Tooltip.Provider, { ...tooltip2, children: /* @__PURE__ */ jsxRuntime.jsx(ToastProvider, { ...defaultToastConfig, ...toast2, children }) });
}

Object.defineProperty(exports, "cn", {
  enumerable: true,
  get: function () { return cn.cn; }
});
Object.defineProperty(exports, "mergeProps", {
  enumerable: true,
  get: function () { return mergeProps.mergeProps; }
});
Object.defineProperty(exports, "useRender", {
  enumerable: true,
  get: function () { return useRender.useRender; }
});
exports.Accordion = Accordion;
exports.AccordionContent = AccordionContent;
exports.AccordionItem = AccordionItem;
exports.AccordionPanel = AccordionPanel;
exports.AccordionTrigger = AccordionTrigger;
exports.Alert = Alert;
exports.AlertDescription = AlertDescription;
exports.AlertDialog = AlertDialog;
exports.AlertDialogAction = AlertDialogAction;
exports.AlertDialogCancel = AlertDialogCancel;
exports.AlertDialogDescription = AlertDialogDescription;
exports.AlertDialogTitle = AlertDialogTitle;
exports.AlertTitle = AlertTitle;
exports.AspectRatio = AspectRatio;
exports.Autocomplete = Autocomplete;
exports.Avatar = Avatar;
exports.AvatarFallback = AvatarFallback;
exports.AvatarGroup = AvatarGroup;
exports.AvatarImage = AvatarImage;
exports.Badge = Badge;
exports.Blockquote = Blockquote;
exports.Box = Box;
exports.Breadcrumb = Breadcrumb;
exports.BreadcrumbEllipsis = BreadcrumbEllipsis;
exports.BreadcrumbItem = BreadcrumbItem;
exports.BreadcrumbLink = BreadcrumbLink;
exports.BreadcrumbList = BreadcrumbList;
exports.BreadcrumbPage = BreadcrumbPage;
exports.BreadcrumbSeparator = BreadcrumbSeparator;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.ButtonGroupSeparator = ButtonGroupSeparator;
exports.ButtonGroupText = ButtonGroupText;
exports.Calendar = Calendar;
exports.CalendarDayButton = CalendarDayButton;
exports.Carousel = Carousel;
exports.CarouselContent = CarouselContent;
exports.CarouselDots = CarouselDots;
exports.CarouselItem = CarouselItem;
exports.CarouselNext = CarouselNext;
exports.CarouselPrevious = CarouselPrevious;
exports.Checkbox = Checkbox;
exports.CheckboxGroup = CheckboxGroup;
exports.Code = Code;
exports.Collapsible = Collapsible;
exports.CollapsiblePanel = CollapsiblePanel;
exports.CollapsibleTrigger = CollapsibleTrigger;
exports.Column = Column;
exports.ComboBox = ComboBox;
exports.Command = Command;
exports.CommandDialog = CommandDialog;
exports.CommandEmpty = CommandEmpty;
exports.CommandGroup = CommandGroup;
exports.CommandInput = CommandInput;
exports.CommandItem = CommandItem;
exports.CommandList = CommandList;
exports.CommandSeparator = CommandSeparator;
exports.CommandShortcut = CommandShortcut;
exports.ConfirmationDialog = ConfirmationDialog;
exports.Container = Container;
exports.ContextMenu = ContextMenu;
exports.ContextMenuContent = ContextMenuContent;
exports.ContextMenuRoot = ContextMenuRoot;
exports.ContextMenuTrigger = ContextMenuTrigger;
exports.CopyButton = CopyButton;
exports.DataCard = DataCard;
exports.DataColumn = DataColumn;
exports.DataTable = DataTable;
exports.DatePicker = DatePicker;
exports.Dialog = Dialog;
exports.DialogTrigger = DialogTrigger;
exports.Dots = Dots;
exports.Drawer = Drawer;
exports.DrawerClose = DrawerClose;
exports.DrawerContent = DrawerContent;
exports.DrawerDescription = DrawerDescription;
exports.DrawerFooter = DrawerFooter;
exports.DrawerHeader = DrawerHeader;
exports.DrawerTitle = DrawerTitle;
exports.DrawerTrigger = DrawerTrigger;
exports.Empty = Empty;
exports.EmptyContent = EmptyContent;
exports.EmptyDescription = EmptyDescription;
exports.EmptyHeader = EmptyHeader;
exports.EmptyMedia = EmptyMedia;
exports.EmptyTitle = EmptyTitle;
exports.Field = Field;
exports.FieldContent = FieldContent;
exports.FieldControl = FieldControl;
exports.FieldDescription = FieldDescription;
exports.FieldError = FieldError;
exports.FieldGroup = FieldGroup;
exports.FieldLabel = FieldLabel;
exports.FieldLegend = FieldLegend;
exports.FieldSeparator = FieldSeparator;
exports.FieldSet = FieldSet;
exports.FieldTitle = FieldTitle;
exports.FileTrigger = FileTrigger;
exports.Flexbox = Flexbox;
exports.FloatingTooltip = FloatingTooltip;
exports.Focusable = Focusable;
exports.Form = Form;
exports.FormButtons = FormButtons;
exports.FormController = FormController;
exports.FormField = FormField;
exports.FormFieldArray = FormFieldArray;
exports.FormResetButton = FormResetButton;
exports.FormSubmitButton = FormSubmitButton;
exports.Grid = Grid;
exports.Heading = Heading;
exports.HoverTrigger = HoverTrigger;
exports.Icon = Icon;
exports.Image = Image;
exports.Input = Input;
exports.InputGroup = InputGroup;
exports.InputGroupAddon = InputGroupAddon;
exports.InputGroupButton = InputGroupButton;
exports.InputGroupInput = InputGroupInput;
exports.InputGroupText = InputGroupText;
exports.InputGroupTextarea = InputGroupTextarea;
exports.Kbd = Kbd;
exports.KbdGroup = KbdGroup;
exports.Label = Label;
exports.List = List;
exports.ListItem = ListItem;
exports.ListPrimitiveProvider = ListPrimitiveProvider;
exports.ListSection = ListSection;
exports.ListSeparator = ListSeparator;
exports.Loading = Loading;
exports.LoadingButton = LoadingButton;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.MenuSection = MenuSection;
exports.MenuSeparator = MenuSeparator;
exports.MenuShortcut = MenuShortcut;
exports.MenuTrigger = MenuTrigger;
exports.MenuVariantContext = MenuVariantContext;
exports.Menubar = Menubar;
exports.MenubarMenu = MenubarMenu;
exports.Meter = Meter;
exports.Modal = Modal;
exports.ModalClose = ModalClose;
exports.ModalDescription = ModalDescription;
exports.ModalTitle = ModalTitle;
exports.ModalTrigger = ModalTrigger;
exports.Navbar = Navbar;
exports.NavbarItem = NavbarItem;
exports.NavbarLink = NavbarLink;
exports.NumberField = NumberField;
exports.OTPField = OTPField;
exports.OTPFieldSeparator = OTPFieldSeparator;
exports.PALETTES = PALETTES;
exports.PageHeader = PageHeader;
exports.PageHeaderActions = PageHeaderActions;
exports.PageHeaderTitle = PageHeaderTitle;
exports.Pagination = Pagination;
exports.PaginationContent = PaginationContent;
exports.PaginationEllipsis = PaginationEllipsis;
exports.PaginationItem = PaginationItem;
exports.PaginationLink = PaginationLink;
exports.PaginationNext = PaginationNext;
exports.PaginationPrevious = PaginationPrevious;
exports.PasswordField = PasswordField;
exports.Popover = Popover;
exports.PopoverClose = PopoverClose;
exports.PopoverDescription = PopoverDescription;
exports.PopoverTitle = PopoverTitle;
exports.PopoverTrigger = PopoverTrigger;
exports.Pressable = Pressable;
exports.PreviewCard = PreviewCard;
exports.PreviewCardContent = PreviewCardContent;
exports.PreviewCardTrigger = PreviewCardTrigger;
exports.ProgressBar = ProgressBar;
exports.ProgressCircle = ProgressCircle;
exports.ProgressIndicator = ProgressIndicator;
exports.ProgressLabel = ProgressLabel;
exports.ProgressTrack = ProgressTrack;
exports.ProgressValue = ProgressValue;
exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.ResizableHandle = ResizableHandle;
exports.ResizablePanel = ResizablePanel;
exports.ResizablePanelGroup = ResizablePanelGroup;
exports.RouterProvider = RouterProvider;
exports.Row = Row;
exports.ScrollArea = ScrollArea;
exports.SearchField = SearchField;
exports.Select = Select;
exports.Separator = Separator;
exports.Sheet = Sheet;
exports.SheetClose = SheetClose;
exports.SheetDescription = SheetDescription;
exports.SheetHeader = SheetHeader;
exports.SheetTitle = SheetTitle;
exports.SheetTrigger = SheetTrigger;
exports.Skeleton = Skeleton;
exports.SkeletonAvatar = SkeletonAvatar;
exports.SkeletonText = SkeletonText;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.StatusLight = StatusLight;
exports.SubMenuTrigger = SubMenuTrigger;
exports.SubmenuTrigger = SubMenuTrigger;
exports.Switch = Switch;
exports.Tab = Tab;
exports.TabIndicator = TabIndicator;
exports.TabList = TabList;
exports.TabPanel = TabPanel;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCaption = TableCaption;
exports.TableCell = TableCell;
exports.TableColumn = TableColumn;
exports.TableContainer = TableContainer;
exports.TableFooter = TableFooter;
exports.TableHead = TableHead;
exports.TableHeader = TableHeader;
exports.TableRow = TableRow;
exports.TableSelectionCheckbox = TableSelectionCheckbox;
exports.Tabs = Tabs;
exports.Tag = Tag;
exports.TagGroup = TagGroup;
exports.Text = Text;
exports.TextField = TextField;
exports.Textarea = Textarea;
exports.ThemeButton = ThemeButton;
exports.ThemeSwitcher = ThemeSwitcher;
exports.Toast = Toast;
exports.ToastContext = ToastContext;
exports.ToastProvider = ToastProvider;
exports.Toaster = Toaster;
exports.Toggle = Toggle;
exports.ToggleGroup = ToggleGroup;
exports.ToggleGroupItem = ToggleGroupItem;
exports.Toolbar = Toolbar;
exports.ToolbarButton = ToolbarButton;
exports.ToolbarGroup = ToolbarGroup;
exports.ToolbarLink = ToolbarLink;
exports.ToolbarSeparator = ToolbarSeparator;
exports.Tooltip = Tooltip;
exports.TooltipBubble = TooltipBubble;
exports.TooltipContent = TooltipContent;
exports.TooltipTrigger = TooltipTrigger;
exports.ZenProvider = ZenProvider;
exports.getCssColorValue = getCssColorValue;
exports.inputGroupControlClasses = inputGroupControlClasses;
exports.isHeightPreset = isHeightPreset;
exports.isMaxHeightPreset = isMaxHeightPreset;
exports.isMaxWidthPreset = isMaxWidthPreset;
exports.isMinHeightPreset = isMinHeightPreset;
exports.isMinWidthPreset = isMinWidthPreset;
exports.isWidthPreset = isWidthPreset;
exports.labelClasses = labelClasses;
exports.mapAlignContent = mapAlignContent;
exports.mapAlignItems = mapAlignItems;
exports.mapAlignSelf = mapAlignSelf;
exports.mapBackgroundColor = mapBackgroundColor;
exports.mapBorder = mapBorder;
exports.mapBorderColor = mapBorderColor;
exports.mapBorderRadius = mapBorderRadius;
exports.mapBorderWidth = mapBorderWidth;
exports.mapCursor = mapCursor;
exports.mapDisplay = mapDisplay;
exports.mapFlexDirection = mapFlexDirection;
exports.mapFlexWrap = mapFlexWrap;
exports.mapFontSize = mapFontSize;
exports.mapFontWeight = mapFontWeight;
exports.mapGap = mapGap;
exports.mapGridAutoFlow = mapGridAutoFlow;
exports.mapGridColumns = mapGridColumns;
exports.mapGridRows = mapGridRows;
exports.mapHeadingSize = mapHeadingSize;
exports.mapHeight = mapHeight;
exports.mapJustifyContent = mapJustifyContent;
exports.mapJustifyItems = mapJustifyItems;
exports.mapLetterSpacing = mapLetterSpacing;
exports.mapLineHeight = mapLineHeight;
exports.mapMargin = mapMargin;
exports.mapMaxHeight = mapMaxHeight;
exports.mapMaxWidth = mapMaxWidth;
exports.mapMinHeight = mapMinHeight;
exports.mapMinWidth = mapMinWidth;
exports.mapOpacity = mapOpacity;
exports.mapOverflow = mapOverflow;
exports.mapPadding = mapPadding;
exports.mapPointerEvents = mapPointerEvents;
exports.mapPosition = mapPosition;
exports.mapShadow = mapShadow;
exports.mapSpace = mapSpace;
exports.mapStateStyles = mapStateStyles;
exports.mapTextAlign = mapTextAlign;
exports.mapTextColor = mapTextColor;
exports.mapTextDecorationStyle = mapTextDecorationStyle;
exports.mapTextIndent = mapTextIndent;
exports.mapTextTransform = mapTextTransform;
exports.mapTextWrap = mapTextWrap;
exports.mapVerticalAlign = mapVerticalAlign;
exports.mapWhitespace = mapWhitespace;
exports.mapWidth = mapWidth;
exports.mapWordBreak = mapWordBreak;
exports.removeToast = removeToast;
exports.resolveRender = resolveRender;
exports.selectionToStrings = selectionToStrings;
exports.switchVariants = switchVariants;
exports.toSelection = toSelection;
exports.toggleVariants = toggleVariants;
exports.useBreakpoint = useBreakpoint;
exports.useCarousel = useCarousel;
exports.useDebounce = useDebounce;
exports.useInitTheme = useInitTheme;
exports.useTheme = useTheme;
exports.useToast = useToast;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map