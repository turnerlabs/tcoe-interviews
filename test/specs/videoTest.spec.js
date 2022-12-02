const MediaPage = require("../pageobjects/MediaPage");
describe("Video functionality tests", function () {

beforeEach(async () => {
    await browser.url("https://www.cnn.com/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn");
})
    it("Media can play and pause video", async () => {
        const attrValueWhenPlaying = "pause-icon";
        const attrValueWhenPaused = "play-icon";
        const mediaPage = new MediaPage();
        await mediaPage.playVideo();
        // Verify video is playing
        let status = await mediaPage.getMediaPlayerStatus();
        expect(status).toEqual(attrValueWhenPlaying);
        await mediaPage.pauseVideo();
        const videoTitle = await mediaPage.getActiveVideoTitle();
        let newStatus = await mediaPage.getMediaPlayerStatus();
        expect(newStatus).toEqual(attrValueWhenPaused);
        const suggestedVideoTitle = await mediaPage.getSuggestedActiveVideoTitle();
        // verify video title in thumbnail is the same with active video
        expect(videoTitle).toEqual(suggestedVideoTitle);
    });


    it("User can scroll suggested videos", async () => {
        const mediaPage = new MediaPage();
        const suggestedVideosCount = 5;
        let defaultDisplayList = await mediaPage.getDisplayedSuggestedVideos();
        expect(defaultDisplayList.length).toEqual(suggestedVideosCount);
        await mediaPage.clickScrollRight();
        let newDisplayList = await mediaPage.getDisplayedSuggestedVideos();
        expect(defaultDisplayList === newDisplayList).toBeFalsy();
        await mediaPage.clickScrollLeft();
        // This returns to the default 5 suggested videos
        let leftScrollDisplay = await mediaPage.getDisplayedSuggestedVideos();
        expect(defaultDisplayList === leftScrollDisplay).toBeFalsy();
    });

    it("User can play from suggested videos", async () => {
        const mediaPage = new MediaPage();
        await mediaPage.playRandomVideoFromSuggestions();
        // verify video is playing
        const attrValueWhenPlaying = "pause-icon";
        let status = await mediaPage.getMediaPlayerStatus();
        expect(status).toEqual(attrValueWhenPlaying);
    });
});
