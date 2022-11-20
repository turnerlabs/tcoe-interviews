const { parseJsontestData } = require("../utilities/parseJsonFromFile");
const SearchPage = require("../pageobjects/search.page");
const SearchResultPage = require("../pageobjects/searchResult.page");
const expectchai = require("chai").expect;

let test_data = parseJsontestData(
  "scenarios/uiplayground/test/testData/test_data_search.json"
);

describe("Test search functionality", () => {
  beforeEach(async () => {
    await SearchPage.open();
  });

  test_data.forEach((data) => {
    const { keyword, hasResult, noResultMsg } = data;

    it(`validate search with key word [${keyword}] should return search result [${hasResult}]`, async () => {
      await SearchPage.searchKeyword(keyword);

      if (hasResult) {
        expect(await SearchResultPage.getSearchResultList()).toBeDisplayed;
        expectchai(await SearchResultPage.resultHeadlineIncludeKeyword(keyword))
          .to.be.true;
        expectchai(await SearchResultPage.resultCountIncludeKeyword(keyword)).to
          .be.true;
      } else {
        expectchai(await SearchResultPage.noResultTitleText()).to.have.string(
          noResultMsg
        );
        expect(await SearchResultPage.getNoResultSuggests()).toBeDisplayed;
      }
    });

    it(`validate clear button should clear text [${keyword}] in search bar`, async () => {
      await SearchPage.searchKeyword(keyword);
      await SearchResultPage.ClearSearch();
      expectchai(await SearchResultPage.getSearchInputValue()).to.be.empty;
    });
  });
});
