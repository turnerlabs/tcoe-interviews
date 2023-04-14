import HomePage from '../pageobjects/UIPG_HomePage.js'
import ProgressBarPage from '../pageobjects/UIPG_ProgressBarPage.js'
import AjaxPage from '../pageobjects/UIPG_AjaxPage.js'
import VisibilityPage from '../pageobjects/UIPG_VisibilityPage.js'
import shadowdomPage from '../pageobjects/UIPG_shadowdomPage.js'
import ClickPage from '../pageobjects/UIPG_ClickPage.js'
import genric from '../pageobjects/genric.js'
import {expect} from 'chai'

describe('Technical coding assignment',()=>{
    
    it('Validate the Home Page',async()=>{
        //navigate to home page
        await HomePage.Navigate_Home()

        //capture the title of the home page and validate it
        let HomePageTitle = await HomePage.homePageTitle.getText();
        expect(HomePageTitle).to.equal('UI Test Automation\nPlayground')    
    })

    it('validate progress bar',async()=>{
        //navigate to progressBar page
        await HomePage.Navigate_specific('progressbar')

        //capture the title of the progressBar page and validate it
        let ProgressBarPageTitle = await ProgressBarPage.progressBarTitle.getText();
        expect(ProgressBarPageTitle).to.include('Progress Bar') 

        //click on Start button; waits for the progress bar to reach 75% and then click on Stop button
        await ProgressBarPage.start_btn.click()
        let progressBarValue = await ProgressBarPage.ProgressBarValue();
        let numericProgressBarValue = Number(progressBarValue);
        expect(numericProgressBarValue).to.be.a('number')
        const actual = numericProgressBarValue;
        const expected = 80;
        expect(actual).to.be.at.most(expected);               
    })

    it('Verification of message on Ajax Page',async()=>{
        //navigate to Ajax page
        await HomePage.Navigate_specific('ajax')

        //capture the title of the Ajax page and validate it
        let AjaxPageTitle = await AjaxPage.AjaxTitle.getText();
        expect(AjaxPageTitle).to.include('AJAX Data')

        //verify the message (Data loaded with AJAX get request) is not displayed more than once
        expect(await genric.isElementDisplayed(await AjaxPage.Ajax_btn)).to.be.true
        await AjaxPage.clickAjaxRequest_btn()
        
        let message =await AjaxPage.result_text.getText()
        expect(message).to.be.equal('Data loaded with AJAX get request.')
        await AjaxPage.clickAjaxRequest_btn()
     
        let msgCount = await AjaxPage.countOfMsg.length
        const MsgCount_number= Number(msgCount); //convert it to number datatype
        expect(MsgCount_number).to.equal(1); 
    })

    it('click on hide button then expect unhide button to show in place of hide button',async()=>{
         //navigate to visibility page
         await HomePage.Navigate_specific('visibility')

         //capture the title of the visibility page and validate it
         let VisibilityPageTitle = await VisibilityPage.VisibilityPageTitle.getText();
         expect(VisibilityPageTitle).to.include('Visibility')

        //click on hide button
        await VisibilityPage.hide_btn.click()
        
        // Expect the hide button to not be displayed
         expect(await VisibilityPage.hide_btn.isDisplayed()).to.be.false;

        // Expect the unhide button to be displayed
         expect(await VisibilityPage.unhide_btn.isDisplayed()).to.be.true;

        //assert for 'removed' button
         expect(await VisibilityPage.removed_btn.isExisting()).to.be.false;

        //assert for 'zeroWidth' button
        let widthProperty = await VisibilityPage.zeroWidth_btn.getCSSProperty('width')
        let widthValue=widthProperty.value
        expect(widthValue).to.equal('0px')

        //assert for 'Opacity 0' button
        let opacityProperty = await VisibilityPage.opacity_btn.getCSSProperty('opacity')
        let opacityValue=opacityProperty.value
        expect(opacityValue).to.equal(0)

        //assert for 'visibility hidden' button
        let visibilityProperty = await VisibilityPage.visibilityHidden_btn.getCSSProperty('visibility')
        let visibilityValue=visibilityProperty.value
        expect(visibilityValue).to.equal('hidden')

        //assert for 'display None' button
        let displayProperty = await VisibilityPage.display_btn.getCSSProperty('display')
        let displayValue=displayProperty.value
        expect(displayValue).to.equal('none')

        //assert for 'overlapped' button
        let overlapProperty = await VisibilityPage.overLap_btn.getCSSProperty('z-index')
        let OtheroverlapProperty = await VisibilityPage.otherOverLap_btn.getCSSProperty('z-index')
        let overlapValue=overlapProperty.value
        let otheroverlapValue=OtheroverlapProperty.value
        expect(overlapValue).to.equal(otheroverlapValue)
        
        //assert for 'offscreen' button
        let offscreenProperty_left = await VisibilityPage.offscreen.getCSSProperty('left')
        let offscreenProperty_right = await VisibilityPage.offscreen.getCSSProperty('right')
        let offscreenProperty_top = await VisibilityPage.offscreen.getCSSProperty('top')
        let offscreenProperty_bottom = await VisibilityPage.offscreen.getCSSProperty('bottom')
        let offscreenValue_left=offscreenProperty_left.value
        let offscreenValue_right=offscreenProperty_right.value
        let offscreenValue_top=offscreenProperty_top.value
        let offscreenValue_bottom=offscreenProperty_bottom.value
        expect(offscreenValue_left).to.equal('-9999px')
        expect(offscreenValue_right).to.equal('11441.8px')
        expect(offscreenValue_top).to.equal('-9999px')
        expect(offscreenValue_bottom).to.equal('10661.4px')
    })

    it(`the copy button doesn't work in shadowdom page`,async()=>{
        //navigate to shadowdom page
        await HomePage.Navigate_specific('shadowdom')

        //capture the title of the shadowdom page and validate it
        let shadowDomPageTitle = await shadowdomPage.shadowDomPageTitle.getText();
        expect(shadowDomPageTitle).to.include('Shadow DOM')

        //click on generate text
        let generateButton = await shadowdomPage.parentElement.shadow$(shadowdomPage.generate_btn); 
        await generateButton.click()

        //get text from edit field
        let textfield = await shadowdomPage.parentElement.shadow$(shadowdomPage.editfield_tf); 
        let data_generated = await textfield.getValue()
        
        //click on copy button
        let copyButton = await shadowdomPage.parentElement.shadow$(shadowdomPage.copy_btn)
        await copyButton.click()

        await textfield.click(); 
        await textfield.clearValue()
        await browser.keys(['Control','v']);

        //validating the text generated is not equal to text copied
        expect(await textfield.getValue()).to.equal(data_generated)
    })

    it(`validate that button turn green after click`,async()=>{
        //navigate to click page
        await HomePage.Navigate_specific('click')

        //capture the title of the click page and validate it
        let clickPageTitle = await ClickPage.clickPageTitle.getText();
        expect(clickPageTitle).to.include('Click')

        //click on the button
        let bluecolor =  '#007bff'
        let redclor = '#FF0000'

        let button = await ClickPage.click_btn
        const GetButtonColor_BC = await button.getCSSProperty('background-color');
        let  buttonColor_BC = GetButtonColor_BC.parsed.hex

        //validate the button color is blue before clicking
        expect(buttonColor_BC).to.equal(bluecolor)
        await button.click();

        //wait till the button changes the color after clicking
        await browser.waitUntil(async () => {
            const GetButtonColor_AC = await button.getCSSProperty('background-color')
            let  buttonColor_AC = GetButtonColor_AC.parsed.hex;
            return buttonColor_AC === redclor; 
          }, {
            timeout: 5000,
            timeoutMsg: 'Button color did not change to green after 5 seconds' 
          });

        //validate the button color is red after clicking
        const GetButtonColor_AC = await button.getCSSProperty('background-color')
        let  buttonColor_AC = GetButtonColor_AC.parsed.hex;
        expect(buttonColor_AC).to.equal(redclor)        
    })
    
})