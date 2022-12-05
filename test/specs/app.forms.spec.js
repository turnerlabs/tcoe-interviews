const TabBar = require("../screenobjects/components/TabBar");
const FormsScreen = require("../screenobjects/FormsScreen");
const data = require("../../test_data_source/data.provider");

describe("Interaction in Forms Screen", () => {
  beforeEach(async () => {
    await TabBar.waitForTabBarShown();
    await TabBar.openForms();
  });

  it("should validate default selection of the tab, and if forms button is clickable", async () => {
    await expect(TabBar.homeOption).toHaveAttributeContaining(
      "selected",
      "true"
    );
    await expect(TabBar.formsOption).toHaveAttributeContaining(
      "selected",
      "false"
    );
    await expect(TabBar.formsOption).toHaveAttributeContaining(
      "clickable",
      "true"
    );
  });

  it("should navigate to forms", async () => {
    await expect(FormsScreen.formsScreen).toBeDisplayed();
    await expect(TabBar.homeScreenIconSelected).not.toBeDisplayed();
    await expect(TabBar.formsOption).toHaveAttributeContaining(
      "selected",
      "true"
    );
  });

  it("should validate keyboard is available to provide input in the text field", async () => {
    await FormsScreen.tapOnInput();
    await expect(await driver.isKeyboardShown()).toBeTruthy();
    await driver.back();
    await expect(await driver.isKeyboardShown()).toBeFalsy();
  });

  it("should type on input and verify it work properly", async () => {
    await FormsScreen.tapOnInput();
    await FormsScreen.typeOnInput(data.text_with_special_characters.text);
    await expect(await FormsScreen.textResultInput.getText()).toEqual(
      data.text_with_special_characters.text
    );

    await FormsScreen.tapOnInput();
    await FormsScreen.typeOnInput(data.text_which_exceeds_capacity.text);

    await expect(
      (
        await FormsScreen.textResultInput.getText()
      ).length
    ).toBeLessThan(data.text_which_exceeds_capacity.text.length);

    await expect(await FormsScreen.textResultInput.getText()).toHaveLength(
      data.input_max_character
    );
  });
});
