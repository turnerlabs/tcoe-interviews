const ImagePage = require('../pageobjects/image.js');
const Const = require('../pageobjects/constants');
describe('Validate Image Scenarios', () => {
    beforeEach(async () => {
        await ImagePage.open(Const.imageUrl);
    })
    it("should validate image gallery functionality", async () => {
        await ImagePage.validateDefaultImage();
    });
    it("should validate image gallery functionality", async () => {
        await ImagePage.validateDefaultImageCount();
    });

    it("should validate image gallery functionality with next button", async () => {
        await ImagePage.validateForwardImageNavigation();
    });

    it("should validate image gallery functionality with previous button", async () => {
        await ImagePage.validateBackwardImageNavigation();
    });

});