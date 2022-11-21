const { parseJsontestData } = require("../utilities/parseJsonFromFile");
const SearchPage = require("../pageobjects/search.page");
const SearchResultPage = require("../pageobjects/searchResult.page");
const expectchai = require("chai").expect;

let test_data = parseJsontestData(
  "scenarios/uiplayground/test/testData/test_data_search.json"
);

describe("Given: user wants to check test search functionality of CNN website", () => {
  beforeEach(async () => {
    await SearchPage.open();
  });

  context("When: user opens search page in browser", () => {
    test_data.forEach((data) => {
      const { keyword, hasResult, noResultMsg } = data;

      it(`Then: search with key word [${keyword}] should return search result [${hasResult}]`, async () => {
        await SearchPage.searchKeyword(keyword);

        if (hasResult) {
          expect(await SearchResultPage.getSearchResultList()).toBeDisplayed;
          expectchai(
            await SearchResultPage.resultHeadlineIncludeKeyword(keyword)
          ).to.be.true;
          expectchai(await SearchResultPage.resultCountIncludeKeyword(keyword))
            .to.be.true;
        } else {
          expectchai(await SearchResultPage.noResultTitleText()).to.have.string(
            noResultMsg
          );
          expect(await SearchResultPage.getNoResultSuggests()).toBeDisplayed;
        }
      });

      it(`Then: clear button should clear text [${keyword}] in search bar`, async () => {
        await SearchPage.searchKeyword(keyword);
        await SearchResultPage.ClearSearch();
        expectchai(await SearchResultPage.getSearchInputValue()).to.be.empty;
      });
    });
  });
});
