const Page = require('../page');

class ImagePage extends Page {

    get currentHero(){
        return $('//*[contains(@class, "GalleryHero__active")]//img')
    }

    get nextImage(){
        return $('[class*=GalleryHeroDecorators__next]')
    }

    get previousImage(){
        return $('[class*=GalleryHeroDecorators__previous]')
    }

    get allImages(){
        return $$('//img[@class="Image__image"]')
    }

    open () {
        return super.open('travel/gallery/top-christmas-markets/index.html');
    }

    async getHeroImageSrc(){
        return this.currentHero.getAttribute('src')
    }

    async clickNext(){
        await this.nextImage.waitForClickable();
        return this.nextImage.click();
    }

    async clickPrevious(){
        await this.previousImage.waitForClickable();
        return this.previousImage.click();
    }

    async allImagesSrcArray(){
        let srcArr = [];
        let images = await this.allImages;
        for(let i=0; i < images.length; i++){
            srcArr.push(await images[i].getAttribute('src'))
        }
        return srcArr
    }


}

module.exports = new ImagePage();
