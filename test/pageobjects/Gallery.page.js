const Page = require('./Page.js');
const GenericActions = require('../helpers/GenericActions.js');

class Gallery extends Page {

    get allImages() {
        return $$('.Image__component img');
    }

    get activeImage() {
        return $('.GalleryHero__active img');
    }

    get previousArrowButton() {
        return $('.GalleryHeroDecorators__previous');
    }

    get nextArrowButton() {
        return $('.GalleryHeroDecorators__next');
    }

    async open() {
        return await super.open('travel/gallery/top-christmas-markets/index.html');
    }

    async getAllImagesAmount() {
        await GenericActions.waitForIsShown(this.activeImage);
        return await this.allImages.length;
    }

    async getActiveImageSrc() {
        await GenericActions.waitForIsShown(this.activeImage);
        return await this.activeImage.getAttribute('src');
    }

    async clickOnPreviousArrowButton() {
        await GenericActions.doClick(this.previousArrowButton);
    }

    async clickOnNextArrowButton() {
        await GenericActions.doClick(this.nextArrowButton);
    }
}

module.exports = new Gallery();