const Page = require('./page');
const Utils = require('../helpers/stringUtils/colorchange');
const GeneralUtils = require('../helpers/stringUtils/general');

class ColorChangePage extends Page {

    get coloredBtn() {
        return $('#badButton');
    }

    open() {
        return super.open(GeneralUtils.COLOR_CHANGE_PATH);
    }

    async clickColoredBtn() {
        await this.coloredBtn.click();
    }

    async waitForColorChange() {
        await this.coloredBtn.waitUntil(async function () {
            return !((await this.getAttribute('class')) == Utils.DEFAULT_CLASS_BUTTON);
        }, {
            timeout: 5000,
            timeoutMsg: 'expect color to change for 5 seconds'
        });
    }
}

module.exports = new ColorChangePage();