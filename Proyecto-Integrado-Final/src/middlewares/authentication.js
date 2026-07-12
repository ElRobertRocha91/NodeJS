import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Middleware para verificar el token JWT
export const authenticación = (req, res, next) => {
    // const token = req.headers['authorization'].split(" ")[1];
    
    const authHeadres = req.headers['authorization'];
    
    // Validación - Si Headers esta vacío, invalido la acción
    if (!authHeadres) {
        return res.status(401).json({ error: 'Acceso denegado. Headers "Authorization" ausente, debe iniciar sesión.'});
    }
    
    const token = authHeadres.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Acceso denegado. Token ausente, debe iniciar sesion."});
    }

    jwt.verify(token, secret_key, (err) => {
        if (err) {
            return res.status(403).json({ error: "Token inválido o expirado. Debe iniciar sesión nuevamente.", err });
        }
        next();
    });
}