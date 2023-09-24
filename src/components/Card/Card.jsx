import { Link } from 'react-router-dom';

import styles from './Card.module.css';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
    return (
       <div className={styles.Card}>
         <div id='header'>
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