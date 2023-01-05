const VideoPage = require('../pageobjects/video.page');
const CNNPage = require('../pageobjects/cnnPage');

const videoPath = 'videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn';
const videoTitle = `'Happy Days' star calls himself a fool for turning down iconic role`;
const videoDescription = `Actor Henry Winkler tells CNN's Chris Wallace about his career struggles and why he turned down the lead role in the iconic film "Grease."`;

describe('Video validation', () => {
    it('should play video', async () => {
        await CNNPage.openCNNHome(videoPath);

        await VideoPage.assertVideoTitle(videoTitle);
        await VideoPage.assertVideoDescription(videoDescription);
        await VideoPage.assertPlayVideoIsDisplayed();
        await VideoPage.clickAtPlayVideo();
        
        await VideoPage.assertPlayVideoDisappear();
        await VideoPage.assertAdIsBeingDisplayed();
        await VideoPage.waitAdDisappear();

        await VideoPage.assertVideoIsPlaying();
        await VideoPage.assertExpandVideoIsDisplayed();
    });

    it('should have suggested videos at recommendation section', async () => {
        await VideoPage.assertRecommendSectionTitle('Stories worth watching');
        await VideoPage.assertRecommendedVideosAreDisplayed()
    })
})


