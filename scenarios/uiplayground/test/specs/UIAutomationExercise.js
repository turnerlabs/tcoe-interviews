import ProgressbarPage from '../pageobjects/progressbar.page.js'
import AjaxPage from '../pageobjects/ajax.page.js'
import VisibilityPage from '../pageobjects/visibility.page.js'
import ShadowDomPage from '../pageobjects/shadowDom.page.js'
import ClickPage from '../pageobjects/click.page.js'

describe('UI Test Automation Exercise', () => {
    
   it('should verify the progress bar value', async () => {
        await ProgressbarPage.open('progressbar');
        await ProgressbarPage.clickStartButton();
        const progressBarValue = await ProgressbarPage.verifyProgressBarValue();
        const numericProgressBarValue = Number(progressBarValue);
        expect(numericProgressBarValue).toBeLessThanOrEqual(80);
    })

    it('should verify the ajax value', async () => {
        await AjaxPage.open('ajax');
        await AjaxPage.clickAjaxRequestButton();
        await AjaxPage.verifyMessage();
        await AjaxPage.clickAjaxRequestButton(); //As per requirement ajax button clicked twice
        const messageCount = await AjaxPage.getNumberOfMessageDisplayed(); 
        const numberOfMessageDisplayed = Number(messageCount);
        expect(numberOfMessageDisplayed).toBe(1); //Validating number of messages not more than 1
      })

      it('should verify the button visibility', async () => {
        await VisibilityPage.open('visibility');
        await VisibilityPage.clickHideButton();
        await VisibilityPage.verifyRemovedButtonDisplayed();
        await VisibilityPage.verifyZeroWidthButtonDisplayed();
        await VisibilityPage.verifyOpacityButtonDisplayed();
        await VisibilityPage.verifyVisibilityHiddenButtonDisplayed();
        await VisibilityPage.verifyDisplayNoneButtonDisplayed();
        await VisibilityPage.verifyOffsetButtonDisplayed();
        const isUnhideButtonDisplayed = await VisibilityPage.verifyUnhideButtonVisible();
        expect(isUnhideButtonDisplayed).toBe(true);
   })

   it('should verify the shadow DOM', async () => {
        await ShadowDomPage.open('shadowdom');
        const generatedValue = await ShadowDomPage.getGeneratedValue(); 
        const clipboardValue = await ShadowDomPage.getClipboardValue();
        expect(clipboardValue).toBe(generatedValue);      
    })  
   
   it('should verify the color of the button after click', async () => {
        const expectedColor = 'rgba(255, 0, 0, 1)'; //Expected red color rgb value is stored
        await ClickPage.open('click');
        const colorValue = await ClickPage.getButtonColor();
        expect(colorValue).toBe(expectedColor);
   }) 
      
})