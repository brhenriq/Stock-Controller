
exports.up = function(knex) {
  return knex.schema.createTable('produto', function (table){
      table.increments();
      table.string('name');
      table.integer('qtd');
      table.integer('qtd_limite');
      table.string('tipo');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produto');
};
