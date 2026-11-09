var H = Object.defineProperty;
var W = (e, r, t) => r in e ? H(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var h = (e, r, t) => (W(e, typeof r != "symbol" ? r + "" : r, t), t);
var E = function(e, r) {
  return E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
  }, E(e, r);
};
function b(e, r) {
  if (typeof r != "function" && r !== null)
    throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  E(e, r);
  function t() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (t.prototype = r.prototype, new t());
}
function w(e) {
  var r = typeof Symbol == "function" && Symbol.iterator, t = r && e[r], n = 0;
  if (t)
    return t.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
      }
    };
  throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function g(e, r) {
  var t = typeof Symbol == "function" && e[Symbol.iterator];
  if (!t)
    return e;
  var n = t.call(e), o, i = [], s;
  try {
    for (; (r === void 0 || r-- > 0) && !(o = n.next()).done; )
      i.push(o.value);
  } catch (u) {
    s = { error: u };
  } finally {
    try {
      o && !o.done && (t = n.return) && t.call(n);
    } finally {
      if (s)
        throw s.error;
    }
  }
  return i;
}
function I(e, r, t) {
  if (t || arguments.length === 2)
    for (var n = 0, o = r.length, i; n < o; n++)
      (i || !(n in r)) && (i || (i = Array.prototype.slice.call(r, 0, n)), i[n] = r[n]);
  return e.concat(i || Array.prototype.slice.call(r));
}
function l(e) {
  return typeof e == "function";
}
function U(e) {
  var r = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, t = e(r);
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t;
}
var m = U(function(e) {
  return function(t) {
    e(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(n, o) {
      return o + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t;
  };
});
function O(e, r) {
  if (e) {
    var t = e.indexOf(r);
    0 <= t && e.splice(t, 1);
  }
}
var y = function() {
  function e(r) {
    this.initialTeardown = r, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return e.prototype.unsubscribe = function() {
    var r, t, n, o, i;
    if (!this.closed) {
      this.closed = !0;
      var s = this._parentage;
      if (s)
        if (this._parentage = null, Array.isArray(s))
          try {
            for (var u = w(s), c = u.next(); !c.done; c = u.next()) {
              var S = c.value;
              S.remove(this);
            }
          } catch (a) {
            r = { error: a };
          } finally {
            try {
              c && !c.done && (t = u.return) && t.call(u);
            } finally {
              if (r)
                throw r.error;
            }
          }
        else
          s.remove(this);
      var D = this.initialTeardown;
      if (l(D))
        try {
          D();
        } catch (a) {
          i = a instanceof m ? a.errors : [a];
        }
      var P = this._finalizers;
      if (P) {
        this._finalizers = null;
        try {
          for (var p = w(P), f = p.next(); !f.done; f = p.next()) {
            var Y = f.value;
            try {
              j(Y);
            } catch (a) {
              i = i ?? [], a instanceof m ? i = I(I([], g(i)), g(a.errors)) : i.push(a);
            }
          }
        } catch (a) {
          n = { error: a };
        } finally {
          try {
            f && !f.done && (o = p.return) && o.call(p);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (i)
        throw new m(i);
    }
  }, e.prototype.add = function(r) {
    var t;
    if (r && r !== this)
      if (this.closed)
        j(r);
      else {
        if (r instanceof e) {
          if (r.closed || r._hasParent(this))
            return;
          r._addParent(this);
        }
        (this._finalizers = (t = this._finalizers) !== null && t !== void 0 ? t : []).push(r);
      }
  }, e.prototype._hasParent = function(r) {
    var t = this._parentage;
    return t === r || Array.isArray(t) && t.includes(r);
  }, e.prototype._addParent = function(r) {
    var t = this._parentage;
    this._parentage = Array.isArray(t) ? (t.push(r), t) : t ? [t, r] : r;
  }, e.prototype._removeParent = function(r) {
    var t = this._parentage;
    t === r ? this._parentage = null : Array.isArray(t) && O(t, r);
  }, e.prototype.remove = function(r) {
    var t = this._finalizers;
    t && O(t, r), r instanceof e && r._removeParent(this);
  }, e.EMPTY = function() {
    var r = new e();
    return r.closed = !0, r;
  }(), e;
}(), k = y.EMPTY;
function B(e) {
  return e instanceof y || e && "closed" in e && l(e.remove) && l(e.add) && l(e.unsubscribe);
}
function j(e) {
  l(e) ? e() : e.unsubscribe();
}
var $ = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, R = {
  setTimeout: function(e, r) {
    for (var t = [], n = 2; n < arguments.length; n++)
      t[n - 2] = arguments[n];
    return setTimeout.apply(void 0, I([e, r], g(t)));
  },
  clearTimeout: function(e) {
    var r = R.delegate;
    return ((r == null ? void 0 : r.clearTimeout) || clearTimeout)(e);
  },
  delegate: void 0
};
function q(e) {
  R.setTimeout(function() {
    throw e;
  });
}
function A() {
}
function v(e) {
  e();
}
var F = function(e) {
  b(r, e);
  function r(t) {
    var n = e.call(this) || this;
    return n.isStopped = !1, t ? (n.destination = t, B(t) && t.add(n)) : n.destination = L, n;
  }
  return r.create = function(t, n, o) {
    return new x(t, n, o);
  }, r.prototype.next = function(t) {
    this.isStopped || this._next(t);
  }, r.prototype.error = function(t) {
    this.isStopped || (this.isStopped = !0, this._error(t));
  }, r.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, r.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null);
  }, r.prototype._next = function(t) {
    this.destination.next(t);
  }, r.prototype._error = function(t) {
    try {
      this.destination.error(t);
    } finally {
      this.unsubscribe();
    }
  }, r.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, r;
}(y), G = Function.prototype.bind;
function _(e, r) {
  return G.call(e, r);
}
var J = function() {
  function e(r) {
    this.partialObserver = r;
  }
  return e.prototype.next = function(r) {
    var t = this.partialObserver;
    if (t.next)
      try {
        t.next(r);
      } catch (n) {
        d(n);
      }
  }, e.prototype.error = function(r) {
    var t = this.partialObserver;
    if (t.error)
      try {
        t.error(r);
      } catch (n) {
        d(n);
      }
    else
      d(r);
  }, e.prototype.complete = function() {
    var r = this.partialObserver;
    if (r.complete)
      try {
        r.complete();
      } catch (t) {
        d(t);
      }
  }, e;
}(), x = function(e) {
  b(r, e);
  function r(t, n, o) {
    var i = e.call(this) || this, s;
    if (l(t) || !t)
      s = {
        next: t ?? void 0,
        error: n ?? void 0,
        complete: o ?? void 0
      };
    else {
      var u;
      i && $.useDeprecatedNextContext ? (u = Object.create(t), u.unsubscribe = function() {
        return i.unsubscribe();
      }, s = {
        next: t.next && _(t.next, u),
        error: t.error && _(t.error, u),
        complete: t.complete && _(t.complete, u)
      }) : s = t;
    }
    return i.destination = new J(s), i;
  }
  return r;
}(F);
function d(e) {
  q(e);
}
function K(e) {
  throw e;
}
var L = {
  closed: !0,
  next: A,
  error: K,
  complete: A
}, Q = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function X(e) {
  return e;
}
function Z(e) {
  return e.length === 0 ? X : e.length === 1 ? e[0] : function(t) {
    return e.reduce(function(n, o) {
      return o(n);
    }, t);
  };
}
var C = function() {
  function e(r) {
    r && (this._subscribe = r);
  }
  return e.prototype.lift = function(r) {
    var t = new e();
    return t.source = this, t.operator = r, t;
  }, e.prototype.subscribe = function(r, t, n) {
    var o = this, i = N(r) ? r : new x(r, t, n);
    return v(function() {
      var s = o, u = s.operator, c = s.source;
      i.add(u ? u.call(i, c) : c ? o._subscribe(i) : o._trySubscribe(i));
    }), i;
  }, e.prototype._trySubscribe = function(r) {
    try {
      return this._subscribe(r);
    } catch (t) {
      r.error(t);
    }
  }, e.prototype.forEach = function(r, t) {
    var n = this;
    return t = T(t), new t(function(o, i) {
      var s = new x({
        next: function(u) {
          try {
            r(u);
          } catch (c) {
            i(c), s.unsubscribe();
          }
        },
        error: i,
        complete: o
      });
      n.subscribe(s);
    });
  }, e.prototype._subscribe = function(r) {
    var t;
    return (t = this.source) === null || t === void 0 ? void 0 : t.subscribe(r);
  }, e.prototype[Q] = function() {
    return this;
  }, e.prototype.pipe = function() {
    for (var r = [], t = 0; t < arguments.length; t++)
      r[t] = arguments[t];
    return Z(r)(this);
  }, e.prototype.toPromise = function(r) {
    var t = this;
    return r = T(r), new r(function(n, o) {
      var i;
      t.subscribe(function(s) {
        return i = s;
      }, function(s) {
        return o(s);
      }, function() {
        return n(i);
      });
    });
  }, e.create = function(r) {
    return new e(r);
  }, e;
}();
function T(e) {
  var r;
  return (r = e ?? $.Promise) !== null && r !== void 0 ? r : Promise;
}
function z(e) {
  return e && l(e.next) && l(e.error) && l(e.complete);
}
function N(e) {
  return e && e instanceof F || z(e) && B(e);
}
var tt = U(function(e) {
  return function() {
    e(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
  };
}), V = function(e) {
  b(r, e);
  function r() {
    var t = e.call(this) || this;
    return t.closed = !1, t.currentObservers = null, t.observers = [], t.isStopped = !1, t.hasError = !1, t.thrownError = null, t;
  }
  return r.prototype.lift = function(t) {
    var n = new M(this, this);
    return n.operator = t, n;
  }, r.prototype._throwIfClosed = function() {
    if (this.closed)
      throw new tt();
  }, r.prototype.next = function(t) {
    var n = this;
    v(function() {
      var o, i;
      if (n._throwIfClosed(), !n.isStopped) {
        n.currentObservers || (n.currentObservers = Array.from(n.observers));
        try {
          for (var s = w(n.currentObservers), u = s.next(); !u.done; u = s.next()) {
            var c = u.value;
            c.next(t);
          }
        } catch (S) {
          o = { error: S };
        } finally {
          try {
            u && !u.done && (i = s.return) && i.call(s);
          } finally {
            if (o)
              throw o.error;
          }
        }
      }
    });
  }, r.prototype.error = function(t) {
    var n = this;
    v(function() {
      if (n._throwIfClosed(), !n.isStopped) {
        n.hasError = n.isStopped = !0, n.thrownError = t;
        for (var o = n.observers; o.length; )
          o.shift().error(t);
      }
    });
  }, r.prototype.complete = function() {
    var t = this;
    v(function() {
      if (t._throwIfClosed(), !t.isStopped) {
        t.isStopped = !0;
        for (var n = t.observers; n.length; )
          n.shift().complete();
      }
    });
  }, r.prototype.unsubscribe = function() {
    this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
  }, Object.defineProperty(r.prototype, "observed", {
    get: function() {
      var t;
      return ((t = this.observers) === null || t === void 0 ? void 0 : t.length) > 0;
    },
    enumerable: !1,
    configurable: !0
  }), r.prototype._trySubscribe = function(t) {
    return this._throwIfClosed(), e.prototype._trySubscribe.call(this, t);
  }, r.prototype._subscribe = function(t) {
    return this._throwIfClosed(), this._checkFinalizedStatuses(t), this._innerSubscribe(t);
  }, r.prototype._innerSubscribe = function(t) {
    var n = this, o = this, i = o.hasError, s = o.isStopped, u = o.observers;
    return i || s ? k : (this.currentObservers = null, u.push(t), new y(function() {
      n.currentObservers = null, O(u, t);
    }));
  }, r.prototype._checkFinalizedStatuses = function(t) {
    var n = this, o = n.hasError, i = n.thrownError, s = n.isStopped;
    o ? t.error(i) : s && t.complete();
  }, r.prototype.asObservable = function() {
    var t = new C();
    return t.source = this, t;
  }, r.create = function(t, n) {
    return new M(t, n);
  }, r;
}(C), M = function(e) {
  b(r, e);
  function r(t, n) {
    var o = e.call(this) || this;
    return o.destination = t, o.source = n, o;
  }
  return r.prototype.next = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || o === void 0 || o.call(n, t);
  }, r.prototype.error = function(t) {
    var n, o;
    (o = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || o === void 0 || o.call(n, t);
  }, r.prototype.complete = function() {
    var t, n;
    (n = (t = this.destination) === null || t === void 0 ? void 0 : t.complete) === null || n === void 0 || n.call(t);
  }, r.prototype._subscribe = function(t) {
    var n, o;
    return (o = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(t)) !== null && o !== void 0 ? o : k;
  }, r;
}(V);
class et {
  constructor() {
    /** Used during the `bind` operation to detect circular dependencies */
    h(this, "bindStack", []);
    /** The map of bound services to their IDs */
    h(this, "boundMap", /* @__PURE__ */ new Map());
    /** The RxJS observable representing the event stream */
    h(this, "event$", new V());
  }
  /**
   * Returns whether a container has the given service bound
   * @param service The service to check for
   */
  hasBound(r) {
    return this.boundMap.has(r.ID);
  }
  /**
   * Returns the service bound to the container with the given ID or if not found, undefined.
   *
   * NOTE: This is an advanced method and should not be used as much as possible.
   *
   * @param serviceID The ID of the service to get
   */
  getBoundServiceWithID(r) {
    return this.boundMap.get(r);
  }
  /**
   * Binds a service to the container. This is equivalent to marking a service as a dependency.
   * @param service The class reference of a service to bind
   * @param bounder The class reference of the service that is binding the service (if bound directly to the container, this should be undefined)
   */
  bind(r, t = void 0) {
    if (this.hasBound(r))
      return this.event$.next({
        type: "SERVICE_BIND",
        boundeeID: r.ID,
        bounderID: t == null ? void 0 : t.ID
        // Return the bounder ID if it is defined, else assume its the container
      }), this.boundMap.get(r.ID);
    if (this.bindStack.findIndex((o) => o === r.ID) !== -1) {
      const o = `${this.bindStack.join(" -> ")} -> ${r.ID}`;
      throw new Error(`Circular dependency detected.
Chain: ${o}`);
    }
    this.bindStack.push(r.ID);
    const n = new r(this);
    return n.onServiceInit(), this.boundMap.set(r.ID, n), this.bindStack.pop(), this.event$.next({
      type: "SERVICE_INIT",
      serviceID: r.ID
    }), this.event$.next({
      type: "SERVICE_BIND",
      boundeeID: r.ID,
      bounderID: t == null ? void 0 : t.ID
    }), n;
  }
  /**
   * Returns an iterator of the currently bound service IDs and their instances
   */
  getBoundServices() {
    return this.boundMap.entries();
  }
  /**
   * Returns the public container event stream
   */
  getEventStream() {
    return this.event$.asObservable();
  }
}
export {
  et as C,
  V as S
};
