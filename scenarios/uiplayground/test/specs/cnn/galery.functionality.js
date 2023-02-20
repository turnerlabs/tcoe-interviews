import galeryPage from "../../pages/galerypages/galery.page"
import utils from "../../utils/utils"
import paths from "../../data/urls"
import { expect } from "chai"

describe("Galery functionality", () => {
    it("Galery page elements load properly", async () => {
        await utils.open(paths["Galery page"])
        expect(await galeryPage.arePageElementsDisplayed()).to.be.true
        expect(await galeryPage.getTotalOfImagesInCounter() == await galeryPage.getAmountOfImages()).to.be.true
    })

    it("Image elements load properly", async () => {
        expect(await galeryPage.areImageElementsDisplayed()).to.be.true
        expect(await galeryPage.verifyAllImagesDetailsAreDifferent()).to.be.true
    })
})
