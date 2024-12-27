
import Joi from "joi";

export const loginSchema = Joi.object({
    contraseña: Joi.required().messages({
        "any.required":"La contraseña es de carcater obligatorio"
    }),
    email: Joi.required().messages({
        "any.required":"El email es de carcater obligatorio"
    }),
});
