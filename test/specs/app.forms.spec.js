const Utils = require('../helpers/Utils.js');
const TabBar = require('../screenobjects/components/TabBar.js');
const Picker = require('../screenobjects/components/Picker.js');
const NativeAlert = require('../screenobjects/components/NativeAlert.js');
const inputData = require('../../data/inputTestData.js');

describe('Android forms performance testing by using WebdriverIO and  Appium',  () => {

    let homeScreen;
    let formsScreen;

    beforeEach(async () => {
        await TabBar.waitForTabBarIsShown();
        homeScreen = await TabBar.goToHomeScreen();
        formsScreen = await TabBar.goToFormsScreen();
    });

    it('Should be able to select forms tab', async() => {
        await expect(await TabBar.formsOptionIsSelected(), 'Forms tab cannot be selected').to.be.true;
    });

    it('Forms tab should be available for selection and be clickable', async() => {
        await expect(await TabBar.formsOptionCanBeSelected(), 'Forms tab is not available for selection').to.be.true;
        await expect(await TabBar.formsOptionIsClickable(), 'Forms tab is not clickable').to.be.true;
    });

    inputData.forEach(data => {
        it(`Input should be working as intended with ${data.type}`, async() => {
            await formsScreen.clearInput();
            await formsScreen.typeOnInput(data.test);
            await expect(await formsScreen.getTextReviewInput()).equal(data.expectedResult, `Input is not working as intended with ${data.type}`);
        });
    });

    it('Picker element should be working and it has 3 options to choose from', async() => {
        let options = ['webdriver.io is awesome',
                        'Appium is awesome',
                        'This app is awesome'
                    ];

        let randomOption = Utils.getRandomValue(3);  

        await formsScreen.tapOnDropdown();
        await expect(await Picker.pickerIsDisplayed(), 'Picker is not displayed').to.be.true;
        await expect(await Picker.getOptionsAmount(), 'Options in picker are different than 3').equal(3);
        await Picker.tapOnRandomOption(randomOption);
        await expect(await formsScreen.getTextDropdown()).equal(options[randomOption], 'Picker selection is not working as intended');
    });

    it('All options from picker element should be visible within the screen', async() => {
        await formsScreen.tapOnDropdown();
        await expect(await Picker.allOptionsAreDisplayed(), 'All options from picker element are not visible within the screen').to.be.true;
        await Picker.tapOnDefaultOption();
    });

    it('Inactive button should not be interactable', async() => {
        await formsScreen.tapOnInactiveButton();
        await expect(await formsScreen.formsViewIsDisplayed(), 'Inactive button is interactable').to.be.true;
    });

    it('Android native alerts should be functional', async() => {
        await formsScreen.tapOnActiveButton();
        await expect(await NativeAlert.alertIsDisplayed(), 'Android native alerts are not functional').to.be.true;
        await NativeAlert.tapOnOKButton();
    });

    it('Keyboard should be available to provide input in the text field', async() => {
        await formsScreen.tapOnInput();
        await expect(await formsScreen.keyboardIsDisplayed(), 'Keyboard is not available').to.be.true;
        await formsScreen.goOutFromKeyboard();
    });
});