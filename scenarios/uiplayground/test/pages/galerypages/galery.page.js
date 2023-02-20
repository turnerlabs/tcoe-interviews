import utils from "../../utils/utils"

const SELECTORS = {
    PAGE_TITLE: ".Gallery__title",
    IMAGES_LIST: ".slider-list li",
    PREVIOUS_IMAGE: ".GalleryHeroDecorators__arrows div[class*='previous']",
    NEXT_IMAGE: ".GalleryHeroDecorators__arrows div[class*='next']",
    COUNTER_OF_IMAGES: "div.GalleryHeroDecorators__count",
    IMAGE_DESCRIPTION: "div.GalleryHero__caption",
    COPYRIGTH_IMAGE: "div.GalleryHero__credit"
}

class GaleryPage {
    get pageTitleHeader() {
        return $(SELECTORS.PAGE_TITLE)
    }

    get listOfImages() {
        return $$(SELECTORS.IMAGES_LIST)
    }

    get firstImage() {
        return $(SELECTORS.IMAGES_LIST)
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
        return parseInt(counterText.split('/')[1])
    }

    async getActualImageCounter() {
        const counterText = await this.counterOfImages.getText()
        return parseInt(counterText.split('/')[0])
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
        return await this.imageDescription.isDisplayed() && await this.getActualImageCounter() > 0 && await this.copyrigthImage.isDisplayed()
    }

    async verifyAllImagesDetailsAreDifferent() {
        let isCounterUpdating = true
        let isCopyrigthDisplayed = true
        let descriptions = new Set()
        let totalOfImages = await this.getAmountOfImages()

        for(let i = 0; i < totalOfImages; i++) {
            descriptions.add(await this.getImageDescription())
            isCounterUpdating = isCounterUpdating && await this.getActualImageCounter() == (i + 1)
            isCopyrigthDisplayed = isCopyrigthDisplayed && await this.copyrigthImage.isDisplayed()
            if(i == 25) break
            await utils.click(this.nextImageButton)
            await utils.waitUntil(async () => parseInt(await this.getActualImageCounter()) == (i + 2))
        }
        return isCounterUpdating && descriptions.size == totalOfImages && isCopyrigthDisplayed
    }
}

export default new GaleryPage()
