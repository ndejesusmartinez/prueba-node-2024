import jwt from 'jsonwebtoken'
import { config } from 'dotenv';
config()

const SECRET_KEY = process.env.JWT_SECRET

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']
    
    if (!token) {
        return res.status(403).json({ error: 'Token no suministrado en los headers, favor validar!' })
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {            
            return res.status(401).json({ error: 'Token incorrecto, favor validar!' })
        }
        req.user = decoded
        next()
    });
};
