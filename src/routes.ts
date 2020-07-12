import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'

import LocationsControllers from './controllers/LocationsControllers'
import ItemsControllers from './controllers/ItemsControllers'

const router = express.Router()
const locationsControllers = new LocationsControllers()
const itemsControllers = new ItemsControllers()
const upload = multer(multerConfig)

router.get('/items', itemsControllers.index)
router.get('/delete', itemsControllers.delete)
router.get('/locations', locationsControllers.index)
router.get('/locations/:id', locationsControllers.show)

router.post('/locations', upload.single('image') ,locationsControllers.create)

export default router