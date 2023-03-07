import { BaseActions } from "./base-actions";
import * as testData from "../data.json"

class HomeScreen extends BaseActions{

    ele = {
        homeScreenLayout:"~Home-screen",
        welcomeMessage:"//*[@text='Demo app for the appium-boilerplate']",
        supportText:"//*[@text='Support']",
        navigationBar:(options) => `//android.widget.Button[@content-desc="${options}"]`
    }

    get homeScreenLayout() {return $(this.ele.homeScreenLayout)}
    get welcomeMessage() {return $(this.ele.welcomeMessage)}
    get supportText() {return $(this.ele.supportText)}

    


    async welcomeMessageIsDisplayed() {
        return await (await this.welcomeMessage).isDisplayed()
        // return await this.elementShouldBeDisplayed(this.ele.welcomeMessage);
    }

    async supportTextIsDisplayed() {
        return await (await this.supportText).isDisplayed()
        // return await this.elementShouldBeDisplayed(this.ele.supportText);
    }

    async getMenuNavBar(option:string){
        return await $(this.ele.navigationBar(option));
    }

    async menuNavBarIsDisplayed(option:string) {
       return await (await this.getMenuNavBar(option)).isDisplayed()
        // return  await this.elementShouldBeDisplayed(this.ele.navigationBar(option))
    }
    async validateBottomNavSection(){
        for(let i=0;i<testData["nav-bar"].length;i++)
        {
            expect(await this.menuNavBarIsDisplayed("Webview")).toBe(true);
        }

   }     
}

export const homeScreen = new HomeScreen();