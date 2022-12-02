const SearchPage = require("./SearchPage");
class SearchDialog {

    constructor() {
        this.searchDialog = "//*[@class=\"Cell-i0zvfi-0 sc-kxynE fMHSrm\"]";
        this.searchButton = "(//button[@aria-label=\"Search\"])[1]";
        this.searchTextField = "//input[@id=\"header-search-bar\"]";
    }

    getSearchField() {
        return $(this.searchTextField);
    }

    getSearchButton() {
        return $(this.searchButton);
    }

    async enterSearchText(text){
        await this.getSearchField().setValue(text);
        await this.getSearchButton().click();
        return new SearchPage();
    }
}
module.exports = SearchDialog;
