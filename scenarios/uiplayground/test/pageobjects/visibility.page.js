import Page from './page.js';

class VisibilityPage extends Page {

    get startBtn () {
        return $('#startButton');
    }

    get progressBar(){
        return $('#progressBar');
    }

    get stopBtn () {
        return $('#stopButton');
    }

    open(){
        super.open('/visibility');
    };
}

export default new VisibilityPage();
