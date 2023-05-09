import PlaygroundUrl from "./playgroundUrl.js";

class AjaxDataPage extends PlaygroundUrl {

    get ajaxBtn() {
        return $("//button[@id='ajaxButton']");
    }

    get multipleTextBar() {
        return $$("//div[@id='content']/p");
    }

    get textBar() {
        return $("//p[@class='bg-success']");
    }
    
    async clickOnAjaxBtn(){
         (await this.ajaxBtn).click();
    }

    get numberOfTextBar(){
        let textBarNumber = this.multipleTextBar.length;
        return textBarNumber;
    
    }

    async waitForTextMsgToDisplay(){
        await this.textBar.waitUntil(async () => (await this.textBar).isDisplayed({ timeoutMsg: 'failed to diplay the element after given time' }));
    }

    urlOfAjaxDataPage() {
        return super.urlOfAjaxDataPage();
    }


}

export default new AjaxDataPage();