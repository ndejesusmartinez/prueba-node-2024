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
                status:"failed"
            }
        }

        const { IdHangar, NombreHangar, Encargado, TelefonoEncargado, TipoHangar, Ciudad, DireccionAeropuerto, AreaHangar } = req.body        
        const response = new hangar({ IdHangar, NombreHangar, Encargado, TelefonoEncargado, TipoHangar, Ciudad, DireccionAeropuerto, AreaHangar })
        
        await response.save()

        return {
            status:"success"
        }
        
    } catch (error) {           
        return {
            errorResponse: error,
            status:"failed"
        }
    }

    
}