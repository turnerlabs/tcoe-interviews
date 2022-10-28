const Page = require('./page');

class ClientSideDelayPage extends Page{
    get btnTriggerClientProcess (){
        return $('#ajaxButton');
    }

    get dataCalculated(){
        return $('#content > p')
    }

    async startClientProcessing(){
        await this.btnTriggerClientProcess.click();
    }

    async waitProcesing(){
        await this.dataCalculated.waitForExist({ timeout: 50000 });
    }

    open(){
        return super.open('clientdelay');
    }
}

module.exports = new ClientSideDelayPage();