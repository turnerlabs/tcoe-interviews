const Page = require("./page")

class VisibilityPage extends Page {

    get hideBtn() {
        return $("#hideButton")
    }

    get unhideBtn() {
        return $("#unhideButton")
    }

    async open() {
        await super.open("visibility")
    }

    async hideButtons() {
        await browser.waitAndClick(this.hideBtn)
    }

    async showUnhideBtn() {
        await expect(this.unhideBtn).toHaveTextContaining("Unhide")
    }
}

module.exports = new VisibilityPage()