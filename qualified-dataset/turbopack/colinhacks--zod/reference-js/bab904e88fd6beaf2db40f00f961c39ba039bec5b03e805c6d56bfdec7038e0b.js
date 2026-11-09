'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as Primitive from 'fumadocs-core/toc';
import { createContext, use, useMemo, useRef, } from 'react';
import { cn } from '../../utils/cn.js';
import { useI18n } from '../../contexts/i18n.js';
import { TocThumb } from '../../components/layout/toc-thumb.js';
import { ScrollArea, ScrollViewport } from '../ui/scroll-area.js';
import { ChevronRight, Text } from 'lucide-react';
import { usePageStyles } from '../../contexts/layout.js';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from '../../components/ui/collapsible.js';
export function Toc(props) {
    const { toc } = usePageStyles();
    return (_jsx("div", { id: "nd-toc", ...props, className: cn('sticky top-[calc(var(--fd-banner-height)+var(--fd-nav-height))] h-(--fd-toc-height) pb-2 pt-12', toc, props.className), style: {
            ...props.style,
            '--fd-toc-height': 'calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))',
        }, children: _jsx("div", { className: "flex h-full w-(--fd-toc-width) max-w-full flex-col gap-3 pe-4", children: props.children }) }));
}
export function TocItemsEmpty() {
    const { text } = useI18n();
    return (_jsx("div", { className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground", children: text.tocNoHeadings }));
}
export function TOCScrollArea({ isMenu, ...props }) {
    const viewRef = useRef(null);
    return (_jsx(ScrollArea, { ...props, className: cn('flex flex-col ps-px', props.className), children: _jsx(Primitive.ScrollProvider, { containerRef: viewRef, children: _jsx(ScrollViewport, { className: cn('relative min-h-0 text-sm', isMenu && 'mt-2 mb-4 mx-4 md:mx-6'), ref: viewRef, children: props.children }) }) }));
}
export function TOCItems({ items }) {
    const containerRef = useRef(null);
    if (items.length === 0)
        return _jsx(TocItemsEmpty, {});
    return (_jsxs(_Fragment, { children: [_jsx(TocThumb, { containerRef: containerRef, className: "absolute start-0 mt-(--fd-top) h-(--fd-height) w-px bg-fd-primary transition-all" }), _jsx("div", { ref: containerRef, className: "flex flex-col border-s border-fd-foreground/10", children: items.map((item) => (_jsx(TOCItem, { item: item }, item.url))) })] }));
}
function TOCItem({ item }) {
    return (_jsx(Primitive.TOCItem, { href: item.url, className: cn('prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary', item.depth <= 2 && 'ps-3', item.depth === 3 && 'ps-6', item.depth >= 4 && 'ps-8'), children: item.title }));
}
const Context = createContext(null);
const TocProvider = Context.Provider || Context;
export function TocPopover({ open, onOpenChange, ref: _ref, ...props }) {
    return (_jsx(Collapsible, { open: open, onOpenChange: onOpenChange, ...props, children: _jsx(TocProvider, { value: useMemo(() => ({
                open,
                setOpen: onOpenChange,
            }), [onOpenChange, open]), children: props.children }) }));
}
export function TocPopoverTrigger({ items, ...props }) {
    const { text } = useI18n();
    const { open } = use(Context);
    const active = Primitive.useActiveAnchor();
    const current = useMemo(() => {
        return items.find((item) => active === item.url.slice(1))?.title;
    }, [items, active]);
    return (_jsxs(CollapsibleTrigger, { ...props, className: cn('inline-flex items-center text-sm gap-2 text-nowrap px-4 py-2.5 text-start md:px-6 focus-visible:outline-none', props.className), children: [_jsx(Text, { className: "size-4 shrink-0" }), text.toc, _jsx(ChevronRight, { className: cn('size-4 shrink-0 text-fd-muted-foreground transition-all', !current && 'opacity-0', open ? 'rotate-90' : '-ms-1.5') }), _jsx("span", { className: cn('truncate text-fd-muted-foreground transition-opacity -ms-1.5', (!current || open) && 'opacity-0'), children: current })] }));
}
export function TocPopoverContent(props) {
    return (_jsx(CollapsibleContent, { "data-toc-popover": "", className: "flex flex-col max-h-[50vh]", ...props, children: props.children }));
}
