var h = Object.defineProperty;
var u = (e, t, r) => t in e ? h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var o = (e, t, r) => (u(e, typeof t != "symbol" ? t + "" : t, r), r), a = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var i = (e, t, r) => (a(e, t, "read from private field"), r ? r.call(e) : t.get(e)), c = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, v = (e, t, r, s) => (a(e, t, "write to private field"), s ? s.call(e, r) : t.set(e, r), r);
import { S as b } from "./container-DqHk4GBj.js";
import { C as $ } from "./container-DqHk4GBj.js";
var n;
class p {
  constructor(t) {
    /**
     * The internal event stream of the service
     */
    o(this, "event$", new b());
    /** The container the service is bound to */
    c(this, n, void 0);
    v(this, n, t);
  }
  /**
   * This function is called when a service is initialized, which is only
   * once per container since services are singletons. By
   * default this function does nothing and is expected to be overriden by
   * services if they want to do like in place of a constructor.
   *
   * NOTE: The reason why this function exists is so that constructors for
   * services need not be exposed and played around with. By norm, it is best
   * to override this function than overriding the constructor and providing the
   * container that way.
   */
  onServiceInit() {
  }
  /**
   * Binds a dependency service into this service.
   * @param service The class reference of the service to bind
   */
  bind(t) {
    return i(this, n).bind(t, this.constructor);
  }
  /**
   * Returns the container the service is bound to
   */
  getContainer() {
    return i(this, n);
  }
  /**
   * Emits an event on the service's event stream
   * @param event The event to emit
   */
  emit(t) {
    this.event$.next(t);
  }
  /**
   * Returns the event stream of the service
   */
  getEventStream() {
    return this.event$.asObservable();
  }
}
n = new WeakMap();
export {
  $ as Container,
  p as Service
};
