'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDown, ExternalLink, SidebarIcon } from 'lucide-react';
import * as Base from 'fumadocs-core/sidebar';
import { usePathname } from 'next/navigation';
import { createContext, Fragment, useCallback, useContext, useMemo, useRef, useState, } from 'react';
import Link from 'fumadocs-core/link';
import { useOnChange } from 'fumadocs-core/utils/use-on-change';
import { cn } from '../../utils/cn.js';
import { ScrollArea, ScrollViewport } from '../../components/ui/scroll-area.js';
import { isActive } from '../../utils/is-active.js';
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from '../../components/ui/collapsible.js';
import { useSidebar } from '../../contexts/sidebar.js';
import { cva } from 'class-variance-authority';
import { useTreeContext, useTreePath } from '../../contexts/tree.js';
const itemVariants = cva('relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0', {
    variants: {
        active: {
            true: 'bg-fd-primary/10 text-fd-primary',
            false: 'transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none',
        },
    },
});
const Context = createContext(null);
const FolderContext = createContext(null);
export function CollapsibleSidebar(props) {
    const { collapsed } = useSidebar();
    const [hover, setHover] = useState(false);
    const timerRef = useRef(0);
    const closeTimeRef = useRef(0);
    useOnChange(collapsed, () => {
        setHover(false);
        closeTimeRef.current = Date.now() + 150;
    });
    const onEnter = useCallback((e) => {
        if (e.pointerType === 'touch' || closeTimeRef.current > Date.now())
            return;
        window.clearTimeout(timerRef.current);
        setHover(true);
    }, []);
    const onLeave = useCallback((e) => {
        if (e.pointerType === 'touch')
            return;
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
            setHover(false);
            closeTimeRef.current = Date.now() + 150;
        }, Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100
            ? 0
            : 500);
    }, []);
    return (_jsx(Sidebar, { ...props, onPointerEnter: collapsed ? onEnter : undefined, onPointerLeave: collapsed ? onLeave : undefined, "data-collapsed": collapsed, className: cn('md:transition-all', collapsed &&
            'md:-me-(--fd-sidebar-width) md:translate-x-[calc(var(--fd-sidebar-offset)*-1)] rtl:md:translate-x-(--fd-sidebar-offset)', collapsed && hover && 'z-50 md:translate-x-0', collapsed && !hover && 'md:opacity-0', props.className), style: {
            '--fd-sidebar-offset': 'calc(var(--fd-sidebar-width) - 20px)',
        } }));
}
export function Sidebar({ defaultOpenLevel = 0, prefetch = true, inner, ...props }) {
    const context = useMemo(() => {
        return {
            defaultOpenLevel,
            prefetch,
            level: 1,
        };
    }, [defaultOpenLevel, prefetch]);
    return (_jsx(Context.Provider, { value: context, children: _jsx(Base.SidebarList, { id: "nd-sidebar", blockScrollingWidth: 768, ...props, className: cn('fixed top-[calc(var(--fd-banner-height)+var(--fd-nav-height))] z-30 bg-fd-card text-sm md:sticky md:h-(--fd-sidebar-height)', 'max-md:inset-x-0 max-md:bottom-0 max-md:bg-fd-background/80 max-md:text-[15px] max-md:backdrop-blur-lg max-md:data-[open=false]:invisible', props.className), style: {
                ...props.style,
                '--fd-sidebar-height': 'calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))',
            }, children: _jsx("div", { ...inner, className: cn('flex size-full max-w-full flex-col pt-2 md:ms-auto md:w-(--fd-sidebar-width) md:border-e md:pt-4', inner?.className), children: props.children }) }) }));
}
export function SidebarHeader(props) {
    return (_jsx("div", { ...props, className: cn('flex flex-col gap-2 px-4 empty:hidden', props.className), children: props.children }));
}
export function SidebarFooter(props) {
    return (_jsx("div", { ...props, className: cn('flex flex-col border-t px-4 py-3 empty:hidden', props.className), children: props.children }));
}
export function SidebarViewport(props) {
    return (_jsx(ScrollArea, { ...props, className: cn('h-full', props.className), children: _jsx(ScrollViewport, { className: "p-4", style: {
                maskImage: 'linear-gradient(to bottom, transparent, white 12px)',
            }, children: props.children }) }));
}
export function SidebarSeparator(props) {
    const { level } = useInternalContext();
    return (_jsx("p", { ...props, className: cn('inline-flex items-center gap-2 mb-2 px-2 text-sm font-medium [&_svg]:size-4 [&_svg]:shrink-0', props.className), style: {
            paddingInlineStart: getOffset(level),
            ...props.style,
        }, children: props.children }));
}
export function SidebarItem({ icon, ...props }) {
    const pathname = usePathname();
    const active = props.href !== undefined && isActive(props.href, pathname, false);
    const { prefetch, level } = useInternalContext();
    return (_jsxs(Link, { ...props, "data-active": active, className: cn(itemVariants({ active }), props.className), prefetch: prefetch, style: {
            paddingInlineStart: getOffset(level),
            ...props.style,
        }, children: [_jsx(Border, { level: level, active: active }), icon ?? (props.external ? _jsx(ExternalLink, {}) : null), props.children] }));
}
export function SidebarFolder({ defaultOpen = false, ...props }) {
    const [open, setOpen] = useState(defaultOpen);
    useOnChange(defaultOpen, (v) => {
        if (v)
            setOpen(v);
    });
    return (_jsx(Collapsible, { open: open, onOpenChange: setOpen, ...props, children: _jsx(FolderContext.Provider, { value: useMemo(() => ({ open, setOpen }), [open]), children: props.children }) }));
}
export function SidebarFolderTrigger(props) {
    const { level } = useInternalContext();
    const { open } = useFolderContext();
    return (_jsxs(CollapsibleTrigger, { ...props, className: cn(itemVariants({ active: false }), 'w-full'), style: {
            paddingInlineStart: getOffset(level),
            ...props.style,
        }, children: [_jsx(Border, { level: level }), props.children, _jsx(ChevronDown, { "data-icon": true, className: cn('ms-auto transition-transform', !open && '-rotate-90') })] }));
}
export function SidebarFolderLink(props) {
    const { open, setOpen } = useFolderContext();
    const { prefetch, level } = useInternalContext();
    const pathname = usePathname();
    const active = props.href !== undefined && isActive(props.href, pathname, false);
    return (_jsxs(Link, { ...props, "data-active": active, className: cn(itemVariants({ active }), 'w-full', props.className), onClick: (e) => {
            if (e.target.hasAttribute('data-icon')) {
                setOpen((prev) => !prev);
                e.preventDefault();
            }
            else {
                setOpen((prev) => !active || !prev);
            }
        }, prefetch: prefetch, style: {
            paddingInlineStart: getOffset(level),
            ...props.style,
        }, children: [_jsx(Border, { level: level, active: active }), props.children, _jsx(ChevronDown, { "data-icon": true, className: cn('ms-auto transition-transform', !open && '-rotate-90') })] }));
}
export function SidebarFolderContent(props) {
    const ctx = useInternalContext();
    return (_jsx(CollapsibleContent, { ...props, className: cn('relative', props.className), children: _jsxs(Context.Provider, { value: useMemo(() => ({
                ...ctx,
                level: ctx.level + 1,
            }), [ctx]), children: [_jsx("div", { className: "absolute w-px inset-y-0 bg-fd-border start-3" }), props.children] }) }));
}
export function SidebarCollapseTrigger(props) {
    const { collapsed, setCollapsed } = useSidebar();
    return (_jsx("button", { type: "button", "aria-label": "Collapse Sidebar", "data-collapsed": collapsed, ...props, onClick: () => {
            setCollapsed((prev) => !prev);
        }, children: props.children ?? _jsx(SidebarIcon, {}) }));
}
function useFolderContext() {
    const ctx = useContext(FolderContext);
    if (!ctx)
        throw new Error('Missing sidebar folder');
    return ctx;
}
function useInternalContext() {
    const ctx = useContext(Context);
    if (!ctx)
        throw new Error('<Sidebar /> component required.');
    return ctx;
}
/**
 * Render sidebar items from page tree
 */
