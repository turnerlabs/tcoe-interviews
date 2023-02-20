const SELECTORS = {
    PAGE_TITLE: ".Gallery__title",
    IMAGES_LIST: ".slider-list li",
    PREVIOUS_IMAGE: ".GalleryHeroDecorators__arrows div[class*='previous']",
    NEXT_IMAGE: ".GalleryHeroDecorators__arrows div[class*='next']",
    COUNTER_OF_IMAGES: ".GalleryHeroDecorators__count",
    IMAGE_DESCRIPTION: ".GalleryHero__caption",
    COPYRIGTH_IMAGE: ".GalleryHero__credit"
}

class GaleryPage {
    get pageTitleHeader() {
        return $(SELECTORS.PAGE_TITLE)
    }

    get listOfImages() {
        return $$(SELECTORS.IMAGES_LIST)
    }

    get firstImage() {
        return $(SELECTORS.IMAGES_LIST);
    }

    get previousImageButton() {
        return $(SELECTORS.PREVIOUS_IMAGE)
    }

    get nextImageButton() {
        return $(SELECTORS.NEXT_IMAGE)
    }

    get counterOfImages() {
        return $(SELECTORS.COUNTER_OF_IMAGES)
    }

    get imageDescription() {
        return $(SELECTORS.IMAGE_DESCRIPTION)
    }

    get copyrigthImage() {
        return $(SELECTORS.COPYRIGTH_IMAGE)
    }

    async getTotalOfImagesInCounter() {
        const counterText = await this.counterOfImages.getText()
        return counterText.split('/')[1]
    }

    async getActualImageCounter() {
        const counterText = await this.counterOfImages.getText()
        return counterText.split('/')[0]
    }

    async getAmountOfImages() {
        return await this.listOfImages.length;
    }

    async waitForPageToLoad() {
        await this.pageTitleHeader.waitForDisplayed()
    }

    async arePageElementsDisplayed() {
        await this.waitForPageToLoad()
        return await this.pageTitleHeader.isDisplayed() && await this.previousImageButton.isDisplayed() && await this.nextImageButton.isDisplayed()
    }

    async getImageTitle() {
        const imageDescription = await this.imageDescription.getText()
        return imageDescription.split(':')[0]
    }

    async getImageDescription() {
        const imageDescription = await this.imageDescription.getText()
        return imageDescription.split(':')[1]
    }

    async getImageCopyrigth() {
        return await this.copyrigthImage.getText()
    }

    async areImageElementsDisplayed() {
        return await this.imageDescription.isDisplayed() && this.getActualImageCounter() > 0 && await this.copyrigthImage.isDisplayed()
    }
}

export default new GaleryPage()
