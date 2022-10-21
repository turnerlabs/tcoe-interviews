const Page = require('./page');

const dynamicId = '#overview a[href="/dynamicid"]'
const ajaxData = '#overview a[href="/ajaxData"]'
const scrollbars = '#overview a[href="/scrollbars"]'
const visibility = '#overview a[href="/visibility"]'
const classAttribute = '#overview a[href="/classattr"]'
const clientDelay = '#overview a[href="/clientdelay"]'
const dynamictable = '#overview a[href="/dynamictable"]'
const sampleapp = '#overview a[href="/sampleapp"]'
const hiddenLayers = '#overview a[href="/hiddenlayers"]'
const click = '#overview a[href="/click"]'
const verifytext = '#overview a[href="/verifytext"]'
const mouseover = '#overview a[href="/mouseover"]'
const loadDelay= '#overview a[href="/loaddelay"]'
const textInput = '#overview a[href="/textinput"]'
const progressbar = 'n#overview a[href="/progressbar"]'
const nbsp = '#overview a[href="/nbsp"]'
const overlapped = '#overview a[href="/overlapped"]'
const shadowdom = '#overview a[href="/shadowdom"]'

class UTAP_HomePage extends Page {

    get dynamicId () {
        return $(dynamicId);
    }

    get ajaxData () {
        return $(ajaxData);
    }

    get scrollbars () {
        return $(scrollbars);
    }

    get visibility () {
        return $(visibility);
    }

    get classAttribute () {
        return $(classAttribute);
    }

    get clientDelay () {
        return $(clientDelay);
    }

    get dynamictable () {
        return $(dynamictable);
    }

    get sampleapp () {
        return $(sampleapp);
    }

    get hiddenLayers () {
        return $(hiddenLayers);
    }

    get click () {
        return $(click);
    }

    get verifytext () {
        return $(verifytext);
    }

    get mouseover () {
        return $(mouseover);
    }

    get loadDelay () {
        return $(loadDelay);
    }
    
    get textInput () {
        return $(textInput);
    }
    
    get progressbar () {
        return $(progressbar);
    }
    
    get nbsp () {
        return $(nbsp);
    }

    get overlapped () {
        return $(overlapped);
    }

    get shadowdom () {
        return $(shadowdom);
    }


    async clickDynamicIDLink(){
        await this.dynamicId.click();
    }

    async clickAjaxDataLink(){
        await this.ajax.click();
    }

    async clickScrollbarsLink(){
        await this.scrollbars.click();
    }

    async clickVisibilityLink(){
        await this.visibility.click();
    }

    async clickClassAttributeLink(){
        await this.classAttribute.click();
    }
    
    async clickClientDelayLink(){
        await this.clientDelay.click();
    }

    async clickDynamicTableLink(){
        await this.dynamictable.click();
    }

    async clickSampleAppLink(){
        await this.sampleapp.click();
    }

    async clickHiddenLayersLink(){
        await this.hiddenLayers.click();
    }

    async clickClickLink(){
        await this.click.click();
    }

    async clickVerifyTextLink(){
        await this.verifytext.click();
    }

    async clickMouseoverLink(){
        await this.mouseover.click();
    }

    async clickLoadDelayLink(){
        await this.loadDelay.click();
    }
    
    async clickTextInputLink(){
        await this.textInput.click();
    }
    
    async clickCProgressbarLink(){
        await this.progressbar.click();
    }
    
    async clickNBSPLink(){
        await this.nbsp.click();
    }

    async clickOverlappedLink(){
        await this.overlapped.click();
    }
    
    async clickShadowdomLink(){
        await this.shadowdom.click();
    }
}

module.exports = new UTAP_HomePage();