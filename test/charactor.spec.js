const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../src/server");

/*
 * This sprint you will have to create all tests yourself, TDD style.
 * For this you will want to get familiar with chai-http https://www.chaijs.com/plugins/chai-http/
 * The same kind of structure that you encountered in lecture.express will be provided here.
 */
const server = setupServer();
describe("Disney API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("healthcheck", () => {
    describe("GET /api/healthcheck", () => {
      it("return status 200 and I am alive.", async () => {
        // APIを呼び出す
        const res = await request.get("/api/healthcheck");

        // 結果の確認
        res.should.have.status(200);
        res.text.should.deep.equal("I am alive.");
      });
    });
  });
});
