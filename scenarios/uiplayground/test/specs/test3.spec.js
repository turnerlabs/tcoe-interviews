const ChristmasMarketPage =  require('../pageobjects/christmasMarkets.page')

describe('Image gallery functionality Verification', () => {
    it('Navigate to url', async () => {
        await ChristmasMarketPage.open();
    });
    it('Validate the image gallery functionality on the page', async () => {
        await expect(ChristmasMarketPage.sliderFrame).toExist();
        await expect(ChristmasMarketPage.galleryCount).toExist();
        await ChristmasMarketPage.totalImages();
        await ChristmasMarketPage.next.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await ChristmasMarketPage.currentImage();
        await ChristmasMarketPage.previous.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await ChristmasMarketPage.currentImage();
        await ChristmasMarketPage.next.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await ChristmasMarketPage.currentImage();
        await ChristmasMarketPage.previous.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await ChristmasMarketPage.currentImage();
    })
});