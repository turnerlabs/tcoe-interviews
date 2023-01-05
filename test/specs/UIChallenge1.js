import ProgressPage from '../pageobjects/progressPage.js';
import ShadowCopy from '../pageobjects/shadowCopy.js';
import AjaxPage from '../pageobjects/ajaxPage.js';
import HidePage from '../pageobjects/hidePage.js';
import ButtonColor from '../pageobjects/buttonColor.js';

describe("UI Challenge 1",async()=>{

it('Progress bar start wait stop and tollerence', async () => {

        await browser.url("progressbar")
        await ProgressPage.startButton.click(); 
        await ProgressPage.progressBar.waitUntil(async function() {
            const tollerence = (await this.getAttribute('aria-valuenow'))

            return ( tollerence >= '75' && tollerence <= '80' )
        },
        {
            timeout: 50000
        });
        await ProgressPage.stopButton.click();
        const progressBarValue =await ProgressPage.progressBar.getAttribute('aria-valuenow');
});

it('Ajax to validate text is displayed only once', async () => {

    await browser.url("ajax")

    for(let i = 0; i<2; i++){
        await AjaxPage.ajaxButton.click(); 
        await AjaxPage.spinner.waitUntil(async function() {
            const tollerence = (await this.getAttribute('style'))
            return ( tollerence === 'display: none;' )
        },
        {
            timeout: 50000
        });
    }
    const numberOfTimesMsgDisp = await ProgressPage.ajaxSuccess.length
    await expect(numberOfTimesMsgDisp).toEqual(1)
});

it('Hide and Unhide button test', async () => {

    await browser.url("visibility")
    await HidePage.hideButton.click()

    let btnText = await HidePage.unHideButton.getText()
    await expect(btnText.toLowerCase()).toEqual('unhide'.toLowerCase())

});

it('Copy button test validation', async () => {

    await browser.url("shadowdom")
        await ShadowCopy.generatorText()
        await ShadowCopy.copyText()
        let generatedText = await ShadowCopy.saveText()
        await ShadowCopy.pasteText()
        await expect(ShadowCopy.generatorTextButton).toHaveValue(generatedText,{ wait: 5000 })


});

it('Button turns red validation', async () => {

    await browser.url("click")
    
    await ButtonColor.badButton.click()
    const colorOfButton =  await ButtonColor.badButton.getCSSProperty('background-color')


   const colorOfButtonActual = colorOfButton.value
    await expect(colorOfButtonActual).toEqual("rgba(255,0,0,1)")
});    
    
    
})