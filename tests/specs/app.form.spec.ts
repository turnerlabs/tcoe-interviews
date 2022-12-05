import TabBar from '../screenobjects/components/TabBar';
import FormsScreen from '../screenobjects/FormsScreen';

import { assert, expect } from 'chai';



describe('WebdriverIO and Appium, when interacting with Forms, Inputs, Buttons, and Alerts', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('Is able to go to forms tab', async () => {
        //Validate home tab is selected by default
        assert.isTrue(await TabBar.isHomeSelected());
        //Validate form tab is clickable
        expect(await TabBar.isFormBtnAvailable()).true;
        //Enter on Form Screen
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
    });

    

});
