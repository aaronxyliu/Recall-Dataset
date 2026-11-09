'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState, createContext, useContext, useLayoutEffect, useId, useEffect, } from 'react';
import { cn } from '../utils/cn.js';
import * as Primitive from './ui/tabs.js';
import { useEffectEvent } from 'fumadocs-core/utils/use-effect-event';
export { Primitive };
const listeners = new Map();
function addChangeListener(id, listener) {
    const list = listeners.get(id) ?? [];
    list.push(listener);
    listeners.set(id, list);
}
function removeChangeListener(id, listener) {
    const list = listeners.get(id) ?? [];
    listeners.set(id, list.filter((item) => item !== listener));
}
const TabsContext = createContext(null);
export function Tabs({ groupId, items = [], persist = false, defaultIndex = 0, updateAnchor = false, ...props }) {
    const values = useMemo(() => items.map((item) => toValue(item)), [items]);
    const [value, setValue] = useState(values[defaultIndex]);
    const valueToIdMap = useMemo(() => new Map(), []);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- re-reconstruct the collection if items changed
    const collection = useMemo(() => createCollection(), [items]);
    const onUpdate = useEffectEvent((v) => {
        if (values.includes(v))
            setValue(v);
    });
    useLayoutEffect(() => {
        if (!groupId)
            return;
        const previous = persist
            ? localStorage.getItem(groupId)
            : sessionStorage.getItem(groupId);
        if (previous)
            onUpdate(previous);
        addChangeListener(groupId, onUpdate);
        return () => {
            removeChangeListener(groupId, onUpdate);
        };
    }, [groupId, onUpdate, persist]);
    useLayoutEffect(() => {
        const hash = window.location.hash.slice(1);
        if (!hash)
            return;
        for (const [value, id] of valueToIdMap.entries()) {
            if (id === hash) {
                setValue(value);
                break;
            }
        }
    }, [valueToIdMap]);
    return (_jsxs(Primitive.Tabs, { value: value, onValueChange: (v) => {
            if (updateAnchor) {
                const id = valueToIdMap.get(v);
                if (id) {
                    window.history.replaceState(null, '', `#${id}`);
                }
            }
            if (groupId) {
                listeners.get(groupId)?.forEach((item) => {
                    item(v);
                });
                if (persist)
                    localStorage.setItem(groupId, v);
                else
                    sessionStorage.setItem(groupId, v);
            }
            else {
                setValue(v);
            }
        }, ...props, className: cn('my-4', props.className), children: [_jsx(Primitive.TabsList, { children: values.map((v, i) => (_jsx(Primitive.TabsTrigger, { value: v, children: items[i] }, v))) }), _jsx(TabsContext.Provider, { value: useMemo(() => ({ items, valueToIdMap, collection }), [valueToIdMap, collection, items]), children: props.children })] }));
}
function toValue(v) {
    return v.toLowerCase().replace(/\s/, '-');
}
export function Tab({ value, className, ...props }) {
    const ctx = useContext(TabsContext);
    const resolvedValue = value ??
        // eslint-disable-next-line react-hooks/rules-of-hooks -- `value` is not supposed to change
        ctx?.items.at(useCollectionIndex());
    if (!resolvedValue)
        throw new Error('Failed to resolve tab `value`, please pass a `value` prop to the Tab component.');
    const v = toValue(resolvedValue);
    if (props.id && ctx) {
        ctx.valueToIdMap.set(v, props.id);
    }
    return (_jsx(Primitive.TabsContent, { value: v, className: cn('prose-no-margin [&>figure:only-child]:-m-4 [&>figure:only-child]:rounded-none [&>figure:only-child]:border-none', className), ...props, children: props.children }));
}
function createCollection() {
    return [];
}
/**
 * Inspired by Headless UI.
 *
 * Return the index of children, this is made possible by registering the order of render from children using React context.
 * This is supposed by work with pre-rendering & pure client-side rendering.
 */
function useCollectionIndex() {
    const key = useId();
    const ctx = useContext(TabsContext);
    if (!ctx)
        throw new Error('You must wrap your component in <Tabs>');
    const list = ctx.collection;
    function register() {
        if (!list.includes(key))
            list.push(key);
    }
    function unregister() {
        const idx = list.indexOf(key);
        if (idx !== -1)
            list.splice(idx, 1);
    }
    useMemo(() => {
        // re-order the item to the bottom if registered
        unregister();
        register();
        // eslint-disable-next-line -- register
    }, [list]);
    useEffect(() => {
        return unregister;
        // eslint-disable-next-line -- clean up only
    }, []);
    return list.indexOf(key);
}
