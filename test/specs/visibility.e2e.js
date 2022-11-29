const visibilityPage = require("../pageobjects/visibility.page");

describe('visibility of buttons', () => {
    it('Should click on hide button and unhide button should appear instead', async () => {
        await visibilityPage.open()
        await visibilityPage.hideButtons()
        await visibilityPage.showUnhideBtn()
    });
});