import page from "./page";
import formsPageLocators from "../locators/formsPageLocators";
import constants from "../constants/constants";
import testData from "../testdata/sample.json";
import commonActions from "../util/commonActions";
class formsPage extends page {

    /**
     * This method is used to verify the Forms page header
     */
    async verifyFormsPageHeader() {
        const formsPageHeader = await formsPageLocators.homePageHeader;
        await expect(formsPageHeader).toExist();
        await expect(formsPageHeader).toBeDisplayed();
        await expect(formsPageHeader).toHaveText(constants.formsPageHeader);
    }

    /**
     * This method is used to verify the input text field
     */
    async validateInputFieldToEnterText() {
        const inputTextField = await formsPageLocators.inputField;
        await inputTextField.isDisplayed();
        await expect(inputTextField).toHaveAttribute('clickable', 'true');
        await expect(inputTextField).toBeEnabled();
        await expect(inputTextField).toHaveAttribute('class','android.widget.EditText');
    }

    /**
     * This method is used to enter the values in text field
     */
    async enterTextAnInputField(textFieldValue) {
        const inputTextField = await formsPageLocators.inputField;
        await inputTextField.click();
        await inputTextField.clearValue();
        await inputTextField.addValue(textFieldValue);
        await commonActions.waitForElement();
    }

    /**
     * This method is used to verify the type field
     */
    async validateTypedField() {
        const typedField = await formsPageLocators.youHaveTypedField;
        await expect(typedField).toBeDisplayed();
        const typedFieldValue = await typedField.getText();
        console.log("type field value is "+ typedFieldValue);
        const inputField = await formsPageLocators.inputField;
        const inputFieldValue = await inputField.getText();
        console.log("input field value is "+ inputFieldValue);
        await expect(inputFieldValue).toStrictEqual(typedFieldValue);
        await driver.hideKeyboard();
        await commonActions.waitForElement();
    }

    /**
     * This method is used to verify the InActive button
     */
    async verifyInActiveButtonStatus() {
        const inActiveButton = await formsPageLocators.inActiveBtn;
        await expect(inActiveButton).toBeDisplayed();
        await expect(inActiveButton).toHaveAttribute('clickable','false');
        await inActiveButton.click();
        const alertPopup = await formsPageLocators.alertPopup;
        await expect(alertPopup).toBeDisplayed(false);
    }

    /**
     * This method is used to verify and click the Active button
     */
    async clickActiveButton() {
        const activeButton =  await formsPageLocators.activeButton;
        await expect(activeButton).toBeDisplayed();
        await expect(activeButton).toBeEnabled();
        await expect(activeButton).toHaveAttribute('clickable','true');
        await activeButton.click();
        const alertPopup = await formsPageLocators.alertPopup;
        await expect(alertPopup).toBeDisplayed(true);
    }

    /**
     * This method is used to verify the alert popup
     */
    async verifyAlertPopup() {
        const alertPopup = await formsPageLocators.alertPopup;
        await expect(alertPopup).toBeDisplayed();
        const alertTitle = await formsPageLocators.alertPopupTitle;
        await expect(alertTitle).toBeDisplayed();
        const alertMessage = await formsPageLocators.alertPopupMessage;
        await expect(alertMessage).toBeDisplayed();
        const alertPopupOkButton = await formsPageLocators.alertPopup;
        await expect(alertPopupOkButton).toBeDisplayed();
        const alertPopupCancelButton = await formsPageLocators.alertPopup;
        await expect(alertPopupCancelButton).toBeDisplayed();
        const alertPopupAskLaterButton = await formsPageLocators.alertPopup;
        await expect(alertPopupAskLaterButton).toBeDisplayed();
    }

