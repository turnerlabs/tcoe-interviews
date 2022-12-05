const Page = require('./Page');

class SwipePage extends Page{

    get swipeView() {
        return $('~Swipe-screen');
    }
    
    constructor() {
        super();
        this.waitForIsShown(this.swipeView);
     }

}
module.exports = SwipePage;