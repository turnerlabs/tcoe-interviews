
class HomePage  {
   
    get btnClick () {
        return $('=Click');
    }

    get btnTextInput () {
        return $('=Text Input');
    }

    get btnHiddenLayers () {
        return $('=Hidden Layers');
    }

    async sectionClick () {
        await this.btnClick.click();

    }

    async sectionInputText () {
        await this.btnTextInput.click();

    }

    async sectionHiddenLayers () {
        await this.btnHiddenLayers.click();

    }

}

module.exports = new HomePage();
