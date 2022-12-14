// Description: This file contains the selectors and methods for the table page
const Page = require('./page');
const routes = require('../utils/routes');

class Nav extends Page {
  async validateUrl() {
    const url = await browser.getUrl();
    const expectedUrl = routes.routes.baseUrl+routes.routes.paths.dynamictable;

    await expect(url).toEqual(expectedUrl);
  }
  
  getUrl() {
    return browser.getUrl();
  }
}

module.exports = new Nav();
