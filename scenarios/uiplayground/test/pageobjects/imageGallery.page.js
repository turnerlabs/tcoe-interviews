class ImageGalleryPage {
    get imageTitle() {
        return $('.Gallery__title');
    };

    get travelLogo() {
        return $('.Header__logoTravel');
    };

    get mainImage() {
        return $('.Image__image');
    };

    get galleryPhotoCountDiv() {
        return $('.GalleryHeroDecorators__count');
    };

    get nextImageButton() {
        return $('.GalleryHeroDecorators__next');
    };

    get previousImageButton() {
        return $('.GalleryHeroDecorators__previous');
    };

    async assertImageGalleryTitle(galleryTitle) {
        return await expect(this.imageTitle).toHaveText(galleryTitle)
    };

    async assertTravelLogoIsBeingDisplayed() {
        return await expect(this.travelLogo).toBeDisplayed()
    };

    async assertGalleryPhotoCount(count) {
        return await expect(this.galleryPhotoCountDiv).toHaveText(count)
    };

    async assertCurrentImageDescription(currentImageDescription) {
        return await expect(this.mainImage).toHaveAttribute('alt', currentImageDescription)
    };

    async clickAtNextImage() {
        this.nextImageButton.waitForClickable();
        return this.nextImageButton.click();
    };

    async clickAtPreviousImage() {
        this.previousImageButton.waitForClickable();
        return this.previousImageButton.click();
    };
}

module.exports = new ImageGalleryPage();
