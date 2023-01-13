/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    async validateUrl(url) {
        await browser.waitUntil(async function () {
            return (await this.getUrl()) === url
        }, 5000)
    }
    
    async open (url) {
        return browser.url(url)
    }
}
