

const Page = require('./page');

class SampleAppPage extends Page {

    get username() {
        return $('input[name="UserName"]');
    }

    get password() {
        return $('input[name="Password"]');
    }

    get loginButton() {
        return $('#login');
    }

    get loginStatusMessage() {
        return $('#loginstatus');
    }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }


    open () {
        return super.open('sampleapp');
    }
}

module.exports = new SampleAppPage();
