const express = require("express");

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

  return app;
};

module.exports = { setupServer };
