import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail() {

    const [character, setCharacter] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     const {name, image, status, species, gender, origin} = character
    
    return (
        <div>
        {character &&
        <div>
            <h1>{name}</h1>
            <img src={image} alt='' />          
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h3>{origin?.name}</h3>
            </div>

            }
          
        </div>
    )
}