import homePage from "../../pages/home/home.page"
import searchResults from "../../pages/search.results.page"
import utils from "../../utils/utils"
import { expect } from "chai"

describe('Search functionality', () => {
    it('Search list correctly displayed after doing a search', async () => {
        await homePage.open()
        expect(await utils.getUrl()).to.contain('cnn.com')

        await homePage.search('United States')
        expect(await searchResults.isFirstResultDisplayed()).to.be.true
        expect(await searchResults.areElementsDisplayed()).to.be.true
    })
})
