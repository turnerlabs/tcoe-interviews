import { expect } from 'expect-webdriverio'
import cnnImagePage from '../pageobjects/cnn-image.page.js';


describe('CNN Image', async () => {

    it('check image presented', async () => {
        await cnnImagePage.open('travel/gallery/top-christmas-markets/index.html');
        await expect(cnnImagePage.imgActive).toBeDisplayed()
    })

    it('check previous button', async () => {
        var imgSrcOrig = await cnnImagePage.imgActive.getAttribute('src')
        await cnnImagePage.arrowPrevious.click()
        var imgSrcPrevious = await cnnImagePage.imgActive.getAttribute('src')
        
        await expect(imgSrcOrig).not.toEqual(imgSrcPrevious)
    })

    it('check next button', async () => {
        var imgSrcOrig = await cnnImagePage.imgActive.getAttribute('src')
        await cnnImagePage.arrowNext.click()
        var imgSrcNext = await cnnImagePage.imgActive.getAttribute('src')
        await expect(imgSrcNext).not.toEqual(imgSrcOrig)
    })

})


