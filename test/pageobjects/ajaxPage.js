class AjaxPage{
    get ajaxButton(){
        return $("#ajaxButton")
    }

    get spinner(){
        return $("//i[@id='spinner']")
    }

    get ajaxSuccess(){
        return $$("//p[@class='bg-success']")
    }
}

export default new AjaxPage();