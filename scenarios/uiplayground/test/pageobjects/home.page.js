import Page from './page.js';

class HomePage extends Page {

    open(){
        super.open('/');
    };

    
}

export default new HomePage();