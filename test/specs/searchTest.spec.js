const CnnPage = require("../pageobjects/CnnPage");

describe("Search functionality", function() {

    it("Display search dialog on CNN", async () => {
        const searchTerm = "Ukraine";
        // Open page
        await browser.url("https://www.cnn.com/");
        const cnnPage = new CnnPage();
        const searchDialog = await cnnPage.showSearchDialog();
        await expect(cnnPage.getSearchDialog().isDisplayed()).toBeTruthy();
        const searchPage = await searchDialog.enterSearchText(searchTerm);
        // verify search result contains search term
        await expect(searchPage.getResultCount).toHaveTextContaining(searchTerm);
        // Verify page url contains search term
        let url = await browser.getUrl();
        expect(url).toHaveTextContaining(searchTerm);
    });
});
