# Frozen initial-anchor matcher

This is the exact POG/project/parser/backend dependency closure used for dataset qualification. It does not include recovery, propagation, model calls, or ground-truth scoring. Run `npm ci` here to reproduce its dependencies. The root local rapidhash-js 1.0.4 dependency is byte-identical to the original DEBUN-local copy for the hashing implementation, so the vendored backend resolves the same implementation from the root dependency. Upstream provenance and the dependency license are preserved.
