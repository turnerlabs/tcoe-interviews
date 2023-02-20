const SELECTORS = {
    RELATED_VIDEOS_CONTAINER: "div[class*='items-container']",
    VIDEOS_LIST: "div[class*='items-container'] div.video-resource",
    IMAGES_OF_VIDEOS_LIST: "div[class*='items-container'] div.video-resource__image",
    TITLES_OF_VIDEOS_LIST: "div[class*='items-container'] div[data-editable='headline']",
    LENGTH_OF_VIDEOS_LIST: "div[class*='items-container'] span[class*='duration']"
}
class RelatedVideosPage {
    get relatedVideosContainer() {
        return $(SELECTORS.RELATED_VIDEOS_CONTAINER)
    }

    get firstRelatedVideo() {
        return $(SELECTORS.VIDEOS_LIST)
    }

    get listOfRelatedVideos() {
        return $$(SELECTORS.VIDEOS_LIST)
    }

    get listOfImagesVideos() {
        return $$(SELECTORS.IMAGES_OF_VIDEOS_LIST)
    }

    get listOfTitlesVideos() {
        return $$(SELECTORS.TITLES_OF_VIDEOS_LIST)
    }

    get listOfVideosLength() {
        return $$(SELECTORS.LENGTH_OF_VIDEOS_LIST)
    }

    async getAmountOfVideos() {
        return await this.listOfRelatedVideos.length
    }

    async getAmountOfImages() {
        return await this.listOfImagesVideos.length
    }

    async getAmountOfTitles() {
        return await this.listOfTitlesVideos.length
    }

    async getVideosLength() {
        return await this.listOfVideosLength.length
    }

    async isRelatedVideoDisplayed() {
        return await this.firstRelatedVideo.isDisplayed()
    }

    async areAllElementsDisplayed() {
        return await this.getAmountOfVideos() > 0 == await this.getAmountOfImages() > 0 == await this.getAmountOfTitles() > 0  == await this.getVideosLength() > 0
    }
}

export default new RelatedVideosPage()
