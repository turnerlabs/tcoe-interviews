


    let playerContainer = () => {
        return $('.top-player-video-element')
    }

    let playIcon = () => {
        return $('.play-icon')
    }

    let soundIcon = () => {
        return $('.sound-full-icon')
    }

    let muteIcon = () => {
        return $('.sound-mute-icon')
    }

    let progressBar = () => {
        return $('[aria-label="Progress bar"]')
    }

    let timeCounter = () => {
        return $('.pui_control-bar_playback-time > span:nth-child(1)')
    }

    let clickOnPlayVideo = async() => {
        await playerContainer.waitForExist()

        await playIcon.waitForClickable()
        await this.playIcon.click()
    }

    let muteVolume = async() => {
        await soundIcon.waitForExist()
        await soundIcon.click()

        await muteIcon.waitForDisplayed()

        await playerContainer.waitUntil(async() => {
            return (await playerContainer.getProperty('muted')) != 'false'
        }, { 
            timeout: 20000,
            timeoutMsg: "The Player wasn't mute after 20s"
        })
    }


module.exports = clickOnPlayVideo, muteVolume