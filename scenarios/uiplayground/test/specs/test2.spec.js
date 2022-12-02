const VideoPage =  require('../pageobjects/video.page')

describe('Video Verification', () => {
    it('Navigate to url', async () => {
        await VideoPage.open();
    });
    it('Validate the video functionality on the page', async () => {
        await VideoPage.playIcon.click();
        await expect(VideoPage.video).toExist();
        //pause for 2 seconds
        await browser.pause(2000);
        await VideoPage.forward10sec.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await VideoPage.back10sec.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await VideoPage.pauseIcon.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await VideoPage.forward10sec.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await VideoPage.back10sec.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await VideoPage.playIcon.click();
    });
    it('Validate related video suggestions feature', async () => {
        await expect(VideoPage.videoCollection).toExist();
        await expect(VideoPage.videoCollectionTitle).toBeDisplayed();
        await expect(VideoPage.videoCollectionNext).toBeDisplayed();
        await VideoPage.videoCollectionNext.click();
        //pause for 2 seconds
        await browser.pause(2000);
        await expect(VideoPage.videoCollectionPrev).toBeDisplayed();
        await VideoPage.videoCollectionPrev.click();
        //pause for 2 seconds
        await browser.pause(2000);
    });
});