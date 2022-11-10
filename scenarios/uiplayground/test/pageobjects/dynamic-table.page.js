class DynamicTable {
    constructor() {
        this.tableXPath = `//div[@role='table']`;

        this.tableHeadersXPath = this.tableXPath + `//span[@role="columnheader"]`;
        this.tableCellsXPath = this.tableXPath + `//span[@role="cell"]`;

        this.warningBannerXPath =`//p[@class="bg-warning"]`;
    }

    async isTableDisplayed() {
        const table = await $(this.tableXPath);
        await table.waitForDisplayed();
        return await table.isDisplayed();
    }

    async getTableEntries() {
        const tableHeaders = await Promise.all((await $$(this.tableHeadersXPath))
            .map(async el => await el.getText()));
        const tableCells = await Promise.all((await $$(this.tableCellsXPath))
            .map(async cell => await cell.getText()));

        const objArray = [];
        const numOfTableRows = tableCells.length / tableHeaders.length;

        /**
         * Generating object that represents a row of values, while using the row header as a key for each distinct value
         * within.  Looping for all rows.
         */
        for (let i = 0; i < numOfTableRows; i++) {
            const obj = {};
            tableHeaders.forEach((header, j) => {
                obj[header] = tableCells[(i * tableHeaders.length) + j];
            })

            objArray.push(obj);
        }

        return objArray;
    }

    async getWarningBanner () {
        const banner = {};
        const warningBannerEl = await $(this.warningBannerXPath);
        banner.text = await warningBannerEl.getText()
        banner.bgColor = (await warningBannerEl.getCSSProperty('background-color')).value

        return banner;
    }
}

module.exports = new DynamicTable();