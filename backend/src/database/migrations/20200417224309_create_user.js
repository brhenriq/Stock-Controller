
exports.up = function(knex) {
    return knex.schema.createTable('usuario', function (table){
        table.string('id').primary();
        table.string('name');
        table.string('senha');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuario');
  };