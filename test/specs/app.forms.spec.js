const TabBar = require("../screenobjects/components/TabBar");
const FormsScreen = require("../screenobjects/FormsScreen");
const NativeDropDown = require("../screenobjects/components/NativeDropDown");
const NativeAlert = require("../screenobjects/components/NativeAlert");
const data = require("../../providers/strings.and.limits.providers");

describe("Interaction in Forms Screen", () => {
  beforeEach(async () => {
    await TabBar.waitForTabBarShown();
    await TabBar.openForms();
  });

  it("should validate default selection of the tab, and if forms button is clickable", async () => {
    await expect(TabBar.homeOption).toHaveAttributeContaining("selected","true");
    await expect(TabBar.formsOption).toHaveAttributeContaining("selected","false");
    await expect(TabBar.formsOption).toHaveAttributeContaining("clickable","true");
  });

  it("should navigate to forms", async () => {
    await expect(FormsScreen.formsScreen).toBeDisplayed();
    await expect(TabBar.homeScreenIconSelected).not.toBeDisplayed();
    await expect(TabBar.formsOption).toHaveAttributeContaining("selected","true");
  });

  it("should validate keyboard is available to provide input in the text field", async () => {
    await FormsScreen.tapOnInput();
    await expect(await driver.isKeyboardShown()).toBeTruthy();
    await driver.back();
    await expect(await driver.isKeyboardShown()).toBeFalsy();
  });

  it("should type on input and verify it work properly with special characters", async () => {
    await FormsScreen.tapOnInput();
    await FormsScreen.typeOnInput(data.text_with_special_characters);
    await expect(await FormsScreen.textResultInput.getText()).toEqual(
      data.text_with_special_characters
    );
  });

  it("should type on input and verify character boundaries", async () => {
    await FormsScreen.tapOnInput();
    await FormsScreen.typeOnInput(data.text_which_exceeds_capacity);
    await expect((await FormsScreen.textResultInput.getText()).length).toBeLessThan(data.text_which_exceeds_capacity.length);
    await expect(await FormsScreen.textResultInput.getText()).toHaveLength(data.input_max_character);
  });

  it("should validate picker element is working", async () => {
    await FormsScreen.tapOnDropDownButton();
    await expect(NativeDropDown.dropDownComponent).toBeDisplayed();
    expect(await NativeDropDown.getDropdownListSize()).toBe(data.dropdown_expected_size);

    const dropDownOptionsTextList = await NativeDropDown.getDropDownOptionsList();

    const optionSelected = await NativeDropDown.getOptionToSelectRandomly();
    await NativeDropDown.selectListOption(optionSelected);

    const optionSelectedText = await FormsScreen.dropdownText.getText();
    await expect(NativeDropDown.checkOptionSelectedIndex(dropDownOptionsTextList,optionSelectedText)).toEqual(optionSelected);
  });

  it("should validate that inactive button is not interactable", async () => {
    await FormsScreen.scrollToScreenEnd();
    await FormsScreen.tapOnInactiveButton();
    await expect(NativeAlert.alertTitle).not.toBeDisplayed();
    await expect(FormsScreen.formsScreen).toBeDisplayed();
  });

  it("should validate that android native alerts are functional", async () => {
    await FormsScreen.scrollToScreenEnd();
    await expect(FormsScreen.activeButton).toBeDisplayed();
    await FormsScreen.tapOnActiveButton();

    await NativeAlert.waitForAlertShown();
    await expect(FormsScreen.activeButton).not.toBeDisplayed();
    await expect(NativeAlert.alertTitle).toBeDisplayed();

    await NativeAlert.tapOnOkAlertButton();
    await expect(NativeAlert.alertTitle).not.toBeDisplayed();
  });
});
