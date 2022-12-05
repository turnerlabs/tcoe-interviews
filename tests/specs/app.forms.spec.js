const HomeScreen = require('../screenobjects/HomeScreen');
const FormsScreen = require('../screenobjects/FormsScreen');
const StringUtils = require('../helpers/stringUtils');
const Picker = require('../screenobjects/components/Picker');


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


});


