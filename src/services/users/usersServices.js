import User from "../../models/user/userModel.js"
import mongoose from 'mongoose'

export const getAllUsers = async () => {
  try {
    return await User.find().select('-password').select('-__v')
  } catch (error) {
    return {
      statusCode: 500,
      message: error,
    };
  }
}

export const createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body
    if (!userName || !email || !password) {
      return {
        error: "Todos los campos son requeridos"
      };
    }
    const nuevoUsuario = new User({ userName, email, password })
    await nuevoUsuario.save()

    return {
      message: "Usuario creado con éxito",
      usuario: nuevoUsuario,
    };
  } catch (error) {
    return {
      error: error
    }
  }
}

export const getUserById = async (_id) => {

  try {

    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return {
        error: 'ID de usuario no válido: ' + _id,
        statusCode: 400
      };
    }

    const userById = await User.findOne({ _id }).select('-password').select('-__v')

    if(!userById){
      return {
        error: 'Usuario no encontrado con el id ' + _id,
        statusCode: 404
      }
    }

    return userById

  } catch (error) {
    return {
      error: error
    }
  }
  
}