const Utils = require('../helpers/Utils.js');
const FormsScreen = require('./FormsScreen.js')
const BaseScreen = require('./BaseScreen.js')

class HomeScreen extends BaseScreen{

    get homeScreen() {
        return $('~Home-screen');
    }

    constructor() {
        super('~Home-screen');
    }

}

module.exports = HomeScreen;