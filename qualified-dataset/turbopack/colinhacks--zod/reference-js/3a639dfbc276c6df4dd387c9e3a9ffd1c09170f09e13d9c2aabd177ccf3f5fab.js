'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SearchIcon } from 'lucide-react';
import { useSearchContext } from '../../contexts/search.js';
import { useI18n } from '../../contexts/i18n.js';
import { cn } from '../../utils/cn.js';
import { buttonVariants } from '../../components/ui/button.js';
export function SearchToggle({ hideIfDisabled, ...props }) {
    const { setOpenSearch, enabled } = useSearchContext();
    if (hideIfDisabled && !enabled)
        return null;
    return (_jsx("button", { type: "button", className: cn(buttonVariants({
            size: 'icon',
            color: 'ghost',
        }), props.className), "data-search": "", "aria-label": "Open Search", onClick: () => {
            setOpenSearch(true);
        }, children: _jsx(SearchIcon, {}) }));
}
export function LargeSearchToggle({ hideIfDisabled, ...props }) {
    const { enabled, hotKey, setOpenSearch } = useSearchContext();
    const { text } = useI18n();
    if (hideIfDisabled && !enabled)
        return null;
    return (_jsxs("button", { type: "button", "data-search-full": "", ...props, className: cn('inline-flex items-center gap-2 rounded-full border bg-fd-secondary/50 p-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground', props.className), onClick: () => {
            setOpenSearch(true);
        }, children: [_jsx(SearchIcon, { className: "ms-1 size-4" }), text.search, _jsx("div", { className: "ms-auto inline-flex gap-0.5", children: hotKey.map((k, i) => (_jsx("kbd", { className: "rounded-md border bg-fd-background px-1.5", children: k.display }, i))) })] }));
}
