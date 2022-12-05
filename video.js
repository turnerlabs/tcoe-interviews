const Const = require('../pageobjects/constants')

class Video {

    /**
     * Open Application url
     */
    async open(path) {
        await browser.maximizeWindow();
        return browser.url(path);
    }

    get buttonPlay() {
        return ('//div[@title="Play"]//button');
    }

    get titlePlay() {
        // return ('//*[@id="pauseIconTitle"]');
        // return ('//*[@class="play-icon"]')
        return $('svg[class="play-icon"]');
    }
    get titlePause() {
        // return ('//*[@id="pauseIconTitle"]');
        // return ('//*[@class="play-icon"]')
        return $('svg[class="pause-icon"]');
    }

    get buttonPause() {
        return $('button[class="pui_center-controls_big-play-toggle sc-iAyFgw cnBpEa"]');
    }

    get nowPlayingTitle() {
        return $('div[class="pui_metadata_title sc-cMljjf hAsuJs"]');
    }

    get elemPlayTime() {
        return $('div[class="sc-gzVnrw pui_control-bar_playback-time sc-jqCOkK eOIrQv"]');
    }

    get forwardButton() {
        return $('button[class="sc-gipzik pui_center-controls_next sc-hzDkRC kIEEBE"]');
    }

    get forward10sec() {
        return $('svg[class="forward-10-sec-icon"]');
    }
    get trendingVideoList(){
        return $('div[class="video-playlist"]');
    }
    get trendingVideoCount(){
        return $('span[class="video-playlist__count"]');
    }

    async validatePlaying() {
        await this.playVideo();
        await browser.pause(10000);
        await this.pauseVideo();
        let text = await this.nowPlayingTitle.getText();
        expect(text).toEqual(Const.videoTitle);
        await console.log("names:" + text);
        await expect(this.titlePlay).toBeDisplayed();
        await this.forwardButton.click();
        await browser.pause(10000);
        await this.pauseVideo();
        let newVideo = await this.nowPlayingTitle.getText();
        await console.log("next video:" + newVideo);
        expect(newVideo).not.toEqual(Const.videoTitle);
    }

    async validatePlayTime() {
        await this.playVideo();
        await browser.pause(10000);
        await this.pauseVideo();
        let currentPlayedTime = await this.elemPlayTime.getText();
        currentPlayedTime = parseInt(currentPlayedTime.split(":")[1])
        console.log("here is current playtime: " + currentPlayedTime);
        await this.titlePlay.click();
        await this.forward10sec.click();
        let newPlayedTime = await this.elemPlayTime.getText();
        newPlayedTime=parseInt(newPlayedTime.split(":")[1]);
        console.log("here is the new playtime: " + newPlayedTime);
        let timeDifference = newPlayedTime-currentPlayedTime;
        expect(timeDifference).toEqual(10);

    }
    async validateTrendingVideos(){
        await this.playVideo();
        await browser.pause(10000);
        await this.pauseVideo();
        expect(this.trendingVideoList).toExist();
        let videoCount = await this.trendingVideoCount.getText();
        expect (parseInt(videoCount.split(" ")[0])).toBeGreaterThan(0);
    }


    async playVideo() {
        await $(this.buttonPlay).isDisplayed();
        await $(this.buttonPlay).click();
    }

    async pauseVideo() {
        await expect(this.titlePause).toExist();
        await this.buttonPause.click();
    }

}

module.exports = new Video();
