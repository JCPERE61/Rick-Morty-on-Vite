import { Link } from 'react-router-dom';
import { addFav,removeFav } from '../../redux/actions';

import styles from './Card.module.css';
import { connect } from 'react-redux';
import { useState } from 'react';

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         removeFav(id)}
      else {setIsFav(true);
            addFav({id, name, status, species, gender, origin, image, onClose})}
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
       <div className={styles.Card}>
         <div id='header'>

         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
                  (<button onClick={handleFavorite}>🤍</button>)  }

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
    );
 }

const mapDispatchToProps = (dispatch) => {
   return 
   {addFav:(character) => {dispatch(addFav(character))};
   removeFav:(id)=>{ dispatch(removeFav(id));}
   }


const mapStateToProps = (state) => {
   return {
      myFavorites:state.myFavorites
   }
}

 }

 export default connect(mapStateToProps, mapDispatchToProps)(Card);