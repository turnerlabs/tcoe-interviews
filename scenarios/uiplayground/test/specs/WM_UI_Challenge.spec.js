const { expect } = require('chai')
const Search = require('../pageobjects/Search.POM')
const VideoPage = require("../pageobjects/Video.POM")
const Gallery = require("../pageobjects/Gallery.POM")

const textToSearch = 'India' //Text to be entered in search box
let expectedNextCount = '2 of 26'
let expectedPrevCount = '1 of 26'
let invalidExpectedNextCount = '1 of 26'
let invalidExpectedPrevCount = '2 of 26'

describe('Validate CNN web page', () => {
    it('Validate search functionality', async () => {
        await Search.openURL()
        await Search.waitAndClickSearchIcon()
        await Search.waitAndEnterTextInSearchBar(textToSearch)
        await Search.clickSearchButton()

        const headerDisplayResult = await Search.resultText.getText()
        await expect(headerDisplayResult).to.be.equal(textToSearch)

        await Search.scrollToFooterSearchAndEnterText(textToSearch)

        const footerDisplayResult = await Search.resultText.getText()
        await expect(footerDisplayResult).to.be.equal(textToSearch)
    })

    it("Validate gallery page", async () => {
        await Gallery.openURL()
        await Gallery.waitAndScrollToHeadline()
        await Gallery.waitForImgtoBeDisplayed()
        await Gallery.validateTotalCount()

        //Validate photo counts when clicked buttons
        await Gallery.clickNextButton()

        await Gallery.waitForImageToBeLoaded()
        let nextPhotoCount = await Gallery.photoCount.getText()
        expect(nextPhotoCount).to.be.equal(expectedNextCount)
        expect(nextPhotoCount).to.be.not.equal(invalidExpectedNextCount)

        await Gallery.clickPrevButton()

        await Gallery.waitForImageToBeLoaded()
        let prevPhotoCount = await Gallery.photoCount.getText()
        expect(prevPhotoCount).to.be.equal(expectedPrevCount)
        expect(prevPhotoCount).to.be.not.equal(invalidExpectedPrevCount)


        //Validate photo counts when clicked overlay buttons

        await Gallery.clickNextOverlay()

        await Gallery.waitForImageToBeLoaded()
        let nextOverlayCount = await Gallery.photoCount.getText()
        expect(nextOverlayCount).to.be.equal(expectedNextCount)
        expect(nextOverlayCount).to.be.not.equal(invalidExpectedNextCount)

        await Gallery.clickPrevOverlay()

        await Gallery.waitForImageToBeLoaded()
        let prevOverlayCount = await Gallery.photoCount.getText()
        expect(prevOverlayCount).to.be.equal(expectedPrevCount)
        expect(prevOverlayCount).to.be.not.equal(invalidExpectedPrevCount)
    })

    it("Validate video functions", async () => {
        await VideoPage.openURL()
        await VideoPage.waitAndclickPlay()
        await VideoPage.waitForSpinnerToBeDisappeared()

        if (await VideoPage.adDiv.isDisplayed()) {

            //If Ad is present
            await VideoPage.adProgressBar.waitForDisplayed()
            await VideoPage.adPauseButton.waitForDisplayed()
            expect(await VideoPage.adProgressBar.isDisplayed()).to.be.true;
            expect(await VideoPage.adPauseButton.isDisplayed()).to.be.true; //Validating whether pause button is present
            await VideoPage.adPauseButton.click() //Click Pause BTN

            expect(await VideoPage.adPauseButton.isDisplayed()).to.be.false; //Onclicking pause expect pause to be disabled
            expect(await VideoPage.adPlayButton.isEnabled()).to.be.true; //Validating whether play button is present

            await VideoPage.adPlayButton.click() //Click Play

            expect(await VideoPage.adMuteButton.isDisplayed()).to.be.true; //Validating whether mute icon is present on screen or not
            await VideoPage.adMuteButton.click() //Click mute
            expect(await VideoPage.adMuteButton.isDisplayed()).to.be.false; //mute button should disappear
            expect(await VideoPage.adUnmuteButton.isDisplayed()).to.be.true; //unmute should be shown on screen
            await VideoPage.adUnmuteButton.click() //Click unmute

            expect(await VideoPage.adFullScreenBtn.isDisplayed()).to.be.true; //Full screen button is displayed
            await VideoPage.adFullScreenBtn.click() //Click to full screen
            expect(await VideoPage.adFullScreenBtn.isDisplayed()).to.be.false; //Full screen button should disappear
            expect(await VideoPage.adCollapseButton.isDisplayed()).to.be.true; //Collapse button is displayed

            await VideoPage.adCollapseButton.click() //Click Collapse screen

            //Wait until Title of the main video is present
            await VideoPage.adProgressBar.waitUntil(async function () {
                return (await VideoPage.adCountDown.getText()) === 'Ad:0'
            },
                {
                    timeout: 30000,
                    timeoutMsg: "Ad didn't end in 30 secs."
                })


            //Actual video validation starts from here
            await VideoPage.validateVideoPlayer()
        }

        else if(VideoPage.adDiv.isDisplayed({ reverse: true })) {
            //If Ad is not present
            await VideoPage.validateVideoPlayer()
        }
    })


})