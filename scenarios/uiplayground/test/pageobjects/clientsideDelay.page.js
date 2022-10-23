const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class ClientSideDelayPage extends Page {
    TITLE = 'Client Side Delay';
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

  get buttonLocator() {
    return $(`.btn-primary`);
  }

  get textLocator() {
    return $(`.bg-success`);
  }
  async clickButton(){
    await expect(this.buttonLocator).toExist();
    await this.buttonLocator.click();
    await this.textLocator.waitUntil(async function () {
      return (await this.getText()) === 'Data calculated on the client side.'
  }, {
      timeout: 16000,
      timeoutMsg: 'The button text did not change'
  });
      }

}

module.exports = new ClientSideDelayPage();
