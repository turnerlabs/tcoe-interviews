import PlaygroundUrl from "./playgroundUrl.js";

class ShadowDomPage extends PlaygroundUrl {

  urlOfShadowDomPage()
  {
    return super.urlOfShadowDomPage();
  }

    get copyBtn()
    {
        return $('guid-generator').shadow$("[id='buttonCopy']");
    }

    get settingBtn()
    {
        return $('guid-generator').shadow$("[id='buttonGenerate']");
    }

    get textField()
    {
        return $('guid-generator').shadow$("[id='editField']");
    }

    async clickOnSettBtn()
    {
        await this.settingBtn.click();
        
    }

    async clickOnCopyBtn(){
      (await this.copyBtn).click();
    }
    async getValueFromTextFiels(){
      await this.textField.getValue();
    }
  
    async dataFromClipboard()
    {
        browser.executeAsync(async (done) => {
            try {
              const text = await navigator.clipboard.readText();
              done(text);
            } catch (err) {
              done(null, err);
            }
          }).then((result) => {
            if (result && result.value) {
              const text = result.value;
              console.log('Text from clipboard:', text);
            } else {
              console.error('Failed to read text from clipboard: ', result && result.error);
            }
          });
    
    }
}

export default new ShadowDomPage();