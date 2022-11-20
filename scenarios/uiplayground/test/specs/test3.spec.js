const ImagePage = require('../pageobjects/cnn_images/image.page');

describe('Test Spec 3 - Image', async() => {
    
    it('Maximize Browser Window', async ()=> {
        browser.maximizeWindow();
    })

    it('Verify Image Gallery Next', async ()=> {
       await ImagePage.open()
       const imageSrc = await ImagePage.allImagesSrcArray();
       let currentImageSrc = await ImagePage.getHeroImageSrc()
       await ImagePage.clickNext()
       let recentImageSrc = await ImagePage.getHeroImageSrc();
       expect(currentImageSrc).not.toHaveValue(recentImageSrc);
       expect(recentImageSrc).toHaveValue(imageSrc[1])
    })

    it('Verify Image Gallery Previous', async ()=> {
        await ImagePage.open()
        const imageSrc = await ImagePage.allImagesSrcArray();
        let currentImageSrc = await ImagePage.getHeroImageSrc()
        await ImagePage.clickPrevious()
        let recentImageSrc = await ImagePage.getHeroImageSrc();
        expect(currentImageSrc).not.toHaveValue(recentImageSrc);
        expect(recentImageSrc).toHaveValue(imageSrc[imageSrc.length - 1])
     })
});
