class TabBar {


    static async openForms () {
        await $('~Forms').click();
    }

    static async waitForTabBarShown (){
        return $('~Home').waitForDisplayed({
            timeout: 20000,
        });
    }
}

module.exports= TabBar;
