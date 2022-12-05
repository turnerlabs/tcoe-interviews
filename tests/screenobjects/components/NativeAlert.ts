const SELECTORS = {
    ALERT_TITLE: '*//android.widget.TextView[@resource-id="android:id/alertTitle"]',
    ALERT_MESSAGE: '*//android.widget.TextView[@resource-id="android:id/message"]',
    ALERT_BUTTON: '*//android.widget.Button[@text="{BUTTON_TEXT}"]',
};

class NativeAlert {
    /**
     * Wait for the alert to exist.
     */
    static async waitForIsShown(isShown = true) {
        const selector = SELECTORS.ALERT_TITLE;

        return $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }

    /**
     *  Use the text of the button, provide a string and it will automatically transform it to uppercase
     *  and click on the button
     */
    static async tapOnButtonWithText(selector: string) {
        const buttonSelector = SELECTORS.ALERT_BUTTON.replace(/{BUTTON_TEXT}/, selector.toUpperCase())
        await $(buttonSelector).click();
    }

    /**
     * Get the alert text
     */
    static async text(): Promise<string> {
        return `${await $(SELECTORS.ALERT_TITLE).getText()}\n${await $(SELECTORS.ALERT_MESSAGE).getText()}`;
    }
}

export default NativeAlert;