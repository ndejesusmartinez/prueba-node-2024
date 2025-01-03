import express from 'express';
import { config } from 'dotenv';
import pkg from 'body-parser'
import cors from "cors";
import router from './src/routes/index.js';
const { json } = pkg;
import connectDB from './config/database.js'
import swaggerUi from 'swagger-ui-express'; 
import { specs } from './swagger.js'

const app = express();
connectDB()
app.use(cors());
app.use(json());
config();
app.use("/api", router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

export default app