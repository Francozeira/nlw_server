import express from 'express'
import LocationsControllers from './controllers/LocationsControllers'
import ItemsControllers from './controllers/ItemsControllers'

const router = express.Router()
const locationsControllers = new LocationsControllers()
const itemsControllers = new ItemsControllers()

router.get('/items', itemsControllers.index)
router.get('/locations', locationsControllers.index)
router.get('/locations/:id', locationsControllers.show)
router.post('/locations', locationsControllers.create)

export default router