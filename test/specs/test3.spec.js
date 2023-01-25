const galleryPage = require('../pageobjects/Gallery.page.js');
const genericActions = require('../helpers/GenericActions.js');
const data = require('../../data/galleryTestData');

describe('Validate the image gallery functionality on the page', () => {

    beforeEach(async() => {
        await galleryPage.open();
        await genericActions.maximizeWindow();
    });
    
    it('Validate there are available images', async() => {
        await expect(await galleryPage.getAllImagesAmount()).to.equal(data.imagesAmount, 'A wrong amount of images is available');
    });

    it('Validate previous arrow button is working', async() => {
        let firstImageSrc = await galleryPage.getActiveImageSrc();
        await galleryPage.clickOnPreviousArrowButton();
        await expect(await galleryPage.getActiveImageSrc()).to.not.equal(firstImageSrc, 'Previous arrow button is not working as intended');
    });

    it('Validate next arrow button is working', async() => {
        let firstImageSrc = await galleryPage.getActiveImageSrc();
        await galleryPage.clickOnNextArrowButton();
        await expect(await galleryPage.getActiveImageSrc()).to.not.equal(firstImageSrc, 'Next arrow button is not working as intended');
    });
});