const Page = require('./Page.js');

class LoginPage extends Page {

    get loginView() {
        return  $('~Login-screen');
    }
    get loginButton() {
        return $('android=new UiSelector().description("button-LOGIN")');
    }
    get email() {
        return $('~input-email');
    }
    get password() {
        return $('~input-password');
    }
    get alertitle() {
        return $('id=android:id/alertTitle');
    }

    constructor() {
        super();
        this.waitForIsShown(this.loginView);  
    }

    async submitLoginForm(username, password) {
        
        await this.sendKeys(this.email,username);
        await this.sendKeys(this.password,password);

        if (await driver.isKeyboardShown()) {
                    await loginView.click();
        }

        await this.doTap(this.loginButton)
        
        await this.alertitle.isDisplayed();
        return await this.alertitle.getText();
    }
}

module.exports = LoginPage;
