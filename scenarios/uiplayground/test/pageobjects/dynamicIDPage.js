import { expect } from "chai";
import BasePage from "./basePage";

class DynamicID extends BasePage {
  TITLE = "Dynamic ID";
  URL = "/dynamicid";

  async verifyPage() {
    this.verifyTitle(this.TITLE);
    this.verifyURL(this.URL);
  }

  get dynamicID_button() {
    return $("//section//button");
  }

  async verifyAndClickDynamicIDBUtton() {
    const ele = await this.dynamicID_button;
    await expect(ele).to.be.exist;
    await ele.click();
  }
}

export default new DynamicID();
