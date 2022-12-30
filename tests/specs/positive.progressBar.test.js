const { expect } = require("chai");
const ProgressBarPage = require("../pages/progressBar.page");

describe("Test over progress bar page", function () {
  it("Progess bar percentage", async function () {
    await browser.url("http://uitestingplayground.com/progressbar");
    await ProgressBarPage.clickAndWait(75);
    let result = await ProgressBarPage.result.getText();
    result = result.split(",")[0].split(" ")[1] * 1;
    expect(result > -5 && result < 5).to.be.equal(
      true,
      "Result is too diferent than expected"
    );
  });
});
