import express from 'express'
import hangarRouter from './hangar/hangarRouter.js'
import userRouter from './user/userRouter.js'
import loginRouter from './login/loginRouter.js'
import { verifyToken } from '../middlewares/authMiddleware.js';

const indexRouter = express.Router()

indexRouter.use('/hangar', verifyToken, hangarRouter)
indexRouter.use('/users', userRouter)
indexRouter.use('/login', loginRouter)

export default indexRouter