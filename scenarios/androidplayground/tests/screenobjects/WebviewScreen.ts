import WebView from '../helpers/WebView';

class WebViewScreen extends WebView {
    /**
     * Wait for the screen to be displayed based on Xpath
     */
    async waitForWebViewIsDisplayedByXpath (isShown = true): Promise<boolean|void> {
        const selector =  browser.isAndroid ? '*//android.webkit.WebView' : '*//XCUIElementTypeWebView';

        return $(selector).waitForDisplayed({
            timeout: 45000,
            reverse: !isShown,
        });
    }

    /**
     * Wait for the screen to be displayed based on Xpath
     */
    async clickSearButton() {
        const selector =  browser.isAndroid ? '*//button[text="Search"]' : '*//XCUIElementTypeWebView';
        $(selector).click();
    }
}

export default new WebViewScreen();
