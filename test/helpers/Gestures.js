module.exports = class Gestures {

    static async doSwipeUp() {
        driver.touchPerform([
            { action: 'press', options: { x: 500, y: 500 }},
            { action: 'wait', options: { ms: 100 }},
            { action: 'moveTo', options: { x: 500, y: 100 }},
            { action: 'release' }
        ]);
    }
    static async swipeToElement(element) {
        do {
            await Gestures.doSwipeUp();
        } while (!(await element.isDisplayed()));
    }

};