    /**
     * This method is used to click the (ok or cancel or ask me later) button
     * 
     * @param {*} buttonType(ok, cancel, ask me later) 
     */
    async clickAlertPopupButton(buttonType) {
        switch(buttonType) {
        case testData.alertButtonTypes[0]:
            const alertPopupOkButton = await formsPageLocators.alertOkBtn;
            await expect(alertPopupOkButton).toBeDisplayed();
            await expect(alertPopupOkButton).toExist();
            await alertPopupOkButton.click();
            break;
        case testData.alertButtonTypes[1]:
            const alertPopupCancelButton = await formsPageLocators.alertPopupCancelBtn;
            await expect(alertPopupCancelButton).toBeDisplayed();
            await expect(alertPopupCancelButton).toExist();
            await alertPopupCancelButton.click();
            break;
        case testData.alertButtonTypes[2]:
            const alertPopupAskMeLaterButton = await formsPageLocators.alertPopupAskMeLaterBtn;
            await expect(alertPopupAskMeLaterButton).toBeDisplayed();
            await expect(alertPopupAskMeLaterButton).toExist();
            await alertPopupAskMeLaterButton.click();
            break;        
        }
        const formsPageHeader = await formsPageLocators.homePageHeader;
        await expect(formsPageHeader).toExist();
        await expect(formsPageHeader).toBeDisplayed();
        await expect(formsPageHeader).toHaveText(constants.formsPageHeader);
    }

    /**
     * This method is used to verify the keyboard is shown or not
     */
    async verifyKeyboardIsShown() {
        const inputTextField = await formsPageLocators.inputField;
        await inputTextField.click();
        await inputTextField.clearValue();
        var keyboardShownStatus = await driver.isKeyboardShown();
        await expect(keyboardShownStatus).toEqual(true);
    }

    /**
     * Method to click dropdown element
     */
    async clickSelectDropDown() {
        //await this.waitAndClick(await this.clickDropDown);
        const selectItemDD = await formsPageLocators.selectItemDD;
        await expect(selectItemDD).toBeDisplayed();
        await expect(selectItemDD).toBeEnabled();
        await selectItemDD.click();
    }

    /**
     * Method to return the valid dropdown values
     */
    async getSelectDropDownOptions() {
        let ddValueCount = 0, dropDownSize;
        await this.clickSelectDropDown();
        dropDownSize = await formsPageLocators.selectDDOptions.length;
        for (let i = 0; i < dropDownSize; i++) {
            if (await commonActions.getElementAttribute(await formsPageLocators.selectDDOptions[i], "checked") == 'false') //get the count of interactable drop down options
            ddValueCount++;
        }
        await expect(formsPageLocators.selectDDOptions[1]).toBeDisplayed();
        await (formsPageLocators.selectDDOptions[1]).click();
        return ddValueCount;
    }

    /**
     * Method to verify the dropdown elements are within the screen
     */
    async verifyDropDownElementsWithinScreen() {
        let isWithinScreen, dropDownSize;
        await this.clickSelectDropDown();
        dropDownSize = await formsPageLocators.selectDDOptions.length;
        for (let i = 0; i < dropDownSize; i++) {
            if (await commonActions.verifyElementWithinScreen(await formsPageLocators.selectDDOptions[i]))
                isWithinScreen = true;
            else
                isWithinScreen = false;
        }
        await expect(formsPageLocators.selectDDOptions[1]).toBeDisplayed();
        await (formsPageLocators.selectDDOptions[1]).click();
        return isWithinScreen
    }

    /**
     * Method to verify all the dropdown options
     */
    async verifyDropDownFunctionality() {
        let ddValue, ddSelectedValue, dropDownSize;
        await this.clickSelectDropDown();
        dropDownSize = await formsPageLocators.selectDDOptions.length;
        for (let i = 1; i < dropDownSize; i++) {
            ddValue = await (await formsPageLocators.selectDDOptions[i].getText()).toString;
            console.log("dd before select value is: "+ ddValue);
            await formsPageLocators.selectDDOptions[i].isDisplayed();
            await (await formsPageLocators.selectDDOptions[i]).click();
            await commonActions.waitForElement();
            ddSelectedValue = await (await formsPageLocators.selectItemDD.getText()).toString;
            console.log("dd after selected value is: "+ ddValue);
            await expect(ddValue).toEqual(ddSelectedValue);
            await expect(ddValue).toStrictEqual(ddSelectedValue);
            if (i < (dropDownSize - 1))
                await this.clickSelectDropDown();
        }
    }
}

export default new formsPage();