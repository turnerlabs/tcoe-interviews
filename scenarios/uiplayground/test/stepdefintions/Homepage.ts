import { Given, Then, When } from "@wdio/cucumber-framework";
import homepo from "../pageobjects/pohome";
import poprogressbar from "../pageobjects/poprogressbar";
import { expect } from "chai";

Given("User opens {string} link", async function (strpage) {
  console.log("Page expected: " + strpage);
  let url = "http://uitestingplayground.com";
  await browser.url(url);
  await browser.pause(5000);
});

Given("User selects {string} header", async function (strheader) {
    switch (strheader) {
      case "class attribute":
        await homepo.oheaderclassattribute.scrollIntoView();
        await homepo.oheaderclassattribute.click();
        await browser.pause(5000);
        break;
      case "progress bar":
        await homepo.oheaderprogressheader.scrollIntoView();
        await homepo.oheaderprogressheader.click();
        await browser.pause(5000);
        break;
    }
  });
  
  When(
    "User is displayed with {string} browser title",
    async function (strbrtitle) {
      let title = await browser.getTitle();
      expect(title).equal(strbrtitle);
    }
  );

  Then("User is navigated to {string} url", async function (strurl) {
    expect(await browser.getUrl()).equal(
      "http://uitestingplayground.com/classattr"
    );
  });
  