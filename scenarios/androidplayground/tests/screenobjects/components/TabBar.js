

class TabBar {


    static async openForms () {
        await $('~Forms').click();
    }

    static async isFormSelected(){
        return await $('~Forms').getAttribute("selected");
    }

    static async isHomeSelected(){
        return await $('~Home').getAttribute("selected");
    }

    static async isFormclickable(){
        return await  $('~Forms').getAttribute("clickable");
    }

    static async waitForTabBarShown (){
        return $('~Home').waitForDisplayed({
            timeout: 20000,
        });
    }
}

module.exports= TabBar;
