class Actions{

async tapOnElement(element){
    await element.waitForDisplayed();
    await element.click();
}

}

module.exports = new Actions();