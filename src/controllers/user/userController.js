import {
    getAllUsers,
    createUser
  } from "../../services/users/usersServices.js";
  
  
  export class userController {
    static async get(req, res) {
      try {
        const data = await getAllUsers();
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json("error");
      }
    }

    static async create(req, res) {
      try {
        const data = await createUser(req, res);
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json("error");
      }
    }
  }
  