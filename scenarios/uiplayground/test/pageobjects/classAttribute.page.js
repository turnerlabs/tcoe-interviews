const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class ClassAttributePage extends Page {
    TITLE = 'Class Attribute';
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

  get blueButtonLocator() {
    return $(`.btn-primary`);
  }

  async clickBlueButton(){
    await expect(this.blueButtonLocator).toExist();
    await this.blueButtonLocator.click();
    await browser.acceptAlert();
      }

}

module.exports = new ClassAttributePage();
