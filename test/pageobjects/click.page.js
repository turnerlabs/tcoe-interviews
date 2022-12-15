const Page = require('./page');

class ClickPage extends Page {
  get badButton() {
    return $('#badButton');
  }

  async clickBadButton() {
    await this.badButton.click();
  }

  open() {
    return super.open('click');
  }
}

module.exports = new ClickPage();
