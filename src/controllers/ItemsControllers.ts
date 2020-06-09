import { Request, Response } from 'express'
import knex from '../db/connection'


class ItemsControllers {
    async index (req: Request,res:Response) {
        const items = await knex('items').select('*')
        const serializedItems = items.map( item => {
            return{
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3334/uploads/${item.image}`,
            }
        })
        return res.json({ serializedItems })
    }
    async delete (req: Request,res:Response) {
        await knex.schema.dropTable('location_items')
        await knex.schema.dropTable('locations')
        await knex.schema.dropTable('items')
        return res.json({ msg: 'ok' })
    }
}

export default ItemsControllers