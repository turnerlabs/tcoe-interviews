const dynamicTablePage = require('../pageobjects/dynamic-table.page');

describe(`Dynamic Table Page Tests`, () => {
    let table;

    it(`Navigate to Dynamic Table Page`, async () => {
        await browser.url("http://uitestingplayground.com/dynamictable");
        await expect(await browser.getTitle()).toBe("Dynamic Table")
    })

    it(`Validate that table is visible`, async () => {
        expect(await dynamicTablePage.isTableDisplayed()).toBe(true);
    })

    it(`Table should have the following columns: Name, Network, CPU, Disk, Memory`, async () => {
        table = await dynamicTablePage.getTableEntries();
        table.map(tableEntry => {
            const keys = Object.keys(tableEntry);
            expect(keys).toContain("Name");
            expect(keys).toContain("Network");
            expect(keys).toContain("CPU");
            expect(keys).toContain("Disk");
            expect(keys).toContain("Memory");
        })
    })

    it(`Table should have the following rows: Internet Explorer, System, Chrome, Firefox`, async () => {
        let tableRowNames = table.map(tableEntry => tableEntry.Name);

        expect(tableRowNames).toContain("Internet Explorer");
        expect(tableRowNames).toContain("System");
        expect(tableRowNames).toContain("Chrome");
        expect(tableRowNames).toContain("Firefox");
    })

    it(`Validate color of warning label`, async () => {
        let warningBanner = await dynamicTablePage.getWarningBanner()
        expect(warningBanner.bgColor).toBe("rgba(255,193,7,1)")
    })

    it(`Validate values change upon refresh`, async () => {
        await browser.refresh();
        let newTable = await dynamicTablePage.getTableEntries();

        table.map(origEntry => {
            let matchingEntry = newTable.find(newEntry => origEntry.Name === newEntry.Name)
            expect(origEntry.CPU).not.toBe(matchingEntry.CPU)
            expect(origEntry.Network).not.toBe(matchingEntry.Network)
            expect(origEntry.Memory).not.toBe(matchingEntry.Memory)
            expect(origEntry.Disk).not.toBe(matchingEntry.Disk)
        })
    })

    it(`Validate CPU data`, async () => {
        table.map(entry => {
            expect(entry.CPU).toContain("%");
        })
    })

    it(`Validate Memory data`, async () => {
        table.map(entry => {
            expect(entry.Memory).toContain("MB");
        })
    })

    it(`Validate Network data`, async () => {
        table.map(entry => {
            expect(entry.Network).toContain("Mbps");
        })
    })

    it(`Validate Disk data`, async () => {
        table.map(entry => {
            expect(entry.Disk).toContain("MB/s");
        })
    })
})