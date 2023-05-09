import progressbarPage from "../pageobjects/progressBar.page.js";
import unhideBtnPage from "../pageobjects/visibility.page.js";
import shadowDomPage from "../pageobjects/shadowDom.page.js";
import clickBtnPage from "../pageobjects/click.page.js";
import AjaxDataPage from "../pageobjects/ajax.page.js";
import PlaygroundPage from "../pageobjects/baseClassutaplayground.page.js";

describe('Positive Cases: ', async () => {

    beforeEach(async () => {
        await browser.maximizeWindow();
    });

    context('1. Component', async () => {

        it('Verifying the title of page', async () => {
            await PlaygroundPage.openUItestingPPage();
            await expect(browser).toHaveTitleContaining('UI Test Automation Playground');
            await expect(browser).toHaveUrl('http://uitestingplayground.com/');
        })
    })

    context('2. Verification of test that clicks Start button and then wait for the progress bar to reach 75%. Then the test should click Stop, 5% is acceptable tolerance limit to pass the test.', async () => {

        it('opening the browser using provided url and verifying the progress % of progress bar to be 75% with 5% tolerance', async () => {
            await PlaygroundPage.urlOfProgressBarPage();
            await expect(browser).toHaveTitleContaining('Progress Bar');
            await expect(progressbarPage.startBtn).toHaveTextContaining('Start', { timeout: 5000, timeoutMsg: 'cant find button with the value of text Start' });
            await expect(progressbarPage.stopBtn).toHaveText('Stop', 'stop button is not having text as stop');
            await expect(progressbarPage.progressBar).toBePresent();
            await expect(progressbarPage.progressBar).toHaveAttribute('role', 'progressbar', 'progress bar is not present');
            await progressbarPage.waitForProgressBarToPerform();
            let receivedAttributeValue = await progressbarPage.attributeValue;
            let convertingReceivedAttributeValue = await Number(receivedAttributeValue);
            await expect(await convertingReceivedAttributeValue).toBeGreaterThanOrEqual(75);
            await expect(await convertingReceivedAttributeValue).toBeLessThanOrEqual(80);

        })
    })


    context('Bug cases: 3. Verification by clicking on the displayed button more than once and verify the message (Data loaded with AJAX get request) is not displayed more than once', async () => {
        
        it('opening the browser using provided url verifying the display of text message not more than once', async () => {
            await AjaxDataPage.urlOfAjaxDataPage();
            await expect(browser).toHaveTitleContaining('AJAX Data')
            await AjaxDataPage.clickOnAjaxBtn();
            await AjaxDataPage.waitForTextMsgToDisplayed();
            await expect(await AjaxDataPage.numberOfTextBar).toBe(1);
            await AjaxDataPage.clickOnAjaxBtn();
            await AjaxDataPage.waitForTextMsgToDisplay();
            await expect(await AjaxDataPage.numberOfTextBar).toBe(1);
        })
    })

    context('Bug cases: 4. Verifying by clicking on hide button and expecting unhide button to show in place of hide button', async () => {

        it("Opening the browser using url provided and verifying the changes in 'Hide' button", async () => {
            await unhideBtnPage.urlOfVisibilityPage();
            await expect(browser).toHaveTitleContaining('Visibility')
            await expect(unhideBtnPage.hideBtn).toBeDisplayed();
            await unhideBtnPage.clickOnHideBtn();
            await expect(unhideBtnPage.removedBtn).not.toBeExisting();
            let widthOfZeroWidthBtn = (await (await unhideBtnPage.zeroWidhBtn).getCSSProperty('width')).value;
            await expect(widthOfZeroWidthBtn).toBe('0px');
            let getCSSpropertyOfOverlappedBtn=(await (await unhideBtnPage.overlappedBtn).getCSSProperty('background-color')).parsed.hex;
            await expect(getCSSpropertyOfOverlappedBtn).toBe('#FFFFFF');
            let heightOfOverlappedBtn=(await (await unhideBtnPage.overlappedBtn).getCSSProperty('height')).value;
            await expect(heightOfOverlappedBtn).toBe('38px');
            let widthOfOverlappedBtn=(await (await unhideBtnPage.overlappedBtn).getCSSProperty('width')).value;
            await expect(widthOfOverlappedBtn).toBe('108px');
            let opacityValue = (await (await unhideBtnPage.opacityBtn).getCSSProperty('opacity')).parsed.value;
            await expect(opacityValue).toBe(0);
            await expect(unhideBtnPage.visibHiddBtn).not.toBeDisplayedInViewport();
            await expect(unhideBtnPage.displayNoneBtn).toHaveAttributeContaining('style', 'none');
            const topValue= (await (await unhideBtnPage.offScreenBtn).getCSSProperty('top')).value;
            await expect(topValue).toBe('-9999px');
            const leftValue= (await (await unhideBtnPage.offScreenBtn).getCSSProperty('left')).value;
            await expect(leftValue).toBe('-9999px');
            await expect(unhideBtnPage.hideBtn).toHaveTextContaining('Unhide');
        })
    })


    context("Bug cases: 5. Verifying that the copy button doesn't work", async () => {

        it('opening the browser using url provided and checking if the copy button is working by fetching data from clipboard', async () => {
            await shadowDomPage.urlOfShadowDomPage();
            await expect(browser).toHaveTitleContaining('Shadow DOM');
            await expect(shadowDomPage.settingBtn).toBeClickable();
            await expect(shadowDomPage.copyBtn).toBePresent();
            await shadowDomPage.clickOnSettBtn();
            await shadowDomPage.getValueFromTextFiels();
            await shadowDomPage.clickOnCopyBtn();
            let data = await shadowDomPage.dataFromClipboard();
            let textFromTextField = (await shadowDomPage.textField).getValue();
            await expect(await textFromTextField).toStrictEqual(data);
        })
    })

    context("Bug cases: 6. Verifying that the given button turns red after click.", async () => {

        it('opening the browser using url provided and performing the operation to verify the colour change of button', async () => {
            await clickBtnPage.urlOfClickPage();
            await expect(browser).toHaveTitleContaining('Click')
            await expect(clickBtnPage.sampleBtn).toBePresent();
            await clickBtnPage.sampleBtnClick();
            const colourOfSampleBtnAfterClick = (await clickBtnPage.sampleBtn.getCSSProperty('color')).parsed.hex;
            await expect(await colourOfSampleBtnAfterClick).toBe('#FF0000');
        })
    })

})

