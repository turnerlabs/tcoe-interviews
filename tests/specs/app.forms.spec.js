const HomeScreen = require('../screenobjects/HomeScreen');


describe('Form components validation', () => {
 
    it('should be present the default selection of the tab', async () => {
        await HomeScreen.waitForLoading();
        await expect(HomeScreen.formsOption).toHaveAttribute('selected', 'false');
    });
    
    it('form tab should be available for selection and is clickable', async () => {
        await expect(HomeScreen.formsOption).toBeDisplayed();
        await expect(HomeScreen.formsOption).toBeEnabled();
        await expect(HomeScreen.formsOption).toHaveAttribute('clickable', 'true');
    });
   
});


