import Page from './page';
export class HomePage extends Page {

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
        try {
            return await this.explicitWaitDisplay(await this.formsBtn);
        }
        catch (error) {
            return false;
        }
    }
    /**
     * Method to click the form button
     */

    async verifyClickFormButton() {
        await this.waitAndClick(this.formsBtn);
        await this.waitForElement();
    }

    /**
     * Method to get the screenshot of the base image
     */
    async getScreenshotOfFormButton(nameOfScreenshot) {
        return await this.takeElementScreenshot(this.formsBtn, nameOfScreenshot);
    }

    /**
     * Method to compare the before and after click Form buttonß
     */
    async compareFormButtonColorAfterClick(actualImg) {
        return await this.compareElementImages(this.formsBtn, actualImg);
    }

}
export default new HomePage();
