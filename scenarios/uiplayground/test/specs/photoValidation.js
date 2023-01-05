const CNNPage = require('../pageobjects/cnnPage');

const searchContext = 'Brazil';

describe('Search validation', () => {
    it('should perform a search successfully', async () => {
        await CNNPage.openCNNHome('travel/gallery/top-christmas-markets/index.html');
    })
})


