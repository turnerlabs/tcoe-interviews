class CNNPage {
    openCNNHome(path) {
        browser.url(path ? `https://www.cnn.com/${path}` : 'https://www.cnn.com/');
        return browser.maximizeWindow();
    }
}

module.exports = new CNNPage();
