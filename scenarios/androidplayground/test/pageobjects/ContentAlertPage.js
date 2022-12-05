const Page = require('./Page');

class ContentAlertPage extends Page {
    
    get contentAlert() {
        return $('#content');
    }

    async nativeAlertisDisplayed() {
        return await this.waitForIsShown(this.contentAlert);
    }
}

module.exports = ContentAlertPage;