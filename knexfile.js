require("dotenv").config({
  path: "./.env.local",
});

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: "postgresql",
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || "sample",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
  },
  migrations: {
    directory: "./db/migrations",
  },
  seeds: {
    directory: "./db/seeds",
  },
};
