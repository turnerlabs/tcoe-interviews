const HomeScreen = require("../screenObjects/HomeScreen.js");
const NativeAlert = require("../screenObjects/components/NativeAlert.js");
const TabBar = require("../screenObjects/components/TabBar.js");
const Utils = require("../helpers/Utils.js");
const TestData = require("../helpers/TestData");
const Picker = require("../screenObjects/components/Picker.js");

describe(" Test cases to validate different elements on the tab form ", () => {
  let homeScreen;
  let formsScreen;

  beforeEach(async () => {
    await TabBar.waitForTabBarDisplayed();
    homeScreen = await TabBar.goHomeScreen();
    formsScreen = await TabBar.goFormsScreen();
  });

  it("Validate the default selection of the tab", async () => {

    await expect(TabBar.isFormsTabSelected()).toBeSelected();
  });
  it("Form tab should be selectable and clickable", async () => {
    await expect(await TabBar.formsOptionIsSelectable());
    await expect(await TabBar.isFormsTabClickable());
  });


  it("Validate the input behavior is working as intended", async () => {
    await formsScreen.typeInInputField(TestData.textInput);
    await expect(await formsScreen.getInputReviewText()).toEqual(
      TestData.textInput
    );
  });

  it("Validate that picker element is working and it has 3 options to choose from", async () => {
    await formsScreen.goToPicker();
    await expect(await Picker.getOptionsAmount()).toEqual(
      TestData.optionsAmount
    );
    await expect(await Picker.tapOnRandomOption());
  });

  it("Validate that all options from picker elements are visible within the screen", async () => {
    await formsScreen.goToPicker();
    await expect(await Picker.pickerIsDisplayed());
    await expect(await Picker.pickerOptionsAreDisplayed());
    await expect(await Picker.tapOnRandomOption());

  });

  it("Validate that inactive button is not interactable", async () => {

    await formsScreen.tapOnInactiveButton();
    await expect(NativeAlert.alertIsNotDisplayed()).not.toBeDisplayed();


  });

  it("Android native alerts should be functional", async () => {

    await formsScreen.tapOnActiveButton();
    await expect(await NativeAlert.alertIsDisplayed());
    await expect(await NativeAlert.tapRandomOption());

  });
  it("that keyboard should be available to provide input in the text field", async () => {
    await formsScreen.isKeyboardAvailable();
    await expect(driver.isKeyboardShown());
  })
});
