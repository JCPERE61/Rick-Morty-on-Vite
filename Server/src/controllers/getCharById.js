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