const ProgressBarPage = require('../pageobjects/progressbar.page');
const DynamicIdPage = require('../pageobjects/dynamicId.page');
const ClientSideDelayPage = require('../pageobjects/clientSideDelay.page');
const ClickPage = require('../pageobjects/click.page');

describe('Progress Bar Test', () => {
    it('should stop the progress bar in 75% percentage', async () => {
        const percentage = '75'
        await ProgressBarPage.open();
        await ProgressBarPage.clickOnStartButton();
        await ProgressBarPage.waitProgressBarToPercentage(percentage);
        await expect(ProgressBarPage.progressBar)
            .toHaveAttributeContaining('aria-valuenow', percentage);
    });
});

describe('Dynamic Id Test', () => {
    it('should print the text of the dynamic Id Button', async () => {
        await DynamicIdPage.open();
        const textButton = DynamicIdPage.dynamicIdButton.getText();
        console.log(textButton);
        await expect(DynamicIdPage.dynamicIdButton)
            .toHaveTextContaining('Button with Dynamic ID')
    });
});

describe('Client Side Delay Test', () => {
    it('should be able to wait for an element to show up after a JS processing', async () => {
        await ClientSideDelayPage.open();
        await ClientSideDelayPage.clickOnClientSideLogicTriggerButton();
        await ClientSideDelayPage.waitToJavaScriptProcessingFinished();
        await expect(ClientSideDelayPage.successMessage)
            .toHaveTextContaining('Data calculated on the client side.')
    });
});

describe('Click Test', () => {
    it('should be able to click and not generate a event', async () => {
        await ClickPage.open();
        await ClickPage.clickOnClickEventButton();
        await expect(ClickPage.clickEventButton).not
            .toHaveAttributeContaining('class', 'btn btn-primary');
    });
});