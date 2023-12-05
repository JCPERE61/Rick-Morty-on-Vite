import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState,useEffect } from 'react';

import styles from './Card.module.css';


export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   
   const [isFav,setIsFav] = useState(false);

   const dispatch = useDispatch();
   
   const myFavorites = useSelector((state) => state.myFavorites);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(removeFav(id))}
      else {
         setIsFav(true);
         dispatch(addFav({id, name, status, species, gender, origin, image, onClose}))
      }
   }

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

       <div className={styles.Card}>
         <div className={styles.header}>
            <img className={styles.image} src={image} alt=''/>
            <div className={styles.butDiv}>            
               {isFav ? (<button className={styles.buttonCD} onClick={handleFavorite}>❤️</button>) : 
                  (<button className={styles.buttonCD} onClick={handleFavorite}>🤍</button>) }

               <button className={styles.buttonCD} onClick={()=> onClose(id)}>X</button>
            </div>         
            
         </div>   
       
         
          
          
          <Link className={styles.link} to={`/detail/${id}`} >{name}</Link>
          <div className={styles.various}>
          {gender !== "unknown" ? <h3>{gender} identified as {species} </h3>:<h3>{species} with unknown gender</h3>}
            </div>
            {/* <div className={styles.others}>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h3>{origin}</h3> 
            </div>
            
            {character.origin.name && character.origin.name !== "unknown" && 
                ( <h2>Origin: {character.origin.name}</h2> )} */}
            
            
         
          
       </div>

    )
 };