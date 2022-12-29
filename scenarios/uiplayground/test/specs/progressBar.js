import ProgressPage from "../pageobjects/progress.page.js";
import { expect as expectChai } from 'chai';

describe('Progress bar challenge', () => {

    before(() => {
        ProgressPage.open();
    });

    it('Should click [start] wait for the bar to reach 75% and click [stop]', async () => {

            await ProgressPage.startBtn.click(); 
            await ProgressPage.waitProgress();
            await ProgressPage.stopBtn.click();
            console.log(await ProgressPage.progressBar.getAttribute('aria-valuenow'));
            expectChai(await ProgressPage.barPercentage()).within(75, 80);

    });
    
});
