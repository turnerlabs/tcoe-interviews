const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class ClickPage extends Page {
    TITLE = 'Click';
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

  get domButtonLocator() {
    return $(`.btn-primary`);
  }

  get successButtonLocator() {
    return $(`.btn-success`);
  }

  async clickDOMButton(){
    await expect(this.domButtonLocator).toExist();
    await this.domButtonLocator.click();
    await expect(this.successButtonLocator).toExist();
  }

}

module.exports = new ClickPage();
