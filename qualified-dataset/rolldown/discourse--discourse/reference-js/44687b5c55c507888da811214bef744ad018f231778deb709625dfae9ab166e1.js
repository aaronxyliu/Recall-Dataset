import { h as hasDOM } from './has-dom-DdQORPzI.js';

const window = hasDOM ? self : null;
const location = hasDOM ? self.location : null;
const history = hasDOM ? self.history : null;
const userAgent = hasDOM ? self.navigator.userAgent : 'Lynx (textmode)';
const isChrome = hasDOM ? typeof chrome === 'object' && !(typeof opera === 'object') : false;
const isFirefox = hasDOM ? /Firefox|FxiOS/.test(userAgent) : false;

const environment = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	hasDOM,
	history,
	isChrome,
	isFirefox,
	location,
	userAgent,
	window
}, Symbol.toStringTag, { value: 'Module' }));

export { isFirefox as a, environment as e, history as h, isChrome as i, location as l, userAgent as u, window as w };
