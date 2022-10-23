const HomePage = require("../pageobjects/home.page");
const SampleAppPage = require("../pageobjects/sampleApp.page");

describe("SampleApp Test", () => {
  let validLogins = { test: "pwd", $$$: "pwd", 1234: "pwd" };
  for (let username in validLogins) {
    it("Sample app testing page for valid logins", async () => {
      const password = validLogins[username];
      await HomePage.open("home");
      await HomePage.verifyPage("home");

      await SampleAppPage.open("sampleapp");
      await SampleAppPage.verifyPage("sampleapp");

      await SampleAppPage.login(username, password);
      await SampleAppPage.verifyLogin(true);
      await SampleAppPage.logout();
    });
  }
  let invalidLogins = {
    "": "pwd",
    test: "wrong",
    test: "",
    "": "",
    "": "wrong",
  };
  for (let username in invalidLogins) {
    it("Sample app testing page for invalid logins", async () => {
      const password = invalidLogins[username];
      await HomePage.open("home");
      await HomePage.verifyPage("home");

      await SampleAppPage.open("sampleapp");
      await SampleAppPage.verifyPage("sampleapp");
      await SampleAppPage.login(username, password);
      await SampleAppPage.verifyLogin(false);
    });
  }
});
