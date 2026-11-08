import { getOrSetUniversal, getOrSetGlobal } from './-private.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const SkipCache = getOrSetUniversal('SkipCache', Symbol.for('wd:skip-cache'));
const EnableHydration = getOrSetUniversal('EnableHydration', Symbol.for('wd:enable-hydration'));
const IS_FUTURE = getOrSetGlobal('IS_FUTURE', Symbol('IS_FUTURE'));
const STRUCTURED = getOrSetGlobal('DOC', Symbol('DOC'));

/**
 * Use these options to adjust {@link CacheHandler} behavior for a request
 * via {@link RequestInfo.cacheOptions}.
 *
 */

/**
 * When a {@link Future} resolves, it returns an object
 * containing the original {@link RequestInfo | request},
 * the {@link Response | response} set by the handler chain (if any), and
 * the processed content.
 */

/**
 * When a {@link Future} rejects, it throws either an {@link Error}
 * an {@link AggregateError} or a {@link DOMException} that maintains
 * the `{ request, response, content }` shape but is also an Error instance
 * itself.
 *
 * If using the error originates from the {@link Fetch | Fetch Handler}
 * the error will be a {@link FetchError}
 */

/**
 * A union of the resolve/reject data types for the {@link Future}
 * returned by {@link Store.request | request}
 *
 * See also the docs for:
 *
 * - {@link Future}
 * - {@link StructuredDataDocument} (resolved/successful requests)
 * - {@link StructuredErrorDocument} (rejected/failed requests)
 */

/**
 * The {@link RequestInit} interface accepted by the native {@link fetch} API.
 *
 * WarpDrive provides our own typings due to incompleteness in the native typings.
 *
 * @privateRemarks
 * - [MDN Reference (fetch)](https://developer.mozilla.org/docs/Web/API/Window/fetch)
 * - [MDN Reference (RequestInit)](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)
 * - [MDN Reference (Request)](https://developer.mozilla.org/docs/Web/API/Request)
 *
 */

/**
 * Extends JavaScript's native {@link fetch} {@link NativeRequestInit | RequestInit} with additional
 * properties specific to the {@link RequestManager | RequestManager's} capabilities.
 *
 * This interface is used to define the shape of a request that can be made via
 * either the {@link RequestManager.request} or {@link Store.request} methods.
 *
 * @privateRemarks
 * - [MDN Reference (fetch)](https://developer.mozilla.org/docs/Web/API/Window/fetch)
 * - [MDN Reference (RequestInit)](https://developer.mozilla.org/en-US/docs/Web/API/RequestInit)
 * - [MDN Reference (Request)](https://developer.mozilla.org/docs/Web/API/Request)
 *
 * @public
 * @since 4.12
 */

/**
 * Immutable version of {@link RequestInfo}. This is what is passed to handlers.
 *
 */

export { EnableHydration, IS_FUTURE, STRUCTURED, SkipCache };