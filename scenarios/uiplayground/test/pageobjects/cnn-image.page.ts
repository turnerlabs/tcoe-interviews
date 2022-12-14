import Page from './page.js';
import { Key } from 'webdriverio'


class CNNImgPage extends Page {

    public get imgActive () {
        return $("div.GalleryHero__active>div>img");
    }
    
    public get arrowNext () {
        return $("div.GalleryHeroDecorators__next");
    }

    public get arrowPrevious () {
        return $("div.GalleryHeroDecorators__previous");
    }

    public open (path: string) {
        return super.open(`https://www.cnn.com/${path}`);
    }
}

export default new CNNImgPage();
