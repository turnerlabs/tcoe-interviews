class GalleryPage {

    constructor() {
        this.leftButton = "//*[contains(@class, \"GalleryHeroDecorators__previous\")]"
        this.rightButton = "//*[contains(@class, \"GalleryHeroDecorators__next\")]";
        this.imageCaption = "//*[@class=\"GalleryHero__caption\"]";
        this.imageCount = "//*[@class=\"GalleryHeroDecorators__count\"]";
    }

    async scrollRight() {
        await $(this.rightButton).click();
    }

    async scrollLeft() {
        await $(this.leftButton).click();
    }

    async getImageCaption() {
        return await $(this.imageCaption).getText();
    }

    async getImageCount() {
        const count = await $(this.imageCount).getText();
        return count.substring(0, count.indexOf("/"));
    }

    async getMaxImageCount() {
        const count = await $(this.imageCount).getText();
        return count.substring(count.indexOf("/")+1);
    }
}

module.exports =  GalleryPage;
