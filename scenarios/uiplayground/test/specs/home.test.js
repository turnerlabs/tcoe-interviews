const Header = require("../pageobjects/header.page");
const Home = require("../pageobjects/home.page");

describe("Home Page - Request behavior does not work as intended (Bug)", () => {

	it("Should not be able to navigate to business link in header", async () => {
    await Home.openPage('home');
		await Home.verifyPage('home');
		await Header.navigateToBusinessHeaderLink();
  });

});