const { expect } = require("chai");
const AjaxPage = require("./../pages/ajax.page");

describe("Test over ajax page", function () {
  it("Ajax message displayed once", async function () {
    await browser.url("http://uitestingplayground.com/ajax");
    await AjaxPage.clickButtonManyTimes(3);
    expect(await (await AjaxPage.successLabel).length).to.be.equal(1);
  });
});
