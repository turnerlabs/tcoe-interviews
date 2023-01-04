const Page = require('./page');

class DynamicTable extends Page {
    
    get table(){return $('div[role=table]')}
    
    get warningLabel(){return $('.bg-warning')}
    
    get browsersAndSystemSelector(){return $$("div[role='row'] span[role='cell']:nth-child(1)")}
    
    get columnHeaders(){return $$("span[role= 'columnheader']")}
    
    columnValuesTemplate(indexHeader){return $$(`div[role='row'] span[role='cell']:nth-child(${indexHeader})`)}
    
    columnHeaderSelectorTemplate(header){return $(`//span[text() = '${header}'][@role= 'columnheader']`)}
    
    /**
     * This method opens the dynamic table page
     */
    open () {
        
        return super.open('dynamictable');
    }
    
    /**
     * This method validates if the page has the  correct headers.
     *  
     * Needed Headers: Name, Network, CPU, Disk, Memory
     * 
     * @returns {Boolean} True if the table has the required headers
     */
    async headerValidation(){
    
        const neededHeaders = ["Name","Network","CPU","Disk","Memory"];

        const gottenHeaders = await this.columnHeaders.map(rowName => rowName.getText());

        if (neededHeaders.length!==gottenHeaders.length) return false;
    
        for (const header of neededHeaders) {
    
           if (!gottenHeaders.includes(header)) return false; 

        }

        return true;
    }
    

    /**
     * This method validates if the page has the  correct names for rows.
     *  
     * Needed Rows: Internet Explorer, System, Chrome, Firefox
     * 
     * @returns {Boolean} True if the table has the required names for rows
     */
    async rowsValidation(){
        
        const neededBrowserOrSystem = ["Internet Explorer", "System", "Chrome", "Firefox"];
        
        const gottenBrowserOrSystem = await this.browsersAndSystemSelector.map(rowName => rowName.getText());
        
        if (neededBrowserOrSystem.length !== gottenBrowserOrSystem.length) return false;

        for (const rowName of neededBrowserOrSystem) {

            if (!gottenBrowserOrSystem.includes(rowName)) return false;

        }

        return true;

    }

    /**
     * This method returns the background color of the warning label
     * 
     * @returns {String} returns the css color code
     */
    async getWarningLabelColorCode () {

        return /\w{4}\([0-9,]+\)/.exec(JSON.stringify(await this.warningLabel.getCSSProperty("background-color")))[0]
        
    }

    /**
     * This method validates the data change at refreshing the page
     * 
     * @returns {Boolean} True if the table has changed
     */
    async tableShouldChangeWhenRefreshPage () {

        const firstCheck = await this.browsersAndSystemSelector.map(browserSystem => browserSystem.getText())

        await browser.refresh();
  
        const secondCheck = await this.browsersAndSystemSelector.map(browserSystem => browserSystem.getText())

        return JSON.stringify(firstCheck)  !== JSON.stringify(secondCheck) 
        
    }
    
    /**
     * This method validates the data for the CPU column values
     * 
     * @returns {Boolean} False if any value is null or bad format, must include a percentage symbol
     */
    async cpuColumnValuesShouldAppear () {

        const headers = await this.columnHeaders.map(header=>header.getText());

        await this.columnValuesTemplate(await headers.indexOf("CPU") + 1).map(async cpuValue =>{

            if (cpuValue.getText() === null || !/[\d.]+\%/.test(await cpuValue.getText()))

            return false;})

        return true;
        
        }
          
    /**
     * This method validates the data for the memory column values
     * 
     * @returns {Boolean} False if any value is null or bad format, must include a storage size
     */
    async memoryColumnValuesShouldAppear () {

        const headers = await this.columnHeaders.map(header=>header.getText());

        await this.columnValuesTemplate(await headers.indexOf("Memory") + 1).map(async memoryValue =>{

            if (await memoryValue.getText() === null || !/[\d.\s]+[KMG]B/.test(await memoryValue.getText()))
            
            return false;})
            
        return true;

        }
        
    /**
     * This method validates the data for the network column values
     * 
     * @returns {Boolean} False if any value is null or bad format, must include a transfer speed
     */
    async networkColumnValuesShouldAppear () {
        
        const headers = await this.columnHeaders.map(header=>header.getText());
        
        await this.columnValuesTemplate(await headers.indexOf("Network") + 1).map(async networkValue =>{
            
            if (networkValue.getText() === null || !/[\d.\s]+[KMG]bps/.test(await networkValue.getText()))
            
            return false;})
            
        return true;

        }
        
    /**
     * This method validates the data for the disk column values
     * 
     * @returns {Boolean} False if any value is null or bad format, must include a speed by seconds
     */
    async diskColumnValuesShouldAppear () {

        const headers = await this.columnHeaders.map(header=>header.getText());

        await this.columnValuesTemplate(await headers.indexOf("Disk") + 1).map(async diskValue =>{

            if (diskValue.getText() === null  || !/[\d.\s]+[KMG]B\/s/.test(await diskValue.getText()) )

            return false;})

        return true;

        }
    }
    
    module.exports = new DynamicTable();