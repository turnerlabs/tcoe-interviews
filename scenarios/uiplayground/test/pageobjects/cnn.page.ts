import Page from './page.js';
import { Key } from 'webdriverio'


class CNNPage extends Page {
    
    public get btnSearch () {
        return $('[data-test="searchButton"]');
    }

    public get inputSearch () {
        return $('#header-search-bar');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get resultsCount () {
        return $$('div.search__results-count');
    }

    public get results () {
        return $$('div.search__results-list>div');
    }

    public get msgNoResults () {
        return $('.search__no-results__message');
    }

    public async search (query: string) {
        await this.btnSearch.waitForClickable()
        await this.btnSearch.click()
        await this.inputSearch.setValue(query)
        await browser.keys(Key.Enter)
    }

    public open (path: string) {
        return super.open(`https://www.cnn.com/${path}`)
    }
    
}

export default new CNNPage();
