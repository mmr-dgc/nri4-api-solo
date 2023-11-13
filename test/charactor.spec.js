const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../src/server");
const { data } = require("../db/data/charactor.json");

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
        res.text.should.equal("I am alive.");
      });
    });
  });

  describe("read", () => {
    describe("GET /api/charactors", () => {
      it("return status 200 and allcharactors", async () => {
        // APIを呼び出す
        const res = await request.get("/api/charactors").query({ limit: 5 });

        // 結果の確認
        res.should.have.status(200);
        JSON.parse(res.text).should.deep.equal(data.slice(0, 5));
      });
    });

    describe("GET /api/charactors/:id", () => {
      it("return status 200 and charactor with id 112", async () => {
        // APIを呼び出す
        const res = await request.get("/api/charactors/112");

        // 想定レスポンス
        const exp = [
          {
            id: 112,
            name: "Achilles",
            source_url: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
            image_url:
              "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
          },
        ];

        // 結果の確認
        res.should.have.status(200);
        JSON.parse(res.text).should.deep.equal(exp);
      });
    });
  });
});
