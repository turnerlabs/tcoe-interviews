var chai = require('chai')
    , chaiHttp = require('chai-http')
    , app = require('../api/app');

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/

class StocksApi {

    async get() {
        const path = '/';
        return chai.request(app)
            .get(path);
    }

    async getStocks(queryParameter = '') {
        const path = '/api/stocks';
        return chai.request(app)
            .get(path)
            .query(queryParameter);
    }

}

module.exports = new StocksApi();