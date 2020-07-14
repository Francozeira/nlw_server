import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import { celebrate, Joi } from 'celebrate'

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

router.post('/locations', 
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            wpp: Joi.number().required(),
            lat: Joi.number().required(),
            long: Joi.number().required(),
            city: Joi.string().required(),
            state: Joi.string().required().max(2),
            items: Joi.string().required()
        })
    }, {
        abortEarly: false
    }),
    locationsControllers.create)

export default router