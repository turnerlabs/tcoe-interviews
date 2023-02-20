import homePage from "../pages/home/home.page"
import searchResults from "../pages/search.results.page"
import utils from "../utils/utils"

describe('Search functionality', () => {
    it('Search list correctly displayed after doing a search', async () => {
        await homePage.open()
        expect(await utils.getUrl()).toHaveTextContaining('cnn.com')

        await homePage.search('United States')
        expect(searchResults.isFirstResultDisplayed()).toBeTruthy()
        expect(searchResults.areElementsDisplayed()).toBeTruthy()
        expect(await utils.getUrl()).toHaveTextContaining('United States')
    })
})
