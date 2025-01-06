import { getAllUsers, createUser, getUserById } from "../../services/users/usersServices.js"

export class userController {
  static async get(req, res) {
    try {
      const data = await getAllUsers()
      if (data.error) {
        return res.status(500).json(data)
      } else {
        return res.status(200).json(data)
      }
    } catch (error) {
      return res.status(500).json("error en el servidor")
    }
  }

  static async create(req, res) {
    try {
      const data = await createUser(req, res)

      if (data.error && data.statusCode == 409) {
        return res.status(409).json(data)
      } else if (data.error && data.statusCode == 500){
        return res.status(500).json(data)
      } else if (data.error && data.statusCode == 400){
        return res.status(400).json(data)
      } else {
        return res.status(201).json(data)
      }
    } catch (error) {
      return res.status(500).json("error en el servidor")
    }
  }

  static async findOne(req, res) {
    try {
      const data = await getUserById(req.params.id)

      if(data.error && data.statusCode == 404){
        return res.status(404).json(data)
      }else if(data.error && data.statusCode == 400){
        return res.status(400).json(data)
      }else{
        return res.status(200).json(data)
      }
    } catch (error) {      
      return res.status(500).json("error en el servidor")
    }
  }
}
