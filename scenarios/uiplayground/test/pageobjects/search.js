class Search {
  /**
   * selectors using getter methods
   */
  get btnSearchIcon() {
    return $('[data-test="searchButton"]');
  }

  get btnSearching() {
    return $('[action="/search"] button');
  }

  get inputSearch() {
    return $("#header-search-bar");
  }

  get searchResults() {
    return $(".search__results");
  }

  get tittleEmptyResults() {
    return $(".search__no-results__title");
  }

  /**
   * method top simulate functionality of searching with enter or click
   */
  async searching(searching, enter = false) {
    await this.btnSearchIcon.waitForDisplayed();;
    await this.btnSearchIcon.click();
    await this.inputSearch.setValue(searching);

    if (enter) {
      await browser.keys("Enter");
    } else {
      await this.btnSearching.click();
    }
  }

  /**
   * Open url
   */
  open() {
    return browser.url(`https://www.cnn.com/`);
  }
}

module.exports = new Search();
