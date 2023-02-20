class Utils {

    async open(path) {
        await browser.url(path)
    }

    async getUrl() {
        return await browser.getUrl();
    }

    async click(webElement) {
        await webElement.click();
    }

    async sendKeys(webElement, string) {
        await webElement.setValue(string);
    }

    async waitUntil(func, time) {
        browser.waitUntil(func(), {timeout: time})
    }
}

export default new Utils();
