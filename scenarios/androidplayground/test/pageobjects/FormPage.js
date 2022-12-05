const ContentAlertPage = require('./ContentAlertPage');
const DropdownPage = require('./DropdownPage');
const Page = require('./Page');

class FormPage extends Page {

    get formsView () {
        return $('~Forms-screen')
    }

    get inputField () {
        return $('~text-input');
    }

    get formsOption () {
        return $('~Forms');
    }

    get inputResult () {
        return $('~input-text-result');
    }

    get dropdownOption () {
        return $('~Dropdown');
    }

    get btnActive () {
        return $('~button-Active')
    }

    get btnInactive() {
        return $('~button-Inactive')
    }

    constructor(){
        super();
        this.waitForIsShown(this.formsView);
    }
        
    async formsComponent() {
        return await this.formsOption.isDisplayed();
    }

    async formsInput(input) {
        await this.sendKeys(this.inputField, input);
        let value1 = await this.inputField.getText();
        let value2 = await this.inputResult.getText();
        return value1 === value2;
    }

    async inactiveButtonvalidation() {
        await this.doTap(this.btnInactive);
        if(this.waitForIsShown(new ContentAlertPage()) === true){
            return false;
        } else {
            return true;
        }
    }

    async goToDropdown() {
        await this.changeViewTo(this.dropdownOption);
        return new DropdownPage();
    }

    async goToContentAlert() {
        await this.changeViewTo(this.btnActive);
        return new ContentAlertPage();
    }

    async keyBoardValidator() {
        await this.doTap(this.inputField);
        // if(await formsView.isKeyboardShown()){
        //     return true;
        // } else {
        //     return false;
        // }
        return await driver.isKeyboardShown();
    }
 }

module.exports = FormPage;