import User from "../../models/user/userModel.js"

export const getAllUsers = async () => {
  try {
    return await User.find().select('-password').select('-__v')
  } catch (error) {
    console.log(error);

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
        message: "Todos los campos son requeridos"
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
