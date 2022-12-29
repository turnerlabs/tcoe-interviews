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

    async waitProgress() {
        await this.progressBar.waitUntil(async function () {
            return (await this.getAttribute('aria-valuenow')) >= '75'
        }, {
            timeout: 50000,
        });
    }

    async barPercentage() {
        let elementText = await this.progressBar.getAttribute('aria-valuenow');
        return parseInt(elementText);
    }

    open(){
        super.open('/progressbar');
    }
}

export default new ProgressPage();
