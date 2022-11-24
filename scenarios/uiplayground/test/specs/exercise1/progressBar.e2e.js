const ProgressBarPage = require('../../pageobjects/exercise1/progressBar.page');

describe('Progress Bar Playground', () => {
    it('should start progress bar and stop it when it reaches 75%', async () => {
        await ProgressBarPage.openPlayground();
        await ProgressBarPage.startProgressBar();
        await ProgressBarPage.stopProgressBarWhenReach75();
        await expect(ProgressBarPage.progressBar).toHaveTextContaining(/75|76|77|78|79|80/);
    });
});
