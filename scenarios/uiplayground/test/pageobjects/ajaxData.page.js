
const Page = require('./page');

class AjaxDataPage extends Page {

    get triggerAjaxRequestElement() {
        return $('#ajaxButton');
    }

    async triggerAjaxRequest() {
        await this.triggerAjaxRequestElement.click(); 
    }
    
    open () {
        return super.open('ajax');
    }
}

module.exports = new AjaxDataPage();
