let { expect: chaiExpect } = require('chai');
const AndroidBase = require('./mobileAppBase')
class Home extends AndroidBase {

    get homeButton() {
        return $('~Home');
    }
    
    get loginButton() {
        return $('~Login');
    }
    get viewButton() {
        return $('~Webview');
    }
    get formButton() {
        return $('~Forms');
    }
    
    get dragButton() {
        return $('~Drag');
    }
    get swipeButton() {
        return $('~Swipe');
    }

    async isHomeButtonEnabled() {
        await this.waitTillDisplay(await this.homeButton);
    }
    
    
    async verifyFormButton() {
            return await this.waitTillDisplay(await this.formButton);        
    }

    async verifyClickFormButton() {
        await this.waitAndClick(this.formButton);
        await this.driverSleep();
    }

    async verifySelectTab() {
        const buttons = [
            this.dragButton,
            this.viewButton,
            this.loginButton,
            this.formButton,
            this.swipeButton,
            this.homeButton
        ];
    
        const selectedButton = await findSelectedButton(buttons);
    
        return selectedButton.getAttribute('content-desc') === 'Home';
    }
    
    async findSelectedButton(buttons) {
        for (let i = 0; i < buttons.length; i++) {
            if (await buttons[i].isSelected()) {
                return buttons[i];
            }
        }
    }

    async getFormButtonSS(nameOfScreenshot) {
        return await this.takeSS(this.formButton, nameOfScreenshot);
    }

    async formButtonColorComparison(actualImage) {
        return await this.compareSS(this.formButton, actualImage);
    }

}
module.exports = new Home();