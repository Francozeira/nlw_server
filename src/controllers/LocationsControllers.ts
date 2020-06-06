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
    
        const point_id = insertedIds[0]
    
        const locationItems = items.map( (item_id: number) => {
            return{
                item_id,
                point_id
            }
        })
    
        await trx('location_items').insert(locationItems)
        trx.commit()
        return res.json({ id:point_id, ...location })
    }
}

export default LocationsController