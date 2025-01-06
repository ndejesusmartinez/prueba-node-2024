
import Joi from "joi";

export const userSchema = Joi.object({
    password: Joi.required().messages({
        "any.required":"El campo password es de carcater obligatorio"
    }),
    email: Joi.required().messages({
        "any.required":"El campo email es de carcater obligatorio"
    }),
    userName: Joi.required().messages({
        "any.required":"El campo userName es de carcater obligatorio"
    }),
})