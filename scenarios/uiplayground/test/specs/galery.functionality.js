import galeryPage from "../pages/galerypages/galery.page"
import utils from "../utils/utils"

describe("Galery functionality", () => {
    it("Galery elements load properly", async () => {
        await utils.open("travel/gallery/top-christmas-markets/index.html")
        expect(await galeryPage.arePageElementsDisplayed()).toBeTruthy()
        expect(await galeryPage.getTotalOfImagesInCounter() == await galeryPage.getAmountOfImages()).toBeTruthy()
        console.log('Image title ', await galeryPage.getImageTitle())
        console.log('Image description ', await galeryPage.getImageDescription())
        console.log('Image copyright ', await galeryPage.getImageCopyrigth())
        expect(galeryPage.areImageElementsDisplayed()).toBeTruthy()
    })
})