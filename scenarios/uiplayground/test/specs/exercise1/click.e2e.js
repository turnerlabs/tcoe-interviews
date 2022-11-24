const ClickPage = require('../../pageobjects/exercise1/click.page');
const expect = require('chai').expect;

describe('Click Playground', () => {
    it('should button turns red after click | Bug-Tag', async () => {
        await ClickPage.openPlayground();
        await ClickPage.clickButton();
        const color = await ClickPage.badButton.getCSSProperty('color');
        expect(color.value).eq('red');
    });
});
