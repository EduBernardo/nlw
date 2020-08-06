import Knex from 'knex';

export async function up(Knex: Knex) {
   return Knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();


        table.integer('user_id')
        .notNullable()
        .references('id') // maneira de se criar um relacionamento atraves do knex
        .inTable('user') // maneira de referenciar a tabela de onde origina o id
        .onUpdate('CASCADE') //O que ocorre sempre que o meu user sofrer atualizacao
        .onDelete('CASCADE'); //O que ocorre quando meu user for deletado - o parametro CASCADE realiza uma operacao em todos os ids relacionados
   });
}


export async function down(Knex: Knex) {
    return Knex.schema.dropTable('classes');
}