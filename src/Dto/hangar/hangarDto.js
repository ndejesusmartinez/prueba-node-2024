
import Joi from "joi";

export const hangarSchema = Joi.object({
    IdHangar: Joi.required().messages({
        "any.required":"El campo IdHangar es de carcater obligatorio"
    }),
    NombreHangar: Joi.required().messages({
        "any.required":"El campo NombreHangar es de carcater obligatorio"
    }),
    Encargado: Joi.required().messages({
        "any.required":"El campo Encargado es de carcater obligatorio"
    }),
    TelefonoEncargado: Joi.required().messages({
        "any.required":"El campo TelefonoEncargado es de carcater obligatorio"
    }),
    TipoHangar: Joi.required().messages({
        "any.required":"El campo TipoHangar es de carcater obligatorio"
    }),
    Ciudad: Joi.required().messages({
        "any.required":"El campo Ciudad es de carcater obligatorio"
    }),
    DireccionAeropuerto: Joi.required().messages({
        "any.required":"El campo DireccionAeropuerto es de carcater obligatorio"
    }),
    AreaHangar: Joi.required().messages({
        "any.required":"El campo AreaHangar es de carcater obligatorio"
    }),
});
