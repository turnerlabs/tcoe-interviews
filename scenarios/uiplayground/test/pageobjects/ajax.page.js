const Page = require('./page');

class Ajax extends Page {
  get requestButton() {
    return $('#ajaxButton');
  }

  get successMessage() {
    return $('.bg-success');
  }

  get messageContainer() {
    return $('#content');
  }

  async receiveResponse() {
    await this.requestButton.doubleClick();
    await browser.pause(35000);
  }

  open() {
    return super.open('ajax');
  }
}

module.exports = new Ajax();