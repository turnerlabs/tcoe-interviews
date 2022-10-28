const Page = require('./page');

class ClickPage extends Page{

    get btnClickIgnore(){
        return $('#badButton');
    }

    async clickOnBtn(){
        await this.btnClickIgnore.click();
        await browser.pause(2000);
    }

    open(){
        return super.open('click');
    }

}

module.exports = new ClickPage();