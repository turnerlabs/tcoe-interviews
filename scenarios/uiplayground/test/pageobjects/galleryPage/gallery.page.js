const baseUrl = 'https://www.cnn.com/travel/gallery/top-christmas-markets/index.html';

class GalleryPage {

    /**
  * define selectors using getter methods
  */
    get galleryTitle() { return $('h1'); }
    get galleryDescription() { return $('.Gallery__subtitle'); }
    get socialMediaIcons() { return $('.Gallery__head') }
    get nextButton() { return $('.GalleryHeroDecorators'); }
    get previousButton() { return $('.GalleryHeroDecorators__previous') }

    // create gallery functionality

    open() {
      return browser.url(baseUrl)
    }

    async displayTitleDescription()  {
        await this.galleryTitle.waitForDisplayed();
        await this.galleryDescription.waitForDisplayed();
    }

    async displaySocialMediaIcons() {
        await this.socialMediaIcons.waitForDisplayed();
    }

    clickOnNextButton() {
        this.nextButton.click();
    }

    clickOnPreviousButton() {
        this.previousButton.click();
    }

}

module.exports = new GalleryPage();