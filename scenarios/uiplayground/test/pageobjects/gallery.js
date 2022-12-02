class Gallery {
  /**
   * selectors using getter methods
   */
  get divGalleryHero__active() {
    return $(
      '[class="GalleryHero__slide GalleryHero__active"] .Image__component img'
    );
  }

  get divCountGallery() {
    return $(".GalleryHeroDecorators__count");
  }

  get btnNext() {
    return $(".GalleryHeroDecorators__next");
  }

  get btnPrevious() {
    return $(".GalleryHeroDecorators__previous");
  }

  /**
   * method to simulate functionality of clicking to next image in gallery
   */
  async Next(attribute) {
    await this.btnNext.click();
  }

  /**
   * method to simulate functionality of clicking to previous  image in gallery
   */
  async Previous(attribute) {
    await this.btnPrevious.click();
  }

  open() {
    return browser.url(
      `https://www.cnn.com/travel/gallery/top-christmas-markets/index.html`
    );
  }
}

module.exports = new Gallery();
