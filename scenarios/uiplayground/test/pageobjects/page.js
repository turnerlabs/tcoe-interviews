module.exports = class Page {
    open(path) {
        return browser.url(`http://uitestingplayground.com/${path}`)
    }
}