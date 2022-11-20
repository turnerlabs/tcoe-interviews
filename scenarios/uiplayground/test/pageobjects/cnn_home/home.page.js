const Page = require('../page');

class HomePage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get magnifyingSearchIconButton() {
        return $('[data-test="searchButton"]')
    }

    get inputSearch(){
        return $('[id=header-search-bar]')
    }

    get searchButton(){
        return $('button[aria-label="Search"]')
    }

    get searchResultCount(){
        return $('[class="search__results-count"]');
    }

    get searchQuery(){
        return $('[id="search__query"]');
    }


    async checkForAddPopup(){
        let element = await $('[id*="bx-close-inside"]');
        let isExisting = element.isExisting();

        if(isExisting){
            console.log('Popup add showed up, closing the ad');
            element.click();
        }
    }

    async getSearchSummary(){
        let searchCount = await this.searchResultCount.getText();;
        let searchQuery = await this.searchQuery.getText();
        return {
            'searchCount': searchCount,
            'searchQuery': searchQuery
        }
    }

    async performSearch(searchText) {
        //await this.magnifyingSearchIconButton.waitForClickable()
        await this.magnifyingSearchIconButton.click();
        await this.inputSearch.waitForClickable()
        await this.inputSearch.setValue(searchText)
        await this.searchButton.click();
    }

    async inputSearchMaxLength(){
        return this.inputSearch.getAttribute('maxlength')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
