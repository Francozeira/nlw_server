import { Request, Response } from 'express'
import knex from '../db/connection'


class LocationsController {
    
    async index (req: Request,res:Response) {
        
        const { city, state, items } =  req.query   
        
        const parsedItems = String(items).split(',').map(i => Number(i.trim()))

        const locations = await knex('locations')
            .join('location_items','locations.id','=','location_items.location_id')
            .whereIn('location_items.item_id', parsedItems )
            .where('city', String(city) )
            .where('state', String(state) )
            .distinct()
            .select('locations.*')

        const serializedLocations = locations.map(location => {
            return {
                ...location,
                image_url: `http://192.168.1.3:3334/uploads/${location.image}`
            }
        })
        return res.json(serializedLocations)
    }
    
    async show (req: Request,res:Response) {
        const { id } = req.params
        
        const location = await knex('locations').where('id', id).first()

        if (!location) return res.status(400).json({message: 'Location not found'})
        
        const serializedLocation = {
            ...location,
            image_url: `http://192.168.1.3:3334/uploads/${location.image}`
        }

        const items = await knex('items')
            .join('location_items','items.id','=','location_items.item_id')
            .where('location_items.location_id', id )
            .select('items.title')
        
        return res.json({ point: serializedLocation, items })
    }

    async create (req: Request,res:Response) {

        const { name, email, wpp, lat, long, city, state, items } = req.body
        const trx = await knex.transaction()

        const location = {
            image: req.file.filename, 
                name, email, wpp, lat, long, city, state
        }
    
        // CHANGE ALL OCURRENCES OF knex TO trx
        const insertedIds = await trx('locations').insert(location)
    
        const location_id = insertedIds[0]
    
        const locationItems = items.split(',').map( (item: string) => Number(item.trim()))
        .map( (item_id: number) => {
            return{
                item_id,
                location_id
            }
        })
    
        await trx('location_items').insert(locationItems)
        trx.commit()
        return res.json({ id:location_id, ...location })
    }
}

export default LocationsController