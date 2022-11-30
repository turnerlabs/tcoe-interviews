const uiTestPage = require("../pageobjects/uiTests.page");

describe("UI Playground - Excercise 1", () => {
  it("should verify the progress bar and click stop", async () => {
    uiTestPage.openProgressPage();
    await uiTestPage.startButton.click();
    /*
     *  This retrieves the value of the the progress percentage
     */
    const progressBar = await uiTestPage.progressBar;
    await progressBar.waitUntil(
      async () => {
        return (await progressBar.getAttribute("aria-valuenow")) === "75";
      },
      {
        interval: 10,
        timeout: 20000,
        timeoutMsg:
          "Expected the progress bar to be at 75% after some period but it did not.",
      }
    );
    await uiTestPage.stopButton.click();
  });

  it("should click on the AJAX button more than once - Bug Scenario", async () => {
    uiTestPage.openAjaxPage();
    for (i = 0; i < 2; i++) {
      await uiTestPage.ajaxButton.click();
      await uiTestPage.spinner.waitForDisplayed({
        reverse: true,
        timeout: 25000,
      });
    }
    /*
    Validate the message display count
    */
    await expect(uiTestPage.ajaxStatus).toBeElementsArrayOfSize(1);
  });

  it("should click on the Hide button - Bug Scenario", async () => {
    uiTestPage.openVisibilityPage();
    await uiTestPage.hideButton.click();
    /*
    Checks to verify if the UnHide button is visible
    */
    await expect(uiTestPage.hideButton).toHaveText("unhide");
  });

  it("should click on the copy button - Bug Scenario", async () => {
    uiTestPage.openShadowDomPage();
    /*
     Checks to verify the copy button is clickable
     */
    await expect(uiTestPage.copyButton).toBeClickable({
      timeout: 3000,
    });
  });

  it("should click on the bad button - Bug Scenario", async () => {
    uiTestPage.openClickPage();
    await uiTestPage.badButton.click();
    /* Checks to verify that the error RED button is displayed
     * It is expected that the red button will have a failure in
     * the name class. This assertion checks for that
     */
    await expect(uiTestPage.badButton).toHaveElementClassContaining("failure", {
      timeout: 3000,
    });
  });
});
