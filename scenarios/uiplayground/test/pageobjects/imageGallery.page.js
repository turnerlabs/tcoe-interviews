const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ImageGalleryPage extends Page {
  /**
   * define selectors using getter methods
   */
  get imageSlides() {
    return $$("li.slider-slide");
  }

  get imageCountIcon() {
    return $(".GalleryHeroDecorators__count");
  }

  get nextBtn() {
    return $(".GalleryHeroDecorators__next");
  }

  get previousBtn() {
    return $(".GalleryHeroDecorators__previous");
  }

  get imgCaption() {
    return $(".GalleryHero__caption");
  }

  get imgCredit() {
    return $(".GalleryHero__credit");
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("travel/gallery/top-christmas-markets/index.html");
  }

  /**
   * This method gets the current image number from indicator on the page
   * @returns current image number from indicator
   */
  async getCurrentImageIndicator() {
    let countIndicator = await super.getElementText(this.imageCountIcon);
    let currentImg = countIndicator.split("/")[0];
    return parseInt(currentImg);
  }

  /**
   * This method gets total number of images by counting how many slides there are
   * @returns total image number from slides
   */
  async getTotalImageFromSlides() {
    return await super.getElementCount(this.imageSlides);
  }

  /**
   * This method gets total number of images from indicator on the page
   * @returns total image number from indicator
   */
  async getTotalImageFromIndicator() {
    let countIndicator = await super.getElementText(this.imageCountIcon);
    let totalImage = countIndicator.split("/")[1];
    return parseInt(totalImage);
  }

  /**
   * This method clicks next button
   */
  async slideToNextImage() {
    await super.clickElement(this.nextBtn);
  }

  /**
   * This method clicks previous button
   */
  async slideToPrevImage() {
    await super.clickElement(this.previousBtn);
  }

  /**
   * This method gets caption of the image that is current presented
   * @returns text of caption
   */
  async getCaptionText() {
    return await super.getElementText(this.imgCaption);
  }

  /**
   * This method gets credit of the image that is current presented
   * @returns text of credit
   */
  async getCreditText() {
    return await super.getElementText(this.imgCredit);
  }
}

module.exports = new ImageGalleryPage();
