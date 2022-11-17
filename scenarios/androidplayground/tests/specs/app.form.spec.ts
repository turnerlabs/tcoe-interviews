import AndroidSettings from "../screenobjects/AndroidSettings";
import NativeAlert from "../screenobjects/components/NativeAlert";
import TabBar from '../screenobjects/components/TabBar';
import FormsScreen from "../screenobjects/FormsScreen";

/**
 * This test file verifies the form view behavior
 */
describe('WebdriverIO and Appium, when using swiping', () => {

    /**
     * Constants for testing purposes
     */
    const dropdownAppiumOption = 'Appium is awesome';
    const myText = 'my text here!';

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormsScreen.waitForIsShown();
    });

    it('should be able to fill the form - happy path', async () => {
        /**
         * Fill the text field
         */
        await FormsScreen.input.waitForDisplayed();
        await FormsScreen.input.setValue(myText);
        await FormsScreen.inputTextResult.waitForDisplayed();

        /**
         * Switch to change the value
         */
        await expect((await FormsScreen.isSwitchActive() === true));
        await FormsScreen.tapOnSwitch();
        await expect((await FormsScreen.isSwitchActive() === false));
        await FormsScreen.tapOnSwitch();

        /**
         * Select a value from dropdown
         */
        await FormsScreen.tapOnDropDown();
        await AndroidSettings.waitAndTap(dropdownAppiumOption);

        /**
         * Ending the form
         */
        await FormsScreen.activeButton.waitForDisplayed();
        await FormsScreen.activeButton.click();

        /**
         * Handle native alert
         */
        await NativeAlert.waitForIsShown();
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('should be able verify the switch can change properly', async () => {
        await expect((await FormsScreen.isSwitchActive() === true));
        await FormsScreen.tapOnSwitch();
        await expect((await FormsScreen.isSwitchActive() === false));
        await expect((await FormsScreen.switchText.getText()).includes("OFF"));
    });

    it('should be able verify the value selected in dropdown options - Text', async () => {
        await FormsScreen.tapOnDropDown();
        await AndroidSettings.waitAndTap(dropdownAppiumOption);
        await expect(await FormsScreen.getDropDownText() === dropdownAppiumOption);
    });

});
