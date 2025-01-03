import User from "../../models/user/userModel.js"
import jwt from "jsonwebtoken"
import { loginSchema } from "../../Dto/login/loginDto.js"

export const loginService = async (req) => {
  try {

    const { error } = loginSchema.validate(req.body)

    if(error){
      return {errorData: error.details[0].message}
    }
    
    const { email, password } = req.body    
    try {
      const user = await User.findOne({ email })

      if (!user) {
        return { errorData: "Credenciales inválidas" }
      }

      const isMatch = await user.matchPassword(password)
      if (!isMatch) {
        return { errorData: "Credenciales inválidas" }
      }

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET || "tu_clave_secreta",
        { expiresIn: "1h" }
      )

      return {
        message: "Autenticación exitosa",
        token,
      }
    } catch (error) {
      return { error: "Error en el servidor" }
    }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
