const Page = require("./page");

class SearchPage extends Page {
  /**
   * define selectors using getter methods
   */
  get searchBtn() {
    return $("button[data-test='searchButton']");
  }
  get searchBar() {
    return $("#header-search-bar");
  }
  get searchSubmitBtn() {
    return $("button[aria-label='Search']");
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("");
  }

  /**
   * method to input keyword in search bar and submit search
   * @param keyword
   */
  async searchKeyword(keyword) {
    await super.clickElement(this.searchBtn);
    await super.inputValue(this.searchBar, keyword);
    await super.clickElement(this.searchSubmitBtn);
  }
}

module.exports = new SearchPage();
