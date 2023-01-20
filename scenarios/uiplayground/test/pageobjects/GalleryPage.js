
const  Constants = require('../../support/Constants.json');
const ImageData = require('../../support/ImageData.json');
const fetch = require('node-fetch');

class GalleryPage {
    /**
     * define selectors using getter methods
     */
    get galleryTitle () {  return $('.Gallery__title');  }

    get currentImage () {  return $('//li[@class="slider-slide"]/div[@class="GalleryHero__slide GalleryHero__active"]//img');  }

    get buttonNext () {  return $('//div[contains(@class,"GalleryHeroDecorators__next")]');  }

    get buttonPrevious () { return $('//div[contains(@class,"GalleryHeroDecorators__previous")]');  }

    get galleryCount() {  return $('.GalleryHeroDecorators__count');   }


    /**
     * To Validate the image 
     */
    async validateImage() {
        await this.currentImage.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.currentImage).toBeDisplayed();
        await this.validateResponseStatus();
    }

     /**
     * To Validate the image Description
     */
    async validateAltDescription(imgDescToVerify) {
        const altDesc = await this.findDescriptionOfImage();
        expect(altDesc).not.toEqual(imgDescToVerify);
    }

    /**
     * To validate the title of the image gallery
     */
    async validateGalleryTitle(){
        await this.galleryTitle.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.galleryTitle).toBeDisplayed();
        await expect(this.galleryTitle).toHaveText(ImageData.galleryTitle);
    }

    /**
     *  To vefify the count of the images matches the given input
     */
    async validateGalleryCount(){
        await this.galleryCount.waitForDisplayed({timeout:Constants.twentySec});
        const galleryCountText =  await this.galleryCount.getText();
        const galleryCountArr = galleryCountText.split('/');
        expect(galleryCountArr[galleryCountArr.length-1]).toEqual(ImageData.imageCount);
    }

    /**
     *  To verify if the src url of the image has the valid url or not (if the response is 200)
     */
    async validateSrcUrl(srcUrlToVerify) {
        const srcUrl = await this.findSrcUrlOfImage();
        expect(srcUrl).not.toEqual(srcUrlToVerify)
    }


    /**
     *  To verify if the src url of the image has the valid url or not (if the response is 200)
     */
    async validateResponseStatus() {
        const srcUrl = await this.findSrcUrlOfImage();
        const response = await fetch(srcUrl);
        expect(response.status).toEqual(200);
    }

    
    /**
     *  To find the src url of the image
     */
    async findSrcUrlOfImage() {
        await this.currentImage.waitForDisplayed({timeout:Constants.twentySec});
        const srcUrl = await this.currentImage.getAttribute('src');
        return srcUrl;
    }

    /**
     *  To find the description of the image
     */
    async findDescriptionOfImage() {
    await this.currentImage.waitForDisplayed({timeout:Constants.twentySec});
    const altDesc = await this.currentImage.getAttribute('alt');
    return altDesc;
}

    /**
     *  To click on the next button
     */

    async clickNext() {
        await this.buttonNext.waitForClickable({timeout:Constants.twentySec});
        await this.buttonNext.click();
    }

    /*
    * To click on the previuos button
    */

    async clickPrevious() {
        await this.buttonPrevious.waitForClickable({timeout:Constants.twentySec});
        await this.buttonPrevious.click();
    }
    
}

module.exports = new GalleryPage();
