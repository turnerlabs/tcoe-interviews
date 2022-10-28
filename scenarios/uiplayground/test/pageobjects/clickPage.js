const Page = require('./page');

class ClickPage extends Page{

    get btnClickIgnore(){
        return $('#badButton');
    }

    async clickOnBtn(){
        await this.btnClickIgnore.click();
    }

    open(){
        return super.open('click');
    }

}

module.exports = new ClickPage();