const express = require("express");
const knex = require("./knex");

const setupServer = () => {
  /**
   * Create, set up and return your express server, split things into separate files if it becomes too long!
   */
  const app = express();
  app.use(express.json());
  app.use(express.text());

  app.get("/healthcheck", (req, res) => {
    res.send("I am alive.");
  });

  app.get("/healthcheckForDB", async (req, res) => {
    const charactor = await knex
      .select({
        id: "id",
        name: "name",
      })
      .from("charactor")
      .limit(10);
    res.json(charactor);
  });

  return app;
};

module.exports = { setupServer };
