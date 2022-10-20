
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage extends Page {
    /**
     * define selectors using getter methods
     */
   
    get linkResources(){
        return $('*[href="/resources"]');
    }

    get resourcesTitle(){
        return $('.container h3');
    }

    get linkBusiness(){
        return $('*[href="/business"]');
    }

    async clickResourcesLink () {
        await this.linkResources.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new MainPage();
