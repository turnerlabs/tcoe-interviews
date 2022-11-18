const SearchPage = require('../../pageobjects/pageObjectsSearchF/search.page');
const SearchResult = require('../../pageobjects/pageObjectsSearchF/searchResults.page');
const expectchai = require("chai").expect
const fs = require ("fs");

let dataTC02 = JSON.parse(fs.readFileSync("scenarios/uiplayground/test/dataTest/TS_001_Search_Functionality/TC_SF_002.json"));
let dataTC03 = JSON.parse(fs.readFileSync("scenarios/uiplayground/test/dataTest/TS_001_Search_Functionality/TC_SF_003.json"));
let dataTC04 = JSON.parse(fs.readFileSync("scenarios/uiplayground/test/dataTest/TS_001_Search_Functionality/TC_SF_004.json"));

describe('TS_001_Search_Functionality', () => {

    beforeEach(async()=>{

        await browser.setTimeout({
            'pageLoad': 120000,
            'implicit': 120000
        });
        await SearchPage.open();
        await browser.maximizeWindow();
    });

        it('TC_SF_001 validating search page button exist', async () => {
            
            await expect(SearchPage.getSearchButton()).toBeDisplayed()

        });

    dataTC02.forEach(({data}) => {
        it('TC_SF_002 validating search shows results', async () => {
            
            await expect(SearchPage.getSearchButton()).toBeDisplayed()
            await SearchPage.pressSearchBtn();
            await SearchPage.setValueSearchBar(data.keyword);
            await browser.keys("\uE007"); 
            expect(await SearchResult.getListResults()).toBeDisplayed()

        });
    });

    dataTC03.forEach(({data}) => {

        it('TC_SF_003 validating results displayed contain at least once the keyword', async () => {
                         
            await SearchPage.pressSearchBtn();
            await SearchPage.setValueSearchBar(data.keyword);
            await browser.keys("\uE007"); 
            const numbers = await SearchResult.visitPages(data.keyword);
            console.log(numbers)
            expectchai(SearchResult.verifyArrayNumbers(numbers)).to.be.false

        });
    });

    dataTC04.forEach(({data}) => {
        it('TC_SF_004 special characteres', async () => {

            await SearchPage.pressSearchBtn();
            await SearchPage.setValueSearchBar(data.specialcCharacter);
            await browser.keys("\uE007"); 
            await SearchResult.noResultMsg.waitForDisplayed()
            expectchai(await SearchResult.noResultMsg.isDisplayed()).to.be.true

        });
    });

        it.only('TC_SF_005 validating clear button', async () => {

            await SearchPage.pressSearchBtn();
            await SearchPage.setValueSearchBar(dataTC02[0].data.keyword);
            await browser.keys("\uE007"); 
            await SearchResult.getListResults()
            await SearchResult.pressSearchClearBtn();
            expectchai(SearchResult.getValueSearchBar()).to.be.empty
            
        });

});