class Homepage{

    get dynamicIdElemCss() { return $("a[href='/dynamicid']")}

    get classAttributeElemCss() {return $("a[href='/classattr']")}

    get hiddenLayersElmXpath() {return $("//a[normalize-space()='Hidden Layers']")}

    get loadDelayElemCss() {return $("a[href='/loaddelay']")}

    get ajaxDateElemCss() {return $("a[href='/ajax']")}

    get clientSideDelayElemCss() {return $("a[href='/clientdelay']")}

    get clickElemCss() {return $("a[href='/click']")}

    get textInputElemCss() {return $("a[href='/textinput']")}

    get scrollBarElemCss() {return $("a[href='/scrollbars']")}

    get dynamicTableElemCss() {return $("a[href='/dynamictable']")}

    get verifyTextElemCss() {return $("a[href='/verifytext']")}

    get progressBarElemCss() {return $("a[href='/progressbar']")}

    get visibilityElemCss() {return $("a[href='/visibility']")}

    get sampleAppElemCss() {return $("a[href='/sampleapp']")}

    get mouseOverElemCss() {return $("a[href='/mouseover']")}

    get nonBreakingSpaceElemCss() {return $("a[href='/nbsp']")}

    get overlappedElementElemCss() {return $("a[href='/overlapped']")}

    get shadowDomElemCss() {return $("a[href='/shadowdom']")}

    get resourcesElemXpt() {return $("//a[@href='/resources']")}

    async ClickSampleApp(){
        await this.sampleAppElemCss.click()
    }

    async ClickClientSideDelay(){
        await this.clientSideDelayElemCss.click()
    }

    async ClickResource(){
        await this.resourcesElemXpt.click()
    }

    async ClickAjaxData(){
        await this.ajaxDateElemCss.click()
    }

    async ClickMouseOver(){
        await this.mouseOverElemCss.click()
    }

    async ClickProgressBar(){
        await this.progressBarElemCss.click()
    }

    async ClickDynamicTable(){
        await this.dynamicIdElemCss.click()
    }

    async open (path='') {
        return await browser.url(`http://uitestingplayground.com/${path}`)
    }



}

module.exports = new Homepage()