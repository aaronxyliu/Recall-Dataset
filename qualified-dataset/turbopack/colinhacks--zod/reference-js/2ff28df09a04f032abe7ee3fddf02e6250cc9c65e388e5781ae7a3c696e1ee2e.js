'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment, useEffect, useMemo, useRef, useState, } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from './utils/cn.js';
import { useI18n } from './contexts/i18n.js';
import { useTreeContext, useTreePath } from './contexts/tree.js';
import { useSidebar } from './contexts/sidebar.js';
import { usePathname } from 'next/navigation';
import { useNav } from './components/layout/nav.js';
import { getBreadcrumbItemsFromPath, } from 'fumadocs-core/breadcrumb';
import { usePageStyles } from './contexts/layout.js';
import { isActive } from './utils/is-active.js';
import { TocPopover } from './components/layout/toc.js';
import { useEffectEvent } from 'fumadocs-core/utils/use-effect-event';
export function TocPopoverHeader(props) {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    const sidebar = useSidebar();
    const { tocNav } = usePageStyles();
    const { isTransparent } = useNav();
    const onClick = useEffectEvent((e) => {
        if (!open)
            return;
        if (ref.current && !ref.current.contains(e.target))
            setOpen(false);
    });
    useEffect(() => {
        window.addEventListener('click', onClick);
        return () => {
            window.removeEventListener('click', onClick);
        };
    }, [onClick]);
    return (_jsx("div", { className: cn('sticky overflow-visible z-10', tocNav, props.className), style: {
            top: 'calc(var(--fd-banner-height) + var(--fd-nav-height))',
        }, children: _jsx(TocPopover, { open: open, onOpenChange: setOpen, asChild: true, children: _jsx("header", { ref: ref, id: "nd-tocnav", ...props, className: cn('border-b border-fd-foreground/10 backdrop-blur-md transition-colors', (!isTransparent || open) && 'bg-fd-background/80', open && 'shadow-lg', sidebar.open && 'max-md:hidden'), children: props.children }) }) }));
}
export function PageBody(props) {
    const { page } = usePageStyles();
    return (_jsx("div", { id: "nd-page", ...props, className: cn('flex w-full min-w-0 flex-col', page, props.className), children: props.children }));
}
export function PageArticle(props) {
    const { article } = usePageStyles();
    return (_jsx("article", { ...props, className: cn('flex w-full flex-1 flex-col gap-6 px-4 pt-8 md:px-6 md:pt-12 xl:px-12 xl:mx-auto', article, props.className), children: props.children }));
}
export function LastUpdate(props) {
    const { text } = useI18n();
    const [date, setDate] = useState('');
    useEffect(() => {
        // to the timezone of client
        setDate(props.date.toLocaleDateString());
    }, [props.date]);
    return (_jsxs("p", { className: "text-sm text-fd-muted-foreground", children: [text.lastUpdate, " ", date] }));
}
function scanNavigationList(tree) {
    const list = [];
    tree.forEach((node) => {
        if (node.type === 'folder') {
            if (node.index) {
                list.push(node.index);
            }
            list.push(...scanNavigationList(node.children));
            return;
        }
        if (node.type === 'page' && !node.external) {
            list.push(node);
        }
    });
    return list;
}
const listCache = new WeakMap();
export function Footer({ items }) {
    const { root } = useTreeContext();
    const pathname = usePathname();
    const { previous, next } = useMemo(() => {
        if (items)
            return items;
        const cached = listCache.get(root);
        const list = cached ?? scanNavigationList(root.children);
        listCache.set(root, list);
        const idx = list.findIndex((item) => isActive(item.url, pathname, false));
        if (idx === -1)
            return {};
        return {
            previous: list[idx - 1],
            next: list[idx + 1],
        };
    }, [items, pathname, root]);
    return (_jsxs("div", { className: cn('@container grid gap-4 pb-6', previous && next ? 'grid-cols-2' : 'grid-cols-1'), children: [previous ? _jsx(FooterItem, { item: previous, index: 0 }) : null, next ? _jsx(FooterItem, { item: next, index: 1 }) : null] }));
}
function FooterItem({ item, index }) {
    const { text } = useI18n();
    const Icon = index === 0 ? ChevronLeft : ChevronRight;
    const title = item.description ? item.name : null;
    const description = item.description ?? item.name;
    return (_jsxs(Link, { href: item.url, className: cn('flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full', index === 1 && 'text-end'), children: [_jsxs("div", { className: cn('inline-flex items-center gap-1.5', index === 1 && 'flex-row-reverse', title ? 'font-medium' : 'text-fd-muted-foreground'), children: [_jsx(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), _jsx("p", { children: title ?? text.nextPage })] }), _jsx("p", { className: cn(title
                    ? 'text-fd-muted-foreground truncate'
                    : 'font-medium md:text-[15px]'), children: description })] }));
}
export function Breadcrumb(options) {
    const path = useTreePath();
    const { root } = useTreeContext();
    const items = useMemo(() => {
        return getBreadcrumbItemsFromPath(root, path, {
            includePage: options.includePage ?? false,
            ...options,
        });
    }, [options, path, root]);
    if (items.length === 0)
        return null;
    return (_jsx("div", { className: "flex flex-row items-center gap-1.5 text-[15px] text-fd-muted-foreground", children: items.map((item, i) => {
            const className = cn('truncate', i === items.length - 1 && 'text-fd-primary font-medium');
            return (_jsxs(Fragment, { children: [i !== 0 && _jsx("span", { className: "text-fd-foreground/30", children: "/" }), item.url ? (_jsx(Link, { href: item.url, className: cn(className, 'transition-opacity hover:opacity-80'), children: item.name })) : (_jsx("span", { className: className, children: item.name }))] }, i));
        }) }));
}
