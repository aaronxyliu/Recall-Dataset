import { g as get } from '../../../../../shared-chunks/property_get-DuDs6rLg.js';
import { s as set } from '../../../../../shared-chunks/property_set-BmAQ0MGK.js';
import EmberObject from '../../../../object/index.js';
import { getElementView } from './utils.js';

/**
@module ember
*/

const ROOT_ELEMENT_CLASS = 'ember-application';

/**
  `EventDispatcher` handles delegating browser events to their
  corresponding `Ember.Views.` For example, when you click on a view,
  `EventDispatcher` ensures that that view's `mouseDown` method gets
  called.

  @class EventDispatcher
  @namespace Ember
  @private
  @extends EmberObject
*/
class EventDispatcher extends EmberObject {
  /**
    The set of events names (and associated handler function names) to be setup
    and dispatched by the `EventDispatcher`. Modifications to this list can be done
    at setup time, generally via the `Application.customEvents` hash.
     To add new events to be listened to:
     ```javascript
    import Application from '@ember/application';
     let App = Application.create({
      customEvents: {
        paste: 'paste'
      }
    });
    ```
     To prevent default events from being listened to:
     ```javascript
    import Application from '@ember/application';
     let App = Application.create({
      customEvents: {
        mouseenter: null,
        mouseleave: null
      }
    });
    ```
    @property events
    @type Object
    @private
  */
  events = {
    touchstart: 'touchStart',
    touchmove: 'touchMove',
    touchend: 'touchEnd',
    touchcancel: 'touchCancel',
    keydown: 'keyDown',
    keyup: 'keyUp',
    keypress: 'keyPress',
    mousedown: 'mouseDown',
    mouseup: 'mouseUp',
    contextmenu: 'contextMenu',
    click: 'click',
    dblclick: 'doubleClick',
    focusin: 'focusIn',
    focusout: 'focusOut',
    submit: 'submit',
    input: 'input',
    change: 'change',
    dragstart: 'dragStart',
    drag: 'drag',
    dragenter: 'dragEnter',
    dragleave: 'dragLeave',
    dragover: 'dragOver',
    drop: 'drop',
    dragend: 'dragEnd'
  };

  /**
    The root DOM element to which event listeners should be attached. Event
    listeners will be attached to the document unless this is overridden.
     Can be specified as a DOMElement or a selector string.
     The default body is a string since this may be evaluated before document.body
    exists in the DOM.
     @private
    @property rootElement
    @type DOMElement
    @default 'body'
  */
  rootElement = 'body';
  _eventHandlers = Object.create(null);
  _didSetup = false;
  finalEventNameMapping = null;
  _sanitizedRootElement = null;
  lazyEvents = new Map();
  _reverseEventNameMapping = null;

  /**
    Sets up event listeners for standard browser events.
     This will be called after the browser sends a `DOMContentReady` event. By
    default, it will set up all of the listeners on the document body. If you
    would like to register the listeners on a different element, set the event
    dispatcher's `root` property.
     @private
    @method setup
    @param addedEvents {Object}
  */
  setup(addedEvents, _rootElement) {
    let events = this.finalEventNameMapping = {
      ...get(this, 'events'),
      ...addedEvents
    };
    this._reverseEventNameMapping = Object.keys(events).reduce((result, key) => {
      let eventName = events[key];
      return eventName ? {
        ...result,
        [eventName]: key
      } : result;
    }, {});
    let lazyEvents = this.lazyEvents;
    if (_rootElement !== undefined && _rootElement !== null) {
      set(this, 'rootElement', _rootElement);
    }
    let specifiedRootElement = get(this, 'rootElement');
    let rootElement = typeof specifiedRootElement !== 'string' ? specifiedRootElement : document.querySelector(specifiedRootElement);
    rootElement.classList.add(ROOT_ELEMENT_CLASS);
    this._sanitizedRootElement = rootElement;

    // setup event listeners for the non-lazily setup events
    for (let event in events) {
      if (Object.prototype.hasOwnProperty.call(events, event)) {
        lazyEvents.set(event, events[event] ?? null);
      }
    }
    this._didSetup = true;
  }

  /**
    Setup event listeners for the given browser event name
     @private
    @method setupHandlerForBrowserEvent
    @param event the name of the event in the browser
  */
  setupHandlerForBrowserEvent(event) {
    this.setupHandler(this._sanitizedRootElement, event, this.finalEventNameMapping[event] ?? null);
  }

  /**
    Setup event listeners for the given Ember event name (camel case)
     @private
    @method setupHandlerForEmberEvent
    @param eventName
  */
  setupHandlerForEmberEvent(eventName) {
    let event = this._reverseEventNameMapping?.[eventName];
    if (event) {
      this.setupHandler(this._sanitizedRootElement, event, eventName);
    }
  }

  /**
    Registers an event listener on the rootElement. If the given event is
    triggered, the provided event handler will be triggered on the target view.
     If the target view does not implement the event handler, or if the handler
    returns `false`, the parent view will be called. The event will continue to
    bubble to each successive parent view until it reaches the top.
     @private
    @method setupHandler
    @param {Element} rootElement
    @param {String} event the name of the event in the browser
    @param {String} eventName the name of the method to call on the view
  */
  setupHandler(rootElement, event, eventName) {
    if (eventName === null || !this.lazyEvents.has(event)) {
      return; // nothing to do
    }
    let viewHandler = (target, event) => {
      let view = getElementView(target);
      let result = true;
      if (view) {
        // SAFETY: As currently written, this is not safe. Though it seems to always be true.
        result = view.handleEvent(eventName, event);
      }
      return result;
    };
    let handleEvent = this._eventHandlers[event] = event => {
      let target = event.target;
      do {
        if (getElementView(target)) {
          if (viewHandler(target, event) === false) {
            event.preventDefault();
            event.stopPropagation();
            break;
          } else if (event.cancelBubble === true) {
            break;
          }
        }
        target = target.parentNode;
      } while (target instanceof Element);
    };
    rootElement.addEventListener(event, handleEvent);
    this.lazyEvents.delete(event);
  }
  destroy() {
    if (this._didSetup === false) {
      return;
    }
    let rootElement = this._sanitizedRootElement;
    if (!rootElement) {
      return;
    }
    for (let event in this._eventHandlers) {
      rootElement.removeEventListener(event, this._eventHandlers[event]);
    }
    rootElement.classList.remove(ROOT_ELEMENT_CLASS);
    return this._super(...arguments);
  }
  toString() {
    return '(EventDispatcher)';
  }
}

export { EventDispatcher as default };
