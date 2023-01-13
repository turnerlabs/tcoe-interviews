const Page = require('./page');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicTablePage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get dynamicTableContainerLocator () {
        return $('div[role="table"]');
    }

    get allDynamicTableColumnsLocator () {
        return $$('div[role="rowgroup"] span[role="columnheader"]');
    }

    get allRowsFirstCellsLocator () {
        return $$("div[role='row'] span[role='cell']:nth-child(1)");
    }

    get warningLabelLocator () {
        return $('.bg-warning');
    }
    
    

    /**
     * This method verifies the dynamic table is displayed or not
     * @returns {boolean}
     */
    async isDynamicTableDisplayed() {
        return this.dynamicTableContainerLocator.isDisplayed();
    }

    /**
     * This method verfies the column header value is dispalyed or not and return the value
     * @param {string} columnName 
     * @returns {boolean}
     */
    async validateDynamicTableCoulumnsHeaders(columnName) {
        const listElem = await this.allDynamicTableColumnsLocator;
        const isIncludes =  listElem.find(async ele => await ele.getText() === columnName)
        return  this.allDynamicTableColumnsLocator[isIncludes.index].isDisplayed();
    }

    /**
     * This method verfies the row first cell value is dispalyed or not and return the value
     * @param {string} cellValue 
     * @returns {boolean} 
     */
    async validateDynamicTableRowsFristCellValue(cellValue) {
        const listElem = await this.allRowsFirstCellsLocator;
        const isIncludes =  listElem.find(async ele => await ele.getText() === cellValue)
        return  this.allRowsFirstCellsLocator[isIncludes.index].isDisplayed();
    }

    /**
     * This method return the waring lable bg color value.
     * @returns {boolean}
     */
    async getWarningLableColorValue() {
        return (await this.warningLabelLocator.getCSSProperty("background-color")).value;
    }


    /**
     * This method returns the first cell value from all rows.
     * @returns {[]}
     */
    async getFirstCellValueFromTableRows() {
        return await this.allRowsFirstCellsLocator.map(ele => ele.getText())
    }

    /**
     * This method checks the column data by column name
     * @param {*} columnName 
     * @returns {boolean}
     */
    async validateColumnDataByColumnName(columnName) {
        let pattern = /MBMbps%MB/g;
        const headers = await this.allDynamicTableColumnsLocator.map(header=>header.getText());
        await await $$(`div[role='row'] span[role='cell']:nth-child(${(await headers.indexOf(columnName) + 1)})`).map(async columnValue =>{
            if (columnValue.getText() === null || pattern.test(await columnValue.getText()))
            return false;})
        return true;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dynamictable');
    }
}

module.exports = new DynamicTablePage();
