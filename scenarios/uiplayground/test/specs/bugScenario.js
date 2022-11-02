const loginPage = require('../pageobjects/loginPageLocator')

describe('Bug scenario', async()=> {

    before(async ()=> {
        await browser.url("http://uitestingplayground.com/sampleapp")
    })

    /*Username and Password fields should not be visible after user has logged in*/
    it('Test Negative Scenario', async ()=> {
        await loginPage.login("validuser", "pwd");
        await expect(loginPage.inputUsername).not.toBeDisplayed()
        await expect(loginPage.inputPassword).not.toBeDisplayed()
    })

}


)    