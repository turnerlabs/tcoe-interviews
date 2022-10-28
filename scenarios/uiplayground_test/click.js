describe('Launch application', () => {
    it('validate Click button', async () => {
        await browser.url("http://uitestingplayground.com/click");
        browser.maximizeWindow();
        browser.pause(5000);
         const clickButton = await $("//button[@id='badButton']");
         await expect(clickButton).not.toBeClickable();

         

    });

});
