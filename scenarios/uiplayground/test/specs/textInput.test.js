const TextInput = require("../pageobjects/textInput.page");

// This test cases where defined assuming that the input field receives texts between 1 and 20 characters
describe("Text Input Page - Boundary based testing", () => {  

  it("Should be able to set a text with more than 1 char", async () => {
    await TextInput.openPage('textinput');
		await TextInput.verifyPage('textinput');
		await TextInput.setButtonName('more than 1 chars');
  });
  
	it("Should be able to set a text with less than 20 chars", async () => {
    await TextInput.openPage('textinput');
		await TextInput.verifyPage('textinput');
    await TextInput.setButtonName('less than 20 chars');
  });
});