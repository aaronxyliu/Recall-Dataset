export { c as createDeferred, g as getPromiseResult, s as setPromiseResult } from "./future-CPfkKOvf.js";

/**
 * Brands the supplied object with the supplied response type.
 *
 * ```ts
 * import type { ReactiveDataDocument } from '@warp-drive/core/reactive';
 * import { withResponseType } from '@warp-drive/core/request';
 * import type { User } from '#/data/user.ts'
 *
 * const result = await store.request(
 *  withResponseType<ReactiveDataDocument<User>>({ url: '/users/1' })
 * );
 *
 * result.content.data; // will have type User
 * ```
 *
 */
function withResponseType(obj) {
  return obj;
}

/**
 * Brands the supplied object with the supplied response type
 * wrapped in {@link ReactiveDataDocument}. This is a convenience for
 * the common case of using {@link withResponseType} with `ReactiveDataDocument`.
 *
 * ```ts
 * import { withReactiveResponse } from '@warp-drive/core/request';
 * import type { User } from '#/data/user.ts'
 *
 * const result = await store.request(
 *   withReactiveResponse<User>({ url: '/users/1' })
 * );
 *
 * result.content.data; // will have type User
 * ```
 *
 * @public
 */
function withReactiveResponse(obj) {
  return obj;
}

/**
 * @deprecated use {@link withResponseType} instead
 */
const withBrand = withResponseType;
export { withBrand, withReactiveResponse, withResponseType };