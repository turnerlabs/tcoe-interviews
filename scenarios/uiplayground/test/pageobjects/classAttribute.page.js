const Page = require('./page');

class ClassAttributePage extends Page {

    get bluebuttonElement () {
        return $("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]")
    }

    async checkClassAttribute () {
        await this.bluebuttonElement.click();
        await browser.pause(2000);
        await browser.acceptAlert();
    }
    
    open () {
        return super.open('classattr');
    }
}
module.exports = new ClassAttributePage();