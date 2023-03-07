import { BaseActions } from "./base-actions";

class FormScreen extends BaseActions {
    
    // locators
    form= {
        inputField:'//*[@content-desc="text-input"]',
        inputResult:'//*[@content-desc="input-text-result"]',
        dropDownField:'~Dropdown',
        dropDownTextField:'//*[@content-desc="Dropdown"]//android.widget.EditText',
        dropDownContainer:'//*[@class="android.widget.ListView"]',
        dropDownList:'//*[@resource-id="android:id/text1"]', /* list of ele */
        inactiveBtn:'//*[@content-desc="button-Inactive"]/*',
        activeBtn:'~button-Active',
        alertBox:'//*[@resource-id="android:id/alertTitle"]',
        switch:'~switch',
        switchText:'~switch-text',
        alertOkBtn:'//*[@text="OK"]',
        alertAskMeLaterBtn:'//*[@text="ASK ME LATER"]',
        alertCancelBtn:'//*[@text="CANCEL"]'
    }
    //helpers
    invertState = (state:string) => {
        return state =="ON"?"OFF":"ON"
    }

    dropDownValues = ["webdriver.io is awesome","Appium is awesome","This app is awesome"]
    //getters
    get  txtInput() { return $(this.form.inputField)}
    get  inputResult() { return $(this.form.inputResult)}
    get  dropDownList() { return $$(this.form.dropDownList)}
    get  dropDownField() { return $(this.form.dropDownField)}
    get dropDownTextField() {return $(this.form.dropDownTextField)}
    get  dropDownContainer() { return $(this.form.dropDownField)}
    get  inactiveBtn() { return $(this.form.inactiveBtn)}
    get  activeBtn() { return $(this.form.activeBtn)}
    get  alertBox() { return $(this.form.alertBox)}
    get  switch() { return $(this.form.switch)}
    get  switchText() { return $(this.form.switchText)}
    get  alertOkBtn() { return $(this.form.alertOkBtn)}
    get  alertAskMeLaterBtn() { return $(this.form.alertAskMeLaterBtn)}
    get  alertCancelBtn() { return $(this.form.alertCancelBtn)}
    
    //#region ACTIONS
    async fillTextField(input){
       return await (await $(this.form.inputField)).setValue(input);
    }

    async clickDropDownList(){
        return await (await formScreen.dropDownField).click();
    }

    async clickOnToggleSwitch(){
        console.log('inverting the switch');
        return await (await (formScreen.switch)).click();
    }

    async clickOnAlert(){
        return await (await this.activeBtn).click();
     }

    async openDropDownList(){
        if(!(await this.dropDownContainer)){await this.clickDropDownList()};
    }

    //#endregion

    async getDropDownOptions() {
        let collectedListItems=[]
        const listOfElements =await (this.dropDownList)
        
        for(let i=0;i<=listOfElements.length;i++){
            // to weed out undefined
            if(listOfElements[i])
            {let tmp = await listOfElements[i].getText();
                if(tmp !== 'Select an item...')
                    collectedListItems.push(tmp);
                    }
        }
        return collectedListItems;
    }

    //#region validations <> asserts
    async validateDropdownListInBounds(expected:string[]){ 
        await this.openDropDownList(); 
        const listOfElements = await this.dropDownList
        listOfElements.forEach(async entry=> {
        if (entry && await entry.getText() !== 'Select an item...')
        expect(await entry.isDisplayed()).toBe(true);
        expect(await this.isElementWithinBounds(entry)).toBe(true);
        expect(expected.includes(await (await this.dropDownField).getValue())).toBe(true)
        });
    }

    async selectEachValidOption(data = this.dropDownValues) {
        
        for(let i=0;i<data.length;i++){
            await this.openDropDownList();
            let ele = (await this.dropDownList)[i+1]
            if(ele){
            expect(await ele.getText()).toEqual(data[i])
            await ele.click();
            expect(await (await this.dropDownTextField).getText()).toEqual(data[i])}
        }

    }

    async validateInactiveButtonAttr(attr="clickable"){
        return await (await this.inactiveBtn).getAttribute(attr);
    }

    async validateAlertWindow(){
        expect(await (await this.alertBox).isDisplayed()).toBe(true);

        expect(await (await this.alertAskMeLaterBtn).isDisplayed()).toBe(true);
        expect(await (await this.alertCancelBtn).isDisplayed()).toBe(true);
        expect(await (await this.alertOkBtn).isDisplayed()).toBe(true);   
    }

    async validateToggleSwitchStatus(){
        const currentState =await (await this.switch).getText();
        const status = await (await this.switchText).getText();
        expect(status).toEqual(`Click to turn the switch ${this.invertState(currentState)}`);
    }
    //#endregion
}

export const formScreen = new FormScreen();