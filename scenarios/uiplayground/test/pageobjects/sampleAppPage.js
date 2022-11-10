class SampleAppPage {

    get userNameElemXpt() { return $("//input[@name='UserName']")}

    get passWordElemXpt() { return $("//input[@name='Password']")}

    get logInElemCss() { return $("#login")}

    get successMessageElemCss() { return $("#loginstatus")}

    async LogIn(userName,passWord){
        await this.userNameElemXpt.setValue(userName)
        await this.passWordElemXpt.setValue(passWord)
        await this.logInElemCss.click()
    }

    async open () {
        return await browser.url(`sampleapp`)
    }


}
module.exports = new SampleAppPage() 