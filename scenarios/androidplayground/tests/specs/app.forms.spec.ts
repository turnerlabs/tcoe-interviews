import NativeAlert from "../screenobjects/components/NativeAlert";
import TabBar from "../screenobjects/components/TabBar";
import FormsScreen from "../screenobjects/FormsScreen";
import { inputText } from "../testsData/inputData";

describe('WebdriverIO and Appium, should validate the different elements on the form tab', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
    });

    it('should validate that form tab is selected', async () => {
        expect(await FormsScreen.isFormsSelected()).toBeTruthy();
        expect(await FormsScreen.isFormsClickable()).toBeTruthy();
    });

    it('should validate the input behavior is working as intended', async () => {
        await FormsScreen.tapOnInput();
        await FormsScreen.setInputText(inputText);
        expect(await FormsScreen.getTextResultInput()).toEqual(inputText);
    });

    it('should Validate that picker element is working and it has 3 options to choose from', async () => {
        await FormsScreen.tapOnDropDown();
        expect(await FormsScreen.getDropdownSize()).toBeGreaterThan(3);
        expect(await FormsScreen.areDropdownOptionsVisible()).toEqual(await FormsScreen.getDropdownSize());
        await FormsScreen.tapOnDropDownList();
    });

    it('should validate that inactiveButton is not interactable', async () => {
        await FormsScreen.tapOnInActiveButton();
        expect (await FormsScreen.isFormDisplayed()).toBeTruthy();
    });

    it('should validate that android native alerts are functional', async () => {
        await FormsScreen.tapOnActiveButton();
        await NativeAlert.waitForIsShown();
        expect(await NativeAlert.text()).toContain('active');
        await FormsScreen.tapOnActiveOkButton();
    });

    it('should validate that keyboard is available to be used in the input field', async () => {
        await FormsScreen.tapOnInput();
        expect(await FormsScreen.validateIfKeyboardShown()).toBeTruthy();
    });

});