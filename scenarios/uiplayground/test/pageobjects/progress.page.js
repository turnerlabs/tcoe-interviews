const Page = require('./page');

class Progress extends Page {
  get progressBar() {
    return $('#progressBar');
  }

  get startButton() {
    return $('#startButton');
  }

  get stopButton() {
    return $('#stopButton');
  }

   async calcProgress (percent) {
    await this.startButton.click();
    await this.progressBar.waitUntil(async function () {
      return (await this.getAttribute('aria-valuenow')) >= percent;
    },{
      timeout: 60000,
      timeoutMsg:'---Timeout---'
    });
    await this.stopButton.click();
  }

  open () {
    return super.open('progressbar');
  }
}

module.exports = new Progress();