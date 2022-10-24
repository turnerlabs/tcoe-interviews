

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SampleAppPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {return $('[name = UserName]');}

    get inputPassword () {return $('[name = Password]');}

    get buttonLogin () {return $('#login');}

    get alertMsg () {return $('#loginstatus')}


    /**
     * a method to encapsule automation code to interact with the page
     * to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.buttonLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('sampleapp');
    }
}

module.exports = new SampleAppPage();
