
const Utils = require('../helpers/Utils');

class HomeScreen  {

    get homeView() { return $('~Home-screen'); }
    get formsOption() { return $('~Forms'); }
    get homeOption() { return $('~Home'); }

    
    async waitForLoading() {
        await Utils.waitForIsShown(this.homeView);
    }
    async goToForms() {
        await Utils.changeViewTo(this.formsOption);
    }
    async goToHome() {
        await Utils.changeViewTo(this.homeOption);
    }

}

module.exports = new HomeScreen();