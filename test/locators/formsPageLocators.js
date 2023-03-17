import constants from '../constants/constants';

class formsPageLocators {

    // forms page header
    get homePageHeader() {
        return $('//*[@text="Form components"]');
    }

    // input field
    get inputField() {
        return $('//android.widget.EditText[@content-desc="text-input"]');
    }

    // you have typed field
    get youHaveTypedField() {
        return $('//android.widget.TextView[@content-desc="input-text-result"]');
    }

    // active button
    get activeButton() {
        return $('//android.view.ViewGroup[@content-desc="button-Active"]');
    }

    // inactive button
    get inActiveBtn() {
        return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup');
    }

    get alertPopup() {
        return $('//android.widget.FrameLayout[@resource-id="'+constants.androidResourceId+'content"]');
    }

    get alertPopupTitle() {
        return $('//android.widget.TextView[@resource-id="'+constants.androidResourceId+'alertTitle"]');
    }

    get alertPopupMessage() {
        return $('//android.widget.TextView[@resource-id="'+constants.androidResourceId+'message"]');
    }

    get alertOkBtn() {
        return $('//android.widget.Button[@resource-id="'+constants.androidResourceId+'button1" and @text="OK"]')
    }

    get alertPopupCancelBtn() {
        return $('//android.widget.Button[@resource-id="'+constants.androidResourceId+'button2" and @text="CANCEL"]')
    }

    get alertPopupAskMeLaterBtn() {
        return $('//android.widget.Button[@resource-id="'+constants.androidResourceId+'button3" and @text="ASK ME LATER"]');
    }

    get selectItemDD() {
        return $('//android.view.ViewGroup[@content-desc="Dropdown"]');
    }

    get selectDDOptionsPanel() {
        return $('//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]');
    }

    get selectDDOptions() {
        return $$('//android.widget.CheckedTextView[@resource-id="android:id/text1"]');
    }

}

export default new formsPageLocators();