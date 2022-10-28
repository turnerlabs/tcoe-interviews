describe('Launch application', () => {
    it('validate AJAX button', async () => {
        await browser.url("http://uitestingplayground.com/ajax");
        browser.maximizeWindow();
        browser.pause(5000);
         const ajaxButton = await $("//button[@class='btn btn-primary']");
          await ajaxButton.click(); 
         const loadedtext= await $("//p[text()='Data loaded with AJAX get request.']")
         await loadedtext.waitForDisplayed({timeout : 20000});
         console.log(await loadedtext.getText());

                   await ajaxButton.click();
         await loadedtext.waitForDisplayed({timeout : 20000});
         await  expect (loadedtext).not.toBeDisplayed();

        

    });

});
