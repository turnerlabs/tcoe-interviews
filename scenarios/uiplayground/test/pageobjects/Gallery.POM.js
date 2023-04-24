const { expect } = require("chai");
const BaseURL = require("./BaseURL");

const NEXT_BUTTON = '//button[@class="gallery-inline__next"]' //Next button at the bottom
const PREV_BUTTON = '//button[@class="gallery-inline__prev"]' //Prev button at the bottom 
const PHOTO_COUNT = '//div[@class="gallery-inline__counter"]' //Number of photos count
const GALLERY = '//div[@class="gallery-inline__slides"]' //Gallery xPath
const HEADLINE = '//H1[@class="headline__text inline-placeholder"]' //xPath to find headline
const NEXT_OVERLAY = '//button[@class="gallery-inline__next-overlay"]' //Next button overlay
const PREV_OVERLAY = '//button[@class="gallery-inline__prev-overlay"]' //Next button overlay
const IMAGE_DIV = '//*[@class="image_gallery-image__picture"]//img' //Img tag to validate


class Gallery extends BaseURL{

    async openURL(){
        await browser.maximizeWindow() //Maximize window 
        return super.open('travel/gallery/top-christmas-markets/index.html')
    }

    async waitForImgtoBeDisplayed(){
        await $(IMAGE_DIV).waitForDisplayed()
    }

    async waitAndScrollToHeadline(){
        await $(HEADLINE).scrollIntoView()
    }

    async beforePhotoCount(){
        let beforeCount = await $(PHOTO_COUNT).getText()
    }

    async clickNextButton(){
        await $(NEXT_BUTTON).click()
    }

    async clickPrevButton(){
        await $(PREV_BUTTON).click()
    }

    async clickNextOverlay(){
        await $(NEXT_OVERLAY).click()
    }

    async clickPrevOverlay(){
        await $(PREV_OVERLAY).click()
    }

    get photoCount(){
        return $(PHOTO_COUNT)
    }

    async validateTotalCount(){
        let totalPhotoCount = await $(PHOTO_COUNT).getText()
        expect(totalPhotoCount).to.be.include('26')
    }

    async waitForImageToBeLoaded(){
        await $(GALLERY).waitForDisplayed()
    }

}

module.exports = new Gallery();