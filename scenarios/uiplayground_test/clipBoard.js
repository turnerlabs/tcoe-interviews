describe('Launch application', () => {
    it('validate ClipBoard button', async () => {
        await browser.url("http://uitestingplayground.com/shadowdom");
        browser.maximizeWindow();
        browser.pause(5000);
         const shadowButton =  await $('guid-generator').shadow$$("button");
         await shadowButton[0].click();
         browser.pause(20000);
         await shadowButton[1].click();
         driver.getClipboard();
         
         //console.log(driver.getClipboard("Plaintext"));

       
    });

});
