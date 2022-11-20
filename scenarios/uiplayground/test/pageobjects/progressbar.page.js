class Progressbar {

    get progressBarTitle() {
        return $('=Progress Bar');
    }

    get startButton() {
        return $('#startButton');
    }

    get stopButton() {
        return $('#stopButton');
    }

    get progressBar() {
        return $('#progressBar');
    }

    get resultText() {
        return $('#result');
    }

    async clickStopWhenProgressBarSeventyFivePercent() {
        try {
            while ((await this.resultText.getText()).includes("n/a")) {
                if(await this.progressBar.getAttribute("aria-valuenow") >= 75) {
                    await this.stopButton.click();
                    break;
                }
            }
        }catch (e) {
            console.log(`Error handling progress bar --> ${e}`);
        }
    }

}
module.exports = new Progressbar();