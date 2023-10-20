import axios from "axios";
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import styles from './Detail.module.css';

export default function Detail() {

    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              setLoading(false);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     const {name, image, status, species, gender, origin} = character
    
    return loading? (
        <h1>Loading...</h1>) : (

         <div>
            <h1>Detalle de {name}</h1>
            <div className={styles.Card}>
                <h1>{name}</h1>
                <img src={image} alt='' />          
                <h2>{status}</h2>
                <h2>{species}</h2>
                <h2>{gender}</h2>

                {character.origin.name && character.origin.name !== "unknown" && 
                ( <h2>{character.origin.name}</h2> )}
        </div> 

            
         </div>
        
                   
        )
}