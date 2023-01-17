
const  Constants = require('../../support/Constants.json')
class HomePage {
    /**
     * define selectors using getter methods
     */
    get buttonSearch () {  return $('//button[@data-test="searchButton"]');  }

    get inputSearchBox () { return $('#header-search-bar');  }

    get buttonSearchSubmit () {  return $('//button[@aria-label="Search"]');  }

    
    async clickSearchButton() {
        await this.buttonSearch.waitForClickable({timeout:Constants.twentySec});
        await this.buttonSearch.click();
    }

    async setSearchFieldValue(inputStr) {
        await this.inputSearchBox.waitForDisplayed({timeout:Constants.twentySec});
        await this.inputSearchBox.setValue(inputStr);
        
    }

    async submitSearch() {
        await this.buttonSearchSubmit.waitForClickable({timeout:Constants.twentySec});
        await this.buttonSearchSubmit.click();        
    }
}

module.exports = new HomePage();
