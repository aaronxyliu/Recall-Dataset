'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
/**
 * applied styles to different layout components in `Page` from layouts
 */
const StylesContext = createContext({
    tocNav: 'xl:hidden',
    toc: 'max-xl:hidden',
});
export function usePageStyles() {
    return useContext(StylesContext);
}
export function StylesProvider({ children, ...value }) {
    return (_jsx(StylesContext.Provider, { value: value, children: children }));
}
