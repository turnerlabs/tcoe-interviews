/** @format */

import Page from './page';

const packageName = global.packageName;
const ANDROID_SELECTORS = {
	SEARCH_TEXTBOX: '//android.widget.EditText',
	SEARCH_RESULTS: "(//android.view.View[@content-desc='Content Type'])[1]",
};

// prettier-ignore
class LoginPage extends Page {
  get searchTextBox() {
    const selector = driver.isAndroid
      ? ANDROID_SELECTORS.SEARCH_TEXTBOX
      : IOS_SELECTORS.SEARCH_TEXTBOX;
    return $(selector);
  }
  get searchResults() {
    const selector = driver.isAndroid
      ? ANDROID_SELECTORS.SEARCH_RESULTS
      : IOS_SELECTORS.SEARCH_RESULTS;
    return $(selector);
  }
}
export default new LoginPage();
