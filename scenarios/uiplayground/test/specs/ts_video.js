const VideoPage = require("../pageobjects/video.page");
const expectchai = require("chai").expect;

describe("Test video functionality", () => {
  beforeEach(async () => {
    await VideoPage.open();
  });

  it("validate user can play video by clicking play button", async () => {
    await VideoPage.playVideo();
    await VideoPage.waitVideoToPlay();
    const progress_1 = await VideoPage.getProgress();
    expectchai(progress_1).to.not.be.equals("00:00");
  });

  it("validate total number of suggested videos should be displayed correctly", async () => {
    const countFromSuggestedList = await VideoPage.getVideoCountFromList();
    const countFromTrendingText = await VideoPage.getVideoCountFromText();
    expectchai(countFromTrendingText).to.be.equals(countFromSuggestedList);
  });

  it("validate user can play video from suggested list", async () => {
    await VideoPage.waitVideoToLoad();
    await VideoPage.playSuggestedVideo();
    await VideoPage.waitVideoToPlay();
    const nowPlayingVideoTitle = await VideoPage.getNowPlayingTitle();
    const suggestedVidoTitle = await VideoPage.getSuggestedVidoTitle();
    expectchai(nowPlayingVideoTitle).to.be.equals(suggestedVidoTitle);
  });
});
