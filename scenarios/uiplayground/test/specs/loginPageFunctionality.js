const loginPage = require('../pageobjects/loginPageLocator')

describe('Login application', async()=> {

    before(async ()=> {
        await browser.url("http://uitestingplayground.com/sampleapp")
    })

    /*Test Case 1 => test with valid credentials*/
    it('Login Page with valid credentials', async ()=> {
        await loginPage.login("validuser", "pwd");
        expect(await loginPage.alertMessage).toHaveTextContaining("Welcome, validuser!")
    /*Test Case 2 => User should see logout text */    
        await loginPage.logOuttext.click();
        expect(await loginPage.alertMessage).toHaveTextContaining("User logged out.")
    })

    /*Test Case 3 => test for invalid credentials*/
    it('Login Page with invalid credentials', async ()=> {
        await loginPage.login("", "pwd234");
        expect(await loginPage.alertMessage).toHaveTextContaining("Invalid username/password")
     })

    /*Test Case 4 => test for empty credentials*/
    it('Login Page with empty credential ', async ()=> {
        await loginPage.login("", "");
        expect(await loginPage.alertMessage).toHaveTextContaining("Invalid username/password")
    })
 
    /*Test Case 5 => Validate username and password element type attribute*/
    it('Validate element type attribute ', async ()=> {
        expect (await loginPage.inputPassword).toHaveAttributeContaining('class', 'type', 'placeholder', 'name','id')
        expect (await loginPage.inputPassword).toHaveAttributeContaining('class', 'type', 'placeholder', 'name','id')
    })    
}
)
    


