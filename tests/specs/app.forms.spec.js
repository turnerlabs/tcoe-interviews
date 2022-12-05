const HomeScreen = require('../screenobjects/HomeScreen');


describe('Form components validation', () => {
 
    it('should be present the default selection of the tab', async () => {
        await HomeScreen.waitForLoading();
        await expect(HomeScreen.formsOption).toHaveAttribute('selected', 'false');
    });

   
});


