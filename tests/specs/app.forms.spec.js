const HomeScreen = require('../screenobjects/HomeScreen');


describe('Form components validation', () => {

    beforeEach(async () => {
        await HomeScreen.waitForLoading();
    });

    afterEach(async () => {
        await HomeScreen.goToHome();
    });

    it('should be present the default selection of the tab', async () => {
        await HomeScreen.waitForLoading();
        await expect(HomeScreen.formsOption).toHaveAttribute('selected', 'false');
    });

    it('form tab should be available for selection and is clickable', async () => {
        await expect(HomeScreen.formsOption).toBeDisplayed();
        await expect(HomeScreen.formsOption).toBeEnabled();
        await expect(HomeScreen.formsOption).toHaveAttribute('clickable', 'true');
    });

    it('form tab should change color when is selected', async () => {
        await HomeScreen.goToForms();
        await expect(HomeScreen.formsOption).toBeSelected();
    });



});


