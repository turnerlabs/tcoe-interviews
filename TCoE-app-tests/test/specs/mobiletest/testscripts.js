describe('Test cases', () => {
    it('Default selection of tab', async () => {
        //In this test checking default selection which is Home Tab
        const homeTab = await $('~Home');
        await homeTab.isSelected();
        
    });

    it('Form tab is available and clickable', async () => {
        //finding form tab and clicking it along with arretion to verify that it has been clicked
        const formTab = await $('~Forms');
        await formTab.click();
        const formComp = await $('~Forms-screen');
        await expect(formComp).toBeExisting();
    });

    it('Inactive button is not interactable', async () => {
        //Clicking on Inactive button and using current page text to verify that it is not working
        const inactiveButton = await $('~button-Inactive');
        await inactiveButton.click();

        const formComp = await $('~Forms-screen');
        await expect(formComp).toBeExisting();
    });

    it('Native alerts are functional', async () => {
        //Utilizing active button to check alerts in the app
        const activeButton = await $('~button-Active');
        await activeButton.click();
    
        const alert = await $('android.widget.TextView');
        console.log(alert.isDisplayed());

        const okButton = await $('android.widget.Button');
        await okButton.click();
        await browser.pause(2000);
    });
    
    it('Picker element and 3 options', async () => {
        //checking available options in the dropdown menu
        const pickerbutton = await $('~Dropdown');
        await pickerbutton.click();
        await browser.pause(2000);

        let list = $$('android.widget.CheckedTextView');
        expect(await list.length).toEqual(3);    
    });

    it('6:Visible within screen 3 options', async () => {
        //checking weather all three optons are displayed on the page or not
        let list = $$('android.widget.CheckedTextView');
        console.log(await list[1].isDisplayed());
        console.log(await list[2].isDisplayed());
        console.log(await list[3].isDisplayed());

        await list[0].click();
        
    });

    it('Input Behaviour', async () => {
        //Clicking on the input field and as keyboard pop-ups to enter text.
        const inputField = await $('~text-input');
        await inputField.click();

        console.log(isKeyboardShown = driver.isKeyboardShown());
        
    });

    it('Color change on selection', async () => {
        //unable to perform this test via Appium
        
    });
});