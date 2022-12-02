class MediaPage{

    constructor() {
        this.mediaPlayer = "//*[@id=\"player-large-media_0\"]";
        this.playButton = `${this.mediaPlayer}//button[contains(@class, "play-toggle")]`;
        this.playStatus = `${this.playButton}/*`;
        this.suggestedVideoSection = "//*[@id=\"cn-current_video_collection\"]";
        this.displayedSuggestedVideos = "//*[@class=\"owl-item active\"]";
        this.scrollLeft = "//*[@class=\"owl-prev\"]";
        this.scrollRight = "//*[@class=\"owl-next\"]";
        this.activeVideoTitle = "//*[@data-meta=\"desktop-collection\"]//*[@class=\"media__video-headline\"]";
        this.activeVideoThumbnailTitle = "//*[@class=\"owl-item active\" and .//*[@class=\"media__over-text\"]]//*[contains(@class, \"headline-text\")]";
    }

    get getMediaPlayer() {
        return $(this.mediaPlayer);
    }

    get getPlayStatus() {
        return $(this.playStatus);
    }

    async clickScrollLeft() {
        await $(this.scrollLeft).click();
    }

    async clickScrollRight() {
        await $(this.scrollRight).click();
    }

    async getActiveVideoTitle(){
        return await $(this.activeVideoTitle).getText();
    }

    async getSuggestedActiveVideoTitle(){
        return await $(this.activeVideoThumbnailTitle).getText();
    }

    async playVideo() {
        const attr = await this.getPlayStatus.getAttribute("class");
        const attrValueWhenPlaying = "pause-icon";
        const attrValueWhenPaused = "play-icon";
        if(attr === attrValueWhenPaused) {
            await $(this.playButton).click();
            await this.getPlayStatus.waitUntil(async function () {
                return (await this.getAttribute("class")) === attrValueWhenPlaying;
            }, {timeoutMsg: "Play was not successful"});
        }
    }

    async pauseVideo() {
        const attr = await this.getPlayStatus.getAttribute("class");
        const attrValueWhenPlaying = "pause-icon";
        const attrValueWhenPaused = "play-icon";
        if(attr === attrValueWhenPlaying) {
            await $(this.playButton).click();
            await this.getPlayStatus.waitUntil(async function () {
                return (await this.getAttribute("class")) === attrValueWhenPaused;
            }, {timeoutMsg: "Pause was not successful"});
        }
    }

    async getDisplayedSuggestedVideos() {
        const videoElements = await $$(this.displayedSuggestedVideos);
        let list = [];
        let i;
        for(i = 0; i< videoElements.length; i++) {
            const title = await videoElements[i].getText();
            list.push(title);
        }
        console.log(`suggested videos are ${list}`);
        return list;
    }

    async getMediaPlayerStatus() {
        return await this.getPlayStatus.getAttribute("class");
    }

    async playRandomVideoFromSuggestions() {
        const attrValueWhenPlaying = "pause-icon";
        const videoElements = await $$(this.displayedSuggestedVideos);
        let randomIndex = Math.floor(Math.random() * videoElements.length)
        if(randomIndex === 0){
            randomIndex = 1;// this makes sure the current video is not selected
        }
        console.log(`randomIndex chosen is ${randomIndex}`);
        await videoElements[randomIndex].click();
        await this.getPlayStatus.waitUntil(async function () {
            return (await this.getAttribute("class")) === attrValueWhenPlaying;
        }, {timeoutMsg: "Play was not successful"});
    }
}
module.exports =  MediaPage;
