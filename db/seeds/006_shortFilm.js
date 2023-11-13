const { data } = require("../data/shortFilm.json");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  if (data.length === 0) {
    console.log("The query is empty");
    return;
  }
  // Deletes ALL existing entries
  await knex("shortFilm").del();
  await knex("shortFilm").insert(data);
};
