const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get searchInput() {
        return $('#search > div.search__controls > div.search__fields > input');
    }

    get clearSearch() {
        return $('//*[@id="icon-ui-add-2"]');
    }

    get searchButton() {
        return $('//*[@id="search"]/div[1]/div[1]/button[2]');
    }

    get linkEverthing() {
        return $('//*[@id="search"]/div[1]/div[2]/div[1]/div/ul/li[1]/label');
    }

    get linkStories() {
        return $('//*[@id="search"]/div[1]/div[2]/div[1]/div/ul/li[2]/label');
    }

    get linkVideo() {
        return $('//*[@id="search"]/div[1]/div[2]/div[1]/div/ul/li[3]/label');
    }

    get linkPhoto() {
        return $('//*[@id="search"]/div[1]/div[2]/div[1]/div/ul/li[4]/label');
    }


    /**
     * define selectors using getter methods for dropdown
     */
    get dropdownClick() {
        return $('//*[@id="section_"]');
    }

    get clickNews() {
        return $('//*[@id="section_news"]');
    }

    get clickBusiness() {
        return $('//*[@id="section_business"]');
    }

    get clickEntertaiment() {
        return $('//*[@id="section_entertainment<"]');
    }

    get clickSport() {
        return $('//*[@id="section_sport"]'); 
    }

    get clickTravel() {
        return $('//*[@id="section_travel"]');
    }

    get clickStyle() {
        return $('//*[@id="section_style"]');
    }


    /**
     * define selectors using getter methods for Display numbers of news
     */
    get getDispalyNewsLabel() {
        return $('//*[@id="search"]/div[2]/div/div[1]/div[1]');
    }

    /**
    * define selectors using getter methods for sorting
    */
    get newestButton() {
        return $('//*[@id="newest"]');
    }

    get relevanceButton() {
        return $('//*[@id="relevance"]');
    }

    /**
    * define selectors using getter methods for pagination
    */
    get prevButton() {
        return $('#search > div.search__right > div > div.search__results-pagi > div > div.pagination-arrow.pagination-arrow-left.search__pagination-link.text-active');
    }

    get nextButton() {
        return $('//*[@id="search"]/div[2]/div/div[4]/div/div[3]');
    }

    get pageNumberButton() {
        return $('//*[@id="search"]/div[2]/div/div[4]/div/div[2]/span[4]');
    }

    /**
    * define selectors using getter methods for Result container
    */
    get ListNewsContainer() {
        return $('//*[@id="search"]/div[2]/div/div[2]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async enterInputSearch(searchText) {
        await this.searchInput.waitForDisplayed();
        await this.searchInput.setValue(searchText);
        await this.searchButton.click();
    }

    async clearInputSearch() {
        await this.clearSearch.waitForDisplayed();
        await this.clearSearch.click();      
        console.log("aaa", await this.searchInput.getText())
    }

    async clickLinksFilters() {
        await this.linkStories.waitForDisplayed();
        await this.linkStories.click();
        await this.linkVideo.waitForDisplayed();
        await this.linkVideo.click();
        await this.linkPhoto.waitForDisplayed();
        await this.linkPhoto.click();
        await this.linkEverthing.waitForDisplayed();
        await this.linkEverthing.click();
    }

    async clickSectionFilters() {
        await this.dropdownClick.waitForDisplayed();
        await this.dropdownClick.click();
        await this.clickBusiness.waitForDisplayed();
        await this.clickBusiness.click();
        await this.clickBusiness.click();
        await this.clickEntertaiment.waitForDisplayed();
        await this.clickEntertaiment.click();
        await this.clickEntertaiment.click();
        await this.clickStyle.waitForDisplayed();
        await this.clickStyle.click();
        await this.clickStyle.click();
        await this.clickNews.waitForDisplayed();
        await this.clickNews.click();
        await this.clickNews.click();
        await this.clickSport.waitForDisplayed();
        await this.clickSport.click();
        await this.clickSport.click();
        await this.clickTravel.waitForDisplayed();
        await this.clickTravel.click();
    }

    async clickSortingButton() {
        await this.relevanceButton.waitForDisplayed();
        await this.relevanceButton.click();
    }

    async clickPaginationButton() {
        await this.nextButton.waitForDisplayed();
        await this.nextButton.click();
        await this.pageNumberButton.waitForDisplayed();
        await this.pageNumberButton.click();
        await this.prevButton.waitForDisplayed();
        await this.prevButton.click();
    }
 
    /**
     * overwrite specific options to adapt it to page object
     */
    openS() {
        return super.openS('search');
    }
}

module.exports = new SearchPage();
