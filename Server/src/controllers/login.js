const {User} = require ('../DB_connection');

function login (req,res) {
    const {email,password} = req.query;
    
    if(!email || !password) {
        res.status(400).json({error:"Faltan datos"})
        } else {
           try {
            const user = User.findOne({
                where: {
                    email
                }
            })

            if(!user){
                return res.status(404).end("Usuario no encontrado");
            }

            if(password === user.password){
                    return res.status(200).json({access: true})
                } else {
                    return res.status(403).end("Contraseña incorrecta")
                }
            }
            catch (error){
                res.status(500).json({error:error.message})
            }        
             
        }
    }

module.exports = login