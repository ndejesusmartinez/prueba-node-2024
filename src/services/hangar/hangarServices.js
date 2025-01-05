import hangar from '../../models/hangar/hangarModel.js'
import { hangarSchema } from '../../Dto/hangar/hangarDto.js'


export const getAllHangar = async() =>{
    try {
        return await hangar.find()
    } catch (error) {
        return {
            error: "Error en el servidor"
        }
    }
}

export const createHangar = async(req) =>{
    try {

        const { error } = hangarSchema.validate(req.body)

        if(error){
            return {
                error: error.details[0].message, 
                status:"failed",
                statusCode: 400
            }
        }

        const { IdHangar, NombreHangar, Encargado, TelefonoEncargado, TipoHangar, Ciudad, DireccionAeropuerto, AreaHangar } = req.body        

        const existingHangar = await hangar.findOne({ IdHangar });

        if (existingHangar) {
            return {
                message: `El campo 'IdHangar' con valor '${IdHangar}' ya está registrado.`,
                status: "failed",
                statusCode: 409, 
            };
        }
        const response = new hangar({ IdHangar, NombreHangar, Encargado, TelefonoEncargado, TipoHangar, Ciudad, DireccionAeropuerto, AreaHangar })
        
        await response.save()

        return {
            status:"success"
        }
        
    } catch (error) {           
        return {
            error: error,
            status:"failed",
            statusCode: 500
        }
    }

    
}