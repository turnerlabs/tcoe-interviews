class HomePage {
    get buttonSearch() {
        return $('button[data-test=searchButton')
    }

    get inputSearch() {
        return $('#header-search-bar');
    }

    get buttonSubmitSearch() {
        return $('button[aria-label=Search]')
    }

    async clickAtSeachButton() {
        return this.buttonSearch.click();
    }

    async fillSearchField(searchText) {
        return this.inputSearch.setValue(searchText);
    }

    async clickAtSubmitSearch() {
        return this.buttonSubmitSearch.click();
    }
}

module.exports = new HomePage();
