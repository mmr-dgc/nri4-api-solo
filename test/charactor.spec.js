const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const { setupServer } = require("../src/server");
const knex = require("../src/knex");
const tables = [
  "film",
  "shortFilm",
  "tvShow",
  "videoGame",
  "parkAttraction",
  "allie",
  "enemie",
];

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
        const res = await request.get("/api/charactors").query({ limit: 1 });

        // 想定レスポンス
        const exp = [
          {
            id: 112,
            films: ["Hercules (film)"],
            shortFilms: [],
            tvShows: ["Hercules (TV series)"],
            videoGames: ["Kingdom Hearts III"],
            parkAttractions: [],
            allies: [],
            enemies: [],
            sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
            name: "Achilles",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
          },
        ];

        // 結果の確認
        res.should.have.status(200);
        JSON.parse(res.text).should.deep.equal(exp);
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
            films: ["Hercules (film)"],
            shortFilms: [],
            tvShows: ["Hercules (TV series)"],
            videoGames: ["Kingdom Hearts III"],
            parkAttractions: [],
            allies: [],
            enemies: [],
            sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
            name: "Achilles",
            imageUrl:
              "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
          },
        ];

        // 結果の確認
        res.should.have.status(200);
        JSON.parse(res.text).should.deep.equal(exp);
      });
    });
  });

  describe("create", () => {
    afterEach(async () => {
      // データの削除
      await Promise.all(
        tables.map(
          async (table) =>
            await knex.from(table).where("charactor_id", 99999).del(),
        ),
      );
      await knex.from("charactor").where("id", 99999).del();
    });
    describe("POST /api/charactors", () => {
      it("return status 200", async () => {
        // リクエスト情報
        const body = {
          id: 99999,
          films: ["Hercules (film)"],
          shortFilms: [],
          tvShows: ["Hercules (TV series)"],
          videoGames: ["Kingdom Hearts III"],
          parkAttractions: [],
          allies: [],
          enemies: [],
          sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
          name: "Achilles",
          imageUrl:
            "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
        };

        // APIを呼び出す
        const res = await request.post("/api/charactors").send(body);

        // 結果の確認
        res.should.have.status(200);

        // データの確認
        const charactor = await knex
          .select("*")
          .from("charactor")
          .where("id", body.id);
        charactor.should.deep.equal([
          {
            id: 99999,
            source_url: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
            name: "Achilles",
            image_url:
              "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
          },
        ]);

        // データの削除
        await Promise.all(
          tables.map(
            async (table) =>
              await knex.from(table).where("charactor_id", body.id).del(),
          ),
        );
        await knex.from("charactor").where("id", body.id).del();
      });
    });
  });

  describe("delete", () => {
    afterEach(async () => {
      // データの削除
      await Promise.all(
        tables.map(
          async (table) =>
            await knex.from(table).where("charactor_id", 99999).del(),
        ),
      );
      await knex.from("charactor").where("id", 99999).del();
    });
    beforeEach(async () => {
      // データの削除
      // リクエスト情報
      const body = {
        id: 99999,
        films: ["Hercules (film)"],
        shortFilms: [],
        tvShows: ["Hercules (TV series)"],
        videoGames: ["Kingdom Hearts III"],
        parkAttractions: [],
        allies: [],
        enemies: [],
        sourceUrl: "https://disney.fandom.com/wiki/Achilles_(Hercules)",
        name: "Achilles",
        imageUrl:
          "https://static.wikia.nocookie.net/disney/images/d/d3/Vlcsnap-2015-05-06-23h04m15s601.png",
      };

      // データの作成
      await chai.request(server).post("/api/charactors").send(body);
    });
    describe("DELETE /api/charactors", () => {
      it("return status 200", async () => {
        // APIを呼び出す
        const res = await request.delete("/api/charactors/99999");

        // 結果の確認
        res.should.have.status(200);

        // データの確認
        const charactor = await knex
          .select("*")
          .from("charactor")
          .where("id", 99999);
        charactor.should.deep.equal([]);
      });
    });
  });
});
