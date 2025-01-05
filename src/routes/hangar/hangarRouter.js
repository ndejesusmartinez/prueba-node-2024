import express from 'express'
import { hangarController } from '../../controllers/hangar/hangarController.js'

const hangarRouter = express.Router()

hangarRouter.get('/', hangarController.get)
hangarRouter.get('/:id', hangarController.findOne)
hangarRouter.post('/', hangarController.create)

export default hangarRouter