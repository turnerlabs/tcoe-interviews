import Page from "./page.js"

class HidePage extends Page{
    get hideButton(){
        return $("#hideButton")
    }

    get unHideButton(){
        return $("//table/tbody/tr[1]/td[1]")
    }

    open(){
        return super.open("visibility")
    }
}
export default new HidePage();
