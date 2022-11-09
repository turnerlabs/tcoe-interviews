const Page = require('./page');
const loginURL = 'sampleapp';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
     get userNameText () { return $('[name="UserName"]'); }
     get passwordText () { return $('[name="Password"]'); }
     get loginButton () { return $('#login'); }
     get statusText () { return $('#loginstatus'); }

    /**
     * Logs in the web application
     * @param username
     * @param password
     */
     async login (username, password) {
        await this.userNameText.setValue(username);
        await this.passwordText.setValue(password);
        await this.loginButton.click();
    }
    /**
     * Clicks on logout Button
     */
     async loginButtonClick () {
        await this.loginButton.click();
    }
    /**
     * overwrite open function with login url
     */
    open () {
        return super.open(loginURL);
    }

    /**
     * Returns userNameText value
     */
    async userNameTextValue () {
        return (await this.userNameText.getValue());
    }

    /**
     * Returns password value
     */
     async passwordTextValue () {
        return (await this.passwordText.getValue());
    }
}

module.exports = new LoginPage();
