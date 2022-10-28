describe('Launch application', () => {
    it('validate with valid credentials', async () => {
        await browser.url("http://uitestingplayground.com/sampleapp");
        browser.maximizeWindow();
        browser.pause(5000);
         const userName = await $("//input[@name='UserName']");
         await userName.setValue('username');
         const pwd = await $("//input[@name='Password']");
         await pwd.setValue('pwd');
         const btn = await $("//button[@id='login']");
         await btn.click();
         const welcomeTxt = await $("//label[@id='loginstatus']");
         await expect(welcomeTxt).toHaveTextContaining("Welcome, username!");  
         await btn.click();  
         await expect(welcomeTxt).toHaveTextContaining("User logged out."); 


    });

    it('validate with invalid credentials', async () => {
        await browser.url("http://uitestingplayground.com/sampleapp");
        browser.maximizeWindow();
        browser.pause(5000);
         const userName = await $("//input[@name='UserName']");
         await userName.setValue('123');
         const pwd = await $("//input[@name='Password']");
         await pwd.setValue('123');
         const btn = await $("//button[@id='login']");
         await btn.click();
         const welcomeTxt = await $("//label[@id='loginstatus']");
         await expect(welcomeTxt).toHaveTextContaining("Invalid username/password");         

    });

    it('validate with empty credentials', async () => {
        await browser.url("http://uitestingplayground.com/sampleapp");
        browser.maximizeWindow();
        browser.pause(5000);
         const userName = await $("//input[@name='UserName']");
         await userName.setValue('');
         const pwd = await $("//input[@name='Password']");
         await pwd.setValue('');
         const btn = await $("//button[@id='login']");
         await btn.click();
         const welcomeTxt = await $("//label[@id='loginstatus']");
         await expect(welcomeTxt).toHaveTextContaining("Invalid username/password");         

    });
    it('validate for bug scenario ', async () => {
        await browser.url("http://uitestingplayground.com/sampleapp");
        browser.maximizeWindow();
        browser.pause(5000);
         const userName = await $("//input[@name='UserName']");
         await userName.setValue('user');        
         const pwd = await $("//input[@name='Password']");
         await pwd.setValue('pwd');
         const btn = await $("//button[@id='login']");
         await btn.click();
         const welcomeTxt = await $("//label[@id='loginstatus']");
         await expect(userName).not.toBeDisplayed();



    });


});
