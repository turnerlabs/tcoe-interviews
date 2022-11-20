const HomePage = require('../pageobjects/cnn_home/home.page.js');
const SearchPage = require('../pageobjects/cnn_search/search.page');

describe('Test Spec 1', () => {
    it('Maximize Browser Window', async ()=> {
        browser.maximizeWindow();
    })

    it('Verify search on CNN website home page', async ()=> {
        await HomePage.open();
        await HomePage.checkForAddPopup();
        await HomePage.performSearch('mickey mouse')

        let searchResultSummary = await HomePage.getSearchSummary();
        let regEx = /Displaying 1-10 results out of \d+ for mickey mousey/;
        expect(searchResultSummary.searchCount.match(regEx)).not.toHaveValue(null);
    });

    it('Verify search on CNN website search page - Clear button', async()=> {
        await SearchPage.open();
        
        await SearchPage.addInputSearch('this is test string');

        let searchValue = await SearchPage.getInputSearch();
        console.log(searchValue)

        await SearchPage.hitClearSearch()
        searchValue = await SearchPage.getInputSearch();
        expect(searchValue).toHaveValue('')
    });

    it('Verify search on CNN website search page - % sign', async()=> {
        await SearchPage.open();
        
        await SearchPage.performSearch('DONALD%TRUMP');
        let searchResultSummary = await HomePage.getSearchSummary();
        let regEx = /Displaying 1-10 results out of \d+ for DONALD%TRUMP/;
        expect(searchResultSummary.searchCount.match(regEx)).not.toHaveValue(null);
    });

    it('Verify search on CNN website search page - * sign', async()=> {
        await SearchPage.open();
        
        await SearchPage.performSearch('DONALD*');
        let searchResultSummary = await HomePage.getSearchSummary();
        let regEx = /Displaying 1-10 results out of \d+ for DONALD\*/;
        expect(searchResultSummary.searchCount.match(regEx)).not.toHaveValue(null);
    });

    it('Verify search on CNN website search page - no match', async()=> {
        await SearchPage.open();
        let searchText = 'nosearchresultforthistextwillbe';
        await SearchPage.performSearch(searchText);
        let searchResultSummary =  await SearchPage.noSearchResultMsg();
        let expected = `Your search for ${searchText} did not match any results.`
        expect(searchResultSummary).toHaveValue(expected);
    });
});