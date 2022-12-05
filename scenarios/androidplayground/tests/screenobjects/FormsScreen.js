const AppScreen= require('./AppScreen');



class FormsScreen extends AppScreen {

    constructor() {
        super('~Forms-screen');
    }

    get input () {return $('~text-input');}
    get inputTextResult () {return $('~input-text-result');}
    get switch () {return $('~switch');}
    get switchText () {return $('~switch-text');}
    get dropDown () {return $('~Dropdown');}
    get activeButton () {return $('~button-Active');}
    get inActiveButton () {return $('~button-Inactive');}
  

}

module.exports = new FormsScreen();
