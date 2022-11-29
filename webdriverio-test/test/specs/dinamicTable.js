
import DinamicTablePage from '../page/dinamicTable.page';

describe('Dinamic table page', () => {

    before(async () => {
        DinamicTablePage.open();
        await expect(browser).toHaveUrlContaining('dynamictable');
    });

    it('Should the table is visible', async () => {
        expect(DinamicTablePage.tableDinamic).toBeExisting();
    });

    it('Should have the Name,Network,CPU,DISK and Memory columns', async () => {
        console.log("Number of columns is :" + await DinamicTablePage.columnsTable.length);

        const expectTitles = [];
        const actualTitles = [];
        const navTablePage = await DinamicTablePage.columnsTable

        for (const link of navTablePage) {
            actualTitles.push(await link.getText());
        }

        for (const link of navTablePage) {
            expectTitles.push(await link.getText());
        }
        expect(actualTitles).toEqual(expectTitles);
        console.log("*******************************");
        console.log("Titles expect: " + expectTitles);
        console.log("Titles result: " + actualTitles);
        console.log("*******************************");

    });

    it('Should have the following rows', async () => {
        const len = await DinamicTablePage.rowTable.length;
        console.log("Row number " + len);

        //ROW CHROME
        const chrome = await DinamicTablePage.rowTableChrome.getText();
        await expect(chrome).toContain('Chrome');
        console.log("The row name is :" + chrome);

        // ROW SYSTEM
        const system = await DinamicTablePage.rowTableSystem.getText();
        await expect(system).toContain('System');
        console.log("The row name is :" + system);

        // ROW Internet Explorer
        const IE = await DinamicTablePage.rowTableInternetExplorer.getText();
        await expect(IE).toContain('Internet Explorer');
        console.log("The row name is :" + system);

        // ROW Firefox
        const firefox = await DinamicTablePage.rowTableFirefox.getText();
        await expect(firefox).toContain('Firefox');
        console.log("The row name is :" + firefox);
        console.log("*******************************");

    });

    it('Validate color of warning label', async () => {
        expect(DinamicTablePage.warningLabel).toBeDisplayed();
        const color = await DinamicTablePage.warningLabel.getCSSProperty('background-color');
        expect(color).toHaveElementProperty("'hex: '#ffc107'");
        console.log(color);
    });

    it('Validate values change upon refresh', async () => {
        browser.refresh();
        await browser.pause(1000);

        const actualTitlesRows = [];
        const navTablePage = await DinamicTablePage.rowTable

        for (const link of navTablePage) {
            actualTitlesRows.push(await link.getText());
        }
        console.log("Values found \n: "  + actualTitlesRows);
    });

    it('Validate CPU DATA', async () => {
        const textItem = await DinamicTablePage.rowTable
        console.log("CPU DATA IS :" + await textItem[1].getText());
    });

    it('Validate MEMORY DATA', async () => {
        const textItem = await DinamicTablePage.rowTable
        console.log("MEMORY DATA IS : " + await textItem[2].getText());
    });

    it('Validate memory data', async () => {
        const textItem = await DinamicTablePage.rowTable
        console.log("MEMORY DATA IS : " + await textItem[2].getText());
    });

    it('Validate Network data', async () => {
        const textItem = await DinamicTablePage.rowTable
        console.log("Network data : " + await textItem[3].getText());
    });
    
    it('Validate Disk data', async () => {
        const textItem = await DinamicTablePage.rowTable
        console.log("Disk data : " + await textItem[4].getText());
        await browser.pause(2000);
    });
});