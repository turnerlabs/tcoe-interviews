import utils from "../../utils/utils"

const SELECTORS = {
    SEARCH_ICON: "button[data-test='searchButton']",
    SEARCH_INPUT: "#header-search-bar",
    COMPLETE_SEARCH_BUTTON: "button[aria-label='Search']",
}

class HomePage {
    get searchIcon() {
        return $(SELECTORS.SEARCH_ICON)
    }

    get searchInput() {
        return $(SELECTORS.SEARCH_INPUT)
    }

    get completeSearchButton() {
        return $(SELECTORS.COMPLETE_SEARCH_BUTTON)
    }

    async open() {
        await browser.url('/')
    }

    async search(statementToSearch) {
        await utils.click(this.searchIcon)
        await utils.sendKeys(this.searchInput, statementToSearch)
        await utils.click(this.completeSearchButton)
    }
}

export default new HomePage()
