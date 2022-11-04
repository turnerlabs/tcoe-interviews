class Login {
    get titlePage() { return $('h3') }
    get usernameInput() { return $('input[type="text"]') }
    get passwordInput() { return $('input[type="password"]') }
    get loginButton() { return $('#login') }
    get loginMsg() { return $('#loginstatus') }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async clickLoginBtn() {
        await this.loginButton.waitForDisplayed()
        await this.loginButton.click()
    }

}
module.exports = new Login();