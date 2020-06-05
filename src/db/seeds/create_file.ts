import Knex from 'knex'

export async function seed(knex: Knex) {
    await knex('items').insert([
        {title: 'lamps', image: 'lamps.svg'},
        {title: 'batteries', image: 'batteries.svg'},
        {title: 'papers', image: 'papers.svg'},
        {title: 'eletronics', image: 'eletronics.svg'},
        {title: 'organics', image: 'organics.svg'},
        {title: 'kitchenOil', image: 'kitchenOil.svg'},
    ])
}
