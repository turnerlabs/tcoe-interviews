const SearchPage = require('../pageobjects/search.js');
const Const = require('../pageobjects/constants');
describe('Validate Search functionality', () => {
    beforeEach(async () => {
        await SearchPage.open(Const.searchUrl);
    })
    it('should search correctly with invalid criteria', async () => {

        await SearchPage.invalidSearch("brijshiv");
    },);
    it('should search correctly with valid criteria', async () => {
        await SearchPage.validSearch("fifa");
    },);

    it('validate searching with blank', async () => {
        await SearchPage.validateBlankSearch();
    },);
});