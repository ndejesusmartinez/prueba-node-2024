import {
  getAllHangar,
  createHangar,
} from "./../../services/hangar/hangarServices.js"


export class hangarController {
  static async get(req, res) {
    try {
      const data = await getAllHangar()

      if(data.error){
        return res.status(500).json(data)
      }else{
        return res.status(200).json(data)
      }

    } catch (error) {
      return res.status(500).json({
        error: "Error en el servidor"
      })
    }
  }

  static async create(req, res) {
    try {
      const data = await createHangar(req)
      
      if(data.statusCode == 400){
        res.status(400).json(data)
      }else if(data.statusCode == 500){
        res.status(500).json(data)
      }else if(data.statusCode == 409){
        res.status(409).json(data)
      }else{        
        res.status(201).json(data)
      }
      
      
    } catch (error) {
      res.status(500).json(error)
    }
  }
}