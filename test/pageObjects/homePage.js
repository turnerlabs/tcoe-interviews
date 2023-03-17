import page from "./page";
import constants from "../constants/constants.js";
import homePageLocators from "../locators/homePageLocators.js";

class homePage extends page {

    /**
     * This method is used to verify the home page 
     */
    async verifyHomePage() {
        const homePage = await homePageLocators.homePage;
        await expect(homePage).toBeDisplayed();
    }

    /**
     * This method is used to verify the default selection tab in Home icon
     */
    async verifyDefaultSelectionTab() {
        const defaultSelectionTab = await homePageLocators.homeIconTab;
        await expect(defaultSelectionTab).toBeEnabled();
        const defaultSelectionValue = await defaultSelectionTab.getAttribute('content-desc');
        await expect(defaultSelectionValue).toEqual(constants.homeTab);
        await expect(defaultSelectionTab).toHaveAttribute('selected', 'true');
        await expect(defaultSelectionTab).toBeSelected();
    }

    /**
     * This method is used to verify the forms tab to clickable 
     */
    async verifyFormsTabToBeClickable() {
        const formsTab = await homePageLocators.formsIconTab;
        await formsTab.isDisplayed();
        await expect(formsTab).toHaveAttribute('clickable', 'true');
        await formsTab.isEnabled();
    }

    /**
     * This method is used to click the forms tab
     */
    async clickFormsTab() {
        const formsTab = await homePageLocators.formsIconTab;
        const formsTabSelectedValue = await formsTab.getAttribute('content-desc');
        await expect(formsTabSelectedValue).toEqual(constants.formsTab);
        await formsTab.click();
        await expect(formsTab).toHaveAttribute('selected', 'true');
        await expect(formsTab).toBeSelected();
    }
}
export default new homePage();