const Page = require('./page');

class ShadowDom extends Page {
  get copyButton() {
    return $('guid-generator').shadow$('#buttonCopy');
  }

  get generateButton() {
    return $('guid-generator').shadow$('#buttonGenerate');
  }

  get generateInput() {
    return $('guid-generator').shadow$('#editField');
  }

  open() {
    return super.open('shadowdom');
  }
 }
 
module.exports = new ShadowDom();