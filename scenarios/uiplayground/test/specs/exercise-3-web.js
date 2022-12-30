const dynamicTable = require("../pageobjects/dynamicTablePage");
const data = require("../pageobjects/data").dynamicTable;

describe('exercise-3 UI web', () => {

    it('validate columns in table', async () => {
        await dynamicTable.open();
        expect(await dynamicTable.getHeaders()).to.have.members(data.cols) ;
    });

    

    it('validate rows in table', async () => {
        await dynamicTable.open();
        expect(await (await dynamicTable.getInfo()).cols.Name).to.have.members(data.rows) ;
    });


    it('validate color of warning label', async () => {
        await dynamicTable.open();
        expect(await dynamicTable.getWarningLabelColor()).to.equal(data.warningColor);
    });

    

    it('Validate values change upon refresh', async () => {
        await dynamicTable.open();
        let dataTable0 = await dynamicTable.getInfo();
        await browser.refresh()
        let dataTable1 = await dynamicTable.getInfo();
        expect(dataTable0).to.not.equal(dataTable1);
    });

    

    it('Validate table data', async () => {
        await dynamicTable.open();
        expect(await (await dynamicTable.getInfo()).cols.CPU).to.have.all.match(data.regExp_CPU);
        expect(await (await dynamicTable.getInfo()).cols.Disk).to.have.all.match(data.regExp_Disk);
        expect(await (await dynamicTable.getInfo()).cols.Network).to.have.all.match(data.regExp_Network);
        expect(await (await dynamicTable.getInfo()).cols.Memory).to.have.all.match(data.regExp_Memory);
        

    });



});


