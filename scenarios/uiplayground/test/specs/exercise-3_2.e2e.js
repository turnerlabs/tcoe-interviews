
const overlappedPage = require('../pageobjects/overlapped.page');

describe(`Overlapped Page Tests`, () => {
    it(`Navigate to overlapped page`, async () => {
        await browser.url(`http://uitestingplayground.com/overlapped`)
        const title = await browser.getTitle();
        expect(title).toBe("Overlapped Element")
    })

    /**
     * This step is derived from the instructions on http://uitestingplayground.com/overlapped
     */
    it(`Set and confirm value for name input`, async () => {
        await overlappedPage.scrollToNameInputField();
        await overlappedPage.setNameInputValue("Test Name");
        const nameFieldText = await overlappedPage.getNameInputValue();
        expect(nameFieldText).toBe("Test Name");
    })

    it(`Confirm that Id input element is displayed`, async () => {
        const isDisplayed = await overlappedPage.isIdInputVisible();
        expect(isDisplayed).toBe(true);
    })
})