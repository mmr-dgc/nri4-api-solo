const { data } = require("../data/enemie.json");

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
  await knex("enemie").del();
  await knex("enemie").insert(data);
};
