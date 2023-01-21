//const LoginPage = require('../pageobjects/login.page')
const SearchPage = require('../pageobjects/search.page')


describe('Validate site search functionality', () => {
    it('search should work', async () => {
        await SearchPage.open()
        await expect(SearchPage.searchBox).toBeExisting()
        await SearchPage.Search()
        await expect(SearchPage.SearchItem).toBeExisting()
    })
})


