import Page from './page.js';

class ProgressPage extends Page {

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
        super.open('/progressbar');
    };
}

export default new ProgressPage();
