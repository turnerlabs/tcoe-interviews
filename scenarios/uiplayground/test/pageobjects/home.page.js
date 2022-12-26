const Page = require('./page');
cnnData = require('../testData/cnnData');

class HomePage extends Page {
    get btnStarSearch() { return $('//*[@aria-labelledby="searchIconTitle"]');}
    get txtSearch() {return $('//*[@id="header-search-bar"]')}
    get btnSearch() {return $('//*[@class="Text-sc-1amvtpj-0 iEWJSI"]')}
    get lblResult() {return $('#search .search__results-count')}
    get infoNews() {return $$('//a[@class="container__link __link"]')}
    get menuSearch () {return $$('.search__collection-list .facet__item__label')}
    get type(){return $('//div[1]/a/div[@class="container__item-media-wrapper __item-media-wrapper"]')}
    get typeGallery(){return $$('//*[@class="image__label image__label--type-gallery"]')}
    get fieldSearch () {return $('//input[@class="search__input"]')}
    get btnClear () {return $('//button[@class="search__clear"]')}
    
    async open () {return super.open('');}
    async searchSomething(value){
        await this.btnStarSearch.click();
        await this.txtSearch.setValue(value);
        await browser.keys(cnnData.Enter);
    }
    async checkAllNews(){
        await expect (await this.lblResult).toHaveTextContaining(cnnData.dataSearch);
        await expect (await this.infoNews).toBeElementsArrayOfSize({ gte: 1 });
    }
    async checkNotMatchResults(){
        const text = await (this.lblResult.getProperty('WholeText'));
        expect(text).toHaveTextContaining(cnnData.messageIncorrectSearch);
    }
    async selectoptionMenu(option){
        await this.menuSearch.forEach(async element => {
            if(await element.getText()===option){await element.click()}
        });
    }
    async checkOptionMenu(valueExpect){
        await this.type.waitForDisplayed({timeout:4000});
        const actual = await (this.type.getProperty('innerText'));
        expect(actual).toHaveText(valueExpect);
    }
    async validateClearSearchField(){
        const data = await (this.fieldSearch.getProperty('value'));
        await this.btnClear.waitForClickable({timeout:2000})
        await this.btnClear.click();
        const finishData = await (this.fieldSearch.getProperty('value'));
        expect (data).not.toHaveText(finishData);
    }
}
module.exports  = new HomePage();
