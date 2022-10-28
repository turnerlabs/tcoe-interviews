const Page = require('./page');

/**
 * Home Page
 */
class HomePage extends Page {
    /**
     * Page Locators
     */
    get progressBarLink () {
        return $('=Progress Bar');
    }

    get ajaxDataLink () {
        return $('=AJAX Data');
    }

    get visibilityLink () {
        return $('=Visibility');
    }

    get shadowDomLink () {
        return $('=Shadow DOM');
    }

    get clickLink () {
        return $('=Click');
    }

    /**
     * Click on Progress Bar link
     */
    async clickOnProgressBarLink () {
        await this.progressBarLink.click();
    }

    /**
     * Open Base Page
     */
    open () {
        return super.open('');
    }
}

module.exports = new HomePage();
