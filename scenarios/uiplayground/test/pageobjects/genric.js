class genericMethods {

    async isElementDisplayed(ele){
    await ele.waitForExist({timeout : 5000});
    return ele.isDisplayed();
    }

    async isElementEnabled(ele){
        await ele.waitForEnabled({timeout:5000})
        return ele.isEnabled();
    }
    
    async click(ele){
    await browser.execute("arguments[0].click();",ele)
    }
}
export default new genericMethods();