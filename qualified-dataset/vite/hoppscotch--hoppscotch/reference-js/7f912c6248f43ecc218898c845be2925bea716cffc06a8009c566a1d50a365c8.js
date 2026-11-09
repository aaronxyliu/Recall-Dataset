import { inject as t } from "vue";
const i = "__dioc:vue", e = {
  install(n, { container: o }) {
    n.provide(i, o);
  }
};
function c(n) {
  const o = t(i);
  if (!o)
    throw new Error("Container not found, did you forget to install the dioc plugin?");
  return o.bind(n);
}
export {
  e as diocPlugin,
  c as useService
};
