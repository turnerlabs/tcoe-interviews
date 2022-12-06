const TabBar = require('../screenObjects/components/TabBar');
const NativeAlert = require('../screenObjects/components/NativeAlert');
const Picker = require('../screenObjects/components/Picker');
const Input = require('../screenObjects/components/Input');
const formsData = require('../../data/formsData');

describe('WebdriverIO and Appium, validating interactions and functionality of elements on Forms Screen,', () => {
  let formsScreenShown;
  beforeEach(async () => {
    await TabBar.waitForTabBarShown();
    formsScreenShown = await TabBar.openForms();
  });

  it('Validate "Forms" is not the default selection on tab', async () => {
    await expect(formsScreenShown.formsTitle).toHaveAttribute('selected', 'false')

  })

  it('Should check if the form tab is available and is clickable', async () => {
    await expect(formsScreenShown.formsTitle).toBeDisplayed();
    await expect(formsScreenShown.formsOptionOnTabBarSelected).toBeDisplayed();
    await expect(formsScreenShown.formsOptionOnTabBarSelected).toHaveAttribute('clickable', 'true')
  });

  it('Input should be working as intended', async () => {
    await formsScreenShown.tapOnInput();
    await formsScreenShown.sendInputKeys(formsData.textInput);
    await expect(await formsScreenShown.inputTextResult.getText()).toEqual(
      await Input.checkCharacters()
    );
  });

  it('Should validate picker element is working and it has 3 options to choose from', async () => {
    await formsScreenShown.tapOnDropDown();
    expect(await Picker.dropDownToBeDisplayed()).toBeTruthy;
    await expect(await Picker.getDropDownOptionsLenght()).toEqual(3);
    await Picker.tapOnDefaultOption();
  });


  it('Verify that all options from picker are visible within the screen', async () => {
    await formsScreenShown.tapOnDropDown();
    expect(await Picker.dropDownToBeDisplayed()).toBeTruthy;
    await Picker.tapRandomOption();
  })

  it('The inactive button is not interactable', async () => {
    await formsScreenShown.tapOnInactiveButton();
    await expect(formsScreenShown.inActiveButton).toBeDisplayed();

  })


  it('should validate that android native alerts are functional', async () => {
    await expect(formsScreenShown.activeButton).toBeDisplayed();
    await formsScreenShown.tapOnActiveButton();
    await NativeAlert.waitForIsShown();
    await expect(await NativeAlert.text()).toContain('active');
    await formsScreenShown.tapOnOkBtn();
  });

  it('keyboard should be available to provide input in the text field', async () => {
    await formsScreenShown.tapOnInput();
    await expect(await formsScreenShown.isKeyboardProvider()).toBe(true);
  });


});
