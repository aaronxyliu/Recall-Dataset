"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progress = void 0;
var STATE = {
    DISAPPEAR: 0,
    NONE: 1,
    APPEAR: 2,
    PENDING: 3,
    DISAPPEAR_RESTART: 4,
};
var PERSIST_TIME = 150;
var Progress = /** @class */ (function () {
    function Progress(options) {
        if (options === void 0) { options = {}; }
        this._el = document.createElement('div');
        this._state = STATE.NONE;
        this._opts = {
            maxWidth: '99.8%',
            height: '4px',
            duration: 60000,
            hideDuration: 400,
            zIndex: '9999',
            color: '#ff1a59',
            className: '',
            timing: 'cubic-bezier(0,1,0,1)',
            position: 'top',
            container: document.body,
        };
        this._appearRafId = null;
        this._disappearTid = null;
        this._pendingPromises = [];
        this._delayTimers = [];
        this._detachListeners = [];
        this.setOptions(options);
    }
    Progress.prototype.setOptions = function (newOptions) {
        var opts = assign(this._opts, newOptions);
        if (!isNaN(opts.maxWidth))
            opts.maxWidth += 'px';
        if (!isNaN(opts.height))
            opts.height += 'px';
        opts.zIndex = String(opts.zIndex);
        this._el.className = opts.className;
        this._css(assign({
            height: opts.height,
            background: opts.color,
            zIndex: opts.zIndex,
            position: '',
            left: '',
            top: '',
            bottom: '',
        }, {
            top: {
                position: 'fixed',
                top: '0',
                left: '0',
            },
            bottom: {
                position: 'fixed',
                bottom: '0',
                left: '0',
            },
        }[opts.position]));
    };
    Progress.prototype._css = function (style) {
        assign(this._el.style, style);
    };
    Object.defineProperty(Progress.prototype, "isInProgress", {
        get: function () {
            return this._state !== 0;
        },
        enumerable: false,
        configurable: true
    });
    Progress.prototype.start = function () {
        var _this = this;
        switch (this._state) {
            case STATE.APPEAR:
            case STATE.PENDING:
            case STATE.DISAPPEAR_RESTART:
                return;
            case STATE.DISAPPEAR:
                this._state = STATE.DISAPPEAR_RESTART;
                return;
        }
        this._state = STATE.APPEAR;
        var opts = this._opts;
        var transition = "width ".concat(opts.duration, "ms ").concat(opts.timing);
        this._css({
            width: '0',
            opacity: '1',
            transition: transition,
            webkitTransition: transition,
        });
        opts.container.appendChild(this._el);
        this._appearRafId = requestAnimationFrame(function () {
            _this._appearRafId = requestAnimationFrame(function () {
                _this._appearRafId = null;
                _this._state = STATE.PENDING;
                _this._css({ width: _this._opts.maxWidth });
            });
        });
    };
    Progress.prototype.end = function (immediately) {
        var _this = this;
        if (immediately === void 0) { immediately = false; }
        this._pendingPromises = [];
        this._delayTimers.splice(0).forEach(clearTimeout);
        switch (this._state) {
            case STATE.NONE:
                return;
            case STATE.APPEAR:
                this._state = STATE.NONE;
                cancelAnimationFrame(this._appearRafId);
                this._appearRafId = null;
                this._detach();
                return;
            case STATE.DISAPPEAR:
            case STATE.DISAPPEAR_RESTART:
                if (immediately) {
                    this._state = STATE.NONE;
                    clearTimeout(this._disappearTid);
                    this._disappearTid = null;
                    this._detach();
                }
                else {
                    this._state = STATE.DISAPPEAR;
                }
                return;
        }
        if (immediately) {
            this._state = STATE.NONE;
            this._detach();
            return;
        }
        this._state = STATE.DISAPPEAR;
        var opts = this._opts;
        var transition = "width 50ms, opacity ".concat(opts.hideDuration, "ms ").concat(PERSIST_TIME, "ms");
        this._css({
            width: '100%',
            opacity: '0',
            transition: transition,
            webkitTransition: transition,
        });
        this._disappearTid = setTimeout(function () {
            _this._disappearTid = null;
            var restart = _this._state === STATE.DISAPPEAR_RESTART;
            _this._state = STATE.NONE;
            _this._detach();
            if (restart) {
                _this.start();
            }
        }, opts.hideDuration + PERSIST_TIME);
    };
    Progress.prototype._detach = function () {
        var _a;
        this._detachListeners.splice(0).forEach(function (fn) { return fn(); });
        (_a = this._el.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this._el);
    };
    Progress.prototype.promise = function (p, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, _c = _b.delay, delay = _c === void 0 ? 0 : _c, _d = _b.min, min = _d === void 0 ? 100 : _d, _e = _b.waitAnimation, waitAnimation = _e === void 0 ? false : _e;
        var delayTid;
        var start = function () {
            if (min > 0) {
                p = Promise.all([p, new Promise(function (res) { return setTimeout(res, min); })]).then(function (_a) {
                    var v = _a[0];
                    return v;
                });
            }
            _this._pendingPromises.push(p);
            _this.start();
        };
        var clearDelayTimer = function () {
            var timers = _this._delayTimers;
            timers.splice(timers.indexOf(delayTid) >>> 0, 1);
            delayTid = null;
        };
        if (delay > 0) {
            this._delayTimers.push((delayTid = setTimeout(function () { return (clearDelayTimer(), start()); }, delay)));
        }
        else {
            start();
        }
        var next = function (val) {
            if (delayTid) {
                clearTimeout(delayTid);
                clearDelayTimer();
                return val;
            }
            var ret = waitAnimation && _this._state !== STATE.NONE
                ? new Promise(function (r) { return _this._detachListeners.push(r); }).then(function () { return val; })
                : val;
            var arr = _this._pendingPromises;
            var idx = arr.indexOf(p);
            if (~idx) {
                arr.splice(idx, 1);
                if (arr.length === 0)
                    _this.end();
            }
            return ret;
        };
        return p.then(next, function (err) { return next(Promise.reject(err)); });
    };
    return Progress;
}());
exports.Progress = Progress;
function assign(target, src) {
    for (var k in src) {
        if (Object.prototype.hasOwnProperty.call(src, k))
            target[k] = src[k];
    }
    return target;
}
