const CNNPage = require('../pageobjects/cnnPage');
const ImageGalleryPage = require('../pageobjects/imageGallery.page');

describe('Image gallery validation', () => {
    it('should see image gallery successfully', async () => {
        await CNNPage.openCNNHome('travel/gallery/top-christmas-markets/index.html');

        await ImageGalleryPage.assertTravelLogoIsBeingDisplayed();
        await ImageGalleryPage.assertImageGalleryTitle('The best Christmas markets in the world');
        await ImageGalleryPage.assertCurrentImageDescription('19 top christmas market basel switzerland');
        await ImageGalleryPage.assertGalleryPhotoCount('1/26');

        await ImageGalleryPage.clickAtNextImage();
        await ImageGalleryPage.assertCurrentImageDescription('01 top christmas markets STRASBOURG');
        await ImageGalleryPage.assertGalleryPhotoCount('2/26');
    })
})


