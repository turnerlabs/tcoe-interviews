import Page from './page.js';

class ClickPage extends Page  {

    get primaryButton () {
        return $('.btn.btn-primary');
    }
   
    get successButton () {
        return $('.btn.btn-success');
    }

    async clickWithMouse () {
        await this.primaryButton.moveTo()
        await browser.positionDoubleClick
        //await browser.buttonUp
    }


    async getButtonColor () {
        await this.successButton.waitForExist()
        let buttonColor = await this.successButton.getCSSProperty('background-color');
        return buttonColor.value;
    }

    open(){
        super.open('/click');
    }
 
}

export default new ClickPage();