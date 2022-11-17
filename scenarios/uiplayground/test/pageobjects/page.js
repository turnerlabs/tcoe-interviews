/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    /**
    * Opens CNN page
    */
      openCNN () {
        return browser.url(`https://www.cnn.com/`)
    }

    /**
    * Opens CNN Video page
    */
     openCNNVideos () {
        return browser.url(`https://www.cnn.com/videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn`)
    }

    /**
    * Opens CNN Gallery page
    */
     openCNNGallery () {
        return browser.url(`https://www.cnn.com/travel/gallery/top-christmas-markets/index.html`)
    }
}
