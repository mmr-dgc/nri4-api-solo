const { data } = require("../data/film.json");

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
  await knex("film").del();
  await knex("film").insert(data);
};
