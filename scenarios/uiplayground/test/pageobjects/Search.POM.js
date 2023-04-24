const { expect } = require('chai');
const BaseURL = require('./BaseURL');

const SEARCH_ICON = '.header__search-icon-svg' //Search icon on CNN home page
const HEADER_SEARCH_BAR = '//*[@id="pageHeader"]//input[@class="search-bar__input"]' //xpath to find search bar in header
const HEADER_SEARCH_BUTTON = '//*[@id="pageHeader"]//button[@class="search-bar__submit"]' //xPath to find search button in header
const COMPLETE_RESULT_TEXT = '//div[@class="search__results-count"]' //xPath to find Full result text 
const RESULT_TEXT = '//*[@id="search__query"]' //xPath to find text on which results are retreived
const FOOTER_SEARCH_BAR = '//*[@id="pageFooter"]//input' //xpath to find search bar in footer
const FOOTER_SEARCH_BUTTON = '//*[@id="pageFooter"]//span[text()="Search"]' //xPath to find search button in footer

class Search extends BaseURL {

    //Open browser
    async openURL() {
        await browser.maximizeWindow() //Maximize window 
        return super.open('');
    }

    async waitAndClickSearchIcon() {
        await $(SEARCH_ICON).waitForDisplayed()
        return $(SEARCH_ICON).click()
    }

    async waitAndEnterTextInSearchBar(inputText) {
        await $(HEADER_SEARCH_BAR).waitForDisplayed()
        await $(HEADER_SEARCH_BAR).setValue(inputText)
    }

    async clickSearchButton() {
        await $(HEADER_SEARCH_BUTTON).click()
    }

    get resultText(){
        return $(RESULT_TEXT)
    }

    async validateSearchResult(outputText) {
        const queryDisplayResult = await $(RESULT_TEXT).getText()
        await expect(queryDisplayResult).to.be.equal(outputText)
    }

    async scrollToFooterSearchAndEnterText(footerInputText) {
        await $(FOOTER_SEARCH_BAR).scrollIntoView()
        await $(FOOTER_SEARCH_BAR).setValue(footerInputText)
        await $(FOOTER_SEARCH_BUTTON).click()
    }
}

module.exports = new Search();

