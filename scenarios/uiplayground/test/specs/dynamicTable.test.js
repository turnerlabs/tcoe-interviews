const DynamicTablePage = require('../pageobjects/dynamictable.page');

describe('Dynamic table page validations', () => {
    
    before(async ()=>{

        await DynamicTablePage.open();

    })
    
    it('Validate that table is visible', async () => {
        
        await expect(DynamicTablePage.table).toBeDisplayed({message: "Table should appear", wait: 2000})

    })

    it('Table should have the correct headers', async () => {

        expect(await DynamicTablePage.headerValidation()).toBe(true)

    })

    it('Table should have the correct row names', async () => {

        expect(await DynamicTablePage.rowsValidation()).toBe(true)

    })

     it('Validate color of warning label', async () => {

        expect( await DynamicTablePage.getWarningLabelColorCode()).toEqual("rgba(255,193,7,1)")

    })

    it('Validate values change upon refresh', async () => {

        expect( await DynamicTablePage.tableShouldChangeWhenRefreshPage()).toBe(true)

    })

    it('Validate CPU data', async () => {

        expect( await DynamicTablePage.cpuColumnValuesShouldAppear()).toBe(true)

    })

    it('Validate the Memory data', async () => {

        expect( await DynamicTablePage.memoryColumnValuesShouldAppear()).toBe(true)

    })

    it('Validate Network data', async () => {

        expect( await DynamicTablePage.networkColumnValuesShouldAppear()).toBe(true)

    })

    it('Validate Disk data', async () => {

        expect( await DynamicTablePage.diskColumnValuesShouldAppear()).toBe(true)

    })

})
