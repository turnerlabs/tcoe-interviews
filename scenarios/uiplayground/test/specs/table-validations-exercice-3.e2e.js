// Description: This file contains the test cases for the UI Challenge 3
const Table = require('../pageobjects/Table');
const Nav = require('../pageobjects/Nav');
const { routes } = require('../utils/routes');

describe('UI Challenge 3', () => {
  it(`should navigate the url: ${routes.baseUrl}/dynamictable`, async () => {
    await Nav.open('dynamictable');
    await Nav.validateUrl();
  });

  it('should validate that table is visible', async () => {
    await Table.waitForTableToDisplay();
    await Table.isVisible();
  });

  describe('should validate table has following columns: Name, Netword, CPU, Disk and Memory', async () => {
    it('should validate table has certain columns', async () => {
      await Table.waitForTableToDisplay();
      await Table.assertTableHasCertainColumns();
    });

    it('should validate table data', () => {
      it('should validate CPU data', async () => {
        await Table.waitForTableToDisplay();
        await Table.assertData('CPU', '%');
      });
    
      it('should validate Memory data', async () => {
        await Table.waitForTableToDisplay();
        await Table.assertData('Memory', 'MB');
      });
    
      it('should validate Network data', async () => {
        await Table.waitForTableToDisplay();
        await Table.assertData('Network', 'Mbps');
      });
    
      it('should validate Disk data', async () => {
        await Table.waitForTableToDisplay();
        await Table.assertData('Disk', 'Mb/s');
      });
    });
  });

  it('should validate table has following rows: Internet Explorer, System, Chrome, Firefox', async () => {
    await Table.waitForTableToDisplay();
    await Table.fillRowArr();
    await Table.validateTableRows();
  });

  it('should validate color of warning label', async () => {
    await Table.waitForTableToDisplay();
    await Table.validateWarningColor();
  });

  it('should validate values change upon refresh', async () => {
    await Table.waitForTableToDisplay();
    await Table.setPreviousValue();
    await Table.refreshBrowser();
    await Table.catchChangedValues();
  });
});
