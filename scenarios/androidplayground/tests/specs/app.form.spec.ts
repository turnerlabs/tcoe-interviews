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
         * Testing the Input field in order to verify the mirror field
         */
        await FormsScreen.input.waitForDisplayed();
        await FormsScreen.input.setValue(myText);
        await FormsScreen.inputTextResult.waitForDisplayed();
        await expect((await FormsScreen.inputTextResult.getText()) === await FormsScreen.input.getText());

        /**
         * Testing the switch to change the value
         */
        await expect((await FormsScreen.isSwitchActive() === true));
        await FormsScreen.tapOnSwitch();
        await expect((await FormsScreen.isSwitchActive() === false));

        /**
         * Testing the switch to change the value
         */
        await FormsScreen.tapOnDropDown();
        await AndroidSettings.waitAndTap(dropdownAppiumOption);
        await expect(await FormsScreen.getDropDownText() === dropdownAppiumOption);

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

});
