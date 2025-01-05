import { loginService } from "./../../services/login/loginService.js"
  
  export class loginController {
    static async login(req, res) {
      try {
        const data = await loginService(req, res)
        if(data.errorData){
          return res.status(403).json(data)
        }if(data.error){
          return res.status(500).json(data)
        }else{
          return res.status(200).json(data)
        }
      } catch (error) {
        return res.status(500).json("error")
      }
    }
  }