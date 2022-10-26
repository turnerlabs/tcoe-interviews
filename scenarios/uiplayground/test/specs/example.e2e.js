const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const ResourcesPage = require('../pageobjects/resources.page');

describe('UI Validation scenarios', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open('login');

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('Validate going to resources page', async () => {
        await ResourcesPage.open('resources');
        await expect(ResourcesPage.pageHeader).toBeExisting();
        await expect(browser).toHaveUrlContaining('/resources');
    });

    it('Validate all heading of resources page', async () => {
        await ResourcesPage.open('resources');
        const count =  await ResourcesPage.resourcesHeaders.length;
        console.log("count of total elements:- " + count);
    });

    
});
