class Video {
  /**
   * selectors using getter methods
   */
  get btnPlay() {
    return $('[title="Play"]').$("button");
  }

  get divPlay() {
    return $(".fave-player-container");
  }

  get divCarrousel() {
    return $(".owl-stage-outer .owl-stage");
  }

  get btnNextCarrousel() {
    return $(".owl-next");
  }

  get btnPreviousCarrousel() {
    return $(".owl-prev");
  }

  get firstSuggestionVideo() {
    return $$(".active")[0];
  }

  /**
   * method to simulate functionality of clicking to play the video
   */
  async Playing() {
    await this.btnPlay.waitForDisplayed();;
    await this.btnPlay.click();
    await browser.pause(2000);
  }

  async PlayingNextCarrousel() {
    await this.translatingSuggestionsNext();
    await this.firstSuggestionVideo.click();

  };

  /**
   * method to simulate functionality of clicking to see the next suggestions
   */
  async translatingSuggestionsNext() {
    await this.btnNextCarrousel.click();
  }

  /**
   * method to simulate functionality of clicking to see the previous suggestions
   */
  async translatingSuggestionsPrevious() {
    await this.btnPreviousCarrousel.click();
  }

  /**
   * open url
   */
  open() {
    return browser.url(
      `https://edition.cnn.com/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn`
    );
  }
}

module.exports = new Video();
