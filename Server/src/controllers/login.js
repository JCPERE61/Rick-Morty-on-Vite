const User = require ('../DB_connection');

function login (req,res) {
    const {email,password} = req.query;
    
    if(!email || !password) {
        res.status(400).end("Faltan datos")
        } else {
            if(email === User.email) {
                if(password === User.password){
                    res.status(200).json({access: true})
                } else {
                    res.status(403).end("Contraseña incorrecta")
                }
            } else {
                res.status(404).end("Usuario no encontrado") 
            }
             
            }
    }

module.exports = login