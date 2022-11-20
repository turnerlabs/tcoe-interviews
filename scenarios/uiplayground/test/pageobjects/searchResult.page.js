const Page = require("./page");

class SearchResultPage extends Page {
  /**
   * define selectors using getter methods
   */
  get searchInput() {
    return $(".search__input");
  }

  get resultCountText() {
    return $(".search__results-count");
  }

  get resultList() {
    return $(".search__results-list");
  }

  get headlines() {
    return $$("[data-editable ='headline']");
  }

  get noResultTitle() {
    return $(".search__no-results__title");
  }

  get noResultSuggests() {
    return $(".search__no-results__suggestions");
  }

  get searchClearBtn() {
    return $(".search__clear");
  }

  /**
   * This method gets input value from search bar
   * @returns input value of seach bar
   */
  async getSearchInputValue() {
    return await super.getValue(this.searchInput);
  }

  /**
   * clear search result
   */
  async ClearSearch() {
    await super.clickElement(this.searchClearBtn);
  }

  /**
   * This method search result list after valid search input is given
   * @returns search result list
   */
  async getSearchResultList() {
    return await super.getVisibleElement(this.resultList);
  }

  /**
   * This method returns boolean value if headlines in result list contains keyword that was searched
   * @returns boolean value if keyword is in headline
   */
  async resultHeadlineIncludeKeyword(keyword) {
    for (let i = 0; i < (await super.getElementCount(this.headlines)); i++) {
      let headline = await this.headlines[i].getText();
      if (await headline.includes(keyword)) {
        return true;
      }
    }
    return false;
  }

  /**
   * This method returns boolean value if result count text contains keyword that was searched
   * @returns boolean value if keyword in result count text
   */
  async resultCountIncludeKeyword(keyword) {
    let resultCount = await super.getElementText(this.resultCountText);
    return (await resultCount.includes(keyword)) ? true : false;
  }

  /**
   * This method returns message title when no result is found after search
   * @returns message title when no result returned from search
   */
  async noResultTitleText() {
    return await super.getElementText(this.noResultTitle);
  }

  /**
   * This method returns suggestion text when no result is found after search
   * @returns suggestion text when no result returned from search
   */
  async getNoResultSuggests() {
    return await super.getVisibleElement(this.noResultSuggests);
  }
}

module.exports = new SearchResultPage();
