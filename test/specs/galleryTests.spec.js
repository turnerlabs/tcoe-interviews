const GalleryPage = require("../pageobjects/GalleryPage");
describe("Image Galleries", function () {
    it("Can scroll through the gallery", async () => {
        await browser.url("https://www.cnn.com/travel/gallery/top-christmas-markets/index.html");
        const galleryPage = new GalleryPage();
        const defaultImageCount = await galleryPage.getImageCount();
        // page starts from 1st image in gallery
        expect(defaultImageCount).toEqual("1");
        const defaultImageCaption = await galleryPage.getImageCaption();
        let maxCount = await galleryPage.getMaxImageCount();
        await galleryPage.scrollLeft();
        const finalImageCount = await galleryPage.getImageCount();
        const finalImageCaption = await galleryPage.getImageCaption();
        // Verify captions are different
        expect(finalImageCaption !== defaultImageCaption).toBeTruthy();
        expect(finalImageCount).toEqual(maxCount);
    });
});
