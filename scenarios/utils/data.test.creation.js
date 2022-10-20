const moment = require('moment');

class DataTestCreation {
    /**
     * @description Generate randomDate to execute API.
     * @returns randomDate
     */
    async generateRandomDate() {
        const randomDate = moment(new Date(+(new Date()) - Math.floor(Math.random() * 10000000000)))
            .format('D-MMMM-YYYY');
        return randomDate;
    }
}

module.exports = new DataTestCreation();