import TabBar from '../screenobjects/components/TabBar';
import FormsScreen from '../screenobjects/FormsScreen';
import NativeAlert from '../screenobjects/components/NativeAlert';
import Picker from '../screenobjects/components/Picker';
import { assert, expect } from 'chai';
import { ALERT_TEXTS, getRandomOption, inputString, PICKER } from '../helpers/data';



describe('WebdriverIO and Appium, when interacting with Forms, Inputs, Buttons, and Alerts', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    it('Is able to go to forms tab', async () => {
        //Validate home tab is selected by default
        assert.isTrue(await TabBar.isHomeSelected());
        //Validate form tab is clickable
        assert.isTrue(await TabBar.isFormBtnAvailable());
        //Enter on Form Screen
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
        //Check the Forms tab is selected
        assert.isTrue(await TabBar.isFormsSelected());
    });

    it('Can type on input', async () => {
        //check keyboard
        await FormsScreen.tapOnInput();
        expect(await FormsScreen.isKeyboardShown()).true;
        //close keyboard
        await FormsScreen.hideKeyboard();
        //typing on input
        await FormsScreen.typeOnInput(inputString);
        //validating its the same text
        expect(await FormsScreen.getInputValue()).to.include(inputString);
    })
    
    it('Have 3 options in the picker element', async () => {
        //open dropdown
        await FormsScreen.tapOnDropDown();
        //Check there are 3 options
        //They will be 4 because of the default option (Select an item)
        expect(await FormsScreen.getOptionsArray()).to.have.lengthOf(4);;
        //check options from dropdown
        const option = getRandomOption();
        //check picker is visible
        await Picker.waitForIsShown();
        //select option
        await Picker.selectValue(option + ' ' + PICKER.PICKER_TEXTS);
        //verify selected
        expect(await FormsScreen.getDropDownText()).to.equal(option + ' ' + PICKER.PICKER_TEXTS);
    })


    

});
