const express = require("express");
const knex = require("./knex");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const app = express();
  app.use(express.json());
  app.use(express.text());

  app.get("/api/healthcheck", (req, res) => {
    res.status(200).send("I am alive.");
  });

  app.get("/api/healthcheckForDB", async (req, res) => {
    const charactor = await knex
      .select({
        id: "id",
        name: "name",
      })
      .from("charactor")
      .limit(10);
    res.status(200).json(charactor);
  });

  app.get("/api/charactors", async (req, res) => {
    const limit = req.query.limit;
    // キャラクターの取得
    const charactors = await knex
      .select({
        id: "id",
        name: "name",
        source_url: "source_url",
        image_url: "image_url",
      })
      .from("charactor")
      .limit(limit);
    const charactor_id_list = charactors.map((charactor) => charactor.id);

    const films = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("film")
      .whereIn("charactor_id", charactor_id_list);

    const shortFilms = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("shortFilm")
      .whereIn("charactor_id", charactor_id_list);

    const tvShows = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("tvShow")
      .whereIn("charactor_id", charactor_id_list);

    const videoGames = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("videoGame")
      .whereIn("charactor_id", charactor_id_list);

    const parkAttractions = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("parkAttraction")
      .whereIn("charactor_id", charactor_id_list);

    const allies = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("allie")
      .whereIn("charactor_id", charactor_id_list);

    const enemies = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("enemie")
      .whereIn("charactor_id", charactor_id_list);

    const charactorInfos = charactors.map((charactor) => {
      return {
        id: charactor.id,
        films: films
          .filter((item) => item.charactor_id === charactor.id)
          .map((item) => item.name),
        shortFilms: shortFilms
          .filter((item) => item.charactor_id === charactor.id)
          .map((item) => item.name),
        tvShows: tvShows
          .filter((item) => item.charactor_id === charactor.id)
          .map((item) => item.name),
        videoGames: videoGames
          .filter((item) => item.charactor_id === charactor.id)
          .map((item) => item.name),
        parkAttractions: parkAttractions
          .filter((item) => item.charactor_id === charactor.id)
          .map((item) => item.name),
        allies: allies
          .filter((item) => item.charactor_id === charactor.id)
          .map((item) => item.name),
        enemies: enemies
          .filter((item) => item.charactor_id === charactor.id)
          .map((item) => item.name),
        sourceUrl: charactor.source_url,
        name: charactor.name,
        imageUrl: charactor.image_url,
      };
    });
    res.status(200).json(charactorInfos);
  });

  app.get("/api/charactors/:id", async (req, res) => {
    const id = req.params.id;
    const charactor = await knex
      .select({
        id: "id",
        name: "name",
        source_url: "source_url",
        image_url: "image_url",
      })
      .from("charactor")
      .where("id", id);

    const films = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("film")
      .where("charactor_id", id);

    const shortFilms = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("shortFilm")
      .where("charactor_id", id);

    const tvShows = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("tvShow")
      .where("charactor_id", id);

    const videoGames = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("videoGame")
      .where("charactor_id", id);

    const parkAttractions = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("parkAttraction")
      .where("charactor_id", id);

    const allies = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("allie")
      .where("charactor_id", id);

    const enemies = await knex
      .select({
        charactor_id: "charactor_id",
        name: "name",
      })
      .from("enemie")
      .where("charactor_id", id);

    const charactorInfo = {
      id: charactor[0].id,
      films: films.map((item) => item.name),
      shortFilms: shortFilms.map((item) => item.name),
      tvShows: tvShows.map((item) => item.name),
      videoGames: videoGames.map((item) => item.name),
      parkAttractions: parkAttractions.map((item) => item.name),
      allies: allies.map((item) => item.name),
      enemies: enemies.map((item) => item.name),
      sourceUrl: charactor[0].source_url,
      name: charactor[0].name,
      imageUrl: charactor[0].image_url,
    };
    res.status(200).json([charactorInfo]);
  });

  return app;
};

module.exports = { setupServer };
