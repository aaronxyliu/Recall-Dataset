import EmberObject from '../object/index.js';
import { escapeRegExp } from './lib/location-utils.js';

/**
@module @ember/routing/none-location
*/

/**
  NoneLocation does not interact with the browser. It is useful for
  testing, or when you need to manage state with your Router, but temporarily
  don't want it to muck with the URL (for example when you embed your
  application in a larger page).

  Using `NoneLocation` causes Ember to not store the applications URL state
  in the actual URL. This is generally used for testing purposes.

  @class NoneLocation
  @extends EmberObject
  @protected
*/
class NoneLocation extends EmberObject {
  updateCallback;

  // Set in reopen so it can be overwritten with extend

  /**
    Will be pre-pended to path.
     @private
    @property rootURL
    @default '/'
  */
  // Set in reopen so it can be overwritten with extend

  initState() {
    this._super(...arguments);
    let {
      rootURL
    } = this;
  }

  /**
    Returns the current path without `rootURL`.
     @private
    @method getURL
    @return {String} path
  */
  getURL() {
    let {
      path,
      rootURL
    } = this;

    // remove trailing slashes if they exists
    rootURL = rootURL.replace(/\/$/, '');

    // remove rootURL from url
    return path.replace(new RegExp(`^${escapeRegExp(rootURL)}(?=/|$)`), '');
  }

  /**
    Set the path and remembers what was set. Using this method
    to change the path will not invoke the `updateURL` callback.
     @private
    @method setURL
    @param path {String}
  */
  setURL(path) {
    this.path = path;
  }

  /**
    Register a callback to be invoked when the path changes. These
    callbacks will execute when the user presses the back or forward
    button, but not after `setURL` is invoked.
     @private
    @method onUpdateURL
    @param callback {Function}
  */
  onUpdateURL(callback) {
    this.updateCallback = callback;
  }

  /**
    Sets the path and calls the `updateURL` callback.
     @private
    @method handleURL
    @param url {String}
  */
  handleURL(url) {
    this.path = url;
    if (this.updateCallback) {
      this.updateCallback(url);
    }
  }

  /**
    Given a URL, formats it to be placed into the page as part
    of an element's `href` attribute.
     @private
    @method formatURL
    @param {String} url
    @return {String} url
  */
  formatURL(url) {
    let {
      rootURL
    } = this;
    if (url !== '') {
      // remove trailing slashes if they exists
      rootURL = rootURL.replace(/\/$/, '');
    }
    return rootURL + url;
  }
}
NoneLocation.reopen({
  path: '',
  rootURL: '/'
});

export { NoneLocation as default };
