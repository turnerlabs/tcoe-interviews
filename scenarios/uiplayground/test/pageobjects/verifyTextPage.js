import { expect } from "chai";
import BasePage from "./basePage";

class VerfyTextPage extends BasePage {
  TITLE = "Verify Text";
  URL = "/verifytext";

  WELCOME_TEXT = "Welcome UserName!";

  async verifyPage() {
    this.verifyTitle(this.TITLE);
    this.verifyURL(this.URL);
  }

  get welcomeUserName() {
    return $(
      "//div[@class='bg-primary']//span[contains(normalize-space(.), 'Welcome UserName!')]"
    );
  }

  async verifyUserName() {
    const ele = await this.welcomeUserName;
    const text = await ele.getText();
    await expect(text).to.equal(this.WELCOME_TEXT);
  }
}

export default new VerfyTextPage();
