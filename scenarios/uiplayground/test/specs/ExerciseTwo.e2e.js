
const VideoPage = require("../pageobjects/video.page.js");

describe('Exercise Two - Test Suite', () => {
    
    beforeEach(async() => {
        await browser.url('/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn')
    })
    
    it('TEST001 - Mute volume', async() => {
        await VideoPage.clickOnPlayVideoAndValidateIfPlayerIsRunning();
        await VideoPage.muteVolumeAndValidateIfPlayerIsMuted()
    })

    it('TEST002 - Verify if the player can run the Video', async() => {
        await VideoPage.clickOnPlayVideoAndValidateIfPlayerIsRunning();
    })

    it('TEST003 - Validate if time counter changes', async() => {
        await VideoPage.clickOnPlayVideoAndValidateIfPlayerIsRunning();
        await VideoPage.getTimeCounterValueAndValidateIfChanges();
    })

    it('TEST004 - Validate seek forward button functionality', async() => {
        await VideoPage.clickOnPlayVideoAndValidateIfPlayerIsRunning();
        await VideoPage.skipTenSecondsAndValidateTimeCounter()
    })

    xit('TEST005 - Validate presence of suggested videos', async() => {
        await VideoPage.validateItemsOfSuggestedVideosList()
    })
})