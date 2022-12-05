export const inputString: string = 'typing Test';

export const options: string[] = ['webdriver.io', 'Appium', 'This app']

export const ALERT_TEXTS = {
    titleKeyword: 'active',
    closeBtn: 'OK'
}

export const PICKER = {
    PICKER_SELECTORS: {
        ANDROID_LISTVIEW: '//android.widget.ListView',
        DONE: '~done_button',
    },
    PICKER_TEXTS: 'is awesome'
}

export const ALERT_SELECTORS = {
    ALERT_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
    ALERT_MESSAGE: '*//android.widget.TextView[@resource-id="android:id/message"]',
    ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]',
};