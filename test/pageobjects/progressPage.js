import Page from "./page.js"

class ProgressPage extends Page{

    get startButton () {
        return $("#startButton")
    }

    get progressBar () {
        return $("#progressBar")
    }

    get stopButton(){
        return $("#stopButton")
    }

    open(){
        return super.open("progressbar")
    }
}
export default new ProgressPage();
