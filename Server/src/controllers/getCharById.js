const axios = require('axios');
const URL = process.env.result;

function getCharById(req,res) {

    const {id} = req.params

    axios.get(`URL${id}`)
    .then((response)=>{
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
    })
    .catch((error) => {
        res.status(500).json({message:error})
    });
}


module.exports = getCharById