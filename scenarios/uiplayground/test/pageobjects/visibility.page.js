const Page = require('./page');
const GeneralUtils = require('../helpers/stringUtils/general');


class VisibilityPage extends Page {

    get hideBtn() {
        return $('#hideButton');
    }

    open() {
        return super.open(GeneralUtils.VISIBILITY_PATH);
    }

    async clickHideBtn() {
        await this.hideBtn.click();
    }
}

module.exports = new VisibilityPage();