import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {

   const [id,setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }

   const {onSearch} = props;
    return (
      <div className={styles.searchDiv}>
        <input onChange={handleChange} placeholder='id' className={styles.input} type='search' />
        <button onClick={()=>onSearch(id)}>Agregar</button>
       </div>
    );
 }