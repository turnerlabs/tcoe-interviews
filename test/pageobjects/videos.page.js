const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VideoPage extends Page {
    /**
     * define selectors using getter methods
     */
    get videsoContainer() {
        return $('//*[@id="top-player-container-1"]');
    }

    get playButtonOnScreen() {
        return $('//*[@id="player-player-archive.cms.cnn.com/_components/video-resource/instances/h_ffd2dc5f28b9977074f677fed1f51dac-featured-video@published-pui-wrapper"]/div/div/button');
    }

    get playButton() {
        return $('//*[@id="player-player-archive.cms.cnn.com/_components/video-resource/instances/h_ffd2dc5f28b9977074f677fed1f51dac-featured-video@published-pui-wrapper"]/div/div[3]/div[1]/div/button[1]');
    }

    get volumenButton() {
        return $('//*[@id="player-player-archive.cms.cnn.com/_components/video-resource/instances/h_ffd2dc5f28b9977074f677fed1f51dac-featured-video@published-pui-wrapper"]/div/div[3]/div[1]/div/div[1]/button');
    }

    get maxScreeen() {
        return $('//*[@id="player-player-archive.cms.cnn.com/_components/video-resource/instances/h_ffd2dc5f28b9977074f677fed1f51dac-featured-video@published-pui-wrapper"]/div/div[3]/div[1]/div/button[2]');
    }

    get videoListLabel() {
        return $('/html/body/div[1]/section[3]/section/div/section/div/div/div[2]/div[1]/div[1]/span[2]');
    }


    get videoListItems() {
        return $('/html/body/div[1]/section[3]/section/div/section/div/div/div[2]/div[1]/div[2]/div');
    }

    get barProgress() {
        return $('//*[@id="player-player-archive.cms.cnn.com/_components/video-resource/instances/h_ffd2dc5f28b9977074f677fed1f51dac-featured-video@published-pui-wrapper"]/div/div[3]/div[2]/div[2]');
    }

    get listVideos() {
        return $('/html/body/div[1]/section[3]/section/div/section/div/div/div[2]/div[1]/div[1]/span[2]');
    }

    get clickVideoSub() {
        return $('/html/body/div[1]/section[3]/section/div/section/div/div/div[2]/div[1]/div[2]/div/div[3]/div[3]/div[1]');
    }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async pressPlay() {
        await this.playButtonOnScreen.waitForDisplayed();
        await this.playButtonOnScreen.click();
    }

    async pressVolumen() {
        await this.volumenButton.waitForDisplayed();
        await this.volumenButton.click();
    }

    async pressMaxScreen() {
        await this.maxScreeen.waitForDisplayed();
        await this.maxScreeen.click();
    }
    
    async barProg() {
        //await this.playButtonOnScreen.click();
        await this.barProgress.waitUnitl(
            
            async function () {
                return (await this.getText()=='100%')
            },
            { timeout:400000, timeMsg:'Error Timeout of the control'}
        )

        console.log("Termino Wait")
    }

    async pressVideosSub() {
        await this.clickVideoSub.waitForDisplayed();
        await this.clickVideoSub.click();
        await this.bar;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openS() {
        return super.openS('videos/entertainment/2022/11/11/henry-winkler-career-struggle-grease-wtcw-cprog-vpx.cnn');
    }
}

module.exports = new VideoPage();
