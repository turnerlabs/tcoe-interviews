class Overlapped {
    constructor() {
        this.idInputXPath = `//input[@id="id"]`;
        this.nameInputXPath = `//input[@id="name"]`;

        this.scrollableDivXPath = `//div${this.idInputXPath}/..`;
    }

    async scrollToNameInputField () {
        const nameInputEl = await $(this.nameInputXPath);
        await nameInputEl.scrollIntoView();
    }

    async setNameInputValue(strValue) {
        const nameInputEl = await $(this.nameInputXPath);
        await nameInputEl.setValue(strValue);
    }

    async getNameInputValue() {
        const nameInputEl = await $(this.nameInputXPath);
        await nameInputEl.waitForDisplayed();
        return await nameInputEl.getValue();
    }

    async isIdInputVisible() {
        const idInputEl = await $(this.idInputXPath);
        return this.isInputVisibleInScrollableDiv(idInputEl)
    }

    async isInputVisibleInScrollableDiv(inputEl) {
        const scrollableDivEl = $(this.scrollableDivXPath);
        const divLocation = await scrollableDivEl.getLocation();
        const divDimensions = await scrollableDivEl.getSize();

        const inputLocation = await inputEl.getLocation();
        const inputDimensions = await inputEl.getSize();

        if (
            inputLocation.x > divLocation.x + divDimensions.width ||
            inputLocation.x + inputDimensions.width < divLocation.x ||
            inputLocation.y > divLocation.y + divDimensions.height ||
            inputLocation.y + inputDimensions.height < divLocation.y
            ) {
            return false;
        }
        try{
            await inputEl.click()
        }catch(e){
            return false;
        }
        return true;
    }

}

module.exports = new Overlapped();