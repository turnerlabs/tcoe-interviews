const ElementsVisibilityPage = require("./../pages/elementsVisibility.page");
describe("Tests over Elements Visibility page", function () {
  it("Unhide button displayed", async function () {
    await ElementsVisibilityPage.open();
    await ElementsVisibilityPage.clickUntilUnhideButton();
  });
});
