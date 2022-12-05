const AppScreen= require('./AppScreen');
const Utils = require('../helpers/Utils');
const Gestures = require('../helpers/Gestures');
const Actions = require('../helpers/Actions');



class FormsScreen extends AppScreen {

    constructor() {
        super('~Forms-screen');
    }

    get input () {return $('~text-input');}
    get inputTextResult () {return $('~input-text-result');}
    get switch () {return $('~switch');}
    get switchText () {return $('~switch-text');}
    get dropDown () {return $('~Dropdown');}
    get dropDownContainer() {return $('android.widget.ListView');}
    get dropDownList() {return $$('android.widget.CheckedTextView');}
    get activeButton () {return $('~button-Active');}
    get inActiveButton () {return $('~button-Inactive');}
  
    async tapOnInput(){
        await Actions.tapOnElement(await this.input);
    }

    async setInputValue(message){
        await this.input.setValue(message)
    }

    async getInputText () {
        return await this.input.getText();
    }

    async tapOnInputTextResult(){
        await Actions.tapOnElement(await this.inputTextResult);
    }

    async getInputResultText () {
        await this.tapOnInputTextResult();
        return await this.inputTextResult.getText();
    }

    async tapOnDropDown(){
        await this.dropDown.click();
    }

    async getDropdownSize () {
        const dropDownLength = ((await this.dropDownList).length);
        return dropDownLength-1;
    }

    async tapOnDropdownOptionRandomly() {
        const option = Utils.getRandom(1,await this.getDropdownSize())
        await (this.dropDownList[option]).click();
    }

    async clickOnInactiveButton(){
        await Gestures.checkIfDisplayedWithSwipeUp(await this.inActiveButton, 4);
        await this.inActiveButton.click();
    }

    async isInactiveButtonSelected(){
        return (await this.inActiveButton).getAttribute("selected");
    }

    async clickOnActiveButton(){
        await Gestures.checkIfDisplayedWithSwipeUp(await this.activeButton, 4);
        await this.activeButton.click();
    }

    async isKeyboardDisplayed(){
        return await driver.isKeyboardShown();
    }

}

module.exports = new FormsScreen();
