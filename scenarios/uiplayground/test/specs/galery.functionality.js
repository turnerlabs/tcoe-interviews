import galeryPage from "../pages/galerypages/galery.page"
import utils from "../utils/utils"

describe("Galery functionality", () => {
    it("Galery page elements load properly", async () => {
        await utils.open("travel/gallery/top-christmas-markets/index.html")
        expect(await galeryPage.arePageElementsDisplayed()).toBeTruthy()
        expect(await galeryPage.getTotalOfImagesInCounter() == await galeryPage.getAmountOfImages()).toBeTruthy()
    })

    it("Image elements load properly", async () => {
        expect(await galeryPage.areImageElementsDisplayed()).toBeTruthy()
        expect(await galeryPage.verifyAllImagesDetailsAreDifferent()).toBeTruthy()
    })
})