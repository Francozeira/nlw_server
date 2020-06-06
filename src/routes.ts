import express from 'express'
import knex from './db/connection'
import LocationsControllers from './controllers/LocationsControllers'
// import itemsControllers from './controllers/itemsControllers'

const router = express.Router()
const locationsControllers = new LocationsControllers()

router.get('/items', async (req, res) => {
    const items = await knex('items').select('*')
    const serializedItems = items.map( item => {
        return{
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        }
    })
    return res.json({ serializedItems })
})

router.post('/locations', locationsControllers.create)

export default router