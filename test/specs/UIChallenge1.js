import ProgressPage from '../pageobjects/progressPage.js';
import ShadowCopy from '../pageobjects/shadowCopy.js';
import AjaxPage from '../pageobjects/ajaxPage.js';
import HidePage from '../pageobjects/hidePage.js';
import ButtonColor from '../pageobjects/buttonColor.js';

describe("UI Challenge 1",async()=>{

    it('Progress bar start wait stop and tollerence', async () => {
        await ProgressPage.open()
        await ProgressPage.startButton.click()
        await ProgressPage.progressBar.waitUntil(async function() {
            const tollerence = (await this.getAttribute('aria-valuenow'))
            return ( tollerence >= '75' && tollerence <= '80' )
        },
        {
            timeout: 50000,
            timeoutmsg:"Failed while waiting for progressBar to reach 75%"
        })
        await ProgressPage.stopButton.click()
    });

    it('Ajax to validate text is displayed only once', async () => {
        await AjaxPage.open()
        await AjaxPage.ajaxClick(2)
        const numberOfTimesMsgDisp = await AjaxPage.ajaxSuccess.length
        expect(numberOfTimesMsgDisp).toEqual(1)
    });

    it('Hide and Unhide button test', async () => {
        await HidePage.open()
        await HidePage.hideButton.click()
        let btnText = await HidePage.unHideButton.getText()
        expect(btnText.toLowerCase()).toEqual('unhide'.toLowerCase())
    });

    it('Copy button test validation', async () => {
        await ShadowCopy.open()
        await ShadowCopy.generatorText()
        await ShadowCopy.copyText()
        let generatedText = await ShadowCopy.saveText()
        let pastedText = await ShadowCopy.pasteText()
        expect(pastedText).toEqual(generatedText)
    });

    it('Button turns red validation', async () => {
        await ButtonColor.open()    
        await ButtonColor.badButton.click()
        const colorOfButton =  await ButtonColor.badButton.getCSSProperty('background-color')
        const colorOfButtonActual = colorOfButton.value
        expect(colorOfButtonActual).toEqual("rgba(255,0,0,1)")
    });    
  
})