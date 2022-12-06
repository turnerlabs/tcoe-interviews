module.exports = {
    textInput: 'inputJustAccept30Characters**, after the comma is not displayed',
    activeButton: 'This button is active',
    optionsDropDown: [
        'webdriver.io is awesome',
        'Appium is awesome',
        'This app is awesome'
    ],

    SELECTORS: {
        //FormsScreen
        FORMBUTTON_SELECTED: 'android=new UiSelector().description("Forms")',
        ALERT_BUTTON: 'android.widget.Button',
        DROPDOWN: '//*[@content-desc="Dropdown"]/*/android.widget.EditText',
        OK_BUTTON: '*//android.widget.Button[@resource-id="android:id/button1"]',
        //Picker
        ANDROID_LISTVIEW: '//android.widget.ListView',
        OPTION_LISTVIEW: '//android.widget.CheckedTextView',
        DROPDOWN_OPTIONS: 'new UiSelector().className("android.widget.CheckedTextView").checked(false)',
        DEFAULT_OPTION: 'new UiSelector().className("android.widget.CheckedTextView").checked(true)',
        //NativeAlert
        ALERT_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
        ALERT_MESSAGE: '*//android.widget.TextView[@resource-id="android:id/message"]'
    }
}