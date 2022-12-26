const GalleryPage = require('../pageobjects/gallery.page');

describe('Should be validate cnn page to gallery functionalities',()=>{

    beforeEach(async ()=>{
        await GalleryPage.openGallery();
    })

    it('Validate the image gallery functionality pass to next page',async ()=>{
        await GalleryPage.nextImage();
    })

    it('Validate the image gallery functionality pass to previous page',async ()=>{
        await GalleryPage.previousImage();
    })

})





