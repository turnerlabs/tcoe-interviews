const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ImagesPage extends Page {
    /**
     * define selectors using getter methods
     */
     get imageInformation () {return $("div[class*=count]");}
     get imageOnSlider () {return $$("img.Image__image");}
     get sliderContainer () {return $("div[class*='slide GalleryHero']");}
     get nextImageBtn () {return $("div[class*=next]");}
     get previusImageBtn () {return $("div[class*='previous']");}
     

     /**
      * This method calculates the total number of image based on the information on the page
      * 1/26 -> number of images 26
      * 
      */
    async getTotalNumberImages(){

        await this.imageInformation.waitForDisplayed()
        const numberImages = await this.imageInformation.getText();
        return numberImages.split("/")[1];
    } 

    /**
      * This method calculates the current number of image
      * 1/26 -> current number 1
      * 
      */
    async getCurrentNumberImage(){

        await this.imageInformation.waitForDisplayed()
        const numberImages = await this.imageInformation.getText();
        return numberImages.split("/")[0];
    } 


    /**
      * This method calculates the total number of image based selector on slider
      * 
      */
    async getTotalImagesOnSlider(){

        await this.sliderContainer.waitForDisplayed()
        return await this.imageOnSlider.length
    }

    /**
      * This method press next Button on the page
      * 
      */
    async pressNextImage(){
        await this.nextImageBtn.click();
    }
    
    /**
      * This method press previous button on the page
      * 
      */
    async pressPreviousImage(){
        await this.previusImageBtn.click();
    }

    /**
     * this method validate next information image based on total number of images
     * @param {*} imageBeforeClick -> current image 1/26
     * @returns next information number of image
     */
    async validateNextImage(imageBeforeClick){
        
        const totalImages = parseInt(await this.getTotalImagesOnSlider());
        const numberImageBC = parseInt(imageBeforeClick)
        
        return  numberImageBC !== totalImages ? numberImageBC + 1 : 1 

    }

    /**
     * this method validate previous information image based on total number of images
     * @param {*} imageBeforeClick -> current image 1/26
     * @returns previous information number of image
     */
    async validatePreviousImage(imageBeforeClick){

        const totalImages = parseInt(await this.getTotalImagesOnSlider());
        const numberImageBC = parseInt(imageBeforeClick)

        return  numberImageBC !== 1 ? numberImageBC - 1 : totalImages

    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new ImagesPage();