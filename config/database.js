import { mongoose } from "mongoose";
import { config } from 'dotenv'

config()

const connectDB = async () => {
  const uri = process.env.URL_MONGO  
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB Atlas");
  } catch (error) {
    console.error("Error al conectar a MongoDB Atlas", error);
    process.exit(1); 
  }
};

export default connectDB;
