const AjaxPage = require('../pageobjects/ajax.page');

describe('Ajax Button', async () => {

    before(async function() {
        await AjaxPage.open();
      });
    /**
     * positive case
     */
    it('should show the label with correct data after pressing the button', async () => {
        await AjaxPage.clickBtnAjax();
        await AjaxPage.waitSpinnerEnds();
        await expect(AjaxPage.contentElems).toBeElementsArrayOfSize(1);
        await expect(AjaxPage.contentElems[0]).toHaveTextContaining('Data loaded with AJAX get request.');
    });

    /**
     * bug case
     */
     it('should show the label only once when the button is pressed more that once', async () => {
        await AjaxPage.clickBtnAjax();
        await AjaxPage.waitSpinnerEnds();
        await AjaxPage.clickBtnAjax();
        await AjaxPage.waitSpinnerEnds();
        await expect(AjaxPage.contentElems).toBeElementsArrayOfSize(1);
    });
});