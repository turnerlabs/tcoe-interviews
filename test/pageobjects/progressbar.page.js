const Page = require('./page');

class ProgressBarPage extends Page {
  get startButton() {
    return $('#startButton');
  }
  get stopButton() {
    return $('#stopButton');
  }
  get progressBar() {
    return $('#progressBar');
  }

  async clickStartButton() {
    await this.startButton.click();
  }

  async clickStopButton() {
    await this.stopButton.click();
  }

  async waitUntilProgressIs(desiredProgress) {
    await browser.waitUntil(
      async () => {
        return (await this.getCurrentProgress()) >= desiredProgress;
      },
      { timeout: 30000 },
    );
  }

  async getCurrentProgress() {
    return +(await this.progressBar.getText()).replace('%', '');
  }

  open() {
    return super.open('progressbar');
  }
}

module.exports = new ProgressBarPage();
