const Page = require('./page');

/**
 * Dynamic Id Page
 */
class DynamicIdPage extends Page {
    /**
     * Page Locators
     */
    get dynamicIdButton() {
        return $('.btn.btn-primary')
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('dynamicid');
    }
}

module.exports = new DynamicIdPage();
