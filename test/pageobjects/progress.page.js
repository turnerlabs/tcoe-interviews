const Page = require('./page');

class ProgressBar extends Page {
   get startButton () {
      return $('#startButton');
   }
   get stopButton () {
      return $('#stopButton');
   }

   get progressBar () {
      return $('#progressBar');
   }

   async clickOnStartButton() {
      await this.startButton.click();
   }

   async clickOnStopButton() {
      await this.stopButton.click();
   }
   async waitForProgressBar(percentage) {
      let text = await this.progressBar.getText();
      while(!text.includes(percentage)) {
         text = await this.progressBar.getText();
      }
      expect(text).toContain(percentage);
      
   }
   open () {
      return super.open('http://uitestingplayground.com/progressbar');
   }

}

module.exports = new ProgressBar();