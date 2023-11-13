const axios = require('axios');
// const URL = process.env.result;
const URL = 'https://rickandmortyapi.com/api/character/';

async function getCharById(req,res) {
    try {
        const {id} = req.params;
        console.log(`${URL}${id}`);

      const {data} = await axios.get(`${URL}${id}`)

      if(data) {
            let result = {
                id,
                status:data.status,
                name:data.name,            
                species:data.species,
                origin:data.origin.name,
                image:data.image,
                gender:data.gender,
                };

            res.status(200).json(result);
            
        } else {
            res.status(404).end('Not found') 
        }

    } catch(error) {
        res.status(500).json({message:'No funciona'})
    }

    
    /* .then((response)=>{
        if(data.response){
            
            const character = response.data;
            let result = {
                id,
                status:character.status,
                name:character.name,            
                species:character.species,
                origin:character.origin.name,
                image:character.image,
                gender:character.gender,
                };
        res.status(200).json(result);
        } else {
            res.status(404).end('Not found')            
        }
    }) */
}


module.exports = {getCharById}