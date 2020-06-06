import { Request, Response } from 'express'
import knex from '../db/connection'


class LocationsController {
    async create (req: Request,res:Response) {

        const { name, email, wpp, lat, long, city, state, items } = req.body
        const trx = await knex.transaction()

        const location = {
            image: 'fake-link', name, email, wpp, lat, long, city, state
        }
    
        // CHANGE ALL OCURRENCES OF knex TO trx
        const insertedIds = await trx('locations').insert(location)
    
        const location_id = insertedIds[0]
    
        const locationItems = items.map( (item_id: number) => {
            return{
                item_id,
                location_id
            }
        })
    
        await trx('location_items').insert(locationItems)
        trx.commit()
        return res.json({ id:location_id, ...location })
    }

    async show (req: Request,res:Response) {
        const { id } = req.params
        
        const location = await knex('locations').where('id', id).first()

        if (!location) return res.status(400).json({messgae: 'Location not found'})
        
        const items = await knex('items')
            .join('location_items','items.id','=','location_items.item_id')
            .where('location_items.location_id', id )
            .select('items.title')
        
        return res.json({ location, items })
    }
}

export default LocationsController