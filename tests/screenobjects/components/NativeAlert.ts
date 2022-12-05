import { ALERT_SELECTORS } from "../../helpers/data";


class NativeAlert {
    /**
     * Wait for the alert to exist.
     */
    static async waitForIsShown(isShown = true) {
        const selector = ALERT_SELECTORS.ALERT_TITLE;

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
        const buttonSelector = ALERT_SELECTORS.ALERT_BUTTON.replace(/{BUTTON_TEXT}/, selector.toUpperCase())
        await $(buttonSelector).click();
    }

    /**
     * Get the alert text
     */
    static async text(): Promise<string> {
        return `${await $(ALERT_SELECTORS.ALERT_TITLE).getText()}\n${await $(ALERT_SELECTORS.ALERT_MESSAGE).getText()}`;
    }
}

export default NativeAlert;