const GalleryPage = require('./../pageobjects/galleryPage/gallery.page')

describe('Gallery Page', async () => {
    it('should display the title and description', async () => {
        await GalleryPage.open();
        await GalleryPage.displayTitleDescription();

        //************Create Expects********************//
        await expect(await GalleryPage.galleryTitle).toBeDisplayed();
        await expect(await GalleryPage.galleryDescription).toBeDisplayed();

    });

    it('should display the social media icons'), async () => {
        await GalleryPage.open();
        await GalleryPage.displaySocialMediaIcons();

        //************Create Expects********************//
        await expect(await GalleryPage.socialMediaIcons).toBeDisplayed();
    }

    it('Should click on next button'), async () => {
        await GalleryPage.clickOnNextButton();

        //************Create Expects********************//
        await expect(await GalleryPage.nextButton).toBeDisplayed();
    }

    it('Should click on previous button'), async () => {
        await GalleryPage.clickOnPreviousButton();

        //************Create Expects********************//
        await expect(GalleryPage.previousButton).toBeDisplayed();
    }
});