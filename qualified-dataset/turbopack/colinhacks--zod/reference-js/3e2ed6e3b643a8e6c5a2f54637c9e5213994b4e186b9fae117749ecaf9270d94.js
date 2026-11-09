'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider } from 'next-themes';
import dynamic from 'next/dynamic';
import { DirectionProvider } from '@radix-ui/react-direction';
import { SidebarProvider } from './contexts/sidebar.js';
import { SearchProvider } from './contexts/search.js';
const DefaultSearchDialog = dynamic(() => import('./components/dialog/search-default.js'), { ssr: false });
export function RootProvider({ children, dir = 'ltr', theme: { enabled = true, ...theme } = {}, search, }) {
    let body = children;
    if (search?.enabled !== false)
        body = (_jsx(SearchProvider, { SearchDialog: DefaultSearchDialog, ...search, children: body }));
    if (enabled)
        body = (_jsx(ThemeProvider, { attribute: "class", defaultTheme: "system", enableSystem: true, disableTransitionOnChange: true, ...theme, children: body }));
    return (_jsx(DirectionProvider, { dir: dir, children: _jsx(SidebarProvider, { children: body }) }));
}
export { useI18n, I18nLabel } from './contexts/i18n.js';
export { SearchProvider, SearchOnly, useSearchContext, } from './contexts/search.js';
export { SidebarProvider, useSidebar } from './contexts/sidebar.js';
export { useTreePath, useTreeContext, TreeContextProvider, } from './contexts/tree.js';
export { StylesProvider, usePageStyles, } from './contexts/layout.js';
