
class Homepage {

    get searchButton() {
        return $('[data-test="searchButton"]')
    }

    async clickOnSearchButton() {
        await this.searchButton.waitForDisplayed()
        await this.searchButton.click()
    }

}

module.exports = new Homepage()