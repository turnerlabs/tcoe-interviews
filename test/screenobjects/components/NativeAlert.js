const Utils = require('../../helpers/Utils.js');
const GenericActions = require('../../helpers/GenericActions.js');

class NativeAlert {

    get alert() {
        return $(Utils.findAndroidElementByResourceId("android:id/content"));
    }

    get okButton() {
        return $(Utils.findAndroidElementByResourceId("android:id/button1"));
    }
    
    async alertIsDisplayed() {
        await GenericActions.waitForIsShown(this.alert);
        return await this.alert.isDisplayed();
    }

    async tapOnOKButton() {
        await GenericActions.tapOn(this.okButton);
    }
}

module.exports = new NativeAlert();