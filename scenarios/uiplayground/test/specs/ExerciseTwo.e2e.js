
const VideoPage = require("../pageobjects/video.page.js");

describe('Exercise Two - Test Suite', function() {
    
    beforeEach(function() {
        browser.url('/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn')
    })
    
    it('TEST001 - Mute volume', async() => {
        await VideoPage.clickOnPlayVideo();
        await VideoPage.muteVolume()
    })
})