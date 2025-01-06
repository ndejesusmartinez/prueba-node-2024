import User from "../../models/user/userModel.js";
import mongoose from "mongoose";
import { userSchema } from '../../Dto/user/userDto.js'


export const getAllUsers = async () => {
  try {
    return await User.find().select("-password").select("-__v");
  } catch (error) {
    return {
      statusCode: 500,
      message: error,
    };
  }
};

export const createUser = async (req, res) => {
  try {
    const { error } = userSchema.validate(req.body);

    if (error) {
      return {
        error: error.details[0].message,
        status: "failed",
        statusCode: 400,
      };
    }

    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return {
        error: "Todos los campos son requeridos",
      };
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return {
        message: `El usuario con email '${email}' ya está registrado.`,
        statusCode: 409,
        error: "usuario existente",
      };
    }

    const newUsuario = new User({ userName, email, password });
    await newUsuario.save();

    return {
      status: "success",
    };
  } catch (error) {
    return {
      error: error,
      statusCode: 500,
    };
  }
};

export const getUserById = async (_id) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return {
        error: "ID de usuario no válido: " + _id,
        statusCode: 400,
      };
    }

    const userById = await User.findOne({ _id })
      .select("-password")
      .select("-__v");

    if (!userById) {
      return {
        error: "Usuario no encontrado con el id " + _id,
        statusCode: 404,
      };
    }

    return userById;
  } catch (error) {
    return {
      error: error,
    };
  }
};
