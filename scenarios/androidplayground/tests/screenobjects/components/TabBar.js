const Forms = require("../Forms.js");

module.exports= class TabBar{
    static async waitForTabBar(){
        return await $('~Home').waitForDisplayed({timeout: 30000});
    }

    static async openFormsView(){
        await $('~Forms').click();
        return new Forms();
    }
};