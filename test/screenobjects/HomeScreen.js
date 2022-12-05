const AppScreen = require('./AppScreen.js');

class HomeScreen extends AppScreen {
    
    constructor() {
        super('~Home-screen');
    }
}

module.exports = new HomeScreen();