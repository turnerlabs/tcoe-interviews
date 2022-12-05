const Page = require('./Page');
 class DropdownPage extends Page {
    
    get dropdownListView() {
        return $('android.widget.ListView')
    }

    get firstOption() {
        return $('android=new UiSelector().text("webdriver.io is awesome").resourceIdMatches(".*text1")');
    }

    get secondOption() {
        return $('android=new UiSelector().text("Appium is awesome").resourceIdMatches(".*text1")');
    }

    get thirdOption() {
        return $('android=new UiSelector().text("This app is awesome").resourceIdMatches(".*text1")');
    }

    async dropdownExisting() {
        return await this.waitForIsShown(this.dropdownListView);
    }

    async dropdownOptions() {
        if(await expect(this.firstOption).toBeClickable && await expect(this.secondOption).toBeClickable && await expect(this.thirdOption).toBeClickable){
            return true;
        } else {
            return false;
        }

    }

    async dropdownOptionsVisibility() {
        if(await expect(this.firstOption).toBeDisplayed && await expect(this.secondOption).toBeDisplayed && await expect(this.thirdOption).toBeDisplayed){
        return true;
        } else {
            return false;
        }
    }

    async selectingOption() {
        await this.changeViewTo(this.firstOption);
    }
}

module.exports = DropdownPage;
