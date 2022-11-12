const { request } = require('chai');
var chai = require('chai')
  , chaiHttp = require('chai-http');

var expect = require('chai').expect;

chai.use(chaiHttp);

describe('Provide at least two test cases that prove the request behavior works as intended:', function () {

    it('Get token', function () {
        chai.request('https://api.petfinder.com')
        .post('/v2/oauth2/token')
        .send({grant_type: 'client_credentials', client_id: process.env.API_KEY, client_secret: process.env.API_SECRET})
        .then(function (res) {
            expect(res).to.have.status(200);
            console.log(res.body.access_token);
        });
    });
});
