import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {
   const {id,name,status,gender,origin,imagen} = {characters};

   return (
   <div className={styles.allCards}>
      {characters.map (({id, name, status, species, gender, origin, image}) => {
         return (
            <Card 
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />)
      }
      )}
   </div>);
}