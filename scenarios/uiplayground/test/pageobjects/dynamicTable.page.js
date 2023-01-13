const Page = require('./page')
const { assert } = require('chai')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamicTablePage extends Page {
    /**
     * define selectors using getter methods
     */
    get table () {
        return $('div[role="table"]')
    }

    get columns () {
        return $('div[role="rowgroup"]')
    }

    get rows () {
        return $$('div[role="row"] span[role="cell"]')
    }

    get lblWarning () {
        return $('.bg-warning')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async validadeIsTableVisible () {
        await this.table.waitForDisplayed()
        await expect(await this.table).toBeDisplayed()
    }

    async validateTableHeaders (columnsHeaders) {
        await this.table.waitForDisplayed()
        await expect(await this.columns).toHaveTextContaining(columnsHeaders)
    }

    async validateTableRows (rows) {
        await this.table.waitForDisplayed()
        await expect(await this.rows[0]).toHaveTextContaining(rows)
        await expect(await this.rows[5]).toHaveTextContaining(rows)
        await expect(await this.rows[10]).toHaveTextContaining(rows)
        await expect(await this.rows[15]).toHaveTextContaining(rows)
    }

    async validateWarningLabelColor (property, color) {
        await this.lblWarning.waitForDisplayed()
        await assert.equal(((await this.lblWarning.getCSSProperty(property)).value), color)
    }

    async validateValuesChange () {
        await this.table.waitForDisplayed()
        let dataBeforeRefresh = await this.table.getText()
        await browser.refresh()
        let dataAfterRefresh = await this.table.getText()
        await assert.notEqual(dataBeforeRefresh, dataAfterRefresh)
    }

    async validateMemoryData (memory) {
        await this.table.waitForDisplayed()
        await expect(await this.rows).toHaveTextContaining(memory)  
    }

    async validateCPUData (cpu) {
        await this.table.waitForDisplayed()
        await expect(await this.rows).toHaveTextContaining(cpu)
    }

    async validateNetworkData (network) {
        await this.table.waitForDisplayed()
        await expect(await this.rows).toHaveTextContaining(network)
    }

    async validateDiskData (disk) {
        await this.table.waitForDisplayed()
        await expect(await this.rows).toHaveTextContaining(disk)
    }
}

module.exports = new DynamicTablePage();
