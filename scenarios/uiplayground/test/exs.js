const { assert } = require("chai");
const { Builder, By } = require("selenium-webdriver");

let driver;

describe("Exercises", function () {

    //Create a test that clicks Start button...
    it("Ex1", async function () {
    driver = new Builder().forBrowser('firefox').build();
    driver.manage().setTimeouts({ implicit: 30000 });
    driver.get('http://uitestingplayground.com/');

    await driver.findElement(By.xpath("(//h3)[contains(.,'Progress Bar')]//a")).click();
    await driver.findElement(By.id("startButton")).click();
    await driver.wait(u => u.findElement(By.xpath("//div[@id='progressBar'][text()='75%']")));
    await driver.findElement(By.id("stopButton")).click();

    var percentage = await driver.findElement(By.id("progressBar")).getAttribute("innerHTML");
    
    assert.strictEqual(percentage, "75%", "Not Equal!");

    driver.close();
    });

    //Print button text when button...
    it("Ex2", async function () {
    driver = new Builder().forBrowser('firefox').build();
    driver.get('http://uitestingplayground.com/');

    await driver.findElement(By.xpath("//h3[contains(.,'Dynamic ID')]//a")).click();
    
    var buttonText = await driver.findElement(By.className("btn btn-primary")).getText();
    console.log(buttonText);
    driver.close();
    });

    //repeated exercise on the testlist. Instead, I did the following:
    //"Load Delay: Ensure that a test is capable of waiting for a page to load"
    
    it("Ex3", async function () {
    driver = new Builder().forBrowser('firefox').build();
    driver.manage().setTimeouts({ implicit: 300, pageLoad: 10000 });
    driver.get('http://uitestingplayground.com/');

    await driver.findElement(By.xpath("//h3[contains(.,'Load Delay')]//a")).click();
    
    var buttonText = await driver.findElement(By.className("btn btn-primary")).getText();
    console.log(buttonText);
    driver.close();
    });

    //Perform a test where an element...
    it("Ex4", async function () {
    driver = new Builder().forBrowser('firefox').build();
    driver.manage().setTimeouts({ implicit: 20000 });
    driver.get('http://uitestingplayground.com/');

    await driver.findElement(By.xpath("//h3[contains(.,'Client Side Delay')]//a")).click();
    
    await driver.findElement(By.className("btn btn-primary")).click();
    var hiddenText = await driver.findElement(By.className("bg-success")).getText();
    
    console.log(hiddenText);
    driver.close();
    });

    //Write a test case that proves...
    it("Ex5", async function () {
        try {
        driver = new Builder().forBrowser('firefox').build();
        driver.get('http://uitestingplayground.com/');

        await driver.findElement(By.xpath("//h3[.='Click']//a")).click();
        
        var button = await driver.findElement(By.id("badButton"));
        var initialCSS = button.getCssValue();
        button.click();
        var changedCSS = button.getCssValue();    
        //exception will be launched after this assertion
        assert.strictEqual(changedCSS, initialCSS);
        } catch (ex) {
        assert.fail(ex);
        }
        finally
        {
        driver.close();
        }
    });
});