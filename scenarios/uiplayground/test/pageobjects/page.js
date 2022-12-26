module.exports = class Page {
    open (path) {
        return browser.url(`https://www.cnn.com/${path}`)
    }
}
