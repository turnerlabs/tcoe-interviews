const Page = require('../page');
const { execSync } = require('child_process');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VideoPage extends Page {

    get initialPlayButton(){
        return $('button[class*=big-play-toggle]')
    }

    get videoBox(){
      return $('div[class="pui-wrapper"]')
    }

    get videoPauseButton(){
      return $('//*[@class="pause-icon"]')
    }

    get videoPlayButton(){
      return $('//*[@class="play-icon"]')
    }

    get videoSlider(){
      return $('[aria-label="Progress bar"]')
    }

    get totalVideos(){
      return $('[class="video-playlist__count"]')
    }

    get playerVideos(){
      return $$('//div[@data-editable="videos"]/*')
    }

    /**
    * overwrite specific options to adapt it to page object
    */
    open () {
        return super.open('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn');
    }

    hoverOverVideo(){
      return this.videoBox.moveTo()  
    }

    async hitPause(){
      await this.hoverOverVideo()
      await this.videoPauseButton.waitForClickable();
      return this.videoPauseButton.click()
    }

    async hitPlay(){
      await this.hoverOverVideo()
      await this.videoPlayButton.waitForClickable();
      return this.videoPlayButton.click();
    }

    async playVideo(){
        await this.initialPlayButton.waitForClickable();
        return this.initialPlayButton.click();
    }

    async getVideoSliderValue(){
      return this.videoSlider.getProperty("ariaValueText")
    }

    getVideosCount(){
      return this.totalVideos.getText();
    }

    async getTotalSuggestedVideos(){
      let elements = await this.playerVideos;
      return elements.length;
    }

    async checkVideoPlay(){
        let s1 = `${__dirname}/screen_shots/videoplay/s1.png`;
        let s2 = `${__dirname}/screen_shots/videoplay/s2.png`
        await browser.pause(5000);
        await browser.saveScreenshot(s1);
        await browser.pause(5000);
        await browser.saveScreenshot(s2);
        execSync(`pip3 install -r ${__dirname}/requirements.txt`);
        let isDifferent = execSync(`python3 ${__dirname}/compare_screenshot_images.py ${s1} ${s2}`, { encoding: 'utf-8' });
        console.log(`Output from image compare: ${isDifferent}`)
        return isDifferent.split('\n')[0];
    }

    async checkVideoPause(){
      let s1 = `${__dirname}/screen_shots/videopause/s1.png`;
        let s2 = `${__dirname}/screen_shots/videopause/s2.png`
        await browser.pause(5000);
        await browser.saveScreenshot(s1);
        await browser.pause(5000);
        await browser.saveScreenshot(s2);
        execSync(`pip3 install -r ${__dirname}/requirements.txt`);
        let isDifferent = execSync(`python3 ${__dirname}/compare_screenshot_images.py ${s1} ${s2}`, { encoding: 'utf-8' });
        console.log(`Output from image compare: ${isDifferent}`)
        return isDifferent.split('\n')[0];
    }
}

module.exports = new VideoPage();
