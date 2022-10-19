const Page = require('../page');

class HomePage extends Page {

    open (section) {
        return super.open(section);
    }
}

module.exports = new HomePage();
