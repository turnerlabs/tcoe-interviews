const VideoPage = require("../pageobjects/video.page");
const expectchai = require("chai").expect;

describe("Given: user wants to check video functionality of CNN website", () => {
  beforeEach(async () => {
    await VideoPage.open();
  });

  context("When: user opens video page in browser", async () => {
    it("Then: user can play video by hitting play button", async () => {
      await VideoPage.playVideo();
      await VideoPage.waitVideoToPlay();
      const progress_1 = await VideoPage.getProgress();
      expectchai(progress_1).to.not.be.equals("00:00");
    });

    it("Then: total number of suggested videos should be displayed correctly", async () => {
      const countFromSuggestedList = await VideoPage.getVideoCountFromList();
      const countFromTrendingText = await VideoPage.getVideoCountFromText();
      expectchai(countFromTrendingText).to.be.equals(countFromSuggestedList);
    });

    it("Then: user can play video from suggested list", async () => {
      await VideoPage.waitVideoToLoad();
      await VideoPage.playSuggestedVideo();
      await VideoPage.waitVideoToPlay();
      const nowPlayingVideoTitle = await VideoPage.getNowPlayingTitle();
      const suggestedVidoTitle = await VideoPage.getSuggestedVidoTitle();
      expectchai(nowPlayingVideoTitle).to.be.equals(suggestedVidoTitle);
    });
  });
});
