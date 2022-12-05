class AppScreen {
    
    selector;

    constructor (selector) {
        this.selector = selector;
    }

    async waitForIsShown (isShown = true){
        return $(this.selector).waitForDisplayed({
            reverse: !isShown,
        });
    }
}

module.exports = AppScreen;
