import { expect } from "chai";
import BasePage from "./basePage";

class MouseOverPage extends BasePage {
  TITLE = "Mouse Over";
  URL = "/mouseover";

  LINK_CLASS = "text-primary";
  LINK_TITLE = "Click me";
  OVER_LINK_CLASS = "text-warning";
  OVER_LINK_TITLE = "Active Link";

  get clickMeLink() {
    return $("=Click me");
  }

  get clickCount() {
    return $("//span[@id='clickCount']");
  }

  async verifyPage() {
    await this.verifyTitle(this.TITLE);
    await this.verifyURL(this.URL);
  }

  async verifyClassAndCount() {
    const link = await this.clickMeLink;
    const linkClass = await link.getAttribute("class");
    await expect(linkClass).to.equal(this.LINK_CLASS);
    const linkTitle = await link.getAttribute("title");
    await expect(linkTitle).to.equal(this.LINK_TITLE);
    const count = await this.clickCount;
    const countText = await count.getText();
    await expect(countText).to.equal("0");
  }

  async overAndVerifyClassAndCount() {
    const link = await this.clickMeLink;
    // await browser.moveToElement(link);
    await link.moveTo();
    const linkClass = await link.getAttribute("class");
    await expect(linkClass).to.equal(this.OVER_LINK_CLASS);
    const linkTitle = await link.getAttribute("title");
    await expect(linkTitle).to.equal(this.OVER_LINK_TITLE);
    await link.doubleClick();
    const count = await this.clickCount;
    const countText = await count.getText();
    await expect(countText).to.equal("2");
  }
}

export default new MouseOverPage();
