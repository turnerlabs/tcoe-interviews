
class inputTextPage  {
   

    get txtMybutton () {
        return $('#newButtonName');
    }

    get btnUpdateButton () {
        return $('#updatingButton');
    }

    async enterText () {
        await this.txtMybutton.setValue('text input');
        await this.btnUpdateButton.click()

    }

}

module.exports = new inputTextPage();