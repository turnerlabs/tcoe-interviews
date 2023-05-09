import PlaygroundUrl from "./playgroundUrl.js";

class PlaygroundPage extends PlaygroundUrl {

     openUItestingPPage(){
        return super.openUItestingPPage();
    }
    urlOfProgressBarPage(){
        return super.urlOfProgressBarPage();
    }
    urlOfAjaxDataPage(){
        return super.urlOfAjaxDataPage();
    }
    urlOfClickPage(){
        return super.urlOfClickPage();
    }
    urlOfVisibilityPage(){
        return super.urlOfVisibilityPage();
    }
    urlOfShadowDomPage(){
        return super.urlOfShadowDomPage();
    }


    
    get dynamicIdLink() { return $("//a[text()='Dynamic ID']") }
    async clickOnDynamicIdLink(){ (await this.dynamicIdLink).click();}
    get ajaxPageLink() { return $("//a[contains(.,'AJAX Data')]"); }
    async clickOnAjaxPageLink(){ (await this.ajaxPageLink).click();}
    get classAttributeLink() { return $("//a[text()='Class Attribute']"); }
    async clickOnClassAttributeLink(){ (await this.classAttributeLink).click();}
    get hiddenLayerLink() { return $("//a[contains(.,'Hidden Layers')]"); }
    async clickOnHiddenLayersLink(){ (await this.hiddenLayerLink).click();}
    get loadDelayLink() { return $("//a[contains(.,'Load Delay')]"); }
    async clickOnLoadDelayLink(){ (await this.loadDelayLink).click();}
    get clientSideDelayLink() { return $("//a[contains(.,'Client Side Delay')]"); }
    async clickOnClientDelayLink(){ (await this.clientSideDelayLink).click();}
    get clickLink() { return $("//a[contains(.,'Click')]"); }
    async clickOnClickLink(){ (await this.clickLink).click();}
    get textInputLink() { return $("//a[contains(.,'Text Input')]"); }
    async clickOnTextInputLink(){ (await this.textInputLink).click();}
    get scrollBarLink() { return $("//a[contains(.,'Scrollbars')]"); }
    async clickOnScrollBarLink(){ (await this.scrollBarLink).click();}
    get dynamicTableLink() { return $("//a[contains(.,'Dynamic Table')]"); }
    async clickOnDynamicTableLink(){ (await this.dynamicTableLink).click();}
    get verifyTextLink() { return $("//a[contains(.,'Verify Text')]"); }
    async clickOnVerifyTextLink() { (await this.verifyTextLink).click();}
    get progressBarLink() { return $("//a[contains(.,'Progress Bar')]"); }
    async clickOnProgressBar(){ (await this.progressBarLink).click();}
    get visibilityLink() { return $("//a[contains(.,'Visibility')]"); }
    async clickOnVisibilityLink(){ (await this.visibilityLink).click();}
    get mouseOverLink() { return $("//a[contains(.,'Mouse Over')]"); }
    async clickOnMouseOverLink(){ (await this.mouseOverLink).click();}
    get sampleAppLink() { return $("//a[contains(.,'Sample App')]"); }
    async clickOnSampleAppLink(){ (await this.sampleAppLink).click();}
    get nonBreakingSpaceLink() { return $("//a[contains(.,'Non-Breaking Space')]"); }
    async clickOnNonBreakingSpaceLink(){ (await this.nonBreakingSpaceLink).click();}
    get overlappedEleLink() { return $("//a[contains(.,'Overlapped Element')]"); }
    async clickOnOverlappedEleLink(){ (await this.overlappedEleLink).click();}
    get shadowDomLink() { return $("//a[contains(.,'Shadow DOM')]"); }
    async clickOnShadowDomLink(){ await this.shadowDomLink.click();}
}
export default new PlaygroundPage();