import { PICKER } from "../../helpers/constants";


const { PICKER_SELECTORS } = PICKER;

class Picker {

    /**
     * Wait for the picker to be shown
     */
    static async waitForIsShown(isShown = true): Promise<void> {
        const selector = PICKER_SELECTORS.ANDROID_LISTVIEW;
        await $(selector).waitForExist({
            timeout: 11000,
            reverse: !isShown,
        });
    }

    /**
     * Select a value from the picker
     */
    static async selectValue(value: string): Promise<void> {
        // Wait for the picker to be shown
        await this.waitForIsShown(true);
        await this.setAndroidValue(value);
        // Wait for the picker to be gone
        await this.waitForIsShown(false);
    }

    /**
     * Set the value for Android
     */
    private static async setAndroidValue(value: string): Promise<void> {
        // For Android we can click on a value, if it's in the list, based on the text
        await $(`${PICKER_SELECTORS.ANDROID_LISTVIEW}/*[@text='${value}']`).click();
    }

}

export default Picker;