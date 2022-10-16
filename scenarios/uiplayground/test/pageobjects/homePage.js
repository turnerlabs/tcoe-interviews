// Home.page.js
import LINKS from "./homePageLinkEnum";
import BasePage from "./basePage";
import { getUrl } from "../utils/url";
import { expect } from "chai";

class HomePage extends BasePage {
  URL = getUrl();
  TITLE = "UI Test Automation Playground";

  get dynamicID() {
    return $("=Dynamic ID");
  }
  get dynamicTable() {
    return $("=Dynamic Table");
  }
  get classAttribute() {
    return $("/classattr");
  }
  get ajaxData() {
    return $("=AJAX Data");
  }
  get mouseOver() {
    return $("=Mouse Over");
  }

  get sampleApp() {
    return $("=Sample App");
  }

  get textInput() {
    return $("=Text Input");
  }

  get verifyText() {
    return $("=Verify Text");
  }

  get shadowDOM() {
    return $("=Shadow DOM");
  }

  async open() {
    await super.open(this.URL);
  }

  async verifyPage() {
    await super.verifyTitle(this.TITLE);
  }

  async getLink(link_title) {
    var ele;
    switch (link_title) {
      case LINKS.DYNAMIC_ID:
        ele = this.dynamicID;
        break;
      case LINKS.CLASS_ATTRIBUTE:
        ele = this.classAttribute;
        break;
      case LINKS.HIDDEN_LAYER:
        ele = this.classAttribute;
        break;
      case LINKS.LOAD_DELAY:
        ele = this.classAttribute;
        break;
      case LINKS.AJAX_DATA:
        ele = this.ajaxData;
        break;
      case LINKS.CLIENT_SIDE_DELAY:
        ele = this.classAttribute;
        break;
      case LINKS.CLICK:
        ele = this.classAttribute;
        break;
      case LINKS.TEXT_INPUT:
        ele = this.textInput;
        break;
      case LINKS.SCROLLBARS:
        ele = this.classAttribute;
        break;
      case LINKS.DYNAMIC_TABLE:
        ele = this.dynamicTable;
        break;
      case LINKS.VERIFY_TEXT:
        ele = this.verifyText;
        break;
      case LINKS.PROGRESS_BAR:
        ele = this.classAttribute;
        break;
      case LINKS.VISIBILITY:
        ele = this.classAttribute;
        break;
      case LINKS.SAMPLE_APP:
        ele = this.sampleApp;
        break;
      case LINKS.MOUSE_OVER:
        ele = this.mouseOver;
        break;
      case LINKS.NON_BREAKING_SPACE:
        ele = this.classAttribute;
        break;
      case LINKS.OVERLAPPED_ELEMENT:
        ele = this.classAttribute;
        break;
      case LINKS.SHADOW_DOM:
        ele = this.shadowDOM;
        break;

      default:
    }

    return ele;
  }

  async click_link(link_title) {
    await browser.click(this.getLink(link_title));
  }

  async verifyDynamicIDLink() {
    var ele = await this.getLink(LINKS.DYNAMIC_ID);
    await ele.scrollIntoView();
    expect(ele).to.be.exist;
  }

  async clickDynamicIDLink() {
    var ele = await this.getLink(LINKS.DYNAMIC_ID);
    await ele.click();
  }

  async verifyAJAXDataLink() {
    var ele = await this.getLink(LINKS.AJAX_DATA);
    await ele.scrollIntoView();
    expect(ele).to.be.exist;
  }

  async clickAJAXDataLink() {
    var ele = await this.getLink(LINKS.AJAX_DATA);
    await ele.click();
  }

  async verifyMouseOverLink() {
    var ele = await this.getLink(LINKS.MOUSE_OVER);
    await ele.scrollIntoView();
    expect(ele).to.be.exist;
  }

  async clickMouseOverLink() {
    var ele = await this.getLink(LINKS.MOUSE_OVER);
    await ele.click();
  }
  async verifySampleAppLink() {
    var ele = await this.getLink(LINKS.SAMPLE_APP);
    await ele.scrollIntoView();
    expect(ele).to.be.exist;
  }

  async clickSampleAppLink() {
    var ele = await this.getLink(LINKS.SAMPLE_APP);
    await ele.click();
  }

  async verifyTextInputLink() {
    var ele = await this.getLink(LINKS.TEXT_INPUT);
    await ele.scrollIntoView();
    expect(ele).to.be.exist;
  }

  async clickTextInputLink() {
    var ele = await this.getLink(LINKS.TEXT_INPUT);
    await ele.click();
  }

  async verifyVerifyTextLink() {
    var ele = await this.getLink(LINKS.VERIFY_TEXT);
    await ele.scrollIntoView();
    expect(ele).to.be.exist;
  }

  async clickVerifyTextLink() {
    var ele = await this.getLink(LINKS.VERIFY_TEXT);
    await ele.click();
  }

  async verifyShadowDOMLink() {
    var ele = await this.getLink(LINKS.SHADOW_DOM);
    await ele.scrollIntoView();
    expect(ele).to.be.exist;
  }

  async clickShadowDOMLink() {
    var ele = await this.getLink(LINKS.SHADOW_DOM);
    await ele.click();
  }
}

export default new HomePage();
