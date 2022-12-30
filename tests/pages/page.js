class Page {
  constructor() {
    this.title = "Main Page";
  }

  async open(path) {
    await browser.url(path);
  }
}

module.exports = Page;
