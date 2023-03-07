import * as testData from '../data.json'
import {homeScreen} from '../pomfiles/home-screen'
import { formScreen } from '../pomfiles/form-screen'

describe('Android challenge tests',()=>{
    it('Validate the default selection of the tab',async ()=>
    {
        expect(await homeScreen.welcomeMessageIsDisplayed()).toBe(true);
        expect(await homeScreen.supportTextIsDisplayed()).toBe(true);
        await homeScreen.validateBottomNavSection();        
        expect(await (await homeScreen.getMenuNavBar("Home")).isSelected()).toBe(true);    
    })
    it('Validate that form tab is available for selection and is clickable',async ()=>{
        expect(await homeScreen.menuNavBarIsDisplayed("Forms")).toBe(true);       
        expect(await (await homeScreen.getMenuNavBar("Forms")).getAttribute("clickable")).toBe("true");
    })
    it('Validate the color change on the selection of the form tab',async ()=>{
       
        await formScreen.compareElementImages(await homeScreen.getMenuNavBar("Forms"),testData.screenshot);
        expect(await (await homeScreen.getMenuNavBar("Forms")).getAttribute("clickable")).toBe("true");
        await (await homeScreen.getMenuNavBar("Forms")).click();
        expect(await formScreen.compareElementImages(await homeScreen.getMenuNavBar("Forms"),testData.screenshot)).toBe(false)
  
    })
    it('Validate the Input behaviour is working as intended',async ()=>{
        await formScreen.fillTextField(testData.inputText)
        expect(await (await formScreen.inputResult).getText()).toEqual(testData.inputText);
    })
    it('Validate at picker element is working and it has 3 options to choose from.',async ()=>{
        
        expect(await (await formScreen.dropDownField).isDisplayed()).toBe(true);
        await formScreen.clickDropDownList();
        const collectedListItems = await formScreen.getDropDownOptions();

        expect( collectedListItems.length).toEqual(3);
        expect(testData.dropDownOptions.sort()).toEqual(collectedListItems.sort());
        //return to form display state
    });

    it('Validate that all options from picker elements are visible within the screen.',async () =>{
        await formScreen.validateDropdownListInBounds(testData.dropDownOptions);
    })
    it('Validate that the options from picker elements are selectable',async ()=>{
        await formScreen.selectEachValidOption();        
    })
    it('Validate that Inactive button is not interactable',async ()=>{
        
        expect(await formScreen.validateInactiveButtonAttr()).toBe("false");
        expect(await (await formScreen.alertBox).isDisplayed()).toBe(false);

    })
    it('Validate that android native alerts are functional',async ()=>{
        await formScreen.clickOnAlert();
        await formScreen.validateAlertWindow();   
        // accept the alert
        await (await formScreen.alertOkBtn).click();
    })
    it('validate toggle switch is available',async ()=>{

        await formScreen.validateToggleSwitchStatus();    
        await formScreen.clickOnToggleSwitch();
        await formScreen.validateToggleSwitchStatus();
    })
    it('Validate that keyboard is available to provide input in the text field',async ()=>{
        await (await formScreen.txtInput).click();
        expect(await driver.isKeyboardShown()).toBe(true);
        await formScreen.fillTextField(testData.inputText);
        await driver.hideKeyboard();
        expect(await driver.isKeyboardShown()).toBe(false);
    })
})

