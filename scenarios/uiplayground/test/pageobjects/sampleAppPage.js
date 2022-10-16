import { expect } from "chai";
import BasePage from "./basePage";

class SampleAppPage extends BasePage {
  TITLE = "Sample App";
  URL = "/sampleapp";

  INVALID_MESSAGE = "Invalid username/password";
  VALID_MESSAGE = "Welcome,";

  async verifyPage() {
    this.verifyTitle(this.TITLE);
    this.verifyURL(this.URL);
  }

  get userName() {
    return $("//input[@name='UserName']");
  }

  get password() {
    return $("//input[@name='Password']");
  }

  get loginButton() {
    return $("#login");
  }

  get loginStatus() {
    return $("#loginstatus");
  }

  async enterUserNameAndPassword(userName, password) {
    const userNameEle = await this.userName;
    await userNameEle.clearValue();
    await userNameEle.setValue(userName);
    const passwordEle = await this.password;
    await passwordEle.clearValue();
    await passwordEle.setValue(password);
    const loginButtonEle = await this.loginButton;
    await loginButtonEle.click();
  }

  async verifyInvalidLogin() {
    const ele = await this.loginStatus;
    const text = await ele.getText();
    expect(text).to.equal(this.INVALID_MESSAGE);
  }

  async verifyValidLogin() {
    const ele = await this.loginStatus;
    const text = await ele.getText();
    expect(text).to.include(this.VALID_MESSAGE);
  }
}

export default new SampleAppPage();
