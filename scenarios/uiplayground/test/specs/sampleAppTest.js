const homePage = require('../pageobjects/homePage.js')
const sampeAppPage = require('../pageobjects/sampleAppPage.js')
const fs =require('fs')
let credentials = JSON.parse(fs.readFileSync(process.cwd()+"/scenarios/uiplayground/testData/loginTestData.json"))



describe('Sample Application Page Login Test', async() => {

    credentials.forEach(({username,password}) => {

        it('C1234 - Login successful test case', async() => {
            await homePage.open()
            await homePage.ClickSampleApp()
            await sampeAppPage.LogIn(username,password)
            if (username == "Jeevan") { 

                await expect(sampeAppPage.successMessageElemCss).toHaveText("Welcome, Jeevan!")
    
            } else if (username == "reggie") {

                await expect(sampeAppPage.successMessageElemCss).toHaveText("Invalid username/password")
                
            } else {

                await expect(sampeAppPage.successMessageElemCss).toHaveText("Invalid username/password")

            }
    
        })

    })

    it ("C12345 - As a user I should be able to logout successfully", async() => {
        
        await homePage.open()
        await homePage.ClickSampleApp()
        await sampeAppPage.LogIn(credentials[0].username,credentials[0].password)
        await browser.waitUntil( async() => await sampeAppPage.logInElemCss.getText() === 'Log Out', 
        {
            timeout:3000,
            timeoutMsg: 'User is not logged in'
        })
        await sampeAppPage.logInElemCss.click()
        await expect(sampeAppPage.successMessageElemCss).toHaveText("User logged out.")
         
    })

    it('C12346 - Test password field element has attribute type="password" ', async() => {
        await homePage.open()
        await homePage.ClickSampleApp()
        await expect(await sampeAppPage.passWordElemXpt.getAttribute('type') == 'password')
    })

    it('C12347 - Test username field element has attribute type="text" ', async() => {
        await homePage.open()
        await homePage.ClickSampleApp()
        await expect(sampeAppPage.userNameElemXpt.getAttribute('type') == 'text')
    })

    it ("C12348 - As a user I should not see username and password fields after successful login", async() => {
        await homePage.open()
        await homePage.ClickSampleApp()
        await sampeAppPage.LogIn(credentials[0].username,credentials[0].password)
        await browser.waitUntil( async() => await sampeAppPage.logInElemCss.getText() === 'Log Out', 
        {
            timeout:3000,
            timeoutMsg: 'User is not logged in'
        })
        await expect(sampeAppPage.userNameElemXpt).not.toBeDisplayed() && await expect(sampeAppPage.passWordElemXpt).not.toBeDisplayed()
         
    })

})