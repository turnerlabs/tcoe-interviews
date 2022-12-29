import Page from './page.js';

class AjaxPage extends Page {

    get requestBtn () {
        return $('#ajaxButton');
    }

    get requestMessage () {
        return $('.bg-success');
    }

    get contentMessages(){
        return $$('#content > p');
    }

    get loadingIcon(){
        return $('#spinner');
    }

    open(){
        super.open('/ajax');
    };
}

export default new AjaxPage();