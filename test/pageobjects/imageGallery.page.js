const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ImageGalleryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get title() {
        return $('//*[@id="mount"]/div/div[4]/div[2]/div/div[1]/div/h1');
    }

    get imageContainer() {
        return $('//*[@id="mount"]/div/div[4]/div[2]/div/div[2]/div/div/div[1]/div[1]/ul/li[1]/div');
    }

    get prevuiosImgButton() {
        return $('//*[@id="mount"]/div/div[4]/div[2]/div/div[2]/div/div/div[1]/div[2]/div/div[1]');
    }

    get nextImgButton() {
        return $('//*[@id="mount"]/div/div[4]/div[2]/div/div[2]/div/div/div[1]/div[2]/div/div[2]');
    }

    get gallaryCount() {
        return $('#mount > div > div.Chrome__content > div:nth-child(2) > div > div:nth-child(2) > div > div > div.slider > div.slider-decorator-1 > div');
    }

    get gallaryCredit() {
        return $('//*[@id="mount"]/div/div[4]/div[2]/div/div[2]/div/div/div[2]/div[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. validate the image gallary
     */
    async pressPrevImgButton() {
        await this.prevuiosImgButton.waitForDisplayed();
        await this.prevuiosImgButton.click();
    }

    async pressNextImgButton() {
        await this.nextImgButton.waitForDisplayed();
        await this.nextImgButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openS() {
        return super.openS('travel/gallery/top-christmas-markets/index.html');
    }
}

module.exports = new ImageGalleryPage();
