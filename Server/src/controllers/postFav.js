const Favorite = require ('../DB_connection');

const postFav = async (req,res) =>{

    const {name, origin, status, image, species, gender} = req.body;


    if(!name || !origin || !status || !image || !species || !gender) {
        res.status(401).end("Faltan datos");
    } else {
        try {
            server.post('./fav',await function ingrFav () { async({
                name, 
                origin, 
                status, 
                image, 
                species, 
                gender
            }) => {
                const newFav = await Favorite.findOrCreate({name, origin, status, image, species, gender});
                return newFav;
            }})
        }
        catch (error){
            res.status(500).json({error:error.message})
        }
    }
}

module.exports = postFav