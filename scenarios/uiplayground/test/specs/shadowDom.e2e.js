const ShadowDomPage = require('../pageobjects/ShadowDom.page');
const {navigationSettings} = require('../dataProviders/navigation');

describe('Testing Copy button functionality for the GUID Generator', () => {
    it('should navigate and generate a GUID', async () => {
        await ShadowDomPage.navigateToWebsite(navigationSettings.sites.shadowDom);
        await ShadowDomPage.generateGuid();
    });

    it ('should validate the GUID have been generated and click the copy button', async () => {
        await ShadowDomPage.validateInput();
        await ShadowDomPage.copyGuidValue();
    });

    it('should verify pasted value is the original GUID', async () => {
        await ShadowDomPage.validatePastedValue();
    });

});