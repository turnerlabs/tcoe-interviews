  const {SELECTORS} = require('../../../data/formsData');
  
  module.exports = class NativeAlert {
  
    static async waitForIsShown() {
      return $(SELECTORS.ALERT_TITLE).waitForExist({
        timeout: 11000,
      });
    }
  
    static async text() {
      return await $(SELECTORS.ALERT_MESSAGE).getText();
    }
    
  };