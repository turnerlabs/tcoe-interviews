const Page = require('./Page.js');
const GenericActions = require('../helpers/GenericActions.js');
const SearchPage = require('./Seach.page.js');

class Home extends Page {

    get searchButton() {
        return $('.sc-jKVCRD');
    }

    get searchFormInput() {
        return $('#header-search-bar');
    }

    get searchFormButton() {
        return $('header .sc-jWBwVP');
    }

    async open() {
        return await super.open('');
    }

    async clickOnSearchButton() {
        await GenericActions.doClick(this.searchButton);
    }

    async typeOnSearchFormInput(text) {
        await GenericActions.sendKeys(this.searchFormInput, text);
    }

    async performSearch() {
        await GenericActions.doClick(this.searchFormButton);
        return SearchPage;
    }
}

module.exports = new Home();