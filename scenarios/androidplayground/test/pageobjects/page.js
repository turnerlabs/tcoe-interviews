/** @format */

import { DEFAULT_TIMEOUT } from "../mobile/constants";

module.exports = class Page {
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    if (!path) {
      browser.url("/");
    } else {
      browser.url(path);
    }
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   * @return {boolean}
   */
  waitForIsShown(isShown = true) {
    return $(this.selector).waitForDisplayed({
      timeout: DEFAULT_TIMEOUT,
      reverse: !isShown,
    });
  }
};
