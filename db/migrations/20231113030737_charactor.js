/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("charactor", function (table) {
    table.integer("id").primary();
    table.string("name", 64).notNullable();
    table.string("source_url", 256);
    table.string("image_url", 256);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("charactor");
};
