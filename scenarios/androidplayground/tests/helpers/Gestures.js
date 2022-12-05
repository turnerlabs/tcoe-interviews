class Gestures {

    static async swipeUp (percentage = 1) {
        let deviceScreenSize = await driver.getWindowSize();
        driver.touchPerform([
            { action: 'press', 
                options: { 
                    x: (deviceScreenSize.width)/2, 
                    y: (deviceScreenSize.height)/2, 
                }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', 
                options: { 
                    x: (deviceScreenSize.width)/2,  
                    y: (deviceScreenSize.height)*percentage,
                }},
            { action: 'release' }
          ]);
    }

    static async checkIfDisplayedWithSwipeUp (element, maxScrolls, amount = 0){
        if (!await element.isDisplayed() && amount <= maxScrolls) {
            await this.swipeUp(-0.5);
            await this.checkIfDisplayedWithSwipeUp(element, maxScrolls, amount + 1);
        } else if (amount > maxScrolls) {
            throw new Error(`The element '${element}' could not be found or is not visible.`);
        }
    }

}

module.exports = Gestures;