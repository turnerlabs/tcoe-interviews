const Gallery = require("../pageobjects/gallery");

describe.only("test spec 3", () => {
  it("should validate image gallery functionality", async () => {
    await Gallery.open();
    const countValues = await Gallery.divCountGallery.getText();
    const firstValue = countValues.split("/")[0];

    expect(firstValue).toBe("1");
  });

  it("should validate image gallery functionality with next button", async () => {
    await Gallery.open();
    const countValues = await Gallery.divCountGallery.getText();
    const firstValue = countValues.split("/")[0];
    const secondValue = countValues.split("/")[1];
    await Gallery.Next();
    const countNextValues = await Gallery.divCountGallery.getText();
    const firstNewtValue = countNextValues.split("/")[0];

    if (firstValue !== secondValue) {
      expect(firstNewtValue).toBe("2");
    } else {
      expect(firstNewtValue).toBe("1");
    }
  });

  it("should validate image gallery functionality with previous button and last image in gallery", async () => {
    await Gallery.open();
    await Gallery.Previous();
    const countValues = await Gallery.divCountGallery.getText();
    const firstValue = countValues.split("/")[0];
    const secondValue = countValues.split("/")[1];

    expect(firstValue).toBe(secondValue);
  });
});
