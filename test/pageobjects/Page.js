module.exports = class Page {
    
    async open(path) {
        browser.url(`https://www.cnn.com/${path}`);
    }
}
