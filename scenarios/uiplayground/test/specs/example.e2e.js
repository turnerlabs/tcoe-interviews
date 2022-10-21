const UTAP_HomePage =require('../pageobjects/UTAP_Home') 
const urlData = require('../resources/pageLinks')

describe('UTAP Home page tests', () => {

    beforeEach(async() => {
        await UTAP_HomePage.open()
    })

    it('verify Dynamic ID Link', async () => {
        await UTAP_HomePage.clickDynamicIDLink();
        let url = await UTAP_HomePage.getUrl()
        expect(url).to.be.equal(urlData.dynamicIDPageURL);
    });

    it('verify Class Attribute Link', async () => {
        await UTAP_HomePage.clickClassAttributeLink();
        let url = await UTAP_HomePage.getUrl()
        expect(url).to.be.equal(urlData.classAttributePageURL);
    });

    it('verify text input link', async () => {
        await UTAP_HomePage.clickTextInputLink();
        let url = await UTAP_HomePage.getUrl()
        expect(url).to.be.equal(urlData.textInputPageURL);
    });

    it('verify click Link', async () => {
        await UTAP_HomePage.clickClickLink();
        let url = await UTAP_HomePage.getUrl()
        expect(url).to.be.equal(urlData.clickPageURL);
    });

    it('verify Mouse Over Link', async () => {
        await UTAP_HomePage.clickMouseoverLink();
        let url = await UTAP_HomePage.getUrl()
        expect(url).to.be.equal(urlData.mouseoverPageURL);
    });

    it('verify visibility Link', async () => {
        await UTAP_HomePage.clickVisibilityLink();
        let url = await UTAP_HomePage.getUrl()
        expect(url).to.be.equal(urlData.visibilityPageURL);
    });

    it('verify scrollBar Link', async () => {
        await UTAP_HomePage.clickScrollbarsLink();
        let url = await UTAP_HomePage.getUrl()
        expect(url).to.be.equal(urlData.scrollbarsPageURL);
    });
});