import utils from "../../utils/utils"

const SELECTORS = {
    VIDEO_CONTAINER: "div[data-editable*='Video']",
    PLAY_VIDEO_BUTTON: "div[data-editable*='Video'] button[class*='center']",
    STOP_OR_PLAY_BUTTON: "button[class*='control-bar_play']",
    VOLUME_CONTROL_BUTTON: "button[class*='volume-control']",
    FULL_SCREEN_BUTTON: "button[class*='fullscreen']"
}

class VideoPage {
    get videoContainer() {
        return $(SELECTORS.VIDEO_CONTAINER)
    }

    get playVideoButton() {
        return $(SELECTORS.PLAY_VIDEO_BUTTON)
    }

    get stopOrPlayButton() {
        return $(SELECTORS.STOP_OR_PLAY_BUTTON)
    }

    get volumeControlButton() {
        return $(SELECTORS.VOLUME_CONTROL_BUTTON)
    }

    get fullScreenButton() {
        return $(SELECTORS.FULL_SCREEN_BUTTON)
    }

    async open(path) {
        await browser.url(path)
    }

    async waitForVideoToLoad() {
        await this.playVideoButton.waitForDisplayed()
    }

    async isVideoDisplayed() {
        await this.waitForVideoToLoad()
        return await this.videoContainer.isDisplayed() && await this.playVideoButton.isDisplayed();
    }

    async playVideo() {
        await utils.click(this.playVideoButton)
        await this.stopOrPlayButton.waitForDisplayed()
    }

    async areElementsDisplayedWhenVideoIsPlaying() {
        return await this.stopOrPlayButton.isDisplayed() && await this.volumeControlButton.isDisplayed() && await this.fullScreenButton.isDisplayed()
    }

    
}

export default new VideoPage()
