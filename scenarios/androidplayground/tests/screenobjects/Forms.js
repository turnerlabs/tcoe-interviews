const Page = require('./Home.js');

class Forms extends Page{
    get formsButton() {return $('~Forms');}
    get formsView(){return $('~Forms-screen');}
    get activeButton(){return $('~button-Active');}
    get inactiveButton() {return $('~button-Inactive')}
    get textInput(){return $('~text-input');}
    get textInputResult(){return $('~input-text-result');}
    get dropDownButton(){return $('~Dropdown');}
    get dropDownMean() {return $$('id=android:id/text1');}
    get dropDownClick() {return $('id=com.wdiodemoapp:id/select_dialog_listview')}
    get alertButton() {return $('id=android:id/alertTitle');}
    get okButtonAlert() {return $('id=android:id/button1');}    

    constructor(){
        super();
        this.waitForIsShown(this.formsView);  
    }

    async sendletters(textIn) {
        await this.textInput.setValue(textIn);
        await this.textInputResult.isDisplayed();
        return await this.textInputResult.getText();
    }
    
    async tapOnDropDown(){
        await this.dropDownButton.click();      
        
    }

    async countOptions(){
        const dropDownLength = await this.dropDownMean.length;
        return dropDownLength - 1;                  
    }

    async tapOnDropDownMean(){
       await this.dropDownClick.click();
    }

    async tapActiveButton(){
        return await this.activeButton.click();
    }

    async activeAlert(){
        return await this.alertButton.getText();
    }

    async selectFormsButton(){
        const locator =  'new UiSelector().description("Forms").selected(true).text(Select an item...)';        
        const formsSelected = $(`android=${selector}`);
        await this.formsButton.click();
        return await formsSelected.isDisplayed();
    }

    async tapOnInactiveButton(){
        await this.inactiveButton.click();
    }  
    
    async tapOnOkButton(){
        await this.okButtonAlert.click();
    }
}
module.exports = Forms;
