const SELECTORS = {
    ALERT_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
    ALERT_MESSAGE: '*//android.widget.TextView[@resource-id="android:id/message"]'
  }
  
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