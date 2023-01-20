const BasePage = require('../pageobjects/BasePage');
const ImageData = require('../../support/ImageData.json');
const GalleryPage = require('../pageobjects/GalleryPage');

let srcUrltoVerify , altDescToVerify;
describe('Image Functionality Validation', async () =>{   

    it('Should navigate to image gallerypage and display the image successfully', async () => {
        BasePage.openPage(ImageData.imageUrlPath);
        await GalleryPage.validateGalleryTitle();
        await GalleryPage.validateGalleryCount();
        await GalleryPage.validateImage();
        srcUrltoVerify = await GalleryPage.findSrcUrlOfImage();
        altDescToVerify = await GalleryPage.findDescriptionOfImage();
    });

    it('Should click next button to display the image successfully', async () => {
        await GalleryPage.clickNext();
        await GalleryPage.validateImage();
        await GalleryPage.validateSrcUrl(srcUrltoVerify);
        await GalleryPage.validateAltDescription(altDescToVerify);
        srcUrltoVerify = await GalleryPage.findSrcUrlOfImage();
        altDescToVerify = await GalleryPage.findDescriptionOfImage();
    });

    it('Should click previous button to display the image successfully', async () => {
        await GalleryPage.clickPrevious();
        await GalleryPage.validateImage();
        await GalleryPage.validateSrcUrl(srcUrltoVerify);
        await GalleryPage.validateAltDescription(altDescToVerify);
    });
});
