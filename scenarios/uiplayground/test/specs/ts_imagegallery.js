const ImageGalleryPage = require("../pageobjects/imageGallery.page");
const expectchai = require("chai").expect;
const { parseJsontestData } = require("../utilities/parseJsonFromFile");

let test_data = parseJsontestData(
  "scenarios/uiplayground/test/testData/test_data_image_gallery.json"
);

describe("Test image gallery functionality", () => {
  beforeEach(async () => {
    await ImageGalleryPage.open();
  });

  let totalImgSlides;
  it("validate current image indicator updates after clicking on next image slide", async () => {
    totalImgSlides = await ImageGalleryPage.getTotalImageFromSlides();
    let count = 1;
    while (count < totalImgSlides + 1) {
      const currentImageIndicator =
        await ImageGalleryPage.getCurrentImageIndicator();
      expectchai(currentImageIndicator).to.be.equals(count);
      await ImageGalleryPage.slideToNextImage();
      count++;
    }
  });

  it("validate current image indicator updates clicking on previous image slide", async () => {
    let count = totalImgSlides;
    while (count > 0) {
      await ImageGalleryPage.slideToPrevImage();
      const currentImageIndicator =
        await ImageGalleryPage.getCurrentImageIndicator();
      expectchai(currentImageIndicator).to.be.equals(count);
      count--;
    }
  });

  it("validate total number of images should be displayed correctly", async () => {
    const totalImgFromIndicator =
      await ImageGalleryPage.getTotalImageFromIndicator();
    expectchai(totalImgSlides).to.be.equals(totalImgFromIndicator);
  });

  it("validate image caption and credit should be displayed correctly", async () => {
    const { location, country, description, photographer } = test_data[0];
    const imageCaption = await ImageGalleryPage.getCaptionText();
    const imageCredit = await ImageGalleryPage.getCreditText();
    const expectedCaption = `${location}, ${country}: ${description}`;
    expectchai(imageCaption).to.be.equals(expectedCaption);
    expectchai(imageCredit).to.be.equals(photographer);
  });
});
