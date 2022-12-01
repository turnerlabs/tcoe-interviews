const VideoPage = require('./../pageobjects/videoPage/video.page')

describe('Play a video', async () => {
    
        // click on search button and search for specific term
        it('should content a video page displayed', async () => {
            VideoPage.open();
            VideoPage.playVideo();
            //************Create Expects********************//
            expect(VideoPage.videoPlayButton).toBeDisplayed();
            expect(VideoPage.videoTitle).toBeDisplayed();
            expect(VideoPage.videoDescription).toBeDisplayed();
            expect(VideoPage.trendingVideos).toBeDisplayed();
        });
});