import { getElementsByResourceID } from '../helpers/selector';
import AppScreen from './AppScreen';


class FormsScreen extends AppScreen {
    constructor() {
        super('~Forms-screen');
    }

    get input() { return $('~text-input'); }
    get inputTextResult() { return $('~input-text-result'); }
    private get switch() { return $('~switch'); }
    private get switchText() { return $('~switch-text'); }
    private get dropDown() { return $('~Dropdown'); }
    private get dropDownOptions() { return $$('~android:id/text1'); }
    get activeButton() { return $('~button-Active'); }
    get inActiveButton() { return $('~button-Inactive'); }

    async tapOnInputTextResult() {
        await this.inputTextResult.click();
    }

    async tapOnInput() {
        await this.input.click();
    }

    async tapOnSwitch() {
        await this.switch.click();
    }

    async tapOnDropDown() {
        await this.dropDown.click();
    }

    async tapOnActiveButton() {
        await this.activeButton.click();
    }

    async tapOnInActiveButton() {
        await this.inActiveButton.click();
    }

    async checkInActiveButton(): Promise<void> {
        return await this.inActiveButton.waitForDisplayed({
            timeout: 2000
        });
    }

    async typeOnInput(text: String): Promise<void> {
        return await this.input.setValue(text);
    }

    async getInputValue(): Promise<String> {
        return await this.inputTextResult.getText();
    }

    async isKeyboardShown(): Promise<boolean> {
        return await driver.isKeyboardShown();
    }

    async hideKeyboard(): Promise<void> {
        await driver.hideKeyboard();
    }

    async getOptionsArray(): Promise<Number> {
        return await getElementsByResourceID("android:id/text1");
    }

    /**
     * Get the text of the drop down component
     */
    async getDropDownText(): Promise<string> {
        // We need to do some magic here to get the value of the dropdown for Android and for iOS
        // return getTextOfElement(this.dropDown);
        // For Android the selected value can be found with this XPATH
        // `//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText`
        // Which is `//*[@content-desc="Dropdown"]/*/android.widget.EditText` so it's let element dependent
        let selector = '//*[@content-desc="Dropdown"]/*/android.widget.EditText';

        return $(selector).getText();
    }
}

export default new FormsScreen();