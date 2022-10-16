
const TextInputPage = require('../pageobjects/textInput.page');
const ClassAttributePage = require('../pageobjects/classAttribute.page');
const SampleAppPage = require('../pageobjects/SampleApp.page');
const VerifyTextPage = require('../pageobjects/verifyText.page');
const MouseHoverPage = require('../pageobjects/mouseHover.page');
const AjaxDataPage = require('../pageobjects/ajaxData.page');

const correctUserName = 'Rivera'
const correctPassword = 'pwd'
const longestNameForButton = '123456789A123456789B123456789C123456789D123456789E123456789F123456789G123456789H123456789I123456789J123456789K123456789L123456789M123456789N123456789O123456789P123456789Q123456789R123456789S123456789T123456789U123456789V123456789W123456789X123456789Y123456789Z'

describe('When UI Test automation playground launched', () => {

    // Provide at least two test cases that prove the request behavior works as intended
    // Provide at least two test cases that prove the response behavior works as intended
    it('And user goes to sampleApp page and tries to login with valid credentials then login is sucess', async () => {
        await SampleAppPage.open();
        await SampleAppPage.login(correctUserName, correctPassword);
        const successMessage = await $('#loginstatus');
        await expect(successMessage).toHaveText('Welcome, ' + correctUserName + '!');
    });

    it('And the user goes to ajax page and click on the button then the data is loaded', async () => {
        await AjaxDataPage.open();
        await AjaxDataPage.triggerAjaxRequest();
        const result = await $("#content > p");
        await result.waitForExist({TimeRanges: 15000});
        await expect(result).toHaveText("Data loaded with AJAX get request.");
    });

    it('And the user goes to mousehover page and tries to click mouseHover element then the count should increase ', async () => {
        await MouseHoverPage.open();
        await MouseHoverPage.ClickOnClickmeButton();
        await browser.pause(2000);
        const text = await $("div.container>div>p>span");
        await expect(text).toHaveText('2');
    });

    it('And the user goes to class attribute page and checks that the class attribute is performed well', async () => {
        await ClassAttributePage.open();
        const clickable = await ClassAttributePage.checkClassAttribute();
        expect (clickable).toBeClickable();
        await browser.pause(2000)
    });

    it('And the user goes to the verify text and Verify the inner text of the text field then get the welcome text', async () => {
        await VerifyTextPage.open();
        await VerifyTextPage.getPlaygroundInnerTextElement();
        await browser.pause(2000);
        const text = $("//span[normalize-space(.)='Welcome UserName!']");
        await expect (text).toHaveTextContaining('Welcome UserName!');
    });

    // Provide at least one test case that proves the request behavior does not work as intended (there's a bug)
    // I couldn't find any use case that is failing in this playfield. In general assertion fail is an indication for a bug.

    // Provide at least one test case that demonstrates boundary based testing
    // Since I could not find a case for boundary value analysis, i am replicating this test case for boundary based testing
    // if this button name gets updated with only limited number of characters it would have been good for boundary value analysis

    it('And the user goes to text input and enter the text to analyze the boundary values for the button text', async () => {
        await TextInputPage.open();
        TextInputPage.enterTextAndSubmit(longestNameForButton);
        let expectedText = await $('#updatingButton');
        await expect(expectedText).toHaveText(longestNameForButton);
        const text = longestNameForButton.length;
        console.log('***Length of Text is: '+ text);

    // Checking whether there is any limit for button text with longest text
        TextInputPage.enterTextAndSubmit(longestNameForButton+longestNameForButton);
        expectedText = await $('#updatingButton') 
        const longText = (longestNameForButton+longestNameForButton).length;
        console.log("***Length of Longest text is: " + longText)
        await expect(expectedText).toHaveText(longestNameForButton+longestNameForButton)

    });

    // Provide at least one negative test case
    it('And the user goes to sampleApp page and tries to login with invalid credentials then login should not be successfull', async () => {
        await SampleAppPage.open();
        await SampleAppPage.login(correctUserName, '');
        const successMessage = await $('#loginstatus');
        await expect(successMessage).toHaveText('Invalid username/password');
    });
});


