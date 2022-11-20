const Page = require("./page");
const expectchai = require("chai").expect;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VideoPage extends Page {
  /**
   * define selectors using getter methods
   */
  get playBtn() {
    return $("div[title='Play']");
  }

  get progressBar() {
    return $("[aria-label ='Progress bar']");
  }

  get nowPlayingVideoTitle() {
    return $("div.video-resource__details--leaf div.video-resource__headline");
  }

  get suggestedVideoCount() {
    return $(".video-playlist__count");
  }

  get videoHeadlines() {
    return $$(
      "div.video-playlist__items-container div div.video-resource__details div.video-resource__headline"
    );
  }

  get videoItem() {
    return $$(
      "div.video-playlist__items-container div div.video-resource__details"
    );
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open(
      "videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn"
    );
  }

  /**
   * method to hit play icon in current video
   */
  async playVideo() {
    await super.clickElement(this.playBtn);
  }

  /**
   * method to wait for video to load and play icon is clickable
   */
  async waitVideoToLoad() {
    await this.playBtn.waitForClickable();
  }

  /**
   * method to wait for video to play and progress bar is not at 00:00
   */
  async waitVideoToPlay() {
    await super.waitForEleNotHaveAttr(
      this.progressBar,
      "aria-valuetext",
      "00:00"
    );
  }

  /**
   * method to get progress of current video that is playing
   * @returns progress of video
   */
  async getProgress() {
    return await super.getAttributeValue(this.progressBar, "aria-valuetext");
  }

  /**
   * method to get total number of video from suggested list by counting it
   * @returns total number of suggested video by count
   */
  async getVideoCountFromList() {
    return await super.getElementCount(this.videoHeadlines);
  }

  /**
   * method to get total number of video from suggested list header
   * @returns total video number from suggested list header
   */
  async getVideoCountFromText() {
    const videoCountText = await super.getElementText(this.suggestedVideoCount);
    return parseInt(videoCountText.substring(0, 2));
  }

  /**
   * method to scroll into view and play one suggested video from list
   */
  async playSuggestedVideo() {
    await super.scrollElIntoView(this.videoItem[1]);
    await super.clickElement(this.videoItem[1]);
  }

  /**
   * method to get current playing title
   * @returns current plating video title
   */
  async getNowPlayingTitle() {
    return await super.getElementText(this.nowPlayingVideoTitle);
  }

  /**
   * method to get suggested video headline from list
   * @returns current plating video headline
   */
  async getSuggestedVidoTitle() {
    return await super.getElementText(this.videoHeadlines[1]);
  }
}

module.exports = new VideoPage();
