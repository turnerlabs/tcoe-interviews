

import Page from './page.js';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ClickPage extends Page {
    /**
     * define selectors using getter methods
     */
    get buttonColor () {
        return $('#badButton');
    }    

    async getButtonColor() {
        const button = await this.buttonColor;
        const color = await button.getCSSProperty('background-color');
        return color.value  
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(path);
    }
}

export default new ClickPage();
