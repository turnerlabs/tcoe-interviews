const AppScreen= require('./AppScreen');



class FormsScreen extends AppScreen {

    constructor() {
        super('~Forms-screen');
    }

    get input () {return $('~text-input');}
    get inputTextResult () {return $('~input-text-result');}
    get switch () {return $('~switch');}
    get switchText () {return $('~switch-text');}
    get dropDown () {return $('~Dropdown');}
    get activeButton () {return $('~button-Active');}
    get inActiveButton () {return $('~button-Inactive');}
  
    async tapOnInput(){
        await this.input.click();
    }

    async setImputValue(message){
        await this.input.setValue(message)
    }

    async getInputText () {
        return await this.input.getText();
    }

    async tapOnInputTextResult(){
        await this.inputTextResult.click();
    }

    async getInputResultText () {
        await this.tapOnInputTextResult();
        return await this.inputTextResult.getText();
    }

}

module.exports = new FormsScreen();
