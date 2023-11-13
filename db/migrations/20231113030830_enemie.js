/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("enemie", function (table) {
    table.increments("id").primary();
    table.integer("charactor_id").notNullable();
    table.string("name", 64).notNullable();
    table.foreign("charactor_id").references("charactor.id");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("enemie");
};
