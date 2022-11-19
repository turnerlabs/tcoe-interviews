const PlayVideoPage = require('../../pageobjects/pageObjectsVideoF/playVideo.page');
const expectchai = require("chai").expect
const fs = require ("fs");


describe('TS_001_Video Functionality validating video playing', () => {

    beforeEach(async()=>{
        await PlayVideoPage.open();

        await browser.setTimeout({
            'pageLoad': 10000,
            'implicit': 10000
        });
        await browser.maximizeWindow();
    });


        it('TC_VF_001 validating results displayed contain at least once the keyword', async () => {
             
            await PlayVideoPage.pressPlayBtn();
            await PlayVideoPage.progressVideoBar2.waitForExist();
            const time = await PlayVideoPage.getProgressVideoBar();
            expectchai(time).not.to.be.equals("00:00")

        }); 

        it('TC_VF_002 validating suggested videos', async () => {

           await PlayVideoPage.validateSuggestFeature();
           await PlayVideoPage.progressVideoBar2.waitForExist();
           const time = await PlayVideoPage.getProgressVideoBar();
           expectchai(time).not.to.be.equals("00:00")
       });

       it.only('TC_VF_003 validating playing suggested videos witn video name ', async () => {

            const nameVideoClicking = await PlayVideoPage.validateSuggestFeature();
            await PlayVideoPage.progressVideoBar2.waitForExist();
            const time = await PlayVideoPage.getProgressVideoBar();
            expectchai(time).not.to.be.equals("00:00")
            const nameVideoPlaying = await PlayVideoPage.getVideoPlayingName();
            expectchai(nameVideoClicking).to.be.eqls(nameVideoPlaying);

    });
       
    
});
