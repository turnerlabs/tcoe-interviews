import videoPage from "../../pages/videopages/video.page"
import relatedVideosPage from "../../pages/videopages/related.videos.page"
import paths from "../../data/urls"
import { expect } from "chai"

describe("Video features functionalities", () => {
    it("Video plays and its elements are correctly displayed", async () => {
        await videoPage.open(paths["Video page"])
        expect(await videoPage.isVideoDisplayed()).to.be.true
        await videoPage.playVideo()
        expect(await videoPage.areElementsDisplayedWhenVideoIsPlaying()).to.be.true
    })

    it("Related videos are correctly displayed", async () => {
        expect(await relatedVideosPage.isRelatedVideoDisplayed(), "First related video was not displayed").to.be.true
        expect(await relatedVideosPage.getAmountOfVideos() > 0, "There were not any related video").to.be.true
        expect(await relatedVideosPage.areAllElementsDisplayed(), "Elements of related videos are not displayed").to.be.true
    })
})
