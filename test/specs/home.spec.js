const HomePage = require('../pageobjects/home.page');

describe('Home E2E tests', () => {
  before('Navigate to /home', async () => {
    await browser.maximizeWindow();
    await HomePage.open();
  });

  it('Should have title, image and page links', async () => {
    await expect(await HomePage.title).toBeDisplayed();
    await expect(await HomePage.cubeImage).toBeDisplayed();
    await expect(await HomePage.linkToAjax).toBeDisplayed();
    await expect(await HomePage.linkToClick).toBeDisplayed();
    await expect(await HomePage.linkToShadowDom).toBeDisplayed();
    await expect(await HomePage.linkToVisibility).toBeDisplayed();
    await expect(await HomePage.linkToProgressBar).toBeDisplayed();
  });
});
