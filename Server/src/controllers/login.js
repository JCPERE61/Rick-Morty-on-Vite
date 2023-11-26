const {User} = require ('../DB_connection');

function login (req,res) {
    const {email,password} = req.query;
    
    
    try {
        if(!email || !password) {
            return res.status(400).json({error:"Faltan datos"})};

        const user = User.findOne({
                where: {
                    email
                }
            })

            if(!user){
                return res.status(404).json({error:"Usuario no encontrado"});
            }

                return password === user.password ?
                    res.status(200).json({access: true})
                    : res.status(403).json({error:"Contraseña incorrecta"})
                
            }
            catch (error){
                res.status(500).json({error:error.message})
            }        
             
        }

module.exports = login;