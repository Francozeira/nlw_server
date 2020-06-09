import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('items').insert([
        {title: 'Lamps', image: 'lamps.svg'},
        {title: 'Batteries', image: 'batteries.svg'},
        {title: 'Papers', image: 'papers.svg'},
        {title: 'Eletronics', image: 'eletronics.svg'},
        {title: 'Organics', image: 'organics.svg'},
        {title: 'Kitchen Oil', image: 'kitchenOil.svg'},
    ])
}
