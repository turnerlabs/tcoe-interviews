import TabBar from '../screenobjects/components/TabBar';
import FormsScreen from '../screenobjects/FormsScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when testing Forms Screen functions,', () => {
    beforeEach(async () => {    
        await TabBar.waitForTabBarShown();
    });

    it('should validate the default tab selected is Home', async () => {
        expect(await TabBar.isHomeSelected());
    });

    it('should validate forms tab is available and clickable', async () => {
        expect (TabBar.isFormsAvailableClickable());
    });

    it('should validate Forms tab is selected', async () => {
        await TabBar.openForms();
        expect (TabBar.isFormsSelected());
    });

    it('should validate input behaviour works correctly', async () => {
        await FormsScreen.tapOn(FormsScreen.getInput());
        await FormsScreen.setInputText(await FormsScreen.getInputString());
        expect (await FormsScreen.getInputText()).toEqual(await FormsScreen.getInputValidationText());
    });

    it('should validate picker element is working and includes at least 3 options', async() => {
        await FormsScreen.tapOn(FormsScreen.getDropDown());
        expect (await FormsScreen.countDropDownElements()).toBeGreaterThanOrEqual(3);
        await FormsScreen.tapOn(FormsScreen.getRandomListElement());
        expect !(FormsScreen.getDropDownText()).toExist();
    });

    it('should validate all list elements are visible', async () => {
        await FormsScreen.tapOn(FormsScreen.getDropDown());
        expect (await FormsScreen.tapOn(FormsScreen.getLastOfList()));
    });

    it('should validate Inactive button is not interactable', async () => {
        await FormsScreen.tapOn(FormsScreen.getInactiveButton());
        expect !(NativeAlert.waitForIsShown());
    });
    
    it('should validate Andorid native alerts are functional', async () =>{
        await FormsScreen.tapOn(FormsScreen.getActiveButton());
        await NativeAlert.waitForIsShown();
        await NativeAlert.topOnButtonWithText("OK");
        expect !(NativeAlert.waitForIsShown());
    });

    it('should validate keyboard provides input to text field', async() => {
        await TabBar.openForms();
        await FormsScreen.tapOn(FormsScreen.getInput());
        await driver.sendKeyEvent("67");
        expect (await FormsScreen.getInputText()).toEqual(await FormsScreen.getModifiedInputString());
    });

});
