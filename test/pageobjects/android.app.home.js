let { expect } = require('chai');
const AndroidBase = require('./android.base')
class AndroidAppHome extends AndroidBase {

    get homeBtn() {
        return $('~Home');
    }
    get webviewBtn() {
        return $('~Webview');
    }
    get loginBtn() {
        return $('~Login');
    }
    get formsBtn() {
        return $('~Forms');
    }
    get swipeBtn() {
        return $('~Swipe');
    }
    get dragBtn() {
        return $('~Drag');
    }

    /**
     * Method to wait until home button is available
     */
    async verifyHomeButtonIsEnabled() {
        await this.explicitWaitDisplay(await this.homeBtn);
    }

    /**
     * Method to verify the default selected button
     */
    async verifyDefaultSelectedBtn() {
        let selectIndex;
        let allBtn = [this.dragBtn, this.webviewBtn, this.loginBtn, this.formsBtn, this.swipeBtn, this.homeBtn]; // Taking all tab elements in array
        for (let i = 0; i < allBtn.length; i++) {
            if (await allBtn[i].isSelected()) {
                selectIndex = i;
                break;
            }
        }
        return await allBtn[selectIndex].getAttribute('content-desc');// Atleast one tab should be selected by default
    }

    /**
     * Method to verify the Form button 
     */
    async verifyFormBtn() {
        expect((await this.formsBtn).isEnabled());
        return expect((await this.formsBtn).isClickable());
    }

    /**
     * Method to verify the selected attribute of Form button
     * @returns the boolean
     */
    async isFormButtonSelected() {
        await this.waitForElement();
        return await this.getElementAttribute(this.formsBtn, "selected");
    }
    /**
     * Method to click the form button
     */

    async verifyClickFormButton() {
        await this.waitAndClick(this.formsBtn);
    }

}
module.exports = new AndroidAppHome();