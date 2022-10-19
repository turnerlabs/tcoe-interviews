import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";
import { expect } from "chai";
import { transform } from "typescript";
import classattributepo from "../pageobjects/poclassatrribute";

When("User is displayed with {string} button", async function (strbutton) {
  switch (strbutton) {
    case "primary":
      await browser.pause(2000);
      expect(
        await (await classattributepo.oprimarybutton).isDisplayed()
      ).to.be.true;
  }
});

When("User selects {string} button", async function (strbutton) {
  switch (strbutton) {
    case "primary":
      await (await classattributepo.oprimarybutton).scrollIntoView();
      (await classattributepo.oprimarybutton).click();
      await browser.pause(2000);
  }
});

Then("User is displayed with alert", async function () {
  await browser.pause(2000);
  await browser.execute("window.alert()");
  let flag = await browser.isAlertOpen();
  console.log("flag:" + flag);
  expect(flag).to.be.true;
});

Then("User selects ok", async function () {
  await browser.execute("window.alert()");
  await browser.acceptAlert();
});

Then ('User is navigated to class attribute url',async function(){
  let text=await browser.getUrl();
  expect(text).to.be.equal("http://uitestingplayground.com/classattribute")
});