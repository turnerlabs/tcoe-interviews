const Utils = require('../helpers/Utils')
const Page = require('./Page');
const DynamicTable = require('./DynamicTable');

class Home extends Page {

    get progressBarLink() {
        return $('a[href="/progressbar"]');
    }
    get dynamicTableLink() {
        return $('a[href="/dynamictable"]');
    }

    async open() {
        return await super.open('');
    }


    async goToDynamicTable() {
        await this.dynamicTableLink.scrollIntoView();
        await Utils.goToPage(this.dynamicTableLink);
        //return new DynamicTable();
    }

}

module.exports = new Home();