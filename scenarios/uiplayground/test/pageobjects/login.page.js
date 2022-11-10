

const Page = require('./page');
const assert = require('chai').assert;
const testData = require('../../testData/constants');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $("input[name='UserName']");
    }

    get inputPassword () {
        return $("input[name='Password']");
    }

    get btnSubmit () {
        return $('button[id="login"]');
    }

    get welcomeTextLabel () {
        return $('#loginstatus');
    }

    get logOutButton () {
        return $("//button[text()='Log Out']");
    }

    get invalidCredentialErrorTxt () {
        return $(".text-danger");
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async verifyWelcomeText(username) {
        const welcomeText = await this.welcomeTextLabel.getText();
        await assert.strictEqual(welcomeText,`${testData.welcomeText}, ${username}!`,"FAIL: Welcome text does not match expected value");
    }

    async verifyUserCanLogOut() {
        const logOutText = await this.btnSubmit.getText();
        await assert.strictEqual(logOutText,`${testData.logOutText}`,"FAIL: Log out text button is not visible");
    }

    async verifyStaticElementsType() {
        const unameElement = await this.inputUsername.getAttribute('type');
        const pwdElement = await this.inputPassword.getAttribute('type');
        await assert.equal(unameElement,'text',"FAIL: Attribute type is not of type TEXT");
        await assert.equal(pwdElement,'password',"FAIL: Attribute type is not of type PASSWORD");
    }

    async verifyInvalidCredentialText() {
        const invalidCredText = await this.invalidCredentialErrorTxt.getText();
        await assert.strictEqual(invalidCredText,`${testData.invalidUserErrorText}`,"FAIL: Error message does not match");
    }

    async verifyLoginFieldsAreHidden() {
        const unameIsExisting = await this.inputUsername.isExisting();
        const pwdIsExisting = await this.inputPassword.isExisting()

        await assert.isFalse(unameIsExisting,"FAIL: Username field is present after successful login");
        await assert.isFalse(pwdIsExisting,"FAIL: Password field is present after successful login");
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/sampleapp');
    }
}

module.exports = new LoginPage();
