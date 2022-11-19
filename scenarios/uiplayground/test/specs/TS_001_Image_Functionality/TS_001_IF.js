const ImagesPage = require('../../pageobjects/pageObjectsImageF/images.page');

const expectchai = require("chai").expect
const fs = require ("fs");

let dataTC01 = JSON.parse(fs.readFileSync("scenarios/uiplayground/test/dataTest/TS_001_Image_Functionality/TC_IF_001.json"));

describe('TS_001_Image Functionality', () => {

    beforeEach(async()=>{

        await browser.setTimeout({
            'pageLoad': 10000,
            'implicit': 10000
        });
        await ImagesPage.open();
        await browser.maximizeWindow();
        
    });

        it('TC_IF_001 validating IF navigation title', async () => {
             
            expectchai(await browser.getTitle()).to.be.equals(dataTC01[0].data.title)
    
        }); 

        it('TC_IF_002 validating number of images', async () => {
             
            const totalImagesExpected = await ImagesPage.getTotalNumberImages();
            const totalImagesOnSlider = await ImagesPage.getTotalImagesOnSlider();
            expectchai(parseInt(totalImagesExpected)).to.be.eqls(parseInt(totalImagesOnSlider));
            
        }); 

        it('TC_IF_003 validating next image button', async () => {
             
            const ImageNumberBeforeClick = await ImagesPage.getCurrentNumberImage();
            await ImagesPage.pressNextImage();
            const ImageNumberAfterClick = await ImagesPage.getCurrentNumberImage();
            expectchai(await ImagesPage.validateNextImage(ImageNumberBeforeClick)).to.be.eqls(parseInt(ImageNumberAfterClick));

        }); 

        it.only('TC_IF_004 validating previous image button', async () => {
             
            const ImageNumberBeforeClick = await ImagesPage.getCurrentNumberImage();
            await ImagesPage.pressPreviousImage();
            const ImageNumberAfterClick = await ImagesPage.getCurrentNumberImage();
            expectchai(await ImagesPage.validatePreviousImage(ImageNumberBeforeClick)).to.be.eqls(parseInt(ImageNumberAfterClick));

        }); 

    
});