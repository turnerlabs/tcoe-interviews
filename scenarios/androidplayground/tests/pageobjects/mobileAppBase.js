const fs = require("fs");
let { expect: chaiExpect } = require('chai');

module.exports = class AndroidBase {

    isKeyboardDisplayed() {
        return driver.isKeyboardShown();
    }

    checkAndHideKeyboard() {
        if (driver.isKeyboardShown())
            return driver.hideKeyboard();
    }

    async waitTillDisplay(element) {
        return await element.waitForDisplayed(
            {
                timeout: 15000,
                interval: 1000
            });

    }
   async switchFrame(element) {
        await element.isDisplayed();
        await browser.switchToFrame(element);
    }

    
    async getElementAttribute(element, value) {
        return await element.getAttribute(value);
    }

    async waitTillElementClickable(element) {
        try {
            return browser.waitUntil(async () => {
                return await element.waitForClickable({ timeout: 5000, interval: 1000 });
            })
        } catch (error) {
            return false;
        }
    }

    async waitAndClick(element) {
        try {
            await this.waitTillDisplay(element);
            await element.click();
        } catch (error) {
            await this.waitTillElementClickable(element);
            await element.click();
        }
    }
    

    async driverSleep() {
        return await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    async clickElement(element) {
        await element.click();
    }

   async switchToParentFrame() {
        driver.switchToParentFrame();
    }
    
    async waitAndSetValue(element, value) {
        await element.isDisplayed();
        await element.setValue(value);
    }
   
    async waitAndGetText(element) {
        try {
            await this.waitTillDisplay(element);
            return await element.getText();
        } catch (exception) {
            await this.waitTillElementClickable(element);
            return await element.getText();
        }
    }
    
    async getTextAndCompare(text1, text2) {
        chaiExpect(text1 === text2);
    }

    async compareText(element, text1) {
        chaiExpect(this.waitAndGetText(element) === text1);
    }

    async clearField(element) {
        (await element).clearValue();
        chaiExpect(this.waitAndGetText(element) == '')
    }

    async getAlertText() {
        if (this.isAlertPresent())
            return await driver.getAlertText();
    }

   async isAlertPresent() {
        return async () => {
            try {
                await this.getAlertText();
                return true;
            } catch (error) {
                if (error.name === 'no such alert') {
                    return false;
                } else {
                    throw error;
                }
            }
        };
    }

   async isElementPresent(element) {
        try {
            await element.isDisplayed();
            return true;
        } catch (e) {
            return false;
        }
    }
    
    async getWinSize() {
        return await browser.getWindowSize();
    }

    async verifyElementVisible(element) {
        const isDisplayed = element.isDisplayed();
        if( assert.strictEqual(isDisplayed, true, 'Element is not visible on the screen'))       
            return true;
        else
            return false;
    }

   async takeSS(element, screenshot) {
        try {
            this.driverSleep();
            await browser.saveElement(element, screenshot);
            return true;
        }
        catch (error) {
            return false;
        }
    }

    async compareSS(element, actualScreenshot) {
        try {
            this.driverSleep();
            const mismatchPercentage = (await browser.compareElement(element, actualScreenshot, {})).misMatchPercentage;
            chaiExpect(mismatchPercentage).to.equal(0);
            return true;
        } catch (error) {
            return false;
        }
    }

}


