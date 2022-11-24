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
    return $("[id*='js-leaf-video_headline']");
  }

  get suggestedVideoCount() {
    return $("h2.cn__title");
  }

  get activeVideoHeadlines() {
    return $$("[class='owl-item active'] .cd__headline");
  }

  get otherVideoHeadlines() {
    return $$("[class='owl-item'] .cd__headline");
  }

  get videoItem() {
    return $$("[class='owl-item active']");
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
    const activeVideoCount = await super.getElementCount(
      this.activeVideoHeadlines
    );
    const otherVideoCount = await super.getElementCount(
      this.otherVideoHeadlines
    );
    // active videos plus inactive videos minus current playing video
    return activeVideoCount + otherVideoCount - 1;
  }

  /**
   * method to get total number of video from suggested list header
   * @returns total video number from suggested list header
   */
  async getVideoCountFromText() {
    const videoCountText = await super.getElementText(this.suggestedVideoCount);
    return parseInt(videoCountText.split("(")[1]);
  }

  /**
   * method to scroll into view and play one suggested video from list
   */
  async playSuggestedVideo(index) {
    await super.clickElement(this.videoItem[index]);
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
  async getSuggestedVidoTitle(index) {
    return await super.getElementText(this.activeVideoHeadlines[index]);
  }
}

module.exports = new VideoPage();
