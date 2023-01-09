import AppScreen from './AppScreen';

class HomeScreen extends AppScreen {
    constructor () {
        super('~Home-screen');
    }

    get homeIcon() {return $('~Home');}


    async selectionHomeIcon(){
        return await this.homeIcon.isSelected();
    }
}

export default new HomeScreen();
