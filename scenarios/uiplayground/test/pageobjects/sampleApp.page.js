const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class SampleAppPage extends Page {
    TITLE = 'Sample App';
    ERROR_MESSAGE = "Invalid username/password";
    WELCOME_MESSAGE = "Welcome,";
    LOGOUT_MESSAGE = "User logged out.";
  /**
   * overwrite specific options to adapt it to page object
   */
  open(pageLink) {
    return super.open(pageLink);
  }

  async verifyPage(pageLink) {
    await super.verifyUrl(pageLink);
    await super.verifyTitle(this.TITLE);
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

  async login(userName, password) {
    //Enter username
    await this.userName.clearValue();
    await this.userName.setValue(userName);
    //Enter password
    await this.password.clearValue();
    await this.password.setValue(password);
    //Click on login button
    await this.loginButton.click();
  }

  async logout() {
    //Click on logout button
    await this.loginButton.click();
    expect(this.loginStatus.getText()).toHaveText(this.LOGOUT_MESSAGE);
  }

  async verifyLogin(validLogin=false) {
    if(validLogin){
      expect(this.loginStatus.getText()).toHaveText(this.WELCOME_MESSAGE);
    }else{
      expect(this.loginStatus.getText()).toHaveText(this.ERROR_MESSAGE);
    }
  }
}

module.exports = new SampleAppPage();
