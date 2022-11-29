const Page = require("./page")

class ProgressBarPage extends Page {

    get startBtn() {
        return $("#startButton")
    }

    get stopBtn() {
        return $("#stopButton")
    }

    get progressBar() {
        return $("#progressBar")
    }

    async open() {
        await super.open("progressbar")
    }

    async start() {
        await browser.waitAndClick(this.startBtn)
    }

    async stop() {
        await this.stopBtn.click()
    }

    async progressBarLoadingTo(porcentage) {
        await this.progressBar.waitUntil(
            async function () {
                return await this.getText() > porcentage
            },
            {
                timeout: 30000,
                timeoutMsg: `Progress Bar in ${porcentage} doesn't appear`
            }
        )
    }

    async progressBarLimitAcceptable() {
        const progressBarPorcentage = parseInt((await this.progressBar.getText()).trim().replace("%", ""))
        return progressBarPorcentage >= 75 && progressBarPorcentage <= 80
    }
}

module.exports = new ProgressBarPage()