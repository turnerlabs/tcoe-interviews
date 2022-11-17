import TabBar from '../screenobjects/components/TabBar';
import WebView from "../helpers/WebView";
import WebviewScreen from "../screenobjects/WebviewScreen";

/**
 * This test file verifies the Webview behavior
 */
describe('WebdriverIO and Appium, when using swiping', () => {

    /**
     * Setting pre-requisites steps
     */
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openWebView();
        await WebviewScreen.waitForWebViewIsDisplayedByXpath();

    });

    /**
     * Verify search function
     */
    it('should be able to fill the form - happy path', async () => {
        await WebviewScreen.clickSearButton();
    });

});
