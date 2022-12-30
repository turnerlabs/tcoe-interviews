const { expect } = require("chai");
const ShadowDOMPage = require("./../pages/shadowDOM.page");
describe("ests over Shadow DOM page", function () {
  it("Copy button must copy GUID content", async function () {
    await ShadowDOMPage.open();
    const guid = await ShadowDOMPage.generateGUID();
    await ShadowDOMPage.copyGUID();
    await ShadowDOMPage.pasteGUIDInField();
    await expect(await ShadowDOMPage.editField.getText()).to.be.equal(
      guid,
      "Field is empty, copy button is not working"
    );
  });
});
