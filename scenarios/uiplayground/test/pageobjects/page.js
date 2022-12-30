module.exports = class Page {

    openPlayground (path) {
        return browser.url(`http://uitestingplayground.com/${path}`)
    }

    openCnn (path) {
        return browser.url(`https://cnn.com/${path}`)
    }
}