const SampleAppPage = require('../pageobjects/sampleapp.page');

describe('Test the page opens correctly', () => {
    it('should open the sampleapp page', async () => {
        await SampleAppPage.open();
    });
});

describe('Test login with correct credentials shows a welcome message', () => {
    it('should open the sampleapp page and login with the credentials', async () => {
        await SampleAppPage.openAndLogin('test', 'pwd');
    });
    it('should show a welcome message', async () => {
        await SampleAppPage.loginStatusDisplayed();
        await SampleAppPage.loginStatusContains('Welcome,');
    });
});

describe('Test login with invalid credentials shows an error message', () => {
    it('should open the sampleapp page and login with the credentials', async () => {
        await SampleAppPage.openAndLogin('test', 'wrongpass123');
    });
    it('should show an error message', async () => {
        await SampleAppPage.loginStatusDisplayed();
        await SampleAppPage.loginStatusContains('Invalid username/password');
    });
});

describe('Test login with empty credentials shows an error message', () => {
    it('should open the sampleapp page and login with the credentials', async () => {
        await SampleAppPage.openAndLogin('', '');
    });
    it('should show an error message', async () => {
        await SampleAppPage.loginStatusDisplayed();
        await SampleAppPage.loginStatusContains('Invalid username/password');
    });
});

describe('Test if an already logged in user logs out', () => {
    it('should open the sampleapp page and login with the credentials', async () => {
        await SampleAppPage.openAndLogin('test', 'pwd');
    });
    it('should click on logout and a logout message shows up', async () => {
        await SampleAppPage.logoutDisplayed();
        await SampleAppPage.logout();
        await SampleAppPage.loginStatusDisplayed();
        await SampleAppPage.loginStatusContains('User logged out.');
    });
});

describe('Test username and password field types', () => {
    it('should open the sampleapp page', async () => {
        await SampleAppPage.open();
    });
    it('the username and password fields type should be text and password respectively', async () => {
        await SampleAppPage.verifyLoginFieldTypes();
    });
});
