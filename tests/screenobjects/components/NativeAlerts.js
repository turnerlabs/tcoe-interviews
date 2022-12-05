class NativeAlert {

    static async isAlertDisplayed() {
        let uiSelector = 'new UiSelector().resourceId("android:id/content")';
        let nativeAlert = $(`android=${uiSelector}`);
        return await nativeAlert.isDisplayed();
    }

    static async getOutFromAlert() {
        let uiSelector = 'new UiSelector().resourceId("android:id/button1")';
        let okBtn = await $(`android=${uiSelector}`);
        await okBtn.click();
    }
}

module.exports = NativeAlert;