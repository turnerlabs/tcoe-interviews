const VideoPage = require('../pageobjects/video.js');
const Const = require('../pageobjects/constants')
describe('Validate CNN Video Functionality', () => {

    beforeEach(async () => {
        await VideoPage.open(Const.videoURL);
    })
    it('should be able to play the video', async () => {
        await VideoPage.validatePlaying();
    });
    it('should be able to forward the video', async () => {
        await VideoPage.validatePlayTime();
    });
    it('validate trending videos', async () => {
        await VideoPage.validateTrendingVideos();
    });
});