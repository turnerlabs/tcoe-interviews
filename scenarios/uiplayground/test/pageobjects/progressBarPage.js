const Page = require('./page');

class ProgressBarPage extends Page {
    
    get btnStart () {
        return $('#startButton');
    }

    get btnStop(){
        return $('#stopButton');
    }

    get progressBarElement(){
        return $('#progressBar');
    }

    get stopingResult(){
        return $('#result');
    }

    async startProcesing(){
        await this.btnStart.click();
    }

    async stopAfterSomeProgress(){
        //await browser.pause(2000);

        //await console.log("*******************",await this.progressBarElement.getCSSProperty('style'));
        //await console.log("*******************",await this.progressBarElement.getText());
        await this.progressBarElement.waitUntil(async function(){
            return (await this.getText() == '75%')
        },{timeout: 50000,
          timeoutMsg: 'Too slow progress on the bar, exceded 50s',
          interval: 10,
        });

        await this.btnStop.click();
    }

    async getResultNumber(){
        //await console.log('*******', this.StopingResult.getText())
        await this.stopingResult.getText().then(str =>{
            console.log('*******+*******++', str.substring(2))
        } )
    }

    open () {
        return super.open('progressbar');
    }
}

module.exports = new ProgressBarPage();