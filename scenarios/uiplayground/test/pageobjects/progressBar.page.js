import PlaygroundUrl from "./playgroundUrl.js";

class ProgressBarPage extends PlaygroundUrl {

    get startBtn() {
        return $("//button[@id='startButton']")
    }

    get stopBtn() {
        return $("//button[@id='stopButton']")
    }

    get progressBar() {
        return $("//div[@id='progressBar']")
    }
    async clickOnStartBtn() {
        (await this.startBtn).click();
    }
    async clickOnStopBtn() {
        (await this.stopBtn).click();
    }

    async waitForProgressBarToPerform() {

        await this.clickOnStartBtn();
        await this.progressBar.waitUntil(async function () {
            return (await this.getText() === '75%')
        }, {
            timeout: 25000, timeoutMsg: 'verification failed (cannot stop the progression bar at 75%)'
        }
        )
      await this.stopBtn.click();
    }

    get attributeValue(){
        return this.progressBar.getAttribute('aria-valuenow');
    }

    urlOfProgressBarPage() {
        return browser.url("http://uitestingplayground.com/progressbar");
    }
}

export default new ProgressBarPage();