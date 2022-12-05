const Page = require('./Page.js');
const LoginPage = require('./LoginPage.js');
const FormPage = require('./FormPage.js');

class HomePage extends Page{

    get homeView() {
        return $('~Home-screen');
    }

    get loginOption() {
        return $('~Login');
    }

    get formsOption() {
        return $('~Forms');
    }

    get swipeOption() {
        return $('~Swipe');
    }

    constructor() {
       super();
       this.waitForIsShown(this.homeView);
    }

    async goToLogin() {
        await this.changeViewTo(this.loginOption)
        return new LoginPage();
    }

    async goToForm() {
        await this.changeViewTo(this.formsOption)
        return new FormPage();
    }

    async formAvailabilityAndClickability() {
        if(expect(this.formsOption).toBeDisplayed && expect(this.formsOption).toBeClickable){
            return true
        } else {
            return false;
        }
    }
}

module.exports = HomePage;
