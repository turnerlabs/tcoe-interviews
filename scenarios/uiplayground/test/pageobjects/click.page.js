import PlaygroundUrl from "./playgroundUrl.js";

class ClickBtnPage extends PlaygroundUrl {

    get sampleBtn() {
        return $("//button[@id='badButton']");
    }
    
    async sampleBtnClick() {
        await this.sampleBtn.click();
    }

    urlOfClickPage()
    {
        return super.urlOfClickPage();
    }
}

export default new ClickBtnPage();