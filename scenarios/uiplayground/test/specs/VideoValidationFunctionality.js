const BasePage = require('../pageobjects/BasePage');
const VideoData = require('../../support/VideoData.json');
const VideoPage = require('../pageobjects/VideoPage');

describe('Video Functionality Validation', async () =>{   

    it('Should navigate to Video Url page  and Validate Video', async () => {
        BasePage.openPage(VideoData.urlPath);
        await VideoPage.validateVideo();
    });

    it('should able to play and watch the advertisement',async () =>{
        await VideoPage.playVideo();
        await VideoPage.validateAdvertisement();
    });

    it('should able to watch the main video',async () =>{
        await VideoPage.validateVideoPlaying();
    });

    it('should able to pause  the  video',async () =>{
        await VideoPage.pauseVideo();
        await VideoPage.validatePause();
    });

    it('should validate recommmended videos ',async () =>{
        await VideoPage.validateRecommendedVideos();
    });
});
