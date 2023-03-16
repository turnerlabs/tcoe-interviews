class homePageLocators {

    // home screen
    get homePage() {
        return $('//android.widget.ScrollView[@content-desc="Home-screen"]');
    }
    // home icon tab
    get homeIconTab() {
        return $('//android.widget.Button[@content-desc="Home"]');
    }
    // forms icon tab
    get formsIconTab() {
        return $('//android.widget.Button[@content-desc="Forms"]');
    }
}

module.exports = new homePageLocators();