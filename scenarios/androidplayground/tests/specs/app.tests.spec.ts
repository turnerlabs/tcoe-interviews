import TabBar from '../screenobjects/components/TabBar';
import HomeScreen from '../screenobjects/HomeScreen';
import FormsScreen from '../screenobjects/FormsScreen';
import Gestures from '../helpers/Gestures';

describe('WebdriverIO and Appium, Testing exam functionality,', () => {
    beforeEach(async () => {
       // await TabBar.waitForTabBarShown();
    });

    it('Validate the default selection of the tab', async () => {
        await expect(await HomeScreen.selectionHomeIcon()).toEqual(true); //validate the icon is selected
    });

    it('Validate that form tab is available for selection and is clickable', async () => {
       await expect (await FormsScreen.enableFormAction()).toEqual(true); //validate the icon is enable
       await expect (await FormsScreen.getAttributeFormAction()).toEqual("true"); //validate that the icon is clickable
    });

    it('Validate the color change on the selection of the form tab', async () => {
        await FormsScreen.tapOnFormIcon();
        await FormsScreen.tapOnInputField();
        driver.hideKeyboard(); //wit this test that is open and hiding the keyboard is testing the last test scenario:Validate that keyboard is available to provide input in the text field
        await expect (await FormsScreen.selectedFormAction()).toEqual(true); //validate that the icon is selected, we already know that the icon has its own color, this kind of test could be done manually
    });

    it('Validate the Input behaviour is working as intended', async () => {
        await FormsScreen.setTextInput();
        await expect (await FormsScreen.getAttributeInputTextResult()).toEqual("Test") //Validat that both input field are working as expected
    });

    it('Validate that picker element is working and it has 3 options to choose from.', async () => {
        await FormsScreen.tapOnDropDown();
        await expect (await FormsScreen.getAttributeDropdownOptionOne()).toEqual("webdriver.io is awesome");
        await expect (await FormsScreen.getAttributeDropdownOptionTwo()).toEqual("Appium is awesome");
        await expect (await FormsScreen.getAttributeDropdownOptionThree()).toEqual("This app is awesome");
        await FormsScreen.dropdwonOptionFourDisplayed(); //validate that the three option are correct and validate that there is not a fouth option
    });

    it('Validate that all options from picker elements are visible within the screen', async () => {
        await FormsScreen.dropDownOptionOneDisplayed();
        await FormsScreen.dropDownOptionTwoDisplayed();
        await FormsScreen.dropDownOptionThreeDisplayed(); // validate that the three options are displayed within the screen
        await FormsScreen.tapOnDropdownOne();
    });

    it('Validate that Inactive button is not interactable', async () => {
        await Gestures.swipeUp();
        await expect (await FormsScreen.inactiveButtonNotIteractable()).toEqual("false"); //validate the inactive button is not itectable
   });

    it('Validate that android native alerts are functional', async () => {
        await FormsScreen.tapOnActiveButton();
        await FormsScreen.nativeMessage(); // validate that is possible to click on native message android
    });

});
