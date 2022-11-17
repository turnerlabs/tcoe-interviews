const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CNNPage extends Page {
    /**
     * Define selectors using getter methods
     * Start definitions for Test Spec 1
     */
    get inputSearch () {
        return $('input[id="header-search-bar"]');
    }

    get btnSearch () {
        return $('title[id="searchIconTitle"]');
    }

    get btnSearchComplete () {
        return $('button[aria-label="Search"]');
    }

    get textSearch () {
        return $('strong[id="search__query"]')
    }

    /**
     * Start definitions for Test Spec 2
     */
    get btnPlayVideo () {
        return $('svg[class="play-icon"]');
    }

    get btnPauseVideo () {
        return $('svg[class="pause-icon"]');
    }

    get titlePlayVideo () {
        return $('title[id="playIconTitle"]');
    }

    get titlePauseVideo () {
        return $('title[id="pauseIconTitle"]');
    }

    get listRelatedVideos () {
        return $('div[class="video-playlist"]');
    }

    get randomRelatedVideo () {
        return $('div[class="video-resource" and data-position="2"]');
    }

    /**
     * Start definitions for Test Spec 3
     */
    get pageHeader () {
        return $('h1[class="Gallery__title"]');
    }

    get imgContainer () {
        return $('img[class="Image__image"]');
    }

    get imgCount () {
        return $('div[class="GalleryHeroDecorators__count"]');
    }

    get btnNextImage () {
        return $('div[class="GalleryHeroDecorators__button GalleryHeroDecorators__next"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to search the page
     */
    async search (searchValue) {
        await this.btnSearch.click();
        await this.inputSearch.setValue(searchValue);
        await this.btnSearchComplete.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. play video on the page
     */
     async playVideo () {
        await this.btnPlayVideo.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. play video from suggested videos
     */
     async playSuggestedVideo () {
        await expect(this.listRelatedVideos).toBeExisting(); // Verify suggested video list exists
        await this.randomRelatedVideo.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. pause video on the page
     */
     async pauseVideo () {
        await this.btnPauseVideo.click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. select next image on the page
     */
     async clickNextImage () {
        await this.btnNextImage.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openCNN () {
        return super.openCNN();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     openCNNVideos () {
        return super.openCNNVideos();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
     openCNNGallery () {
        return super.openCNNGallery();
    }
}

module.exports = new CNNPage();
