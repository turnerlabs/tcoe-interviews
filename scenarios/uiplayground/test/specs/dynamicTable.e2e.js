const DynamicTablePage = require('../pageobjects/dynamicTable.page')
const DynamicTableData = require('../data/dynamicTable.data')

describe('Wdio IU code challenge', () => {

    before(async () => {
        await DynamicTablePage.open(await DynamicTableData.url)
        await DynamicTablePage.validateUrl(await DynamicTableData.url)
    })

    it('should validate that table is visible', async () => {
        await DynamicTablePage.validadeIsTableVisible()
    })

    it('should validate that table have the specific columms', async () => {
        await DynamicTablePage.validateTableHeaders(await DynamicTableData.columnsHeaders)
    })
    
    it('should validate that table have the specific rows', async () => {
        await DynamicTablePage.validateTableRows(await DynamicTableData.rows)
    })
    
    it('should validate color of warning label', async () => {
        await DynamicTablePage.validateWarningLabelColor(await DynamicTableData.warningColorProperty, await DynamicTableData.warningColorRGBA)
    })
    
    it('should validate values change upon refresh', async () => {
        await DynamicTablePage.validateValuesChange()
    })
    
    it('should validate CPU data', async () => {
        await DynamicTablePage.validateCPUData(await DynamicTableData.CPU)
    })
    
    it('should validate Memory data', async () => {
        await DynamicTablePage.validateMemoryData(await DynamicTableData.memory)
    })

    it('should validate Network data', async () => {
        await DynamicTablePage.validateNetworkData(await DynamicTableData.network)
    })

    it('should validate Disk data', async () => {
        await DynamicTablePage.validateDiskData(await DynamicTableData.disk)
    })
    
})