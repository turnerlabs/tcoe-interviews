const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SampleAppPage extends Page {

    get usernameField() { return $('[name="UserName"]') }
    get passwordField() { return $('[name="Password"]') }
    get loginButton() { return $('#login') }
    get loginStatus() { return $('#loginstatus') }
    /**
     * overwrite specific options to adapt it to page object
     */

    async fillLoginFields(user, pass){
        await this.usernameField.setValue(user);
        await this.passwordField.setValue(pass);
    }

    async clickLogin(){
        await this.loginButton.click();
    }

    async verifyLoginFieldTypes(){
        await expect(this.usernameField).toHaveAttribute('type', 'text');
        await expect(this.passwordField).toHaveAttribute('type', 'password');
    }

    async loginStatusContains(text){
        await expect(this.loginStatus).toHaveTextContaining(text)
    }

    async loginStatusDisplayed(){
        await this.loginStatus.waitForDisplayed({ timeout: 5000 })
    }

    async openAndLogin(user, pass){
        await this.open();
        await this.fillLoginFields(user, pass);
        this.clickLogin()
    }

    async logout(){
        await this.loginButton.click();
    }

    async credentialsAreNotVisible(){
        await expect(this.usernameField).not.toBeDisplayedInViewport();
        await expect(this.passwordField).not.toBeDisplayedInViewport();

    }

    async logoutDisplayed(){
        await expect(this.loginButton).toHaveTextContaining('Log Out')
    }

    open () {
        return super.open('sampleapp');
    }
}

module.exports = new SampleAppPage();
