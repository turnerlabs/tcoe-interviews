const AjaxPage = require('../pageobjects/ajax.page');
const ShadowdomPage = require('../pageobjects/shadowdom.page');
const VisibilityPage = require('../pageobjects/visibility.page');
const ClickPage = require('../pageobjects/click.page');
var chai = require('chai');  
var expectChai = chai.expect; 

describe('UI Challenge 1 ->Bugs cases', () => {

    it('verify the message (Data loaded with AJAX get request) is not displayed more than once', async () => {
       
        await AjaxPage.open();
        await AjaxPage.twoClickOnPlayground();
        await expect(AjaxPage.singleMessage).toBeElementsArrayOfSize(1,{ wait: 5000 })
    })

    it('expect unhide button to show in place of hide button-', async () => {
        await VisibilityPage.open();
        await VisibilityPage.clickOnHide()
        await expect(VisibilityPage.unHideButton).toBeDisabled({ wait: 5000 })
    })

    
    it('the copy button does not work', async () => {
        await ShadowdomPage.open();
        await ShadowdomPage.generatorText();
        await ShadowdomPage.copyText();
        let generatedText = await ShadowdomPage.saveText();
        await ShadowdomPage.pasteText();
        await expect(ShadowdomPage.generatorTextButton).toHaveValue(generatedText,{ wait: 5000 });
     })


    it('proves the the button turns red after click', async () => {
        await ClickPage.open();
        await ClickPage.clickOnColorButton();
        let newColor = await ClickPage.getTheNewColor()
        expectChai(newColor).to.equal('rgba(220, 53, 69, 1)')
    })
})

