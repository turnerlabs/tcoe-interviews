const Page = require('./page');

class AjaxPage extends Page {
  get ajaxButton() {
    return $('#ajaxButton');
  }

  get contentContainer() {
    return $('#content');
  }

  get contentList() {
    return $('#content').$('p.bg-success');
  }

  async clickAjaxButton() {
    await this.ajaxButton.click();
  }

  async waitForContent() {
    await browser.pause(17000);
  }

  open() {
    return super.open('ajax');
  }
}

module.exports = new AjaxPage();
