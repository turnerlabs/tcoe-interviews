
const ProgressbarPage = require('../pageobjects/progressbar.page');
const TextinputPage = require('../pageobjects/textinput.page');
const UitestingplaygroundPage = require('../pageobjects/uitestingplayground.page');
var chai = require('chai');  
var expectChai = chai.expect; 


describe('UI Challenge 1 -> positive cases', () => {


    describe('Performance test page', () => {

        beforeEach(async ()=>{
            await UitestingplaygroundPage.open();
        })
        it('should be present the title Quality is not an act, it is a habit.', async () => {
            await UitestingplaygroundPage.waitPageLoaded()
            await expect(UitestingplaygroundPage.citationBlockquote).toHaveText('Quality is not an act, it is a habit.');
        })

        it('should be present the link http://uitestingplayground.com/resources', async () => {
            await UitestingplaygroundPage.clickOnButton();
            await expect(UitestingplaygroundPage.recourcesLink).toHaveHref('/resources');

        })

        it('should have 18 overviews', async () => {
            await UitestingplaygroundPage.waitPageLoaded()
            await expect(UitestingplaygroundPage.overviews).toBeElementsArrayOfSize(18)

        })
    })

    it('should change the name button', async () => {
        await TextinputPage.open();
        await TextinputPage.typeText();
        await TextinputPage.clickOnButton();
        await expect(TextinputPage.valueButton).toHaveText('testingButton');
       
    })

    
    it('tolerance limit to progress bar', async () => {
        await ProgressbarPage.open();
        await ProgressbarPage.startPlaygroundBar();
        await ProgressbarPage.stopPlaygroundBar();
        expectChai(await ProgressbarPage.getNumberProcessBar()).within(75, 80)
    })
})


