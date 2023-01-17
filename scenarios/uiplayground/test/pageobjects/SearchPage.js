
const  Constants =  require('../../support/Constants.json')
const  SearchData = require('../../support/SearchData.json')

class HomePage {
    /**
     * define selectors using getter methods
     */
    get searchSection () {
        return $('.search__results');
    }

    get searchQueryText () {
        return $('#search__query');
    }

    get searchResultList () {
        return $('.search__results-list');
    }

    
    async validateSearchData() {
        await this.searchSection.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.searchQueryText).toHaveText(SearchData.searchDataInput);
    }

    async validateSearchList() {
        await this.searchResultList.waitForDisplayed({timeout:Constants.twentySec});
        await expect(this.searchResultList).toBeDisplayed();        
    }
}

module.exports = new HomePage();