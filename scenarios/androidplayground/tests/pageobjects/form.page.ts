import Page from './page';

class FormPage extends Page {
    /**
     * define elements
     */
    get username () { return $('#username'); }
    get password () { return $('#password'); }
    get submitButton () { return $('#login button[type=submit]'); }
    get flash () { return $('#flash'); }
    get textInput() {return $('~text-input');}
    get formsBtn() {return $('~Forms');}
    get inputResult() {return $('~input-text-result');}
    get clickDropDown() {return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText');
}
get dropdownValues() {
        return $$('//*[@class="android.widget.CheckedTextView"]');}

        get inActiveBtn() {
            return $('~button-Inactive');
        }
        get activeBtn() {
            return $('~button-Active');
        }
    
        get alertTitle() {
            return $('#alertTitle')
        }
    
        get alertOkBtn() {
            return $('#button1')
        }
        get alertCancelBtn() {
            return $('#button2')
        }
        get alertAskMeLaterBtn() {
            return $('#button3')
        }
    get switchToggle() {
        return $('~switch');
    }
    get switchToggleText() {
        return $('~switch-text');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login ({ username, password }: {username:string; password: string;}) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await browser.hideKeyboard();
        await this.submitButton.click();
    }

    /**
     * define or overwrite page methods
     */
    async open():Promise<string> {
        return super.open('login');
    }

    async enterTextInput(testKeyword) {
        await this.waitAndClick(this.textInput);
        await this.waitAndSetValue(this.textInput, testKeyword);
    }

    /**
     * Method to get the value of input result
     */
    async getInputResultValue() {
        return await this.waitAndGetText(await this.inputResult);
    }

    /**
     * Method to clear the input field
     */
    async clearTextInput() {
        await this.clearTextField(this.textInput);
    }

    /**
     * Method to click Picker element
     */
    async clickPickerDropDown() {
        await this.waitAndClick(await this.clickDropDown);
        await this.waitForElement();
    }
    /**
     * Method to return the valid picker options
     */
    async getValidPickerOptions() {
        let valueCount = 0, dropDownSize;
        await this.clickPickerDropDown();
        dropDownSize = await this.dropdownValues.length;
        for (let i = 0; i < dropDownSize; i++) {

            if (await this.getElementAttribute(await this.dropdownValues[i], "checked") == 'false') //get the count of interactable drop down options
                valueCount++;
        }
        await this.waitAndClick(await this.dropdownValues[0]);
        return valueCount;
    }
    /**
     * Method to verify the picker elements are within the screen
     */
    async verifyPickerElementsWithinScreen() {
        let isWithinScreen, dropDownSize;
        await this.clickPickerDropDown();
        dropDownSize = await this.dropdownValues.length;
        for (let i = 0; i < dropDownSize; i++) {
            if (await this.verifyElementWithinScreen(await this.dropdownValues[i]))
                isWithinScreen = true;
            else
                isWithinScreen = false;
        }
        await this.waitAndClick(await this.dropdownValues[0]);
        return isWithinScreen
    }


    /**
     * Method to verify all the picker options
     */
    async verifyPickerFunctionality() {
        let ddValue, dropDownSize;
        await this.clickPickerDropDown();
        dropDownSize = await this.dropdownValues.length;
        for (let i = 0; i < dropDownSize; i++) {
            ddValue = await this.waitAndGetText(await this.dropdownValues[i]); // Able to interact with all the options and within the screen
            await this.waitAndClick(await this.dropdownValues[i]);
            await this.waitForElement();
            await this.getElementTextAndCompare(await this.clickDropDown, ddValue);
            if (i < (dropDownSize - 1))
                await this.clickPickerDropDown();
        }
    }
 
    /**
     * Method to check the popUp display
     */
    async verifyIsPopup() {
        return await this.alertTitle.isDisplayed();
    }

     /**
     * Method to click the inactive button
     */

    async clickInactiveButton() {
        await this.waitAndClick(await this.inActiveBtn);
    }

    /**
     * Method to click Active button
     */

    async clickActiveButton() {
        await this.waitAndClick(this.activeBtn);
        await this.waitForElement();
    }
    async clickOkButton() {
        await this.waitAndClick(this.alertOkBtn);
        await this.waitForElement();
    }
    async clickCancelButton() {
        await this.waitAndClick(this.alertCancelBtn);
        await this.waitForElement();
    }
    async clickAskMeLaterButton() {
        await this.waitAndClick(this.alertAskMeLaterBtn);
        await this.waitForElement();
    }

    /**
     * Method to hide the native keyboard
     */
    async hideKeyboard() {
        await this.checkAndHideKeyboard();
        return this.isKeyboardDisplayed();
    }

    /**
     * Method to verify the keyboard pop up
     */
    async openKeyboard() {
        await this.waitAndClick(this.textInput);
        return this.isKeyboardDisplayed();
    }
    /**
    * Method to click the switch toggle and get the status 
    */
    async clickSwitchToggle() {
        await this.waitAndClick(await this.switchToggle);
    }

    /**
     * Method to click the switch toggle and get the status 
     */
    async getSwitchToggleStatus() {
        return this.waitAndGetText(await this.switchToggle);
    }
    /**
     * Method to get the switch toggle text
     */
    async getSwitchToggleText() {
        await this.waitAndGetText(await this.switchToggleText);
    }
}

export default new FormPage();
