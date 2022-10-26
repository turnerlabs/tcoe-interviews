

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResourcesPage extends Page {
    /**
     * define selectors using getter methods
     */

    get pageHeader() {
        return $('//h3[contains(text(),"Resources")]');
    }

    get resourcesHeaders() {
        return $$('body > section > div > h4');
    }

    resourcesHeadersText() {
        this.resourcesHeaders.forEach(element => {
            console.log("this is for testing.." + element.getText())
        });
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('resources');
    }
}

module.exports = new ResourcesPage();
