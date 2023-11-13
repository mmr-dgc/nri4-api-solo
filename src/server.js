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

  return app;
};

module.exports = { setupServer };
