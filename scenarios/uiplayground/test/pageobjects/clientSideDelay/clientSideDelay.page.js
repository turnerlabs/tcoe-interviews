
class ClientSideDelay {

    get  clientSideBtn () {
        return $(`.btn-primary`);
    }
    get clientSideText(){
        return $(`.bg-success`); 
    }

    async getClientSideText(){
        await this.clientSideText.waitForExist({ timeout: 20000 });
        await (this.clientSideText).click()
        return this.clientSideText.getText()
    }
}

module.exports = new ClientSideDelay();
