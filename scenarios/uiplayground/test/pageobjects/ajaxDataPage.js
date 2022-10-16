import { expect } from "chai";
import BasePage from "./basePage";

class AJAXDataPage extends BasePage {
  TITLE = "AJAX Data";
  URL = "/ajax";

  RESPONSE_TEXT = "Data loaded with AJAX get request.";

  async verifyPage() {
    this.verifyTitle(this.TITLE);
    this.verifyURL(this.URL);
  }

  get ajaxButton() {
    return $("//button[@id='ajaxButton']");
  }

  get successData() {
    return $("//div[@id='content']/p[@class='bg-success']");
  }

  async verifyAndClickDynamicIDBUtton() {
    const ele = await this.ajaxButton;
    await expect(ele).to.be.exist;
    await ele.click();
  }

  async clickAndwaitForTextToVisible() {
    const ele = await this.ajaxButton;
    await ele.click();
    const successEle = await this.successData;
    const conditionFUnction = async () => {
      return await successEle.isExisting();
    } 
    await this.waitUntil(conditionFUnction);
  }

  async verifyReponseText() {
    const ele = await this.successData;
    const text = await ele.getText();
    await expect(text).to.equal(this.RESPONSE_TEXT);
  }
}

export default new AJAXDataPage();
