class ImageGallery {

    get imageSlider() {
        return $('.slider-frame')
    }

    get nextImageButton() {
        return $('.GalleryHeroDecorators__next')
    }

    get imageIndex() {
        return $('.slider-slide')
    }

    async clickNextImageBtnAndValidateIfNextImageAppears() {
        await this.imageSlider.waitForDisplayed();

        await this.nextImageButton.click();

        await this.imageIndex[2].waitForDisplayed()
    }
}

module.exports = new ImageGallery()