
import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import HomeScreen from '../screenobjects/HomeScreen';
import FormsScreen from '../screenobjects/FormsScreen';

describe('To validate the different elements on the form tab', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('Validate the default selection of the tab', async () => {

        await expect( await HomeScreen.waitForIsShown(true));
    });
    
    it('Validate that form tab is available for selection and is clickable', async () => {

        await expect(await FormsScreen.waitForIsShown(true));
        await expect(await $('~Forms-screen')).isclickable();
        await $('~Forms-screen').click();

    });
    it('Validate the Input behaviour is working as intended', async () => {

       await FormsScreen.input.setvalue('Pradeep');
       expect(await FormsScreen.inputTextResult.getText()).toEqual('Pradeep');

    });
    it('Validate that picker element is working and it has 3 options to choose from.', async () => {

        await FormsScreen.tapOnDropDown();
        await expect(await NativeAlert.text()).toEqual('Select an item\nwebdriver.io is awesome\nAppium is awesome\nThis app is awesome');
     });
     it('Validate that Inactive button is not interactable', async () => {
        
        await FormsScreen.inActiveButton.waitForIsShown(true);
        await expect(await FormsScreen.inActiveButton).isclickable(false);
     });
     it('Validate that android native alerts are functional', async () => {
        
        await FormsScreen.tapOnActiveButton();
        await expect(await NativeAlert.text()).toEqual('This Button is\nThis button is active');
     });
     it('Validate that keyboard is available to provide input in the text field', async () => {
        await FormsScreen.input.click();
        const flag: boolean = await driver.isKeyboardShown()
        await expect(flag).toEqual(true);
     });



        

});

    