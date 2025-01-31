import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('locations', table => {
        table.increments('id').primary
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('wpp').notNullable()
        table.decimal('lat').notNullable()
        table.decimal('long').notNullable()
        table.string('city').notNullable()
        table.string('state', 2).notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('locations')
}