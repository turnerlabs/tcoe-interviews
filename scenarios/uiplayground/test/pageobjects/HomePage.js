
const  Constants = require('../../support/Constants.json')
class HomePage {
    /**
     * define selectors using getter methods
     */
    get buttonSearch () {  return $('//button[@data-test="searchButton"]');  }

    get inputSearchBox () { return $('#header-search-bar');  }

    get buttonSearchSubmit () {  return $('//button[@aria-label="Search"]');  }

    /**
     * Click on the search icon on the home page
     */
    async clickSearchButton() {
        await this.buttonSearch.waitForClickable({timeout:Constants.twentySec});
        await this.buttonSearch.click();
    }

    /**
     * 
     * @param inputStr enter into the input into the search field
     */

    async setSearchFieldValue(inputStr) {
        await this.inputSearchBox.waitForDisplayed({timeout:Constants.twentySec});
        await this.inputSearchBox.setValue(inputStr);
        
    }


    /**
     * To click on the submit button after providing input
     */

    async submitSearch() {
        await this.buttonSearchSubmit.waitForClickable({timeout:Constants.twentySec});
        await this.buttonSearchSubmit.click();        
    }
}

module.exports = new HomePage();
