export const inputString: string = 'typing Test';

const options: string[] = ['webdriver.io', 'Appium', 'This app']
export function getRandomOption(): string {
    let optionIndex: number = Math.floor(Math.random() * options.length);
    let option: string = options[optionIndex];
    return option;
}

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