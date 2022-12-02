const {navigationSettings} = require("../dataProviders/navigation");

module.exports = class Page {
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    navigateToWebsite(path) {
        return browser.url(`${navigationSettings.baseUrl}${path}`);
    }
}
