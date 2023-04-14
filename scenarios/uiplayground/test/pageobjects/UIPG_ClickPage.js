class ClickPage{
    //getters of all the elements
    get clickPageTitle(){
        return $('//h3')
    }
    get click_btn(){
        return $('#badButton')
    }
}
export default new ClickPage()