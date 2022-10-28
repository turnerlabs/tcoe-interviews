const ClientSideDelayPage = require('../pageobjects/clientSideDelayPage.js');

describe('Element apearing after a heavy procesing on client', ()=>{
    it('Assert that an element apear afther a long time procesing', async()=>{
        await ClientSideDelayPage.open();
        await ClientSideDelayPage.startClientProcessing();
        await ClientSideDelayPage.waitProcesing();
        await expect(ClientSideDelayPage.dataCalculated).toHaveText('Data calculated on the client side.');
    });
});