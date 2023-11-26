const axios = require('axios');
// const URL = process.env.result;
const URL = 'https://rickandmortyapi.com/api/character/';

async function getCharById(req,res) {

   const id = Number(req.params.id);
//    const {id} = req.params;

    try {
        
    const {data} = await axios.get(`${URL}${id}`);
    const {name,status,gender,species,origin,image} = data;
    const character = {id,name,status,gender,species,origin,image}

    return character.name 
    ? res.status(200).json(character)
    : res.status(404).send('Not found');
    //const {data} = await axios('https://rickandmortyapi.com/api/character/10');

    /*   if(data) {
            let result = {
                id,
                status:data.status,
                name:data.name,            
                species:data.species,
                origin:data.origin.name,
                image:data.image,
                gender:data.gender,
                };

        return res.status(200).json(result);
            
        } else {
        return res.status(404).json({error:'Not found'}) 
        } */

    } catch(error) {
        return res.status(500).json({error:error.message});
    }

    
}   


module.exports = getCharById;