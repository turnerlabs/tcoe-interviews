const Page = require('./page');

class Visibility extends Page {
  get hideButton() {
    return $('#hideButton');
  }

  get buttonElement() {
    return $('td button');
  }

  async clickHidden() {
    await this.hideButton.click();
  }

  open() {
    return super.open('visibility');
  }
}

module.exports = new Visibility();