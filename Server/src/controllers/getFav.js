const {Favorite} = require ('../DB_connection');

const getFav = async(req,res) => {

    try {

        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs); 

    }
    catch (error){
        res.status(500).json({message:error.message})
    }
}


module.exports = getFav;

