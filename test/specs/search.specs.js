const SearchPage = require('../pageobjects/search.page')

describe('Validate site search functionality', () => {
    it('should search for news and clean the input search box', async () => {
        await SearchPage.openS()
        await SearchPage.enterInputSearch('World cup 2022')
        await expect(SearchPage.searchInput).toHaveValueContaining('World cup 2022')
        await SearchPage.clearInputSearch()
        await expect(SearchPage.searchInput).toHaveValueContaining('')
        const listItems = $$('//*[@id="search"]/div[1]/div[2]/div[2]/div/ul')
        const listitemsText = listItems.map(e  => e.getText())
        console.log("LIST> ", listitemsText)
        
    })

    it('should search for different link options', async () => {
        await SearchPage.enterInputSearch('Bank of America')
        await expect(SearchPage.searchInput).toHaveValueContaining('Bank of America')
        await SearchPage.clickLinksFilters()
        await expect(SearchPage.linkEverthing).toBeExisting()
        await expect(SearchPage.linkPhoto).toBeExisting()
        await expect(SearchPage.linkStories).toBeExisting()
        await expect(SearchPage.linkVideo).toBeExisting()
        await expect(browser).toHaveUrlContaining('types=al')
    })

    it('should search filters section options', async () => {
        await SearchPage.clickSectionFilters()
        await expect(SearchPage.clickBusiness).toBeExisting()
        await expect(SearchPage.clickEntertaiment).toBeExisting()
        await expect(SearchPage.clickNews).toBeExisting()
        await expect(SearchPage.clickSport).toBeExisting()
        await expect(browser).toHaveUrlContaining('section=travel')       
    })

    it('should search for sorting options', async () => {
        await SearchPage.clickSortingButton()   
        await expect(SearchPage.relevanceButton).toBeExisting()
        await expect(SearchPage.newestButton).toBeExisting()
        await expect(browser).toHaveUrlContaining('sort=relevance')       
    })

    it('should search by pagination', async () => {
        await SearchPage.clickPaginationButton()
        await expect(SearchPage.prevButton).toBeExisting()
        await expect(SearchPage.nextButton).toBeExisting()
        await expect(SearchPage.pageNumberButton).toBeExisting()
        await expect(browser).toHaveUrlContaining('page=3')       
    })
})