const Page = require("./page");
/**
 * Home page containing specific selectors and methods for a specific page
 */
class ProgressBarPage extends Page {
  TITLE = "Progress Bar";
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

  get startButtonLocator() {
    return $(`.btn-primary`);
  }

  get stopButtonLocator() {
    return $(`.btn-info`);
  }
  get progressBar() {
    return $(`.progress-bar`);
  }

  async startStopBar() {
    await this.startButtonLocator.click();
    await this.progressBar.waitUntil(async function () {
      return (await this.getText()) === '75%'
    }, {
      timeout: 30000,
      timeoutMsg: 'The button did not click on 75%'
  });
    await this.stopButtonLocator.click();
  }
}

module.exports = new ProgressBarPage();
