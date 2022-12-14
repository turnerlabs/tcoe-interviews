import { expect } from 'expect-webdriverio'
import cnnVideoPage from '../pageobjects/cnn-video.page.js';


describe('CNN Video', async () => {

    it('check video', async () => {
        await cnnVideoPage.open('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn');
        await expect(cnnVideoPage.btnPlay).toBeClickable()
    })

    it('check video play', async () => {
        await cnnVideoPage.btnPlay.click()
        await expect(cnnVideoPage.bottonControl).toBeDisplayed()
    })

    it('check video suggestions', async () => {
        await expect(cnnVideoPage.videoSuggestions).toBeDisplayed()
    })

})


