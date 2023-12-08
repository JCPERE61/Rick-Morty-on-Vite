const {Favorite} = require ('../DB_connection');

const postFav = async (req,res) =>{

    const character = req.body;
    const {id, name, origin, status, image, species, gender} = character;

    try {

            if(!name || !origin || !status || !image || !species || !gender) {
                return res.status(401).json({error:"Faltan datos"})};

/*             const [charFav, created] = await Favorite.findOrCreate({
                where: {id, name, origin, status, image, species, gender},
            }); */

            await Favorite.findOrCreate({
                where: {id, name, origin, status, image, species, gender},
            });

            /* if(!created) {
                return res.status(409).json({ error:"Personaje ya está en favoritos"});
            }    */         

            const allFavs = await Favorite.findAll();

            
            return res.status(200).json(allFavs);            
        }
        catch (error){
            res.status(500).json({message:error.message})
        }
    }


module.exports = postFav;