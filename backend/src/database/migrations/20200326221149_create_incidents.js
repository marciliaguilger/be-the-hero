
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //auto increment

        table.string('title').notNullable();
        table.string('descriptio').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable();
        table.foreign('ong_id').references('id').inTable('ongs'); // chave estrangeira
    });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
