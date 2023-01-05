const Utils = require('../utils');
const ImageGalleryPage = require('../pageobjects/imageGallery.page');

const imageGalleryPath = 'travel/gallery/top-christmas-markets/index.html'

describe('Image gallery validation', () => {

    before(async function(){
        await Utils.open(imageGalleryPath);
    });

    it('should see image gallery successfully', async () => {
        await ImageGalleryPage.assertTravelLogoIsBeingDisplayed();
        await ImageGalleryPage.assertImageGalleryTitle('The best Christmas markets in the world');
        await ImageGalleryPage.assertCurrentImageDescription('19 top christmas market basel switzerland');
        await ImageGalleryPage.assertGalleryPhotoCount('1/26');
    });

    it('should pass to next image successfully and see the count increase', async () => {
        await ImageGalleryPage.clickAtNextImage();
        await ImageGalleryPage.assertGalleryPhotoCount('2/26');
    });

    it('should pass to previous image successfully and see the count decrease', async () => {
        await ImageGalleryPage.clickAtPreviousImage();
        await ImageGalleryPage.assertGalleryPhotoCount('1/26');
    });
})


