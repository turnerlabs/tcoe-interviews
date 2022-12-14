import Page from './page.js';
import { Key } from 'webdriverio'


class CNNVideoPage extends Page {
    
    public get btnPlay () {
        return $("//button[contains(@class, 'pui_center-controls_big-play-toggle')]");
    }

    public get bottonControl () {
        return $("div.pui_control-bar_bottom-control-bar");
    }

    public get videoSuggestions () {
        return $("div.video-playlist__items-container");
    }

    public open (path: string) {
        return super.open(`https://www.cnn.com/${path}`);
    }
}

export default new CNNVideoPage();
