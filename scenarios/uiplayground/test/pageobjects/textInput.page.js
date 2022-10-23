const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class TextInputPage extends Page {
    TITLE = 'Text Input';
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

  get inputTextLocator() {
    return $(`#newButtonName`);
  }

  get buttonLocator() {
    return $(`.btn-primary`);
  }

  async fillField(text){
    await this.inputTextLocator.addValue(text);
    await this.buttonLocator.click();
    await expect(this.buttonLocator).toHaveText(text);
  }

}

module.exports = new TextInputPage();
