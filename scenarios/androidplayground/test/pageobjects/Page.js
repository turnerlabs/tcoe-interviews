module.exports = class Page {

    async waitForIsShown(element) {
        return element.waitForDisplayed();
    };

    async changeViewTo(element) {
        await this.doTap(element);
    };

    async doTap(element) {
        await element.waitForDisplayed();
        await element.click();
    };
    
    async sendKeys(element,value) {
        await element.waitForDisplayed();
        await element.setValue(value)
    };

    async doSwipeLeft() {
        await this.swipeOnPercentage(
            { x: 800, y: 1200 },
            { x: 400, y: 1200 }
        );
    };

    async doSwipeUp() {
        await this.swipeOnPercentage(
            { x: 50, y: 85 },
            { x: 50, y: 15 }
        );
    }; 
}
