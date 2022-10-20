const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const ResourcesPage = require('../pageobjects/resources.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

describe('UI Challenge', () => {
    it('should have Business link header', async () => {
        // NOTE: This test case failed because do not exist
        //       the expected section
        await HomePage.open();

        await expect(HomePage.businessLink).toBeExisting();
        await expect(HomePage.businessLink).toHaveTextContaining(
            'Business');
        await HomePage.clickOnBusinessLink()
        await expect(browser).toHaveUrl(
            'http://uitestingplayground.com/business')
    });
    it('should have Resources link header and validate its content', async () => {
        // NOTE: This additional test case is created with a different
        //       header section and other validations were added
        await HomePage.open();

        await expect(HomePage.resourcesLink).toBeExisting();
        await expect(HomePage.resourcesLink).toHaveTextContaining(
            'Resources');

        await HomePage.clickOnResourcesLink()
        await expect(browser).toHaveUrl(
            'http://uitestingplayground.com/resources')

        await expect(ResourcesPage.resourcesTitle).toBeExisting();

        await expect(ResourcesPage.learningSectionTitle).toBeExisting();
        await expect(ResourcesPage.w3schoolscomLink).toBeExisting();
        await expect(ResourcesPage.mdnLink).toBeExisting();
        await expect(ResourcesPage.leanRegexLink).toBeExisting();
        await expect(ResourcesPage.devHintsLink).toBeExisting();

        await expect(ResourcesPage.standardsSectionTitle).toBeExisting();
        await expect(ResourcesPage.w3cLink).toBeExisting();

        await expect(ResourcesPage.articlesSectionTitle).toBeExisting();
        await expect(ResourcesPage.testPyramidLink).toBeExisting();
        await expect(ResourcesPage.flakyTestLink).toBeExisting();

        await expect(ResourcesPage.communitySectionTitle).toBeExisting();
        await expect(ResourcesPage.ministryTestingLink).toBeExisting();
        await expect(ResourcesPage.uTestLink).toBeExisting();
        await expect(ResourcesPage.softwareTestingHelpLink).toBeExisting();
        await expect(ResourcesPage.dZoneHelpLink).toBeExisting();
        await expect(ResourcesPage.stackOverflowLink).toBeExisting();

    });
});

