const VideoPage = require('../pageobjects/video.page');
const Utils = require('../utils');

const videoPath = 'videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn';
const videoTitle = `'Happy Days' star calls himself a fool for turning down iconic role`;
const videoDescription = `Actor Henry Winkler tells CNN's Chris Wallace about his career struggles and why he turned down the lead role in the iconic film "Grease."`;

describe('Video validation', () => {
    before(async function(){
        await Utils.open(videoPath);
    });

    it('should validate video page and play the video', async () => {
        await VideoPage.assertVideoTitle(videoTitle);
        await VideoPage.assertVideoDescription(videoDescription);
        await VideoPage.assertPlayVideoIsDisplayed();
        await VideoPage.clickAtPlayVideo();
    });

    it('should validate ad is being displayed', async function() {
        await VideoPage.assertPlayVideoDisappear();
        await VideoPage.assertAdIsBeingDisplayed();
        await VideoPage.waitAdDisappear();
    });

    it('should validate video is being played after ad finish', async function() {
        await VideoPage.assertVideoIsPlaying();
        await VideoPage.assertExpandVideoIsDisplayed();
    })

    it('should have suggested videos at recommendation section', async () => {
        await VideoPage.assertRecommendedVideosAreDisplayed()
    })
})


