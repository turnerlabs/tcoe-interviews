

const fs = require("fs");
let { expect } = require('chai');

module.exports = class AndroidBase {

    /**
     * Method to hide the android keyboard
     * @returns boolean
     */
    isKeyboardDisplayed() {
        return driver.isKeyboardShown();
    }

    /**
     * Method to check on android keyboard and hide it
     * @returns boolean
     */
    checkAndHideKeyboard() {
        if (driver.isKeyboardShown())
            return driver.hideKeyboard();
    }

    /**
     * Method for explicit wait using waitForDisplay()
     * @param {} element - on which the wait is applied
     */
    async explicitWaitDisplay(element) {
        return await element.waitForDisplayed(
            {
                timeout: 20000,
                interval: 1000
            });

    }
    /**
     * Method to switch the frame
     * @param {} element - Frame element
     */
    async switchFrame(element) {
        await element.isDisplayed();
        await browser.switchToFrame(element);
    }

    /**
     * Method to get the CSS attribute of the element
     * @param {*} ele
     * @param {*} value 
     * @returns 
     */
    async getElementAttribute(ele, value) {
        return await ele.getAttribute(value);
    }

    /**
     * Explicit wait method using 'clickable' == true condition
     * @param {*} element - on which the wait is applied
     */
    async explicitWaitClickable(element) {
        try {
            return browser.waitUntil(async () => {
                return await element.waitForClickable({ timeout: 5000, interval: 1000 });
            })
        } catch (error) {
            return false;
        }
    }


    /**
     * Method to wait and click the element
     * try/catch is used to handle stale element exception
     * @param {*} element 
     */
    async waitAndClick(element) {
        try {
            await this.explicitWaitDisplay(element);
            await element.click();
        } catch (error) {
            await this.explicitWaitClickable(element);
            await element.click();
        }
    }
    /**
     * Method to pause the driver
     */

    async waitForElement() {
        return await new Promise(resolve => setTimeout(resolve, 2000));
    }
    /**
     * Method t0 click the element
     * @param {*} element 
     */
    async clickElement(element) {
        await element.click();
    }

    /**
     * Method to switch to parent frame
     */
    async switchToParentFrame() {
        driver.switchToParentFrame();
    }
    /**
     * Method to wait and send the value to the text field
     * @param {*} element - text element
     * @param {*} value  - value to be entered
     */
    async waitAndSetValue(element, value) {
        await element.isDisplayed();
        await element.setValue(value);
    }
    /**
     * Method to wait and get the text of the element
     * @param {*} element - Element's text to be retrieved
     * @returns 
     */
    async waitAndGetText(element) {
        try {
            await this.explicitWaitDisplay(element);
            return await element.getText();
        } catch (exception) {
            await this.explicitWaitClickable(element);
            return await element.getText();
        }
    }

    /**
     * Method to compare the two text
     * @param {*} text1 
     * @param {*} text2 
     */
    async getTextAndCompare(text1, text2) {
        expect(text1 === text2);
    }

    /**
     * Method to compare the element's text with another text
     * @param {*} element 
     * @param {*} text1 
     */
    async getElementTextAndCompare(element, text1) {
        expect(this.waitAndGetText(element) === text1);
    }

    /**
     * Method to clear the element's text
     * @param {*} element - used to clear the text value
     */
    async clearTextField(element) {
        (await element).clearValue();
        expect(this.waitAndGetText(element) == '')
    }

    /**
     * Method to get the alert text
     */
    async getAlertText() {
        if (this.isAlertPresent())
            return await driver.getAlertText();
    }

    /**
     * Method to verify is any alert is present using alert title
     * @returns 
     */
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

    /**
     * Method to verify the element present without wait
     * @param {*} element 
     * @returns 
     */
    async isElementPresent(element) {
        try {
            await element.isDisplayed();
            return true;
        } catch (e) {
            return false;
        }
    }

    /**
     * Method to get the test data from JSON
     */
    async getTestData(dataName) {
        let jsonString = fs.readFileSync(data);
        return await JSON.parse(dataName);
    }
    /**
     * Method to get screen resolution
     */
    async getScreenResolution() {
        return await browser.getWindowSize();
    }
    async getScreenWidth() {
        let jsonParse = JSON.stringify(await this.getScreenResolution());
        let jsonData = JSON.parse(jsonParse);
        return await jsonData['width'];
    }
    async getScreenHeight() {
        let jsonParse = JSON.stringify(await this.getScreenResolution());
        let jsonData = JSON.parse(jsonParse);
        return await jsonData['height'];
    }
    /**
     * Method to verify the element is displaying within screen
     */
    async verifyElementWithinScreen(element) {
        try {
            let boundsValue = (await this.getElementAttribute(element, 'bounds'));
            let jsonParse = JSON.stringify(await this.getScreenResolution());
            let jsonData = JSON.parse(jsonParse);
            let screenWidth = jsonData['width'];
            let screenHeight = jsonData['height'];
            let elementXStart = parseInt(boundsValue.split("][")[0].split(",")[0].replace('[', '').trim());
            let elementXend = parseInt(boundsValue.split("][")[0].split(",")[1].trim());
            let elementYStart = parseInt(boundsValue.split("][")[1].split(",")[0].trim());
            let elementYend = parseInt(boundsValue.split("][")[1].split(",")[1].trim());
            expect(elementXStart).to.be.lessThan(screenWidth);
            expect(elementXend).to.be.lessThan(screenWidth);
            expect(elementYStart).to.be.lessThan(screenHeight);
            expect(elementYend).to.be.lessThan(screenHeight);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Method to take screenshot of an element
     */
    async takeElementScreenshot(ele, nameOfTheScreenshot) {
        try {
            await browser.saveElement(ele, nameOfTheScreenshot);
            console.log("*** Screenshot is taken for the element ***");
            return true;
        }
        catch (error) {
            console.log("*** Screenshot is not taken for the element ***");
            return false;
        }
    }

    /**
     * Method to verify the element images
     */
    async compareElementImages(ele, nameOfTheBaseScreenshot) {
        try {
            await expect(await browser.compareElement(ele), nameOfTheBaseScreenshot.misMatchPercentage).toEqual(0);
            return true;
        } catch (error) {
            return false;
        }
    }
}


