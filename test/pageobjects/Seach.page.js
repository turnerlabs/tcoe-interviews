const Page = require('./Page.js');
const GenericActions = require('../helpers/GenericActions.js');

class Search extends Page {

    get searchCount() {
        return $('.search__results-count');
    }

    get searchQuery() {
        return $('#search__query');
    }

    async queryIsDisplayed() {
        await GenericActions.waitForIsShown(this.searchCount);
        return await this.searchQuery.isDisplayed();
    }

    async getTextSearchQuery() {
        await GenericActions.waitForIsShown(this.searchQuery);
        return await this.searchQuery.getText();
    }
}

module.exports = new Search();