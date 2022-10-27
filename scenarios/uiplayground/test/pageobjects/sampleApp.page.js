const Page = require('./page');

/**
 * Sample App Page
 */
class SampleAppPage extends Page {
    /**
     * Page Locators
     */
    get userNameInput() {
        return $('[name = UserName]');
    }

    get passwordInput() {
        return $('[name = Password]');
    }

    get logInButton() {
        return $('#login');
    }

    get logInStatusLabel() {
        return $('#loginstatus')
    }

    /**
     * Fill the form and click on login button
     */
    async fillFormAndLogIn(username, password) {
        await this.userNameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.logInButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('sampleapp');
    }
}

module.exports = new SampleAppPage();
