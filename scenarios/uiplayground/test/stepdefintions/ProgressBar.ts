import { Given, Then, When } from "@wdio/cucumber-framework";
import homepo from "../pageobjects/pohome";
import poprogressbar from "../pageobjects/poprogressbar";
import { expect } from "chai";

Then(
  "User waits until progress bar reaches {string}",
  async function (strpercentage) {
    let text = await poprogressbar.oprogressbar.getText();
    let updatedtext = text.replace("%", "");
    let integer = parseInt(updatedtext);
    console.log("int: " + integer);
    for (let i = 0; i < 100; i++) {
      await browser.pause(1000);
      let text1 = await poprogressbar.oprogressbar.getText();
      let updatedtext1 = text1.replace("%", "");
      let integer1 = parseInt(updatedtext1);
      //console.log("int: " + integer1);
      if (integer1 > 75) {
        console.log("integer=" + integer1);
        break;
      }
    }
  }
);

Then("User selects start button", async function () {
  let ele = await $('//*[@id="startButton"]');
  await ele.click();
});

Then("User selects stop button", async function () {
  let ele = await $('//*[@id="stopButton"]');
  let text = await poprogressbar.oprogressbar.getText();
  let updatedtext = text.replace("%", "");
  let integer = parseInt(updatedtext);
  console.log("int: " + integer);
  expect(integer).to.greaterThan(75);
  await ele.click();
});

Then('User is displayed with text content', async function(){
  let text=await (await poprogressbar.otextcontent).getText();
  let expectedtext="Create a test that clicks Start button and then waits for the progress bar to reach 75%. Then the test should click Stop. The less the difference between value of the stopped progress bar and 75% the better your result.";
expect(text).to.equal(expectedtext);
});