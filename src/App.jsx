import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';

function App() {

   const [characters,setCharacters] = useState([]);
   const [hecho,setHecho] = useState([]);

   const onSearch = (id) => {
      if (id > 0 && id<=826) {
         
         if(!hecho.includes(id)) {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) =>
            setCharacters((oldChars) => [...oldChars, data]));
            setHecho([...hecho,id])
            } else {window.alert('¡Ya se ha mostrado personaje con este ID!')};

         } else {window.alert('¡No hay personajes con este ID!')}
   }

   const onClose = (id) =>{
      const result = characters.filter(character=> Number(id) !== character.id)
      setCharacters(result);
   };


   return (
      <div className='App'>
            <Nav onSearch={onSearch}/>
            <Cards onClose={onClose} characters={characters} />        
      </div>
   );
}

export default App;