export function SidebarPageTree(props) {
    const { root } = useTreeContext();
    return useMemo(() => {
        const { Separator, Item, Folder } = props.components ?? {};
        function renderSidebarList(items, level) {
            return items.map((item, i) => {
                if (item.type === 'separator') {
                    if (Separator)
                        return _jsx(Separator, { item: item }, i);
                    return (_jsxs(SidebarSeparator, { className: cn(i !== 0 && 'mt-8'), children: [item.icon, item.name] }, i));
                }
                if (item.type === 'folder') {
                    const children = renderSidebarList(item.children, level + 1);
                    if (Folder)
                        return (_jsx(Folder, { item: item, level: level, children: children }, i));
                    return (_jsx(PageTreeFolder, { item: item, children: children }, i));
                }
                if (Item)
                    return _jsx(Item, { item: item }, item.url);
                return (_jsx(SidebarItem, { href: item.url, external: item.external, icon: item.icon, children: item.name }, item.url));
            });
        }
        return (_jsx(Fragment, { children: renderSidebarList(root.children, 1) }, root.$id));
        // eslint-disable-next-line react-hooks/exhaustive-deps -- root.id is enough
    }, [props.components, root.$id]);
}
function PageTreeFolder({ item, ...props }) {
    const { defaultOpenLevel, level } = useInternalContext();
    const path = useTreePath();
    return (_jsxs(SidebarFolder, { defaultOpen: (item.defaultOpen ?? defaultOpenLevel >= level) || path.includes(item), children: [item.index ? (_jsxs(SidebarFolderLink, { href: item.index.url, external: item.index.external, ...props, children: [item.icon, item.name] })) : (_jsxs(SidebarFolderTrigger, { ...props, children: [item.icon, item.name] })), _jsx(SidebarFolderContent, { children: props.children })] }));
}
function getOffset(level) {
    return `calc(var(--spacing) * ${(level > 1 ? level : 0) * 2 + 2})`;
}
function Border({ level, active }) {
    if (level <= 1)
        return null;
    return (_jsx("div", { className: cn('absolute w-px inset-y-2 z-[2] start-3', active && 'bg-fd-primary') }));
}
