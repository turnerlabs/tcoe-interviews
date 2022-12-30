const { expect } = require("chai");
const MouseClickPage = require("../pages/mouseClick.page");
describe("Tests over Mouse Click page", function () {
  it("Change color button to red", async function () {
    await MouseClickPage.open();
    await MouseClickPage.clickButton();
    await expect((await MouseClickPage.getButtonColor()).value).to.be.equal(
      "rgba(255,0,0)"
    );
  });
});
