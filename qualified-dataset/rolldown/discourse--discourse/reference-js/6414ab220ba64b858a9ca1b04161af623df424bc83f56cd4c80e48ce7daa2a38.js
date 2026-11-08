import { deprecate } from '@ember/debug';
import { dasherize } from '@warp-drive/utilities/string';
import { macroCondition, getGlobalConfig } from '@embroider/macros';
function isMaybeIdentifier(maybeIdentifier) {
  return Boolean(maybeIdentifier !== null && typeof maybeIdentifier === 'object' && ('id' in maybeIdentifier && 'type' in maybeIdentifier && maybeIdentifier.id && maybeIdentifier.type || maybeIdentifier.lid));
}
function normalizeModelName(type) {
  if (macroCondition(getGlobalConfig().WarpDrive.deprecations.DEPRECATE_NON_STRICT_TYPES)) {
    const result = dasherize(type);
    deprecate(`The resource type '${type}' is not normalized. Update your application code to use '${result}' instead of '${type}'.`, result === type, {
      id: 'ember-data:deprecate-non-strict-types',
      until: '6.0',
      for: 'ember-data',
      since: {
        available: '4.13',
        enabled: '5.3'
      }
    });
    return result;
  }
  return type;
}
export { isMaybeIdentifier as i, normalizeModelName as n };