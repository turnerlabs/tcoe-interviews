class LoginPage {
    /*define selectors using getter methods*/
    get inputUsername () {
        return $("input[name='UserName']");
    }

    get inputPassword () {
        return $("input[name='Password']");
    }

    get loginButton () {
        return $("#login");
    }

    get alertMessage(){
        return $("#loginstatus");
    }

    get logOuttext(){
         return $("button=Log Out");   
    }
    
    /* method to login using username and password */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

}
module.exports = new LoginPage()
