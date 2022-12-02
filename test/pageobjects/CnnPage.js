const SearchDialog = require("./SearchDialog");

class CnnPage {

    constructor() {
        this.searchIcon = "//button[@data-test=\"searchButton\"]";
        this.searchDialog = "//*[@class=\"Cell-i0zvfi-0 sc-kxynE fMHSrm\"]";
    }

    getSearchDialog() {
        return $(this.searchDialog);
    }

    getSearchIcon() {
        return $(this.searchIcon);
    }

    async showSearchDialog() {
        const dialog = this.getSearchDialog();
        const icon = this.getSearchIcon();
        let state = await dialog.isDisplayed();
        if(!state){
            await icon.click();
            // Wait for dialog to be displayed
            await browser.waitUntil(async ()=> await dialog.isDisplayed() === true, {timeoutMsg: "Search dialog was not displayed"});
        }
        return new SearchDialog();
    }

    async hideSearchDialog() {
        const dialog = this.getSearchDialog();
        const icon = this.getSearchIcon();
        let state = await dialog.isDisplayed();
        if(state){
            await icon.click();
            // Wait for dialog not to be displayed
            await browser.waitUntil(async ()=> await dialog.isDisplayed() === false, {timeoutMsg: "Search dialog was not displayed"});

        }
    }
}

module.exports = CnnPage;
