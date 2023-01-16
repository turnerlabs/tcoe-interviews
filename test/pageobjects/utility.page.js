class Utility {
    async setValueByJavaScript(selector, dataToSet) {
        await browser.execute(function(selector, dataToSet) {
            selector.value = dataToSet;
        },selector, dataToSet);
        

    }

    async setAndVerifyText(selector, dataToSet) {
        await selector.setValue(dataToSet);
        let enteredData = await selector.getValue();
        expect(enteredData).toEqual(dataToSet);
    }

    async jsClick(selector) {
        await browser.execute("arguments[0].click();", selector);
    }

}
module.exports = new Utility();