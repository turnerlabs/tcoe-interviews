let HomePage = require('../pageobjects/home.page.js')
let SearchPage = require('../pageobjects/search.page.js') 

describe('Exercise One - Test Suite', () => {
    
    beforeEach(async() => {
        await browser.url('/')
    })

    it('TEST001 - Validate successful news search', async() => {
        await HomePage.clickOnSearchButton()
        await SearchPage.searchAndVerifyQueryValue('Brazil')
    })

    it('TEST002 - Validate search without value informed', async() => {
        await HomePage.clickOnSearchButton()
        await SearchPage.searchWithNoValue()
    })
})