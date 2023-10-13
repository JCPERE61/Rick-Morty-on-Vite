import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({onSearch}) {

   const [id,setId] = useState('');
   const[inpId,setInpId] = useState('');

   const handleChange = (event) => {
      setInpId(event.target.value);
      setId(event.target.value);
   }

   return (
      <div className={styles.searchDiv}>
        <input onChange={handleChange} placeholder='id' className={styles.input} type='search' value={inpId}/>
        <button onClick={()=>{
         onSearch(id)
         setInpId('')}
         }>Agregar</button>
       </div>
    );
 }