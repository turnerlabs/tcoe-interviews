const AndroidBase = require('./mobileAppBase');
let { expect: chaiExpect } = require('chai');

class TestMobileAppForm extends AndroidBase {

    get formsButton() {
        return $('~Forms');
    }

    get textInput() {
        return $('~text-input');
    }
   

    get dropdownValues() {
        return $$('//*[@class="android.widget.CheckedTextView"]');
    }
    
    get clickDropDown() {
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');
    }

    get inputResult() {
        return $('~input-text-result');
    }

    get inActiveButton() {
        return $('~button-Inactive');
    }

    get alertTitle() {
        return $('#alertTitle')
    }

    get alertOk() {
        return $('#button1')
    }
    get alertCancelButton() {
        return $('#button2')
    }

    get activeButton() {
        return $('~button-Active');
    }
    
    get askMeLaterButton() {
        return $('#button3')
    }
    get switchToggle() {
        return $('~switch');
    }
    get switchToggleText() {
        return $('~switch-text');
    }

    async enterTextInput(value) {
        await this.waitAndClick(this.textInput);
        await this.waitAndSetValue(this.textInput, value);
    }

    async getInputResultValue() {
        return await this.waitAndGetText(await this.inputResult);
    }

    async clearTextInput() {
        await this.clearField(this.textInput);
    }
    
    
    async clickInactiveButton() {
        await this.waitAndClick(await this.inActiveButton);
    }
    
    
    async hideKeyboard() {
        await this.checkAndHideKeyboard();
        return this.isKeyboardDisplayed();
    }
    
    async verifyKeyboardDisplayed() {
        await this.waitAndClick(this.textInput);
        return this.isKeyboardDisplayed();
    }
    
    async verifyPopUp() {
        return await this.alertTitle.isDisplayed();
    }
    
    async clickPickerDropDown() {
        await this.waitAndClick(await this.clickDropDown);
        await this.driverSleep();
    }
    async clickActiveButton() {
        await this.waitAndClick(this.activeButton);
        await this.driverSleep();
    }
    async clickOkButton() {
        await this.waitAndClick(this.alertOk);
        await this.driverSleep();
    }
    async clickCancelButton() {
        await this.waitAndClick(this.alertCancelButton);
        await this.driverSleep();
    }
    async clickAskMeLaterButton() {
        await this.waitAndClick(this.askMeLaterButton);
        await this.driverSleep();
    }

    async verifyElementWithInScreen() {
        let isDisplay, dropDownSize;
        await this.clickPickerDropDown();
        dropDownSize = await this.dropdownValues.length;
        for (let i = 0; i < dropDownSize; i++) {
            if (await this.verifyElementVisible(await this.dropdownValues[i]))
                isDisplay = true;
            else
                isDisplay = false;
        }
        await this.waitAndClick(await this.dropdownValues[0]);
        return isDisplay
    }
    
    async getDropdownCount() {
        let valuesCount = 0, dropDownSize;
        await this.clickPickerDropDown();
        dropDownSize = await this.dropdownValues.length;
        for (let i = 0; i < dropDownSize; i++) {
            if (await this.getElementAttribute(await this.dropdownValues[i], "checked") == 'false') 
                valuesCount++;
        }
        await this.waitAndClick(await this.dropdownValues[0]);
        return valuesCount;
    }   
    

    async selectDropDownValue() {
        let dropDownValue, dropDownSize;
        await this.clickPickerDropDown();
        dropDownSize = await this.dropdownValues.length;
        for (let i = 0; i < dropDownSize; i++) {
            dropDownValue = await this.waitAndGetText(await this.dropdownValues[i]); 
            await this.waitAndClick(await this.dropdownValues[i]);
            await this.driverSleep();
            await this.compareText(await this.clickDropDown, dropDownValue);
            if (i < (dropDownSize - 1))
                await this.clickPickerDropDown();
        }
    }  
    
}
module.exports = new TestMobileAppForm();