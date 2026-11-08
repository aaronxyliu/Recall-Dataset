FROM node:16-bullseye@sha256:cd59a61258b82b86c1ff0ead50c8a689f6c3483c5ed21036e11ee741add419eb AS build
WORKDIR /src/tfjs-automl
ENV YARN_CACHE_FOLDER=/var/cache/yarn

COPY tfjs-automl/package.json tfjs-automl/yarn.lock ./
RUN --mount=type=cache,id=recall-tfjs-yarn,target=/var/cache/yarn \
    node --version && yarn --version \
    && yarn install --frozen-lockfile --non-interactive --registry https://registry.npmjs.org
COPY tsconfig_base.json /src/
COPY tfjs-automl/ ./
RUN yarn build && test -s dist/tf-automl.esm.js && test -s dist/tf-automl.esm.js.map

WORKDIR /src/tfjs-automl/demo/img_classification
RUN --mount=type=cache,id=recall-tfjs-yarn,target=/var/cache/yarn \
    yarn install --frozen-lockfile --non-interactive --registry https://registry.npmjs.org
COPY --from=recipe prepare-parcel.cjs ./prepare-parcel.cjs
# Both the app and the linked AutoML package must share the app's TensorFlow runtime.
RUN mv ../../node_modules ../../build-node_modules \
    && ln -s demo/img_classification/node_modules ../../node_modules \
    && for shim in process buffer base64-js ieee754; do cp -a "../../build-node_modules/$shim" node_modules/ || exit 1; done \
    && node prepare-parcel.cjs && yarn build --no-autoinstall --no-scope-hoist \
    && test -s dist/index.html \
    && for script in dist/*.js; do test -s "$script" && test -s "$script.map" || exit 1; done

FROM node:24-bookworm@sha256:64af3819f9275802414d7cdc38c27e9d82bd564dec4d4da87d008255d36c63b4 AS runtime
WORKDIR /site
COPY --from=build /src/tfjs-automl/demo/img_classification/dist/ /site/tfjs-automl/demo/img_classification/
COPY --from=recipe serve.cjs /usr/local/lib/tfjs-serve.cjs
USER node
EXPOSE 8080
CMD ["node", "/usr/local/lib/tfjs-serve.cjs"]
