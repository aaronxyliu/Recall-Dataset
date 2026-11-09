'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Menu, X } from 'lucide-react';
import { cn } from '../utils/cn.js';
import { buttonVariants } from '../components/ui/button.js';
import { useSidebar } from '../contexts/sidebar.js';
import { useNav } from '../components/layout/nav.js';
import { SidebarTrigger } from 'fumadocs-core/sidebar';
export function Navbar(props) {
    const { open } = useSidebar();
    const { isTransparent } = useNav();
    return (_jsx("header", { id: "nd-subnav", ...props, className: cn('sticky top-(--fd-banner-height) z-30 flex h-14 flex-row items-center border-b border-fd-foreground/10 px-4 backdrop-blur-lg transition-colors', (!isTransparent || open) && 'bg-fd-background/80', props.className), children: props.children }));
}
export function NavbarSidebarTrigger(props) {
    const { open } = useSidebar();
    return (_jsx(SidebarTrigger, { ...props, className: cn(buttonVariants({
            color: 'ghost',
            size: 'icon',
        }), props.className), children: open ? _jsx(X, {}) : _jsx(Menu, {}) }));
}
