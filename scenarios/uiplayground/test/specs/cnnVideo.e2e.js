const Video = require("../pageobjects/video");

describe("test spec 2", () => {
  it("should validate playing video", async () => {
    await Video.open();
    await Video.Playing();

    await expect(Video.divPlay).toHaveAttribute(
      "class",
      "fave-player-container fave-top-player fave-no-mobile fave-ad-playing"
    );
  });

  it("should validate video suggestions", async () => {
    await Video.open();

    await expect(Video.divCarrousel).toHaveStyle({
      transform: "matrix(1, 0, 0, 1, -1280, 0)",
    });
  });

  it("should validate video suggestions clicking on next suggestions", async () => {
    await Video.open();
    await Video.translatingSuggestionsNext();

    await expect(Video.divCarrousel).toHaveStyle({
      transform: "matrix(1, 0, 0, 1, -1920, 0)",
    });
  });

  it("should validate video suggestions double clicking on next suggestions ", async () => {
    await Video.open();
    await Video.translatingSuggestionsNext();
    await Video.translatingSuggestionsNext();

    await expect(Video.divCarrousel).toHaveStyle({
      transform: "matrix(1, 0, 0, 1, -2560, 0)",
    });
  });

  it("should validate video suggestions clicking previous suggestions", async () => {
    await Video.open();
    await Video.translatingSuggestionsPrevious();

    await expect(Video.divCarrousel).toHaveStyle({
      transform: "matrix(1, 0, 0, 1, -640, 0)",
    });
  });

  it("should validate video suggestions", async () => {
    await Video.open();
    await Video.translatingSuggestionsPrevious();
    await Video.translatingSuggestionsPrevious();

    await expect(Video.divCarrousel).toHaveStyle({
      transform: "matrix(1, 0, 0, 1, -2560, 0)",
    });
  });

  it.only("should validate video suggestions", async () => {
    await Video.open();
    await Video.PlayingNextCarrousel();

    await expect($('.media__over-text')).toHaveTextContaining('Now Playing');
  });
});
