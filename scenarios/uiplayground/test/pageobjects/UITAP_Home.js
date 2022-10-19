const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class UITAPHomePage extends Page {

    /**
     * define selectors using getter methods.
     * 
     * We can go for list selectors using $$ but in future if some more links are added then it will be cumbersome to maintain it in the automation.
     */
    
    get dynamicId () {
        return $('section#overview a[href="/dynamicid"]');
    }
    get classAttribute () {
        return $('section#overview a[href="/classattr"]');
    }
    get hiddenLayer () {
        return $('section#overview a[href="/hiddenlayers"]');
    }
    get loadDelay () {
        return $('section#overview a[href="/loaddelay"]');
    }
    get ajax () {
        return $('section#overview a[href="/ajax"]');
    }
    get clientDelay () {
        return $('section#overview a[href="/clientdelay"]');
    }
    get click () {
        return $('section#overview a[href="/click"]');
    }
    get textInput () {
        return $('section#overview a[href="/textinput"]');
    }
    get scrollbars () {
        return $('section#overview a[href="/scrollbars"]');
    }
    get dynamictable () {
        return $('section#overview a[href="/dynamictable"]');
    }
    get verifytext () {
        return $('section#overview a[href="/verifytext"]');
    }
    get progressbar () {
        return $('section#overview a[href="/progressbar"]');
    }
    get visibility () {
        return $('section#overview a[href="/visibility"]');
    }
    get sampleapp () {
        return $('section#overview a[href="/sampleapp"]');
    }
    get mouseover () {
        return $('section#overview a[href="/mouseover"]');
    }
    get nbsp () {
        return $('section#overview a[href="/nbsp"]');
    }
    get overlapped () {
        return $('section#overview a[href="/overlapped"]');
    }
    get shadowdom () {
        return $('section#overview a[href="/shadowdom"]');
    }
    

    async clickOnDynamicIDLink(){
        await this.dynamicId.click();
    }
    async clickOnClassAttributeLink(){
        await this.classAttribute.click();
    }
    async clickOnHiddenLayerLink(){
        await this.hiddenLayer.click();
    }
    async clickOnLoadDelayLink(){
        await this.loadDelay.click();
    }
    async clickOnAjaxLink(){
        await this.ajax.click();
    }
    async clickOnClientDelayLink(){
        await this.clientDelay.click();
    }
    async clickOnClickLink(){
        await this.click.click();
    }
    async clickOnTextInputLink(){
        await this.textInput.click();
    }
    async clickOnScrollbarsLink(){
        await this.scrollbars.click();
    }
    async clickOnDynamicTableLink(){
        await this.dynamictable.click();
    }
    async clickOnVerifyTextLink(){
        await this.verifytext.click();
    }
    async clickOnCProgressbarLink(){
        await this.progressbar.click();
    }
    async clickOnVisibilityLink(){
        await this.visibility.click();
    }
    async clickOnSampleAppLink(){
        await this.sampleapp.click();
    }
    async clickOnMouseoverLink(){
        await this.mouseover.click();
    }
    async clickOnNBSPLink(){
        await this.nbsp.click();
    }
    async clickOnOverlappedLink(){
        await this.overlapped.click();
    }
    async clickOnShadowdomLink(){
        await this.shadowdom.click();
    }


    async getPageUrl(){
       return await (browser.getUrl());
    }
    open () {
        return browser.url(`http://uitestingplayground.com/`)
    }

}

module.exports = new UITAPHomePage();
