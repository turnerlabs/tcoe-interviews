const Utils = require('../../helpers/Utils.js');
const GenericActions = require('../../helpers/GenericActions.js');
const HomeScreen = require('../HomeScreen.js');
const FormsScreen = require('../FormsScreen.js');

class TabBar {

    get homeOption() {
        return $('~Home')
    }

    get formsOption() {
        return $('~Forms');
    }

    get clickableFormsOption() {
        return $(`${Utils.findAndroidElementByDescription("Forms")}.clickable(true)`);
    }

    async waitForTabBarIsShown() {
        return await GenericActions.waitForIsShown(this.homeOption);
    }

    async goToHomeScreen() {
        await GenericActions.tapOn(this.homeOption);
        return HomeScreen;
    }

    async goToFormsScreen() {
        await GenericActions.tapOn(this.formsOption);
        return FormsScreen;    
    }

    async formsOptionIsSelected() {
        await GenericActions.waitForIsShown($(`${Utils.findAndroidElementByDescription("Forms")}.selected(true)`));
        return await this.formsOption.isSelected();
    }

    async formsOptionCanBeSelected() {
        await GenericActions.waitForIsEnabled(this.formsOption);
        return await this.formsOption.isEnabled();
    }

    async formsOptionIsClickable() {
        await GenericActions.waitForIsShown(this.clickableFormsOption);
        return await this.clickableFormsOption.isDisplayed();
    }
}

module.exports = new TabBar();
