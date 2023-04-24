module.exports = class BaseURL {
    open (path) {
        return browser.url(`https://www.cnn.com/${path}`)
    }
}
