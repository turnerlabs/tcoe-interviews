const Page = require("./page");
class HomePage extends Page {
  get mainTitle() {
    return $('//div[@class="col-sm"]/h1');
  }
  async open() {
    await super.open("/");
  }
}

module.exports = new HomePage();
