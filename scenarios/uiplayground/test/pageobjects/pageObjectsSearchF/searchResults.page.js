class SearchResult {

    /**
     * define selectors using getter methods
     */
    get listResults () {return $$("div[data-editable='headline']");}
    get listContainer () {return $("div.search__results-list");}
    get noResultMsg () {return $("ul.search__no-results__suggestions");}
    get searchClear () {return $("button.search__clear");}
    get footerRow () {return $(".footer__row");}
    get searchBar () {return $(".search__input");}
    
    
   
    /**
     * 
     * @returns listResult
     */
    async getListResults(){
        await this.listContainer.waitForDisplayed()
        return  await this.listResults;
    }

    /**
     * 
     * @param { keyword you want to look for in each result } keyword 
     * @returns number of ocurrences
     */
    async validResults(keyword){
        const listWords = await $$("//*[contains(text(),'"+ keyword +"')]") 
        //*[contains(text(),'World Cup')]
        return  listWords.length;
    }

    /**
     * 
     * @param {*} keyword 
     * @returns array with all of numbers of ocurrencies for all items found
     */
    async visitPages(keyword){

        await this.listContainer.waitForDisplayed()
        const numbers = new Array(await this.listResults.length)
        
        for (var i = 0; i< await this.listResults.length; i++){

            await this.listResults[i].scrollIntoView();
            await this.listResults[i].click();
            var number = await this.validResults(keyword);
            numbers[i]=number

            /**
             * waits for page loading
             */
            await this.footerRow.waitForDisplayed();
        
            await browser.back();
            await this.listContainer.waitForDisplayed();
         
        }

        return numbers;
    }

    /**
     * 
     * @param {array with number of ocurrences} numbers 
     * @returns true if arrays contans 0 or false if it doesnt 
     */
    verifyArrayNumbers(numbers){
        return  numbers.includes(0) ? true : false
    }

    async pressSearchClearBtn(){
        await this.searchClear.click();
    }

    async getValueSearchBar(){
        //await this.searchBar.waitForDisplayed();
        await this.searchBar.getValue();
    }

    




}

module.exports = new SearchResult();
