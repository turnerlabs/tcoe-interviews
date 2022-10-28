const ClickPage = require('../pageobjects/clickPage.js');

describe('try an event base click', ()=>{
    it('Click on the bad button and expect for the color change', async()=>{
        await ClickPage.open();
        await ClickPage.clickOnBtn();
        await expect(ClickPage.btnClickIgnore).toHaveElementClass("btn btn-success");
    });
});