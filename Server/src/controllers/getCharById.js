<<<<<<< HEAD
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


module.exports = {getCharById}
=======
const axios = require ('axios');

exports.getCharById = (res,id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
        const character = response.data;
        return {
            id,
            name:character.name,
            gender:character.gender,
            species:character.species,
            origin:character.origin.name,
            image:character.image,
            status:character.status
            }
    })
    .then((response) => {
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify(response));
    })
    .catch((reason) => {
        if(reason.response.status === 404)
            {res.writeHead(404, {"Content-Type":"text/plain"});
            res.end('¡No hay personajes con este ID!')} 
        else 
            {res.writeHead(500, {"Content-Type":"text/plain"});
            res.end("Error del Servidor")}
    })

    
    
}
>>>>>>> e5045fb352c67e0046eab24c2dc371d0fdca9217
