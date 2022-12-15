const Page = require('./page');

class ShadowDomPage extends Page {
  get copyButton() {
    return $('guid-generator').shadow$('#buttonCopy');
  }
  get generateButton() {
    return $('guid-generator').shadow$('#buttonGenerate');
  }
  get editInput() {
    return $('guid-generator').shadow$('#editField');
  }

  async clickCopyButton() {
    await this.copyButton.click();
  }
  async clickGenerateButton() {
    await this.generateButton.click();
  }
  async getEditInputValue() {
    return this.editInput.getValue();
  }

  open() {
    return super.open('shadowdom');
  }
}

module.exports = new ShadowDomPage();
