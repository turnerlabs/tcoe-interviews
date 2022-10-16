
const Page = require('./page');

class VerifyTextPage extends Page {
 
    get playgroundInnerTextElement() {
        return $("//span[normalize-space(.)='Welcome UserName!']");
    }

    async getPlaygroundInnerTextElement() {  
        const innerText =  await this.playgroundInnerTextElement.getHTML(false);
        return innerText;
     }

    open () {
        return super.open('verifytext');
    }
}

module.exports = new VerifyTextPage();
