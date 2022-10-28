const DynamicIDPage = require('../pageobjects/DynamicIDPage.js');

describe('get Text on a DynamicID element', ()=>{
    it('Should print the text on the button of the dynamicID', async()=>{
        await DynamicIDPage.open();
        await DynamicIDPage.getButtonText();
    });
});