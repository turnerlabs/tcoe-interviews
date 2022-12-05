class TabBar {

    private get home() { return $('~Home'); }
    private get forms() { return $('~Forms'); }
    private get webview() { return $('~Webview'); }
    private get login() { return $('~Login'); }
    private get swipe() { return $('~Swipe'); }
    private get drag() { return $('~Drag'); }

    async openHome(): Promise<void> {
        await this.home.click();
    }

    async openWebView(): Promise<void> {
        await this.webview.click();
    }

    async openLogin(): Promise<void> {
        await this.login.click();
    }

    async openForms(): Promise<void> {
        await this.forms.click();
    }

    async openSwipe(): Promise<void> {
        await this.swipe.click();
    }

    async openDrag(): Promise<void> {
        await this.drag.click();
    }

    async waitForTabBarShown(): Promise<boolean | void> {
        return this.home.waitForDisplayed({
            timeout: 20000,
        });
    }

    async isHomeSelected(): Promise<boolean> {
        return await this.home.isSelected();
    }

    async isFormBtnAvailable(): Promise<boolean> {
        return await this.forms.isDisplayed();
    }

}

export default new TabBar();