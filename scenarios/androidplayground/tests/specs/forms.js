const TabBar = require('../screenobjects/components/TabBar');
const Forms = require('../screenobjects/Forms');

describe('Forms test', () => {            
        let formsScreen;
        beforeEach(async () => {
            await TabBar.waitForTabBar();
            formsScreen = await TabBar.openFormsView();
        });        

        it('should be able to into to forms', async () => {            
            await expect(formsScreen.formsView).toBeDisplayed(); 
            await expect(formsScreen.selectFormsButton()).toBeTruthy();
            
        });        

        it('should be able to write and validate the same textout', async ()=> {
            await formsScreen.sendletters('hello my friend');
            await expect(await formsScreen.textInputResult.getText()).toEqual('hello my friend');
        });

        it('should be able to show keybord after click', async ()=> {
            await expect(formsScreen.textInput.click());
            await formsScreen.textInput.isKeyboardShown();  
            await formsScreen.textInputResult.click();          
        });

        it('should be able to validate behavior in dropDown', async () => {
            await formsScreen.tapOnDropDown();
            await expect(await formsScreen.countOptions()).toEqual(3);
            await formsScreen.tapOnDropDownMean();
        }); 

        it('Active button and funtions', async () => {
            await formsScreen.tapActiveButton();
            await expect(await formsScreen.okButtonAlert).toBeDisplayed(); 
            await formsScreen.tapOnOkButton();                       
        });
        
        it('The inactive button is not interactable', async () => {
            await formsScreen.tapOnInactiveButton();           
            await expect(formsScreen.inactiveButton).toBeDisplayed();            
        });                
});


