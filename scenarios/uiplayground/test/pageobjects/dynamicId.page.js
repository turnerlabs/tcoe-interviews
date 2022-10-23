const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class DynamicIDPage extends Page {
    TITLE = 'Dynamic ID';
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

  get dynamicIdButtonLocator() {
    return $(`.btn-primary`);
  }

  async clickDynamicButton(){
    await expect(this.dynamicIdButtonLocator).toExist();
    await this.dynamicIdButtonLocator.click();
  }

}

module.exports = new DynamicIDPage();
