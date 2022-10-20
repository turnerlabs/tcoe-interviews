
class hiddenLayerPage  {
   

    get btnGreen () {
        return $('#greenButton');
    }

    get btnBlue () {
        return $('#blueButton');
    }

    async clickOnBtnGreen () {
        await this.btnGreen.click();

    }

    async btnBlueIsDisplayed () {
        await this.btnBlue.isDisplayed();

    }

}

module.exports = new hiddenLayerPage();