import User from "../../models/user/userModel.js"

export const getAllUsers = async () => {
  try {
    return await User.find()
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
    const { nombre, email, contraseña } = req.body
    if (!nombre || !email || !contraseña) {
      return {
        message: "Todos los campos son requeridos"
      };
    }
    const nuevoUsuario = new User({ nombre, email, contraseña })
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
