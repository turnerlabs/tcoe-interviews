import {expect} from 'chai'

class AjaxPage{
    //getters of all the elements
    get AjaxTitle(){
        return $('//h3')
    }
    get Ajax_btn(){
        return $('#ajaxButton')
    }
    get result_text(){
        return $('.bg-success')
    }
    get countOfMsg(){
        return $$('.bg-success')
    }
    get spinner () {
        return $('i#spinner');
    }    

    //business logic for clicking the button after spinner is disappeared
    async clickAjaxRequest_btn(){
    await this.Ajax_btn.click();
    // Wait till the spinner element to disappear
        try {
        await this.spinner.waitForDisplayed({ reverse: true });
        } catch (e) {
            console.error('Spinner did not disappear');
        }
    }
}
export default new AjaxPage();