import axios from 'axios';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';

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
            <Routes>
               <Route path='/home' element={<Cards onClose={onClose} characters={characters} /> } />;
               <Route path='/about' element={<About />} />;
               <Route path='/detail/:id' element={<Detail />} />;
            </Routes>
      </div>
   );
}

export default App;