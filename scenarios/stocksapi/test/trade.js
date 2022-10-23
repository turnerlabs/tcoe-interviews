var chai = require("chai"),
  chaiHttp = require("chai-http"),
  app = require("../api/app");

var expect = require("chai").expect;

chai.use(chaiHttp);

//information on how to use chaijs and chai-http: https://www.chaijs.com/plugins/chai-http/
let validDate = "13-september-2022";
let validEndPoint = "/api/stocks";
let invalidDates = {
  "Trailing zero": "08-september-2022",
  "Incorrect format of date": "05/11/2022",
  "Empty date": "",
  "Boundary case, impossible date": "31-February-2022",
  "Boundary case, future date": "1-January-2023",
  "Random string": "I am random",
};
let invalidEndPoint = "/api/invalidStock";
describe("stocks api", function () {
  describe("trades", function () {
    // Test case to prove the request behavior works as intended
    it("TC-1: Request behavior: Success status with valid request", async function () {
      return chai
        .request(app)
        .get(validEndPoint)
        .query("date=" + validDate)
        .then(function (res) {
          expect(res).to.have.status(200);
        });
    });

    // Test case to prove the request behavior works as intended
    it("TC-2: Request behavior: Failure status with invalid request", async function () {
      return chai
        .request(app)
        .get(invalidEndPoint)
        .query("date=" + validDate)
        .then(function (res) {
          expect(res).to.have.status(404);
          expect(res.body).to.be.empty;
        });
    });

    // Test case to prove the request behavior works as intended
    it("TC-3: Request behavior: Failure status with invalid request type", async function () {
      return chai
        .request(app)
        .post(invalidEndPoint)
        .query("date=" + validDate)
        .then(function (res) {
          expect(res).to.have.status(404);
          expect(res.body).to.be.empty;
        });
    });
    // Test case to prove the response behavior works as intended
    it("TC-4: Response behavior: Expected keys present in response", async function () {
      return chai
        .request(app)
        .get(validEndPoint)
        .query("date=" + validDate)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body)
            .to.be.a("object")
            .to.have.all.keys("date", "close", "high", "low", "open");
        });
    });

    // Test case to prove the response behavior works as intended
    // Bug 1: The response objects: open, high, low and high are not numbers
    it("TC-5: Response behavior: Return type of all keys is as expected", async function () {
      return chai
        .request(app)
        .get(validEndPoint)
        .query("date=" + validDate)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body["date"]).to.be.a("string");
          expect(res.body["open"]).to.be.a("number");
          expect(res.body["high"]).to.be.a("number");
          expect(res.body["low"]).to.be.a("number");
          expect(res.body["close"]).to.be.a("number");
        });
    });

    // Test case to prove the response behavior works as intended
    it("TC-6: Response behavior: Date received is the same as sent in request", async function () {
      return chai
        .request(app)
        .get(validEndPoint)
        .query("date=" + validDate)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body["date"]).to.equal(validDate);
        });
    });

    // Test case to prove the response behavior works as intended
    // Intermittent bug: This test fails intermittently for different values of high and low
    it("TC-7: Functionality test: Value of 'high' should be greater than 'low'", async function () {
      return chai
        .request(app)
        .get(validEndPoint)
        .query("date=" + validDate)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body["high"] >= res.body["low"]).to.be.true;
        });
    });

    // Negative test case and bug
    // Bug 2: The response is not empty
    it("TC-8: Negative test case: The response should be empty if no date is provided", async function () {
      return chai
        .request(app)
        .get(validEndPoint)
        .then(function (res) {
          expect(res).to.have.status(200);
          expect(res.body).to.be.empty;
        });
    });

    // Negative test case and bug
    // Bug 3: Error code should be returned
    for (let invalidDateReason in invalidDates) {
      it(`TC-9: Negative test case: ${invalidDateReason}`, async function () {
        const invalidDate = invalidDates[invalidDateReason];
        return chai
          .request(app)
          .get(validEndPoint)
          .query("date=" + invalidDate)
          .then(function (res) {
            expect(res).to.not.have.status(200);
          });
      });
    }
  });
});
