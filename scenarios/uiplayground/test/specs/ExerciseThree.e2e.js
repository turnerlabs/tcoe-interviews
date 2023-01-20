const ImageGallery = require('../pageobjects/imageGallery.page.js')

describe('Exercise Three - Test Suite', () => {
    
    beforeEach(async() => {
        await browser.url('/travel/gallery/top-christmas-markets/index.html')
    })

    it('TEST001 - Seek Image Forward', async() => {
        await ImageGallery.clickNextImageBtnAndValidateIfNextImageAppears()
    })
})