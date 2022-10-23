const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class ScrollBarsPage extends Page {
    TITLE = 'Scrollbars';
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

  async scrollAndClick(){
    await this.buttonLocator.scrollIntoView();
    await this.buttonLocator.click();
  }

}

module.exports = new ScrollBarsPage();
