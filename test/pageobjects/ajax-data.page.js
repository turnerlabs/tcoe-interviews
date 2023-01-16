const Page = require('./page');

class AjaxPage extends Page {
   
    get ajaxButton () {
      return $('#ajaxButton');
   }

   get spinner () {
    return $('#spinner');
   }

   get dataLoaded() {
    return $('.bg-success');
   }

   async clickOnAjaxButton() {
      await this.ajaxButton.click();
   }


   async verifySpinnerDisplayed() {
    await this.spinner.waitForExist();
    let displayed = await this.spinner.isExisting();
    expect(displayed).toBeTruthy();
   }

   async ajaxPageLoaded() {
    await this.dataLoaded.waitForExist({ timeout: waitforTimeout });
    let displayed = await this.dataLoaded.isExisting();
    let text = await this.dataLoaded.getText();
    expect(displayed).toBeTruthy();
    expect(text).toEqual('Data loaded with AJAX get request.');
   }
  
   open () {
      return super.open('http://uitestingplayground.com/ajax');
   }

}

module.exports = new AjaxPage();