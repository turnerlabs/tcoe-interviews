const Page = require('./page');

class ChristmasMarketPage extends Page {

    /**
     * define selectors using getter methods
     */
    get sliderFrame () {
        return $('.slider-frame');
    }
    get previous () {
        return $('.GalleryHeroDecorators__previous');
    }
    get next () {
        return $('.GalleryHeroDecorators__next');
    }
    get galleryCount () {
        return $('.GalleryHeroDecorators__count');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async totalImages(){
        const str = await this.galleryCount.getText();
        const after = str.split('/');
        const count = after[1];
        console.log('count in gallery is:' , count);
    }
    async currentImage(){
        const str = await this.galleryCount.getText();
        const after = str.split('/');
        const count = after[0];
        console.log('current image in gallery is:' , count);
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('travel/gallery/top-christmas-markets/index.html');
    }
}
module.exports = new ChristmasMarketPage();
