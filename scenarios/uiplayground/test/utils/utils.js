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
}

export default new Utils();
