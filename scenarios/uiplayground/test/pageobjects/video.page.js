const Page = require('./page');
cnnData = require('../testData/cnnData');

class VideoPage extends Page {

    get btnPlay (){return $('//*[@class="play-icon"]')}
    get btnPause (){return $('.pause-icon')}
    get progressBar (){return $('//*[@aria-label="Progress bar"]')}
    get btnsound (){return $('.sound-full-icon')}
    get btnMute (){return $('.sound-mute-icon')}
    get listVideo (){return $$('//div[1][@class="video-resource__label-status"]')}
    get counVideo (){return $('//*[@class="video-playlist__count"]')}
    get btnCc (){return $('//*[@aria-labelledby="ccOnIconTitle"]')}
    get btnNextVideo (){return $('.fwd-segment-icon')}
    get btnPrevVideo (){return $('.back-segment-icon')}
    get lblMainTitle (){return $('//div[@class="video-resource__details--leaf"]//div[@class="video-resource__headline"]')}
    
    async openVideo(){
        return super.open(cnnData.urlVideo);
    }
    async playVideo(){
        await this.btnPlay.waitForClickable({timeout:10000});
        await this.btnPlay.moveTo();
        await this.btnPlay.click();
        await this.progressBar.waitForDisplayed();
        await this.waitAdvertising();     
    }
    async expectPlay(option){
        await this.listVideo.forEach(async element => {
            expect (element.getText()).toHaveTextContaining(option);
        });
    }
    async stopVideo(){
        await this.btnPause.waitForClickable({timeout:2000});
        await this.btnPause.moveTo();
        await this.btnPause.click();
        await this.btnPlay.moveTo();
        await this.btnPlay.waitForClickable({timeout:2000});
        expect (this.btnPlay).toBeClickable();
    }
    async countVideos(){
        const count = await (this.listVideo.length)
        return count;
    }
    async countListVideos(){
        const video = await (this.counVideo.getText());
        const listVid = video.split(' ');
        return await listVid[0];
    }
    async muteSound(){
        await this.waitOriginalVideo();  
        await this.btnsound.moveTo();
        await this.btnsound.click();
        await this.btnMute.moveTo();
        const content = await this.btnMute.getProperty('textContent');
        expect (content).toHaveText('Unmute');
    }     
    async pressNextVideo(){
        const name =await  this.lblMainTitle.getText();
        await this.waitOriginalVideo();  
        await this.btnNextVideo.moveTo();
        await this.btnNextVideo.click();
        const othertitle = await this.lblMainTitle.getText();
        expect (name).toHaveText(othertitle);
    }
    async pressPreviousVideo(){
        const name = await this.lblMainTitle.getText();
        await this.waitOriginalVideo();  
        await this.btnPrevVideo.moveTo();
        await this.btnPause.click();
        await this.btnPrevVideo.click();
        const othertitle = await this.lblMainTitle.getText();
        expect (name).toHaveText(othertitle);
    }
    async waitAdvertising(){
        await browser.waitUntil(
            async () => Number(await this.progressBar.getAttribute('aria-valuenow') >= 97.5),
            {timeout: 60000}
        );   
    } 
    async waitOriginalVideo(){
        await browser.waitUntil(
            async () => Number(await this.progressBar.getAttribute('aria-valuenow') >=3),
            {timeout: 60000}
        ); 
    }
}
module.exports = new VideoPage();
 