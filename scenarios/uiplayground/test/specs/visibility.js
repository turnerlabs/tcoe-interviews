import VisibilityPage from "../pageobjects/visibility.page.js";
import {assert} from 'chai';

describe('Element visibility check', () => {

    before(() => {
        VisibilityPage.open();
    });

    it('Should check if elements are visible after pressing the hide button', async () => {

        assert.equal(await VisibilityPage.offscreenBtn.isDisplayedInViewport(), true);
        assert.equal(await VisibilityPage.removedBtn.isExisting(), true);
        assert.equal(await VisibilityPage.overlappedBtn.isClickable(), true);
        assert.equal(await VisibilityPage.invisibleBtn.isDisplayed(), true);
        assert.equal(await VisibilityPage.notdisplayedBtn.isDisplayed(), true);
        assert.equal(await VisibilityPage.transparentBtn.isDisplayed(), true);
        assert.equal(await VisibilityPage.zeroWidthBtn.isDisplayed(), true);

        await VisibilityPage.hideBtn.click();

        assert.equal(await VisibilityPage.offscreenBtn.isDisplayedInViewport(), false);
        assert.equal(await VisibilityPage.removedBtn.isExisting(), false);
        assert.equal(await VisibilityPage.overlappedBtn.isClickable(), false);
        assert.equal(await VisibilityPage.invisibleBtn.isDisplayed(), false);
        assert.equal(await VisibilityPage.notdisplayedBtn.isDisplayed(), false);
        assert.equal(await VisibilityPage.transparentBtn.isDisplayed(), false);
        assert.equal(await VisibilityPage.zeroWidthBtn.isDisplayed(), false);




    });

    //BUG CASE
    it('Should enable the unHide button after clicking in the Hide Button', async () => {

        await VisibilityPage.hideBtn.click();
        await expect(VisibilityPage.unHideBtn).toBeClickable();
        await VisibilityPage.unHideBtn.click();
        
    });
    
    
});
