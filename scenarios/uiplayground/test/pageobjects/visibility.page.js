import Page from './page.js';

class VisibilityPage extends Page {

    get hideBtn () {
        return $('#hideButton');
    }

    get unHideBtn () {
        return $$('#unHideButton');
    }

    get removedBtn () {
        return $('#removedButton');
    }

    get zeroWidthBtn () {
        return $('#zeroWidthButton');
    }

    get overlappedBtn () {
        return $('#overlappedButton');
    }

    get transparentBtn () {
        return $('#transparentButton');
    }

    get invisibleBtn () {
        return $('#invisibleButton');
    }

    get notdisplayedBtn () {
        return $('#notdisplayedButton');
    }

    get offscreenBtn () {
        return $('#offscreenButton');
    }

    open(){
        super.open('/visibility');
    };
}

export default new VisibilityPage();
