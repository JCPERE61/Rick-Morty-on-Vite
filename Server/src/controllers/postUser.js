const User = require ('../DB_connection');

async function postUser (req,res) {

    const { email,password } = req.body;

    if(!email || !password) {
        res.status(400).end("Faltan datos")
    } else {
        try {         
            server.post('./login',await function ingrUser() { async({email,password}) => {
                const newUser = await User.findOrCreate({email,password});
                return newUser;
            }})
        }  
        catch (error) {
            res.status(500).json({error:error.message})
    }
    
    }

}

module.exports = postUser;
