const Page = require('./page');

class VisibilityPage extends Page {
  get hideButton() {
    return $('#hideButton');
  }
  get unhideButton() {
    return $('#unhideButton');
  }

  async clickHideButton() {
    await this.hideButton.click();
  }
  async clickUnhideButton() {
    await this.unhideButton.click();
  }

  open() {
    return super.open('visibility');
  }
}

module.exports = new VisibilityPage();
