import { expect } from "chai";
import { getUrl } from "../utils/url";

export default class BasePage {
  BASE_URL = getUrl();

  async open(path) {
    await browser.url(path);
    await browser.maximizeWindow();
  }

  async isVisible(ele) {
    return browser.isVisible(ele);
  }

  async verifyTitle(paramTitle) {
    const title = await browser.getTitle();
    await expect(title).to.be.equal(paramTitle);
  }

  async verifyURL(paramURL) {
    const url = await browser.getUrl();
    await expect(url).to.include(paramURL);
  }

  async waitUntil(booleanFunction) {
    await browser.waitUntil(
      async () => {
        return await booleanFunction();
      },
      {
        timeout: 30000,
        timeoutMsg: "wait for 30 seconds for element to visible",
      }
    );
  }

  
}
