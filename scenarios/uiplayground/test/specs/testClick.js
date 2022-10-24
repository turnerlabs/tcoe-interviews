const ClickPage = require('../pageobjects/click.page');


describe('validate page click ', () => {
    it('the button is displayed', async () => {
        await ClickPage.open();

        await expect(ClickPage.buttonBadButton).toBeExisting();
    });

    it('the button is clickable', async () => {

        await ClickPage.clickButton();
        await expect(ClickPage.buttonBadButton).toHaveAttribute('class', 'btn btn-success');
    });
});
