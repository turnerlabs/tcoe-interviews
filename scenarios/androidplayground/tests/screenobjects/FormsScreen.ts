import AppScreen from './AppScreen';

class FormsScreen extends AppScreen {
    constructor () {
        super('~Forms-screen');
    }

    get input () {return $('~text-input');}
    get inputTextResult () {return $('~input-text-result');}
    private get switch () {return $('~switch');}
    private get switchText () {return $('~switch-text');}
    private get dropDown () {return $('~Dropdown');}
    get activeButton () {return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup');}
    get inActiveButton () {return $('//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup');}
    get formIcon() {return $('~Forms');}
    get dropdownOptionOne() {return $('android=new UiSelector().className("android.widget.CheckedTextView").index(1)');}
    get dropdownOptionTwo() {return $('android=new UiSelector().className("android.widget.CheckedTextView").index(2)');}
    get dropdownOptionThree() {return $('android=new UiSelector().className("android.widget.CheckedTextView").index(3)');}
    get nativeMessageButton() {return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[3]');}


    async tapOnInputTextResult(){
        await this.inputTextResult.click();
    }

    async tapOnInputField(){
        await this.input.click();
    }

    async tapOnSwitch(){
        await this.switch.click();
    }

    async tapOnDropDown(){
        await this.dropDown.click();
    }

    async tapOnActiveButton(){
        await this.activeButton.click();
    }

    async nativeMessage(){
        await this.nativeMessageButton.click();
    }

    async tapOnInActiveButton(){
        await this.inActiveButton.click();
    }

    async setTextInput(){
        await this.input.addValue("Test");
    }

    /**
     * Return if the switch is active or not active for iOS / Android
     * For Android the switch is `ON|OFF`, for iOS '1|0'
     */
    async isSwitchActive ():Promise<boolean> {
        const active = driver.isAndroid ? 'ON' : '1';

        return (await this.switch.getText()).includes(active);
    }

    async tapOnFormIcon(){
        return await this.formIcon.click();
    }

    async selectedFormAction(){
        return await this.formIcon.isSelected();
    }
    
    async enableFormAction(){
        return await this.formIcon.isEnabled();
    }

    async getAttributeFormAction(){
        const clickable = await this.formIcon.getAttribute("clickable");
        return clickable
    }

    async getAttributeInputTextResult(){
        const text = await this.inputTextResult.getAttribute("text");
        return text
    }

    async getAttributeDropdownOptionOne(){
        const index = await this.dropdownOptionOne.getAttribute("text");
        return index
    }

    async getAttributeDropdownOptionTwo(){
        const index = await this.dropdownOptionTwo.getAttribute("text");
        return index
    }

    async getAttributeDropdownOptionThree(){
        const index = await this.dropdownOptionThree.getAttribute("text")
        return index
    }

    async dropdwonOptionFourDisplayed(){

        let data = await $('android=new UiSelector().className("android.widget.CheckedTextView").index(4)').isDisplayed();

            if(data != true){
                await expect(data).toEqual(false);
            }
    }

    async dropDownOptionOneDisplayed(){

        let data = await this.dropdownOptionOne.isDisplayed();

            if(data != true){
                await expect(data).toEqual(false);
            }

    }

    async dropDownOptionTwoDisplayed(){

        let data = await this.dropdownOptionTwo.isDisplayed();

            if(data != true){
                await expect(data).toEqual(false);
            }
    }

    async dropDownOptionThreeDisplayed(){

        let data = await this.dropdownOptionThree.isDisplayed();

            if(data != true){
                await expect(data).toEqual(false);
            }
    }

    async inactiveButtonNotIteractable(){

        const attribute = await this.inActiveButton.getAttribute("clickable");
       
        return attribute

    }

    async tapOnDropdownOne(){

        await this.dropdownOptionOne.click();
    }


    /**
     * Get the text of the drop down component
     */
    async getDropDownText ():Promise<string> {
        // We need to do some magic here to get the value of the dropdown for Android and for iOS
        // return getTextOfElement(this.dropDown);
        // For Android the selected value can be found with this XPATH
        // `//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText`
        // Which is `//*[@content-desc="Dropdown"]/*/android.widget.EditText` so it's let element dependent
        let selector;

        if (driver.isAndroid) {
            selector ='//*[@content-desc="Dropdown"]/*/android.widget.EditText';
        } else {
            // **/*[`name == "Dropdown"`]/**/*[`name == "text_input"`]
            // For iOS we can use XPATH to the the text, this will be `//XCUIElementTypeTextField[@name="text_input"]`
            // The downside is that it will take at least 500ms to find the element. We can also use a less brittle
            // selector which is also faster. This is the `ios class chain` selector. To make it more robust
            // we need to use the following selector.
            selector = '-ios class chain:**/*[`name == "Dropdown"`]/**/*[`name == "text_input"`]';
        }

        return $(selector).getText();
    }
}

export default new FormsScreen();
