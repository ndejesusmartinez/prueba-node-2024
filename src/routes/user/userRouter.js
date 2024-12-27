import express from 'express'
import { userController } from '../../controllers/user/userController.js'

const userRouter = express.Router()

userRouter.get('/', userController.get)
userRouter.post('/', userController.create)

export default userRouter