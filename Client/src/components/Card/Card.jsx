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
         setIsFav(!isFav);
         dispatch(removeFav(id))}
      else {
         setIsFav(!isFav);
         dispatch(addFav({id, name, status, species, gender, origin, image, onClose}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

       <div className={styles.Card}>
         <div id='header'>

         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
                  (<button onClick={handleFavorite}>🤍</button>) }

         <button onClick={()=> onClose(id)}>X</button>
         </div>   
       
         <Link to={`/detail/${id}`} ><h1>{name}</h1></Link>
          <img src={image} alt='' />
          <div className={styles.various}>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h3>{origin}</h3>   
          </div>
          
       </div>

    )
 };