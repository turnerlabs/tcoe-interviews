
class VideoPage {

    get playerContainer() {
        return $('.top-player-video-element')
    }

    get playIcon() {
        return $('.play-icon')
    }

    get soundIcon() {
        return $('.sound-full-icon')
    }

    get muteIcon() {
        return $('.sound-mute-icon')
    }

    get progressBar() {
        return $('[aria-label="Progress bar"]')
    }

    get timeCounter() {
        return $('.pui_control-bar_playback-time > span:nth-child(1)')
    }

    get seekForwardButton() {
        return $('.pui_center-controls_seek-forward')
    }

    get nextVideoButton() {
        return $('.pui_center-controls_next')
    }

    get videoHeadlineLabel() {
        return $('.video-resource__headline')
    }

    get suggestedVideosList() {
        return $('.video-playlist__items-container')
    }

    async clickOnPlayVideoAndValidateIfPlayerIsRunning() {
        await this.playerContainer.waitForExist()

        await this.playIcon.waitForClickable()
        await this.playIcon.click()

        await this.playerContainer.waitUntil(async() => {
            return (await this.playerContainer.getProperty('paused')) != 'false'
        }, { 
            timeout: 20000, 
            timeoutMsg: "The video didn't start"
        })
    }

    async muteVolumeAndValidateIfPlayerIsMuted() {
        await this.soundIcon.waitForExist()
        await this.soundIcon.click()

        await this.muteIcon.waitForDisplayed()

        await this.playerContainer.waitUntil(async() => {
            return (await this.playerContainer.getProperty('muted')) != 'false'
        }, { 
            timeout: 20000,
            timeoutMsg: "The Player wasn't mute"
        })
    }

    async getTimeCounterValueAndValidateIfChanges() {
        await this.timeCounter.waitForExist()

        await this.playerContainer.moveTo()

        await this.timeCounter.waitUntil(async() => {
            return (await this.timeCounter.getText()) != '00:00'
        }, { 
            timeout: 20000, 
            timeoutMsg: "The player time counter didn't start"
        })
    }

    async skipTenSecondsAndValidateTimeCounter() {
        await this.timeCounter.waitForExist()

        await this.playerContainer.moveTo()
        await this.seekForwardButton.waitForDisplayed()
        await this.seekForwardButton.click()

        await this.playerContainer.moveTo()
        await this.timeCounter.waitUntil(async() => {
            return (await this.timeCounter.getText()) != '00:00'
        }, { 
            timeout: 20000, 
            timeoutMsg: "The player time counter didn't changed"
        })
    }

    async skipVideoAndValidateChange() {
        let videoHeadline = await this.videoHeadlineLabel.getText()

        await this.playerContainer.moveTo()

        await this.nextVideoButton.waitForDisplayed()
        await this.nextVideoButton.click()

        await browser.getUrl() //WIP
       // await expect(videoHeadline).
    }

    async validateItemsOfSuggestedVideosList() {
        await this.suggestedVideosList.waitForDisplayed()
        let elementCount = await this.suggestedVideosList.$$('div').then(element => {
            return element.length()
        })
        await console.log(elementCount)
    }

}

module.exports = new VideoPage();