import {
    loginService
  } from "./../../services/login/loginService.js";
  
  export class loginController {
    static async login(req, res) {
      try {
        const data = await loginService(req, res);
        if(data.errorData){
          res.status(403).json(data)
        }if(data.error){
          res.status(500).json(data)
        }else{
          res.status(200).json(data)
        }
      } catch (error) {
        res.status(500).json("error");
      }
    }
  }