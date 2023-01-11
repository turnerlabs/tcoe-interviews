import Page from "./page.js"

class AjaxPage extends Page{
    get ajaxButton(){
        return $("#ajaxButton")
    }

    get spinner(){
        return $("//*[@class='fa fa-spinner fa-spin']")
    }

    get ajaxSuccess(){
        return $$("//p[@class='bg-success']")
    }

    async ajaxClick(nClicks){
        for(let i = 0; i<nClicks; i++){
            await this.ajaxButton.click()
            await this.spinner.waitForDisplayed({ reverse: true, timeout:50000 })
        }
    }

    open(){
        return super.open("ajax")
    }
}

export default new AjaxPage();