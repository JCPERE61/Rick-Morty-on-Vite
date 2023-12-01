const axios = require('axios');
//const URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;
const API_URL = 'rym2.up.railway.app/api/character/';

const getCharById = async (req,res) => {

    const id = Number(req.params.id);
    
    try {
        
    const {data} = await axios.get(`https://${API_URL}${id}?key=${API_KEY}`);

    const {name,status,gender,species,origin,image} = data;
    const character = {id,name,status,gender,species,origin,image}

    return character.name 
    ? res.status(200).json(character)
    : res.status(404).json({error:'Not found'});
       

    } catch(error) {
        return res.status(500).json({error:error.message});
    }

    
}   


module.exports = getCharById;