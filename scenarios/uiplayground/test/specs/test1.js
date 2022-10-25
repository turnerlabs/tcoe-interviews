const LoginPage = require('../pageobjects/login.page');
const securePage = require('../pageobjects/secure.page');
const SecurePage = require('../pageobjects/secure.page');


describe('Test Suite', async ()=>{

    
    //Login with no User --> "Negative Test Case" in this test case, we are trying to login with an empty username and correct inputPassword.
    //                       We expect an error message: "Invalid username/password"
   it("Login With No User", async()=>{
        await LoginPage.open()
        await LoginPage.inputUsername.setValue("")
        await browser.pause(2000)
        await LoginPage.inputPassword.setValue("pwd")
        await LoginPage.btnSubmit.click()
        await browser.pause(2000)
        await expect($$("label[id='loginstatus']")).toHaveTextContaining("Invalid username/password")
    })

//Login OK  --> We are login with correct username and password
//              We expect a Wlcome message
    it("Login OK", async()=>{
        await LoginPage.open()
        await LoginPage.inputUsername.setValue("Esteban")
        await LoginPage.inputPassword.setValue("pwd")
        await LoginPage.btnSubmit.click()
        await expect($$("label[id='loginstatus']")).toHaveTextContaining("Welcome, Esteban!")
    })

//Login with Max Length  --> The Max length for Username is 15 characters, we will insert 15 characters to try it
//              We expect a Welcome message
    it("Login with Max Length", async()=>{
    await LoginPage.open()
    await LoginPage.inputUsername.setValue("Esteb0123456789")
    await LoginPage.inputPassword.setValue("pwd")
    await LoginPage.btnSubmit.click()
    await expect($$("label[id='loginstatus']")).toHaveTextContaining("Welcome, Esteb0123456789!")
    })



    //Server Load Delay --> We are clicking on the link and wait until the botton is clickeable.
    //                      Expect to be clickable before timeout.
    it("Server Load Delay", async()=>{
        await SecurePage.open('home')
        await $("a[href='/loaddelay']").click()
        await $("button[class='btn btn-primary']").waitForClickable({timeout: 5000})
    })

    //Button Visibility --> Checking if the two bottons exists after click
    //                      Expect hide bottom and removedbottom to exist after click
    it("Button Visibility", async()=>{
        await SecurePage.open('visibility')
        const buttonLocators=$$("tr td button")
        const buttonId=await buttonLocators.map(async button=> await button.getAttribute('id'))
        await console.log(buttonId)
        await $("#hideButton").click()
        const buttonIdAfter=await buttonLocators.map(async button=> await button.getAttribute('name'))
        await console.log(buttonIdAfter)
        await $("#hideButton").isClickable()
        let exis = await $("#removedButton")
        let isExis = await exis.isExisting()
        await expect(isExis).toBe(true)
    })
//  Scroll to see Name --> Insert an ID and scroll to insert Name
//                         Expect to see both textbox with data
    it("Scroll", async ()=>{
        await securePage.open('overlapped')
        await $("#id").setValue("12345")
        //await browser.pause(2000)
        await $("#name").scrollIntoView()
        await $("#name").setValue("Esteban")
        //await browser.pause(2000)
    })

    it("Validate Resourse Link", async ()=>{
        await securePage.open('home')
        await $("//a[contains(text(),'Resources')]").click()
        let url=await browser.getUrl()
        await expect(url).toEqual("http://uitestingplayground.com/resources")

    })

})