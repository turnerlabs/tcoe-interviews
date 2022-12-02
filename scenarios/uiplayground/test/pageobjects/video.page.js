
const Page = require('./page');

class VideoPage extends Page {

    /**
     * define selectors using getter methods
     */
    get video () {
        return $('#bitmovinplayer-video-top-player-container-1');
    }

    get playIcon () {
        return $('.play-icon');
    }

    get pauseIcon () {
        return $('.pause-icon');
    }

    get forward10sec () {
        return $('.forward-10-sec-icon');
    }

    get back10sec () {
        return $('.back-10-sec-icon');
    }
    
    
    get videoCollection () {
        return $('#cn-current_video_collection');
    }

    get videoCollectionTitle () {
        return $('#cn-current_video_collection .cn__title');
    }

    get videoCollectionPrev () {
        return $('#cn-current_video_collection .owl-prev');
    }
    
    get videoCollectionNext () {
        return $('#cn-current_video_collection .owl-next');
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async videoPaused(){
        const video = $('#bitmovinplayer-video-top-player-container-1');
        if (video.paused) {
            console.log("video is stopped");
            return true
        } else if (!video.paused){
            console.log("video is playing");
            return false
        } else{
            console.log("I dont know");
            //DO SOMETHING...
        }
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn');
    }
}

module.exports = new VideoPage();
