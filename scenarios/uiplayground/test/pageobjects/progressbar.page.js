const Page = require('./page');
const Utils = require('../helpers/stringUtils/progressbar');
const GeneralUtils = require('../helpers/stringUtils/general');


class ProgressBarPage extends Page {

    get startBtn() {
        return $('#startButton');
    }

    get stopBtn() {
        return $('#stopButton');
    }

    get progressBar() {
        return $('#progressBar');
    }

    open() {
        return super.open(GeneralUtils.PROGRESS_BAR_PATH);
    }

    async clickStart() {
        await this.startBtn.click();
    }

    async clickStop() {
        await this.stopBtn.click();
    }

    async waitForProgress75() {
        await this.progressBar.waitUntil(async function () {
            return parseInt(await this.getAttribute(Utils.CURRENT_PROGRESS_ATRIBUTE)) >= Utils.EXPECTED_PROGRESS;
        }, {
            timeout: 75000,
            timeoutMsg: 'expected to reach at least 75% pogress after 75s'
        });
    }

    async progressInRange() {
        const progressBarValue = await this.progressBar.getAttribute(Utils.CURRENT_PROGRESS_ATRIBUTE);
        const valueInRange = parseInt(progressBarValue) >= Utils.EXPECTED_PROGRESS && parseInt(progressBarValue) <= Utils.ACCEPTABLE_PROGRESS;
        return valueInRange
    }  
}

module.exports = new ProgressBarPage();