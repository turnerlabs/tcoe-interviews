class progressBar{
    //getters of all the elements
    get progressBarTitle(){
        return $('//h3')
    }
    get start_btn(){
    return $('#startButton')
    }
    get stop_btn(){
    return $('#stopButton')
    }
    get progressBar () {
        return $('#progressBar');
    }

    //business libraraies
    async ProgressBarValue () {
    let ariaValueNow = await this.progressBar.getAttribute('aria-valuenow');
    let stopButtonClicked = false
    do{
        await browser.pause(100);
        ariaValueNow = await this.progressBar.getAttribute('aria-valuenow');
    } while (ariaValueNow < 75 && !stopButtonClicked);

    if(ariaValueNow>=75){
        await this.stop_btn.click();
    }
    return ariaValueNow;

    }
}
export default new progressBar();