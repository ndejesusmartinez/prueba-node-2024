import express from 'express'
import { config } from 'dotenv'
import pkg from 'body-parser'
import cors from "cors"
import router from './src/routes/index.js'
import connectDB from './config/database.js'

const { json } = pkg
const app = express()
connectDB()
app.use(cors())
app.use(json())
config()
app.use("/api", router)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

export default app