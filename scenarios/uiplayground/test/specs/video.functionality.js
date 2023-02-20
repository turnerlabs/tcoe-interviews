import videoPage from "../pages/videopages/video.page"
import relatedVideosPage from "../pages/videopages/related.videos.page"

describe("Video features functionalities", () => {
    it("Video plays and its elements are correctly displayed", async () => {
        await videoPage.open('/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn')
        expect(await videoPage.isVideoDisplayed()).toBeTruthy()
        await videoPage.playVideo()
        expect(await videoPage.areElementsDisplayedWhenVideoIsPlaying()).toBeTruthy()
    });

    it("Related videos are correctly displayed", async () => {
        expect(await relatedVideosPage.isRelatedVideoDisplayed())
        expect(await relatedVideosPage.getAmountOfVideos()).toBeGreaterThan(0)
        expect(await relatedVideosPage.areAllElementsDisplayed())
    })
})
