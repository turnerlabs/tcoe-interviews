const Home = require('../pageobjects/mobileAppHomePage');
const Form = require('../pageobjects/mobileAppFormPage');
let { expect: chaiExpect } = require('chai');

describe('Verify the WDIO Demo App', () => {

    it('Validate the default selection of the tab', async () => {
        await Home.isHomeButtonEnabled();
        chaiExpect(await Home.verifySelectTab()).to.be.true; 
    })
    it('Validate that form tab is available for selection and is clickable', async () => {
        chaiExpect(await Home.verifyFormButton()).to.be.true;
    })
    it('Validate the color change on the selection of the form tab', async () => {

        await Home.formButtonColorComparison("formButton");
        await Home.verifyClickFormButton();
        chaiExpect(await Home.formButtonColorComparison("formButton")).to.be.false;
    })
    it('Validate the Input behaviour is working as intended', async () => {
        await Form.enterTextInput("Input value");
        chaiExpect(await Form.getInputResultValue()).equals("Input value");
        await Form.clearTextInput();
        await Form.hideKeyboard();   
    })
    it('Validate that picker element is working and it has 3 options to choose from.', async () => {
        chaiExpect(await Form.getDropdownCount()).to.be.equals("3");
    })
    it('Validate that all options from picker elements are visible within the screen', async () => {
        chaiExpect(await Form.verifyElementWithInScreen());
    })
    it('Validate that Inavtive button is not interactable', async () => {
        await Form.clickInactiveButton();
        chaiExpect(await Form.verifyPopUp()).to.be.false;
    })
    it('Validate that android native alerts are functional', async () => {        
        await Form.clickActiveButton();
        chaiExpect(await Form.verifyPopUp()).to.be.true;
        await Form.clickOkButton();
        chaiExpect(await Form.verifyPopUp()).to.be.false;        
        await Form.clickActiveButton();
        chaiExpect(await Form.verifyPopUp()).to.be.true;
        await Form.clickCancelButton();
        chaiExpect(await Form.verifyPopUp()).to.be.false;        
        await Form.clickActiveButton();
        chaiExpect(await Form.verifyPopUp()).to.be.true;
        await Form.clickAskMeLaterButton();
        chaiExpect(await Form.verifyPopUp()).to.be.false;
    })
    it('Validate that keyboard is available to provide input in the text field', async () => {
        chaiExpect(await Form.verifyKeyboardDisplayed()).not.equals(await Form.hideKeyboard());
    })
})