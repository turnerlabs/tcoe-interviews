import AppScreen from './AppScreen';
import Gestures from '../helpers/Gestures';

const STRINGS = {
    TEST_INPUT: 'TCoE RULES!',
    MODIFIED_TEST_INPUT: 'TCoE RULES',
};

class FormsScreen extends AppScreen {
      
    constructor () {
        super('~Forms-screen');
    }

    get input () {return $('~text-input');}
    get inputTextResult () {return $('~input-text-result');}
    private get switch () {return $('~switch');}
    private get switchText () {return $('~switch-text');}
    private get dropDown () {return $('~Dropdown');}
    get activeButton () {return $('~button-Active');}
    get inActiveButton () {return $('~button-Inactive');}
    get dropDownList() {return $('android.widget.ListView');}
    get listElements() {return $$('android.widget.CheckedTextView')}

    async getInput() {
        return this.input;
    }

    async getTextResult() {
        return this.inputTextResult;
    }

    async getSwitch() {
        return this.switch;
    }

    async getSwitchText() {
        return this.switchText;
    }

    async getDropDown() {
        return this.dropDown;
    }

    async getActiveButton() {
        return this.activeButton;
    }

    async getInactiveButton() {
        return this.inActiveButton;
    }

    async getListView() {
        return this.dropDownList;
    }

    async getListElements() {
        return this.listElements;
    }

    async getInputString() : Promise<string> {
        return STRINGS.TEST_INPUT;
    }

    async getModifiedInputString() : Promise<string> {
        return STRINGS.MODIFIED_TEST_INPUT;
    }

    async tapOn(element : Promise<WebdriverIO.Element>) {
        if(!await (await element).isDisplayed()){
            await Gestures.checkIfDisplayedWithSwipeUp(await element, 2);
            await (await element).click();
        }
        else {
            await (await element).click();
        }
    }

    async setInputText(text : string) {
        if (driver.isKeyboardShown()) {
            await this.input.setValue(text);
            driver.hideKeyboard();
        }
    }

    async getInputText(): Promise<string> {
        return (await $('~text-input')).getText();
    }

    async getInputValidationText(): Promise<string> {
        return (await $('~input-text-result')).getText();
    }

    async countDropDownElements (){
        let listLength = (await this.listElements.length);
        return listLength;
    }

    async getRandomListElement() {
        let size = this.listElements.length;
        let index = await Math.floor(Math.random() * await size);
        return this.listElements[index];
    }

    async getLastOfList() {
        let size = await this.listElements.length;
        let finalIndex = size -1;
        return this.listElements[finalIndex];   
    }

    /**
     * Return if the switch is active or not active for iOS / Android
     * For Android the switch is `ON|OFF`, for iOS '1|0'
     */
    async isSwitchActive ():Promise<boolean> {
        const active = driver.isAndroid ? 'ON' : '1';

        return (await this.switch.getText()).includes(active);
    }

    /**
     * Get the text of the drop down component
     */
    async getDropDownText ():Promise<string> {
        // We need to do some magic here to get the value of the dropdown for Android and for iOS
        // return getTextOfElement(this.dropDown);
        // For Android the selected value can be found with this XPATH
        // `//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText`
        // Which is `//*[@content-desc="Dropdown"]/*/android.widget.EditText` so it's let element dependent
        let selector;

        if (driver.isAndroid) {
            selector ='//*[@content-desc="Dropdown"]/*/android.widget.EditText';
        } else {
            // **/*[`name == "Dropdown"`]/**/*[`name == "text_input"`]
            // For iOS we can use XPATH to the the text, this will be `//XCUIElementTypeTextField[@name="text_input"]`
            // The downside is that it will take at least 500ms to find the element. We can also use a less brittle
            // selector which is also faster. This is the `ios class chain` selector. To make it more robust
            // we need to use the following selector.
            selector = '-ios class chain:**/*[`name == "Dropdown"`]/**/*[`name == "text_input"`]';
        }

        return $(selector).getText();
    }
}

export default new FormsScreen();
