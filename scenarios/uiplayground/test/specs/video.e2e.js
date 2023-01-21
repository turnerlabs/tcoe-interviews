
const videoPage = require('../pageobjects/video.page')


describe('Validate Video functionality', () => {
    it('playbutton should work after click', async () => {
        await videoPage.open()
        await videoPage.ValidateVideoPlay();
        await expect(videoPage.Pausebtn).toBeExisting()
       
    })
    it('Video Suggestion should Display', async () => {
        await videoPage.open()
        await expect(videoPage.suggestions).toBeExisting()
       
    })



})


