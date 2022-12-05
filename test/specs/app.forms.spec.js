const TabBar = require("../screenobjects/components/TabBar");

describe("Interaction in Forms Screen", () => {
  beforeEach(async () => {
    await TabBar.waitForTabBarShown();
    await TabBar.openForms();
  });
  
  it("should validate default selection of the tab, and if forms button is clickable", async () => {
    await expect(TabBar.homeOption).toHaveAttributeContaining(
      "selected",
      "true"
    );
    await expect(TabBar.formsOption).toHaveAttributeContaining(
      "selected",
      "false"
    );
    await expect(TabBar.formsOption).toHaveAttributeContaining(
      "clickable",
      "true"
    );
  });
});
