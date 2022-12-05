import TabBar from '../screenobjects/components/TabBar';
import FormsScreen from '../screenobjects/FormsScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when interacting with the forms tab,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
    });

    it('forms should start with default values', async () => {
        // default validation
        await expect(FormsScreen.input).toHaveText('Type something');
        await expect(FormsScreen.inputTextResult).toHaveText('');
        await expect(FormsScreen.isSwitchActive).toBeFalsy;
        await expect(await FormsScreen.dropDownText).toHaveText('Select an item...');
    });

    it('forms tab should be available for selection and clickable', async () => {
        await expect(TabBar.formsButton).toBeDisplayed;
        await expect(TabBar.formsButton).toBeClickable;
    })

    it('forms tab color should change on tap', async () => {
        await expect(TabBar.formsButton).toBeSelected;
    })

    it('Input field should work as intended', async () => {
        const text = "lorem ipsum";
        await FormsScreen.tapOnInput();
        await FormsScreen.submitInputText(text);
        await expect(FormsScreen.inputTextResult).toHaveText(text);
    })

});