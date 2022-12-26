const VideoPage = require('../pageobjects/video.page');

describe('Should be validate cnn page to video functionalities',()=>{

    beforeEach(async ()=>{
        await VideoPage.open();
    })

    it('Validate play video functionality on the page',async ()=>{
        await VideoPage.openVideo();
        await VideoPage.playVideo();
        await VideoPage.expectPlay('Now playing')
    })

    it('Validate pause video functionality on the page',async ()=>{
        await VideoPage.openVideo();
        await VideoPage.playVideo();
        await VideoPage.stopVideo();
    })

    it('Validate mute of video functionality on the page',async ()=>{
        await VideoPage.openVideo();
        await VideoPage.playVideo();
        await VideoPage.muteSound();
    })

    it('Validate related video suggestions feature',async ()=>{
        await VideoPage.openVideo();
        const count = parseInt(await VideoPage.countListVideos())
        expect (await VideoPage.countVideos()).toBeElementsArrayOfSize({eq:count});
    })

    it('Validate next video functionality on the page',async ()=>{
        await VideoPage.openVideo();
        await VideoPage.playVideo();
        await VideoPage.pressNextVideo();
    })

    it('Validate previous video functionality on the page',async ()=>{
        await VideoPage.openVideo();
        await VideoPage.playVideo();
        await VideoPage.pressPreviousVideo();
    })
})