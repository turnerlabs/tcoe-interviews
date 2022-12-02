const search = require("../pageobjects/search");

describe("Test spec - 1", () => {
  it("should validate site search functionality", async () => {
    const word = "ukraine";
    await search.open();
    await search.searching(word);

    await expect(search.searchResults).toBeExisting();
  });

  it("should validate site search functionality with empty input", async () => {
    await search.open();
    await search.searching("");

    await expect(search.tittleEmptyResults).toBeExisting();
    await expect(search.tittleEmptyResults).toHaveTextContaining(
      "A few suggestions:"
    );
  });

  it("should validate site search functionality with enter", async () => {
    const USE_ENTER_KEY = true;
    const word = "ukraine";
    await search.open();
    await search.searching(word, USE_ENTER_KEY);

    await expect(search.searchResults).toBeExisting();
  });
});
