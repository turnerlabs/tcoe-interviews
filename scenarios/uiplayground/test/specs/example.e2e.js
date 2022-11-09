const LoginPage = require('../pageobjects/login.page');
const validPassword = 'pwd';
const invalidPassword = 'invalidpasswordinvalidpasswordinvalidpasswordinvalidpasswordinvalidpassword';
const longUserName = 'longUserNamelongUserNamelongUserNamelongUserNamelongUserNamelongUserNamelongUserName';
const userName = 'user';
const errorMessage = 'Invalid username/password';
const logoutMessage = 'User logged out.';

describe('Validate that a set of user credentials behave as expected - Cases', () => {
    it('Should test with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(userName, validPassword);
        await expect(LoginPage.statusText).toHaveText('Welcome, ' + userName + '!');
    });
    it('Should not login with invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login(userName, invalidPassword);
        await expect(LoginPage.statusText).toHaveText(errorMessage);
    });
    it('Should not login with empty user name', async () => {
        await LoginPage.open();
        await LoginPage.login('', validPassword);
        await expect(LoginPage.statusText).toHaveText(errorMessage);
    });
    it('Should not login with empty password', async () => {
        await LoginPage.open();
        await LoginPage.login(userName, '');
        await expect(LoginPage.statusText).toHaveText(errorMessage);
    });
    it('Should not login with empty credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        await expect(LoginPage.statusText).toHaveText(errorMessage);
    });
    it('Should logout after login', async () => {
        await LoginPage.open();
        await LoginPage.login(userName, validPassword);
        await expect(LoginPage.loginButton).toHaveText('Log Out');
        LoginPage.loginButtonClick();
        await expect(LoginPage.statusText).toHaveText(logoutMessage);
    });
});

describe('Validate fields in login page - Cases', () => {
    it('Username and password should mantain its attributes', async () => {
        await LoginPage.open();
        await expect(LoginPage.userNameText).toHaveAttr('placeholder', 'User Name');
        await expect(LoginPage.passwordText).toHaveAttr('placeholder', '********');
        await expect(LoginPage.userNameText).toHaveAttr('type', 'text');
        await expect(LoginPage.passwordText).toHaveAttr('type', 'password');
        await expect(LoginPage.userNameText).toHaveAttr('class', 'form-control');
        await expect(LoginPage.passwordText).toHaveAttr('class', 'form-control');
    });
    it('Username field must permit 20 characters max', async () => {
        await LoginPage.open();
        LoginPage.userNameText.setValue(longUserName);
        LoginPage.passwordText.setValue(invalidPassword);
        await expect((await LoginPage.userNameTextValue()).length).toBeLessThan(21);
        await expect((await LoginPage.passwordTextValue()).length).toBeLessThan(21);
    });
});

describe('Validate that a set of user credentials behave as expected - Bug Cases', () => {
    it('Should hide User and password after a succesfully login', async () => {
        await LoginPage.open();
        await LoginPage.login(userName, validPassword);
        LoginPage.loginButtonClick();
        await expect(LoginPage.userNameText).toHaveText('');
        await expect(LoginPage.passwordText).toHaveText('');
    });
    it('Should hide User and password after a failed login', async () => {
        await LoginPage.open();
        await LoginPage.login('', '');
        LoginPage.loginButtonClick();
        await expect(LoginPage.userNameText).toHaveText('');
        await expect(LoginPage.passwordText).toHaveText('');
    });
});
