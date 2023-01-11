import Page from "./page.js"

class ButtonColor extends Page{
    get badButton(){
        return $("//button[@id='badButton']")
    }

    open(){
        return super.open("click")
    }
}
export default new ButtonColor();