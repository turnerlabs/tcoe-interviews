import PlaygroundUrl from "./playgroundUrl.js"

class UnhideBtnPage extends PlaygroundUrl {

    get hideBtn() { return $("//button[@id='hideButton']") }
    get removedBtn() { return $("//button[@id='removedButton']") }
    get zeroWidhBtn() { return $("//button[@id='zeroWidthButton']") }
    get overlappedBtn() { return $("//button[@id='overlappedButton']") }
    get opacityBtn() { return $("//button[@id='transparentButton']") }
    get visibHiddBtn() { return $("//button[@id='invisibleButton']") }
    get displayNoneBtn() { return $("//button[@id='notdisplayedButton']") }
    get offScreenBtn() { return $("//button[@id='offscreenButton']") }

    async clickOnHideBtn() {
        (await this.hideBtn).click();
    }
    
    urlOfVisibilityPage() {
        return super.urlOfVisibilityPage();
    }
}

export default new UnhideBtnPage();