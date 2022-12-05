import AppScreen from './AppScreen';

class FormsScreen extends AppScreen {
    constructor () {
        super('~Forms-screen');
    }

    private get forms () {return $('~Forms');}
    private get input () {return $('~text-input');}
    private get inputTextResult () {return $('~input-text-result');}
    private get dropDown () {return $('~Dropdown');}
    private get dropDownList() {return $('android.widget.ListView');}
    private get dropdownSize () { return $$('android.widget.CheckedTextView');}
    private get activeButton () {return $('~button-Active');}
    private get activeOkButton () {return $('#button1')}
    private get inActiveButton () {return $('~button-Inactive');}

    async isFormsSelected(){
        return this.forms.getAttribute('selected');
    }

    async isFormsClickable(){
        return this.forms.getAttribute('clickable');
    }

    async tapOnInput(){
        await this.input.click();
    }

    async validateIfKeyboardShown(){
        return await driver.isKeyboardShown();
    }

    async setInputText(text: string){
        await this.input.setValue(text);
        //Closes the keyboard if shown
        if (await this.validateIfKeyboardShown()){
            driver.hideKeyboard();
        }
    }

    async getTextResultInput(){
        return await this.inputTextResult.getText();
    }

    async tapOnDropDown(){
        await this.dropDown.click();
    }

    async getDropdownSize(){
        (await this.dropDownList).waitForDisplayed;
        return (await this.dropdownSize.length);
    }

    async areDropdownOptionsVisible(){
        await this.dropdownSize;
        let displayedOptions = 0;
        await this.dropdownSize.forEach(option => {
            if (option.isDisplayed()){
                displayedOptions++;
            }
        });
        return displayedOptions;
    }

    async tapOnDropDownList(){
        (await this.dropDownList).click()
    }

    async tapOnInActiveButton(){
        await this.inActiveButton.click();
    }

    async isFormDisplayed(){
        return await this.forms.isDisplayed();
    }

    async tapOnActiveButton(){
        await this.activeButton.click();
    }

    async tapOnActiveOkButton(){
        (await this.activeOkButton).click()
    }
}

export default new FormsScreen();
