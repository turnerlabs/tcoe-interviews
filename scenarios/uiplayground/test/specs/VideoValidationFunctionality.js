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

   
  

    it('should validate recommended videos ',async () =>{
        await VideoPage.validateRecommendedVideos();
    });

    it('should able to pause the video',async () =>{
        await VideoPage.pauseVideo();
        await VideoPage.validatePause();
    });
    
    it('should able to play  the  paused video ',async () =>{
        await VideoPage.playAndPauseClick();
        await VideoPage.validatePlayingPausedVideo();
    });

    it('should able to forward the video', async ()=> {
        await VideoPage.clickForward();
        await VideoPage.validateForward();
    });

    it('should able to backward the video', async ()=> {
        await VideoPage.clickBackward();
        await VideoPage.validateBackward();
    });

    it('should able to watch next video', async ()=> {
        await VideoPage.clickNextVideo();
        await VideoPage.validateAdvertisement();
        await VideoPage.validateNextVideoIsPlaying();
    });


    it('should able to watch previous video', async ()=> {
        await VideoPage.clickPreviousVideo();
        await VideoPage.validatePreviousVideoIsPlaying();
    });

    it('should able to watch in full screen',async () =>{
        await VideoPage.clickFullScreenMode();
        await VideoPage.validateFullScreenMode();
    });

    it('should able to exit from full screen',async () =>{
        await VideoPage.clickFullScreenMode();
        await VideoPage.validateExitFullScreenMode();
    });

});
