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
        await this.progressBarElement.waitUntil(async function(){
            return (await this.getText() == '75%')
        },{timeout: 50000,
          timeoutMsg: 'Too slow progress on the bar, exceded 50s',
          interval: 10,
        });

        await this.btnStop.click();
    }
    open () {
        return super.open('progressbar');
    }
}

module.exports = new ProgressBarPage();