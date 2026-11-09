/**
  @private

  Escapes any regular-expression metacharacters in `str` so it can be safely
  interpolated into a `RegExp` and matched as a literal.

  TODO: delete this in favor of `RegExp.escape` once our minimum supported
  browsers all include it (https://caniuse.com/mdn-javascript_builtins_regexp_escape).
*/
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
  @private

  Returns the current `location.pathname`, ensuring it has a leading slash.
*/
function getPath(location) {
  let pathname = location.pathname;
  if (pathname[0] !== '/') {
    pathname = `/${pathname}`;
  }
  return pathname;
}

/**
  @private

  Returns the current `location.search`.
*/
function getQuery(location) {
  return location.search;
}

/**
  @private

  Returns the hash or empty string
*/
function getHash(location) {
  if (location.hash !== undefined) {
    return location.hash.substring(0);
  }
  return '';
}
function getFullPath(location) {
  return getPath(location) + getQuery(location) + getHash(location);
}

export { escapeRegExp, getFullPath, getHash, getPath, getQuery };
