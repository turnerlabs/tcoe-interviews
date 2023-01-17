
const  Constants = require('../../support/Constants.json');
const ImageData = require('../../support/ImageData.json');
const fetch = require('node-fetch');

class GalleryPage {
    /**
     * define selectors using getter methods
     */
    get galleryTitle () {  return $('.Gallery__title');  }

    get currentImage () {  return $('.Image__image');  }

    get buttonNext () {  return $('//div[contains(@class,"GalleryHeroDecorators__next")]');  }

    get buttonPrevious () { return $('//div[contains(@class,"GalleryHeroDecorators__previous")]');  }

    get galleryCount() {  return $('.GalleryHeroDecorators__count');   }

    async validateImage() {
        await this.currentImage.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.currentImage).toBeDisplayed();
        await this.validateSrcUrl();
    }

    async validateGalleryTitle(){
        await this.galleryTitle.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.galleryTitle).toBeDisplayed();
        await expect(this.galleryTitle).toHaveText(ImageData.galleryTitle);
    }

    async validateGalleryCount(){
        await this.galleryCount.waitForDisplayed({timeout:Constants.twentySec});
        const galleryCountText =  await this.galleryCount.getText();
        const galleryCountArr = galleryCountText.split('/');
        expect(galleryCountArr[galleryCountArr.length-1]).toEqual(ImageData.imageCount);
    }
    async validateSrcUrl() {
        await this.currentImage.waitForDisplayed({timeout:Constants.twentySec});
        const srcUrl = await this.currentImage.getAttribute('src');
        const response = await fetch(srcUrl);
        expect(response.status).toEqual(200);
    }

    async clickNext() {
        await this.buttonNext.waitForClickable({timeout:Constants.twentySec});
        await this.buttonNext.click();
    }

    async clickPrevious() {
        await this.buttonPrevious.waitForClickable({timeout:Constants.twentySec});
        await this.buttonPrevious.click();
    }
    
}

module.exports = new GalleryPage();
