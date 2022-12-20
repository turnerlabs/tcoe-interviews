const VideoPage = require('../pageobjects/videos.page')

describe('Validate site video functionality', () => {

    it('should play the video', async () => {
        await VideoPage.openS()
        await VideoPage.pressPlay()
        console.log("AL : ", VideoPage.barProgress.getText())
        await VideoPage.barProg()
        browser.pause(3000)
        await expect(VideoPage.videsoContainer).toBeExisting()
        await expect(VideoPage.videoListLabel).toBeExisting()
        await expect(browser).toHaveUrlContaining('henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn')
    })

    it('Validate related video suggestions feature', async () => {    
      await VideoPage.pressVideosSub()
      await VideoPage.barProg()
      expect(VideoPage.videoListItems).toBeExisting()
      await expect(browser).toHaveUrlContaining('cryptocurrency-actor-ben-mckenzie-intv-contd-cnntm-vpx.cnn')
  })  
})