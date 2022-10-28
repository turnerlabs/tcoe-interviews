import LoginPage from  '../pageobjects/login.page';
describe('Launch application', () => {
    

     it('should validate progressbar', async () => {

        browser.navigateTo("http://uitestingplayground.com/");  
        const clicklink = await $('=Progress Bar');
         clicklink.click(); 
         browser.pause(5000);    
        const clickStart = await $("//button[@id='startButton']");
         await clickStart.click();
         const progressBar= await $("//div[@id='progressBar']");
         const clickStop = await $("//button[@id='stopButton']");
         browser.waitUntil(async function(){
          await expect(progressBar).toHaveAttribute('aria-valuenow','75')
                   },{timeout : 6000 ,
                  timeoutMsg : 'Expexted value is not 75%'});
      
       await clickStop.click();
               
         

         
     });


});

