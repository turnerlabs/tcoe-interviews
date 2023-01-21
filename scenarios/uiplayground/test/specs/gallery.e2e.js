//const LoginPage = require('../pageobjects/login.page')
const GalleryPage = require('../pageobjects/gallery.page')


describe('Validate Gallery search functionality', () => {
    it('Next and Privious option Validation', async () => {
        await GalleryPage.open()
        await GalleryPage.SearchGallery();
        await expect(GalleryPage.NextBtn).toBeExisting()
        await expect(GalleryPage.PriviousBtn).toBeExisting()
        await expect(GalleryPage.CountOfphotos).toBeExisting()  
    })

    it('Photos Count', async () => {
        await expect(GalleryPage.CountOfphotos).toBeExisting()  
    })
})


