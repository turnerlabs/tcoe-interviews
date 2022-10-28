describe('Launch application', () => {
    it('validate visibility of button', async () => {
        await browser.url("http://uitestingplayground.com/visibility");
        browser.maximizeWindow();
        browser.pause(5000);
         const hideButton = await $("//button[@id='hideButton']");
         await hideButton.click();

         // to check unhide button writing xpath for unhide button

         const unhideButton = await $("//button[@id='unhideButton']");
         await expect(unhideButton).toBeDisplayed();

    });

});
