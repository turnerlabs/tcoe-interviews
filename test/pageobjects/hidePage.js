class HidePage{
    get hideButton(){
        return $("#hideButton")
    }

    get unHideButton(){
        return $("//table/tbody/tr[1]/td[1]")
    }
}
export default new HidePage();
