const cnnData = require('../testData/cnnData');
const Page = require('./page');
cnnData = require('../testData/cnnData');

class GalleryPage extends Page {

    get lblTitleGallery(){return $('.Gallery__pageTop .Gallery__title');}
    get btnPrevious (){return $('//div[@class="GalleryHeroDecorators__button GalleryHeroDecorators__previous"]')}
    get btnNext (){return $('//div[@class="GalleryHeroDecorators__button GalleryHeroDecorators__next"]')}
    get lblCountImages (){return $('div.GalleryHeroDecorators__count');}
    async openGallery(){return super.open(cnnData.urlGallery);}

    async nextImage(){
         await this.lblTitleGallery.waitForDisplayed();
         await expect (this.lblTitleGallery).toHaveText(cnnData.messageGallery);
         const firsImage = await this.actualImage();
         await this.btnNext.click();
         const nextImage = await this.actualImage();
         expect(nextImage).toBeGreaterThan(firsImage);
    }

    async previousImage(){
        await this.lblTitleGallery.waitForDisplayed();
        await expect (this.lblTitleGallery).toHaveText(cnnData.messageGallery);
        const firsImage = await this.actualImage();
        await this.btnPrevious.click();
        const previousImage =await this.actualImage();
        expect(firsImage).toBeLessThan(previousImage);
   }

   async actualImage(){
    await this.lblCountImages.isDisplayedInViewport();
    const valuecount = await this.lblCountImages.getText();
    const initImage = valuecount.split('/');
    return parseInt(initImage[0]);
   }
}
module.exports = new GalleryPage();
 