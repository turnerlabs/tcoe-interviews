const DynamicTablePage = require('../pageobjects/dynamic.table.page');

describe('Test dynamic table', () => {
    it('Given I need to see the table When I go to the dynamic table page Then I can see the table', async () => {
        await DynamicTablePage.open();
        await expect(DynamicTablePage.table).toBeExisting();
    });

    it('Given I need to validate the table When I want to see the columns Then The table should contain the columns Name, Network, CPU, Disk, Memory', async () => {
        const columnsHeader = await DynamicTablePage.columnHeaders;
        const columnsName = ['Name', 'Network', 'CPU', 'Disk', 'Memory'];

        await expect(columnsHeader).toBeElementsArrayOfSize(5);
        await expect(columnsHeader).toHaveText(columnsName);
    });

    it('Given I need to validate the table When I want to see the rows name Then The table should contain the rows Internet Explorer, System, Chrome, Firefox', async () => {
        const browsersName = await DynamicTablePage.browsersName;
        const rowsName = ['Internet Explorer', 'System', 'Chrome', 'Firefox'];

        await expect(browsersName).toBeElementsArrayOfSize(4);
        await expect(browsersName).toHaveText(rowsName);
    });

    it('Given I need to validate the color of warning label When I get the color of warning label Then the color should be #ffc107', async () => {
        const warningLabel = await DynamicTablePage.warningLabel
        const color = await warningLabel.getCSSProperty('background-color');

        await expect(color.parsed.hex).toBe('#ffc107')
    });

    it('Given I need to validate the number change upon refresh When I refresh the page Then the numbers should change', async () => {
        const warningLabel1 = await DynamicTablePage.warningLabel;
        const text1 = await warningLabel1.getText();
        DynamicTablePage.reloadPage();
        const warningLabel2 = await DynamicTablePage.warningLabel;
        const text2 = await warningLabel2.getText();
        await expect(text1 === text2).toBe(false)
    });

    it('Given I need to validate the data of column CPU When I get the data Then the data should have the format 7.0%', async () => {
        const header = await  DynamicTablePage.header;
        const headers = (await (await header.parentElement()).getText()).split(' ')
        const values = await DynamicTablePage.valuesByColumnRow(headers.indexOf('CPU') + 1)
        await expect(values).toHaveText(/(\d{1,})(\.{0,1})(\d{0,1})%/)
    });

    it('Given I need to validate the data of column Memory When I get the data Then the data should have the format 11.7 MB', async () => {
        const header = await  DynamicTablePage.header;
        const headers = (await (await header.parentElement()).getText()).split(' ')
        const values = await DynamicTablePage.valuesByColumnRow(headers.indexOf('Memory') + 1)
        await expect(values).toHaveText(/(\d{1,})(\.{0,1})(\d{0,1}) MB/)
    });

    it('Given I need to validate the data of column Network When I get the data Then the data should have the format 0.6 Mbps%', async () => {
        const header = await  DynamicTablePage.header;
        const headers = (await (await header.parentElement()).getText()).split(' ')
        const values = await DynamicTablePage.valuesByColumnRow(headers.indexOf('Network') + 1)
        await expect(values).toHaveText(/(\d{1,})(\.{0,1})(\d{0,1}) Mbps/)
    });

    it('Given I need to validate the data of column Disk When I get the data Then the data should have the format 0.8 MB/s', async () => {
        const header = await  DynamicTablePage.header;
        const headers = (await (await header.parentElement()).getText()).split(' ')
        const values = await DynamicTablePage.valuesByColumnRow(headers.indexOf('Disk') + 1)
        await expect(values).toHaveText(/(\d{1,})(\.{0,1})(\d{0,1}) MB\/s/)
    });
});
