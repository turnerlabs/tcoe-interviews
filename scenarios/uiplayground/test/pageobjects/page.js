const Utils = require('../helpers/stringUtils/general')

module.exports = class Page {
    open (path) {
        return browser.url(`${Utils.BASE_URL}${path}`)
    }
}
