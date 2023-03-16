import TabBar from '../screenobjects/components/TabBar';
import FormPage from '../pageobjects/form.page'
import HomePage from '../pageobjects/home.page'
import { expect } from 'chai'


describe('WebdriverIO and Appium, when interacting with a login form and home default selection,', () => {

    it('Validate the default selection of the tab', async () => {
        await HomePage.verifyHomeButtonIsEnabled();
        expect(await HomePage.verifyDefaultSelectedBtn()).to.be.equals("Home"); //verifying the default tab as Home
    })

    it('Validate that form tab is available for selection and is clickable', async () => {
        await TabBar.validateFormTabAvailability()
        await expect(await TabBar.validateIsFormTabClickable()).equals("true")
    })

    it('Validate the color change on the selection of the form tab', async () => {

        await HomePage.compareFormButtonColorAfterClick("formButton");
        await HomePage.verifyClickFormButton();
        expect(await HomePage.compareFormButtonColorAfterClick("formButton")).to.be.false;
    })


    it('Validate the Input behaviour is working as intended', async () => {
        await TabBar.openForms()
        await FormPage.enterTextInput("Mobile Automation");
        expect(await FormPage.getInputResultValue()).equals("Mobile Automation");
        await FormPage.clearTextInput();
        await FormPage.hideKeyboard();
    })


    it('Validate that picker element is working and it has 3 options to choose from.', async () => {

        expect(await FormPage.getValidPickerOptions()).equals(3);
        await FormPage.verifyPickerFunctionality();
    })
    it('Validate that all options from picker elements are visible within the screen', async () => {
        expect(await FormPage.verifyPickerElementsWithinScreen());

    })

    it('Validate the toggle control of the switch', async () => {
        expect(await FormPage.getSwitchToggleText).contains(await FormPage.getSwitchToggleStatus);
        await FormPage.clickSwitchToggle();
        expect(await FormPage.getSwitchToggleText).contains(await FormPage.getSwitchToggleStatus);
    })
    it('Validate that Inactive button is not interactable', async () => {
        await FormPage.clickInactiveButton();
        expect(await FormPage.verifyIsPopup()).to.be.false;
    })

    it('Validate that android native alerts are functional', async () => {
        //Ok button
        await FormPage.clickActiveButton();
        expect(await FormPage.verifyIsPopup()).to.be.true;
        await FormPage.clickOkButton();
        expect(await FormPage.verifyIsPopup()).to.be.false;
        //Cancel button
        await FormPage.clickActiveButton();
        expect(await FormPage.verifyIsPopup()).to.be.true;
        await FormPage.clickCancelButton();
        expect(await FormPage.verifyIsPopup()).to.be.false;
        //Ask me later button
        await FormPage.clickActiveButton();
        expect(await FormPage.verifyIsPopup()).to.be.true;
        await FormPage.clickAskMeLaterButton();
        expect(await FormPage.verifyIsPopup()).to.be.false;
    })

    it('Validate that keyboard is available to provide input in the text field', async () => {
        expect(await FormPage.openKeyboard()).to.be.true;
        expect(await FormPage.hideKeyboard()).to.be.false;
    })



})