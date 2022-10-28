const Page = require('./page');

class DynamicIDPage extends Page {

    get dynamicButton(){
        return $('/html[1]/body[1]/section[1]/div[1]/button[1]');
    } 

    async getButtonText(){
        console.log (await this.dynamicButton.getText()); 
    }

    open(){
        return super.open('dynamicid');
    }
}

module.exports = new DynamicIDPage();