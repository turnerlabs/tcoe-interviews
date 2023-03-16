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
            timeout: 50000,
        });
    }

    static async validateTabIsFoused():Promise<boolean|void> {
        return await ($('~Home')).isSelected()
   }

   static async validateFormTabAvailability():Promise<boolean|void> {
    return await $('~Forms').isDisplayed()
   }

   static async validateIsFormTabClickable():Promise<boolean|void> {
    return await ( $('~Forms')).getAttribute("clickable")
}

static async getColor():Promise<boolean|void> {
   let ele = await ( $('~Forms'))
    return await ele.getCSSProperty('color')
}
}