import express from 'express'
import hangarRouter from './hangar/hangarRouter.js'
import userRouter from './user/userRouter.js'
import loginRouter from './login/loginRouter.js'
import { verifyToken } from '../middlewares/authMiddleware.js'
import swaggerUi from 'swagger-ui-express' 
import swaggerDocument from '../../swagger.json' assert { type: 'json' }


const indexRouter = express.Router()
indexRouter.use('/hangar', verifyToken, hangarRouter)
indexRouter.use('/users', verifyToken, userRouter)
indexRouter.use('/token', loginRouter)
indexRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

export default indexRouter