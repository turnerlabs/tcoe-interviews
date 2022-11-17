

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicTablePage extends Page {
    /**
     * define selectors using getter methods
     */
    get table() {
        return $('[role="table"]');
    }

    get columnHeaders() {
        return $$('[role="columnheader"]');
    }

    get browsersName() {
        return $$('//span[@role="cell"][1]');
    }

    get warningLabel() {
        return $('.bg-warning');
    }

    get header(){
        return $('[role="rowgroup"] [role="row"]')
    }

    valuesByColumnRow(column){
        return $$(`//span[@role="cell"][${column}]`)
    }

    reloadPage(){
        super.reload()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('http://uitestingplayground.com/dynamictable');
    }
}

module.exports = new DynamicTablePage();
