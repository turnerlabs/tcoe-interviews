const entertainmentPage = require('../pageobjects/Entertainment.page.js');
const genericActions = require('../helpers/GenericActions.js');
const data = require('../../data/entertainmentTestData.js');

describe('Validate CNN entertainment page working', () => {

    beforeEach(async() => {
        await entertainmentPage.open();
        await genericActions.maximizeWindow();
    });
    
    it('Validate default video can be played', async() => {
        await entertainmentPage.clickOnPlayButton();
        await entertainmentPage.waitForAd();
        await entertainmentPage.waitForAdDisappearing();
        await entertainmentPage.moveMouseOverVideoContainer();
        await expect(await entertainmentPage.getTextVideoDuration()).to.equal(data.videoDuration, 'Video functionality is not working as intended');
    });

    it('Validate there are related videos', async() => {
        await expect(await entertainmentPage.getRelatedVideosAmount()).to.equal(data.relatedVideosAmount, 'A wrong amount of related videos is listed');
    });

    it('Validate a related video can be chosen', async() => {
        let secondRelatedVideoTitle = await entertainmentPage.getTextSecondRelatedVideo();
        await entertainmentPage.clickOnSecondRelatedVideo();
        await entertainmentPage.waitForAd();
        await expect(await entertainmentPage.getTextVideoTitle()).to.equal(secondRelatedVideoTitle, 'Related video suggestions feature is not working as intended');
    });
});