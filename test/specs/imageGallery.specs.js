const ImageGalleryPage = require('../pageobjects/imageGallery.page')

describe('Validate the image gallery functionality on the page', () => {

    it('should appear imagen for previous and next', async () => {
        await ImageGalleryPage.openS()
        await ImageGalleryPage.pressNextImgButton
        await expect(ImageGalleryPage.imageContainer).toBeExisting()
        await expect(ImageGalleryPage.title).toBeExisting()
        await expect(browser).toHaveUrlContaining('top-christmas-markets/index.html')
        console.log("COUNTER", await ImageGalleryPage.title.getText())

    })

   
})