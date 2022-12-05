import TabBar from '../screenobjects/components/TabBar';
import FormsScreen from '../screenobjects/FormsScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
    });

    it('forms should start with default values', async () => {
        // Always make sure you are on the right tab
        await expect(FormsScreen.input).toHaveText('Type something');
        await expect(FormsScreen.inputTextResult).toHaveText('');
        await expect(FormsScreen.isSwitchActive).toBeFalsy;
        // // Submit the data
        // await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // // Wait for the alert and validate it
        // await NativeAlert.waitForIsShown();
        // await expect(await NativeAlert.text()).toEqual('Success\nYou are logged in!');

        // // Close the alert
        // await NativeAlert.topOnButtonWithText('OK');
        // await NativeAlert.waitForIsShown(false);
    });

});