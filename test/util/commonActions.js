import homePageLocators from '../locators/homePageLocators.js';

class commonAction{

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

    /**
     * method is used to get the screen width
     */
    async getScreenWidth() {
        let jsonParse = JSON.stringify(await this.getScreenResolution());
        let jsonData = JSON.parse(jsonParse);
        return await jsonData['width'];
    }

    /**
     * method is used to get the screen height
     */
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
            expect(parseInt(boundsValue.split("][")[0].split(",")[0].replace('[', '').trim())).toBeLessThan(jsonData['width']);
            expect(parseInt(boundsValue.split("][")[0].split(",")[1].trim())).toBeLessThan(jsonData['width']);
            expect(parseInt(boundsValue.split("][")[1].split(",")[0].trim())).toBeLessThan(jsonData['height']);
            expect(parseInt(boundsValue.split("][")[1].split(",")[1].trim())).toBeLessThan(jsonData['height']);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     * Method to pause the driver
     */

    async waitForElement() {
        return await new Promise(resolve => setTimeout(resolve, 2000));
    }

    /**
     * Method to compare the before and after click Form buttonß
     */
    async compareButtonColor(actualImg) {
        return await this.compareImages(homePageLocators.formsIconTab, actualImg);
    }

    /**
     * Method to verify the element images
     */
    async compareImages(element, actualScreenShotName) {
        try {
            this.waitForElement();
            await expect(await browser.compareElement(element, actualScreenShotName,{}).misMatchPercentage).toEqual(0);
        } catch (error) {
            return false;
        }
    }
}
export default new commonAction();