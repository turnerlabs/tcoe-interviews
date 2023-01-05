class ProgressPage {

    get startButton () {
        return $("#startButton")
    }

    get progressBar () {
        return $("#progressBar")
    }

    get stopButton(){
        return $("#stopButton")
    }
}

export default new ProgressPage();
