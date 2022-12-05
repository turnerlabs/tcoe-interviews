const HomeScreen = require('../screenobjects/HomeScreen');
const FormsScreen = require('../screenobjects/FormsScreen');
const StringUtils = require('../helpers/stringUtils');
const Picker = require('../screenobjects/components/Picker');
const Gestures = require('../helpers/Gestures');
const NativeAlert = require('../screenobjects/components/NativeAlerts');
const Utils = require('../helpers/Utils');


describe('Form tab', () => {

    beforeEach(async () => {
        await HomeScreen.waitForLoading();
    });

    afterEach(async () => {
        await HomeScreen.goToHome();
    });

    it('should not be selected by default', async () => {
        await HomeScreen.waitForLoading();
        await expect(HomeScreen.formsOption).toHaveAttribute('selected', 'false');
    });

    it('should be available for selection and be clickable', async () => {
        await expect(HomeScreen.formsOption).toBeDisplayed();
        await expect(HomeScreen.formsOption).toBeEnabled();
        await expect(HomeScreen.formsOption).toHaveAttribute('clickable', 'true');
    });

    it('should change color when selected', async () => {
        await HomeScreen.goToForms();
        await expect(HomeScreen.formsOption).toBeSelected();
    });

    it('should have input behaviour working as intended', async () => {
        await HomeScreen.goToForms();
        await FormsScreen.typeInInput(StringUtils.EXAMPLE_TEXT);
        await expect(FormsScreen.inputTextResult).toHaveText(StringUtils.EXAMPLE_TEXT);
        await FormsScreen.clearInput();
    });

    it('should have a working picker element with 3 options to choose from', async () => {
        await HomeScreen.goToForms();
        await FormsScreen.tapOnDropdown();
        await expect(Picker.pickerOptions).toBeElementsArrayOfSize(3);
        await Picker.tapOnDefaultPickerOption();
    });

    it('should have all options from picker elements visible within the screen', async () => {
        await HomeScreen.goToForms();
        await FormsScreen.tapOnDropdown();
        await expect(await Picker.arePickerOptionsVisible()).toBe(true);
        await Picker.tapOnDefaultPickerOption();
    });

    it('should have a non-interactable inactive button', async () => {
        await HomeScreen.goToForms();
        await Gestures.swipeUp();
        await FormsScreen.tapOnInactiveButton();
        await expect(FormsScreen.inactiveButton).not.toBeSelected();
        await expect(FormsScreen.formsContainer).toBeDisplayed();
    });

    it('should have functional android native alerts', async () => {
        await HomeScreen.goToForms();
        await Gestures.swipeUp();
        await FormsScreen.tapOnActiveButton();
        await expect(await NativeAlert.isAlertDisplayed()).toBe(true);
        await NativeAlert.getOutFromAlert();
    });

    it('should have an available keyboard to provide input in the text field', async () => {
        await HomeScreen.goToForms();
        await FormsScreen.tapOnInputText();
        await expect(await driver.isKeyboardShown()).toBe(true)
        await Utils.simulateTypingOnKeyboard();
        await expect(FormsScreen.input).not.toHaveText(StringUtils.DEFAULT_INPUT_TEXT);
        await Utils.goBack();
    });

});


