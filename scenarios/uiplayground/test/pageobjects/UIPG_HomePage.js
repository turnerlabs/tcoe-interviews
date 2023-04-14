import UIPG_Credentials from "./UIPG_Credentials.js"

class HomePage{
    //getters of all the elements
    get homePageTitle(){
        return $('#title')
    }

    //business libraries for navigating to the home page
    async Navigate_Home(){
        await browser.maximizeWindow()
        await browser.url(UIPG_Credentials.credentials.url)
    }

    //business libraries for navigating to the specific page
    async Navigate_specific(path){
        await browser.maximizeWindow()
        await browser.url(`http://uitestingplayground.com/${path}`)
    }
}
export default new HomePage()