const Const = require('../pageobjects/constants');

class ImagePage {
    async open(path) {
        await browser.maximizeWindow();
        return browser.url(path);
    }

    get imageCount() {
        return $('div[class="GalleryHeroDecorators__count"]');
    }

    get imageCaption() {
        return $('svg[class="GalleryHero__caption"]');
    }

    get buttonNextImage() {
        return $('div[class="GalleryHeroDecorators__button GalleryHeroDecorators__next"]');
    }
    get buttonPreviousImage() {
        return $('div[class="GalleryHeroDecorators__button GalleryHeroDecorators__previous"]');
    }

    async validateDefaultImage() {
        expect(this.imageCaption).toContain(Const.imageCaption);
        expect(this.getImageCount()).toEqual(1);
    }
    async validateDefaultImageCount() {
        expect (this.getTotalImageCount()).toEqual(26);
    }

    async getImageCount() {
        let imageCount = await this.imageCount.getText();
        imageCount = imageCount.split("/")[0];
        return parseInt(imageCount);
    }
    async getTotalImageCount() {
        let imageCount = await this.imageCount.getText();
        imageCount = imageCount.split("/")[1];
        return parseInt(imageCount);
    }
    async validateForwardImageNavigation() {
        let currentImageValue = await this.getImageCount();
        await this.buttonNextImage.click();
        expect(currentImageValue).toBeGreaterThan(await this.getImageCount());
    }
    async validateBackwardImageNavigation() {
        let currentImageValue = await this.getImageCount();
        await this.buttonPreviousImage.click();
        expect(currentImageValue).toBeGreaterThan(await this.getTotalImageCount());
    }
}

module.exports = new ImagePage();