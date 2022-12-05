export default class TabBar {
    
    static async openHome () {
        await $('~Home').click();
    }

    static async openWebView () {
        await $('~Webview').click();
    }

    static async openLogin () {
        await $('~Login').click();
    }

    static async openForms () {
        await $('~Forms').click();
    }

    static async openSwipe () {
        await $('~Swipe').click();
    }

    static async openDrag () {
        await $('~Drag').click();
    }

    static async waitForTabBarShown ():Promise<boolean|void> {
        return $('~Home').waitForDisplayed({
            timeout: 20000,
        });
    }

    static async isHomeSelected() : Promise<boolean|void> {
        return (await (await $('~Home')).isSelected());
    }

    static async isFormsSelected() : Promise<boolean|void> {
        return (await (await $('~Forms')).isSelected());
    }

    static async isFormsAvailable() : Promise<boolean|void> {
        return (await (await $('~Forms').isDisplayed()));
    }

    static async isFormsClickable() : Promise<boolean|void> {
        return (await (await $('~Forms').isClickable()));
    }

    static async isFormsAvailableClickable() : Promise<boolean|void> {
        return this.isFormsAvailable() && this.isFormsClickable();
    }
}
