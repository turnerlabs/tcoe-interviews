const Page = require('./page');

class VisibilityPage extends Page {
  get hideButton() {
    return $('#hideButton');
  }

  async clickHideButton() {
    await this.hideButton.click();
  }

  open() {
    return super.open('visibility');
  }
}

module.exports = new VisibilityPage();
