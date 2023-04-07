
import HomePage from "../pageobjects/home.page"
import FormsPage from "../pageobjects/forms.page";
const actualImagePath="./screenshots/actualImage/actual.png"
const expectedImagePath="./screenshots/expectedImage/expected.png";
const diffrenceImage="./screenshots/differenceImage/diff.png";
describe('My Login application', () => {
    it('validate the defualt selction of the tabs ', async () => {
        await expect(await HomePage.homePageOption()).toBeDisplayed();
        await expect(await HomePage.homePageOption()).toBeSelected();
    })

    it('validate the forms tab selection ', async () => {
        await expect(await FormsPage.formOption()).toBeDisplayed();
        let isClickable = await FormsPage.formOption().getAttribute("clickable");
        await expect(isClickable).toBe("true");
        await FormsPage.formOption().click();
        await expect(await FormsPage.formScreen()).toBeDisplayed();
    })
    it('validate the image Comparasion of Form tab', async () => {
        await HomePage.homePageOption().click();
        await FormsPage.formOption().saveScreenshot(actualImagePath)
        await FormsPage.formOption().click();
        await FormsPage.formOption().saveScreenshot(expectedImagePath)
        const pixelDifference = await FormsPage.imageComparasion(actualImagePath, expectedImagePath,diffrenceImage);
        await expect(pixelDifference).toBeGreaterThan(0, `Images are different: ${pixelDifference} different pixels`)
    })

    it('validate the forms input behaviour', async () => {
        await expect(await FormsPage.formInput()).toBeDisplayed();
        await FormsPage.formInput().setValue("Test Input Fields");
        let getEnterdValue = await FormsPage.formInput().getText();
        let getResultsValue = await FormsPage.formInputResults().getText();
        await expect(getEnterdValue).toBe(getResultsValue);
    })
    it('validate the Picker Element and Count of option', async () => {
        await expect(await FormsPage.formDropDown()).toBeDisplayed();
        await FormsPage.formDropDown().click();
        await FormsPage.formDailog().waitForDisplayed({timeout:3000});
        await expect(await FormsPage.formDropDownList().length).toBe(3);
        for (let l = 0; l < await FormsPage.formDropDownList().length; l++) {
            let getOptionvalue = await FormsPage.formDropDownList()[l].getText();
            await FormsPage.formDropDownList()[l].click();
            let selectedValue = await FormsPage.formDropDownSelectedValue().getText();
            await expect(selectedValue).toBe(getOptionvalue);
            await FormsPage.formDropDown().click();
        }
        await FormsPage.selectAnItem().click();
    })
    it('validate the Inactive button behaviour', async () => {
        await expect(await FormsPage.inactiveButton()).toBeDisplayed();
        await FormsPage.inactiveButton().click();
        await expect(await FormsPage.alertPopup()).not.toBeDisplayed();
    })

    it('validate the android Native alert button behaviour', async () => {
        await expect(await FormsPage.activeButton()).toBeDisplayed();
        await FormsPage.activeButton().click();
        await expect(await FormsPage.alertPopup()).toBeDisplayed();
        await FormsPage.okButton().click();
        await expect(await FormsPage.formScreen()).toBeDisplayed();
        await FormsPage.activeButton().click();
        await FormsPage.cancelButton().click();
        await expect(await FormsPage.formScreen()).toBeDisplayed();
        await FormsPage.activeButton().click();
        await FormsPage.askMeLater().click();
        await expect(await FormsPage.formScreen()).toBeDisplayed();
    })
    it('validate the keyboard is visible', async () => {
        await FormsPage.formInput().click();
        await expect(await driver.isKeyboardShown()).toBe(true);
        await driver.hideKeyboard();
    })

    it('validate the picker element in within the screen', async () => {
        await FormsPage.formDropDown().click();
        let getBounds = await FormsPage.formDailog().getAttribute("bounds");
        let startx = await FormsPage.formDailog().getLocation();
        let starty = await FormsPage.formDailog().getLocation();
        let size = await FormsPage.formDailog().getSize()
        let starPoint = {
            x: startx.x,
            y: starty.y
        };
        let endPoint = {
            x: startx.x + size.width,
            y: starty.y + size.height
        }
        console.log(`Bound Value is : ${getBounds}`);
        console.log(`Cordinate Value is : [${starPoint.x},${starPoint.y}][${endPoint.x},${endPoint.y}]`);
        await expect(`[${starPoint.x},${starPoint.y}][${endPoint.x},${endPoint.y}]`).toBe(getBounds);
    })

})


