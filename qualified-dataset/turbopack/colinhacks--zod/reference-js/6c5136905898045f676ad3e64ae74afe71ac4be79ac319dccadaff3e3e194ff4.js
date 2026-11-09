'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Check, Copy } from 'lucide-react';
import { forwardRef, useCallback, useRef, } from 'react';
import { cn } from '../utils/cn.js';
import { ScrollArea, ScrollBar, ScrollViewport, } from '../components/ui/scroll-area.js';
import { useCopyButton } from '../utils/use-copy-button.js';
import { buttonVariants } from '../components/ui/button.js';
export const Pre = forwardRef(({ className, ...props }, ref) => {
    return (_jsx("pre", { ref: ref, className: cn('p-4 focus-visible:outline-none', className), ...props, children: props.children }));
});
Pre.displayName = 'Pre';
export const CodeBlock = forwardRef(({ title, allowCopy = true, keepBackground = false, icon, viewportProps, ...props }, ref) => {
    const areaRef = useRef(null);
    const onCopy = useCallback(() => {
        const pre = areaRef.current?.getElementsByTagName('pre').item(0);
        if (!pre)
            return;
        const clone = pre.cloneNode(true);
        clone.querySelectorAll('.nd-copy-ignore').forEach((node) => {
            node.remove();
        });
        void navigator.clipboard.writeText(clone.textContent ?? '');
    }, []);
    return (_jsxs("figure", { ref: ref, ...props, className: cn('not-prose group fd-codeblock relative my-6 overflow-hidden rounded-lg border bg-fd-secondary/50 text-sm', keepBackground && 'bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)', props.className), children: [title ? (_jsxs("div", { className: "flex flex-row items-center gap-2 border-b bg-fd-muted px-4 py-1.5", children: [icon ? (_jsx("div", { className: "text-fd-muted-foreground [&_svg]:size-3.5", dangerouslySetInnerHTML: typeof icon === 'string'
                            ? {
                                __html: icon,
                            }
                            : undefined, children: typeof icon !== 'string' ? icon : null })) : null, _jsx("figcaption", { className: "flex-1 truncate text-fd-muted-foreground", children: title }), allowCopy ? (_jsx(CopyButton, { className: "-me-2", onCopy: onCopy })) : null] })) : (allowCopy && (_jsx(CopyButton, { className: "absolute right-2 top-2 z-[2] backdrop-blur-md", onCopy: onCopy }))), _jsxs(ScrollArea, { ref: areaRef, dir: "ltr", children: [_jsx(ScrollViewport, { ...viewportProps, className: cn('max-h-[600px]', viewportProps?.className), children: props.children }), _jsx(ScrollBar, { orientation: "horizontal" })] })] }));
});
CodeBlock.displayName = 'CodeBlock';
function CopyButton({ className, onCopy, ...props }) {
    const [checked, onClick] = useCopyButton(onCopy);
    return (_jsxs("button", { type: "button", className: cn(buttonVariants({
            color: 'ghost',
        }), 'transition-opacity group-hover:opacity-100 [&_svg]:size-3.5', !checked && '[@media(hover:hover)]:opacity-0', className), "aria-label": checked ? 'Copied Text' : 'Copy Text', onClick: onClick, ...props, children: [_jsx(Check, { className: cn('transition-transform', !checked && 'scale-0') }), _jsx(Copy, { className: cn('absolute transition-transform', checked && 'scale-0') })] }));
}
