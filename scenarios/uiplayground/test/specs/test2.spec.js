const VideoPage = require('../pageobjects/cnn_video/video.page');

describe('Test Spec 2 - Video', () => {
    
    it('Maximize Browser Window', async ()=> {
        browser.maximizeWindow();
    })

    xit('Verify play video on CNN website', async ()=> {
        await VideoPage.open();
        await VideoPage.playVideo();
        let isVideoStill = await VideoPage.checkVideoPlay();
        expect(isVideoStill).toHaveValue('false')
    });

    it('Verify pause video on CNN website', async ()=> {
        await VideoPage.hitPause();
        let isVideoStill = await VideoPage.checkVideoPause();
        expect(isVideoStill).toHaveValue('true');
        await VideoPage.hitPlay();
    });

    it('Verify play video progress bar', async ()=> {
        await VideoPage.open();
        await VideoPage.playVideo();
        let currentSliderValue = await VideoPage.getVideoSliderValue();
        await browser.pause(4000);
        let recentSliderValue = await VideoPage.getVideoSliderValue();
        expect(recentSliderValue).toHaveValue({gte: currentSliderValue});
    })

    it('Verify video suggestion', async ()=> {
        await VideoPage.open();
        await VideoPage.playVideo();
        let totalVideosOnPage = await VideoPage.getVideosCount()
        let totalVideosInPlayer = await VideoPage.getTotalSuggestedVideos()
        expect(totalVideosOnPage).toHaveValueContaining(totalVideosInPlayer)
    })

});
