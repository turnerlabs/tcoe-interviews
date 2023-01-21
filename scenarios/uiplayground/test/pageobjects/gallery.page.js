

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GalleryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get CountOfphotos () {
        return $('//*[@class="GalleryHeroDecorators__count"]');
    }
  
    get NextBtn () {
        return $('.GalleryHeroDecorators__button.GalleryHeroDecorators__next');
    }

    get PriviousBtn () {
        return $('//*[@class="GalleryHeroDecorators__button GalleryHeroDecorators__previous"]');
    }

    get SearchItem () {
        return $('//strong[@id="search__query"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     */
    async SearchGallery () {
        await this.NextBtn.click();
        await this.PriviousBtn.click();
    }
    open (path) {
        browser.maximizeWindow();
        return super.open('travel/gallery/top-christmas-markets/index.html');
    }

}

module.exports = new GalleryPage();
