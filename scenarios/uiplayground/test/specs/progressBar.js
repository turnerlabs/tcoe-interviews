import ProgressPage from "../pageobjects/progress.page.js";

describe('Progress bar challenge', () => {

    before(() => {
        ProgressPage.open();
    });

    it('Should click [start] wait for the bar to reach 75% and click [stop]', async () => {

            await ProgressPage.startBtn.click(); 
            await ProgressPage.progressBar.waitUntil(async function () {
                return (await this.getAttribute('aria-valuenow')) >= '75'
            }, {
                timeout: 50000,
            });
            await ProgressPage.stopBtn.click();
            console.log(await ProgressPage.progressBar.getAttribute('aria-valuenow'));
            await expect(ProgressPage.progressBar).toHaveText(['75%', '76%', '77%', '78%', '79%', '80%',])     
    });
    
});
