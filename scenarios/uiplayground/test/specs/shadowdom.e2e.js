const ShadowdomPage = require('../pageobjects/shadowdom.page');

describe('Shadow DOM', async () => {

    before(async function() {
        await ShadowdomPage.open();
      });

    /**
     * bug case
     */
     it('should copy the generated GUID to clipboard', async () => {
        await ShadowdomPage.generateGUID();
        await ShadowdomPage.copyGUID();
        // get actual value to compare
        const guid_value = await ShadowdomPage.editField.getValue();
        // paste value on clipboard on edit field
        await ShadowdomPage.setEditField(['Shift', 'Insert']);
        await expect(ShadowdomPage.editField).toHaveValue(guid_value);
    });
});