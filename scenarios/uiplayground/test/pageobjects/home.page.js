

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get title () {
        return $('h1');
    }

   
    async verifyTitle () {
       const headerName = await this.title.getText();
       return headerName.includes('UI Test Automation');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new HomePage();
