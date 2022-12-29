import ClickPage from "../pageobjects/click.page.js";
import { expect as expectChai } from 'chai';

describe('Color changing Button', () => {

    before(() => {
        ClickPage.open();
    });

    //BUG CASE (THE BUG HAS BEEN SOLVED SINCE THE BUTTON NO LONGER TURNS RED)
    it('Should change the button color to green after clicking', async () => {

        await ClickPage.clickWithMouse();
        let newColor = await ClickPage.getButtonColor()
        expectChai(newColor).to.equal('rgba(40, 167, 69, 1)')

    });
    
});