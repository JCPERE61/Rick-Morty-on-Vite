import axios from 'axios';
import { useEffect, useReducer, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import { Favorites } from './components/Favorites/Favorites';

function App() {

   const [characters,setCharacters] = useState([]);
   const [hecho,setHecho] = useState([]);

   const [access,setAccess] = useState(false);

   let EMAIL = 'jcpere@gmail.com';
   let PASSWORD = 'Henry2023';

   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   }

   /* useEffect(() => {
      !access && navigate('/');
   }, [access]); */

   
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

   const location = useLocation();
   const path = location.pathname;
   
   return (
      <div className='App'>

            {(path !== '/') && <Nav onSearch={onSearch}/>}
            <Routes>
            {/* <Route path='/' element={<Form />} />; */}
               <Route path='/' element={<Form login={login}/>} />;
               <Route path='/home' element={<Cards onClose={onClose} characters={characters} /> } />;
               <Route path='/about' element={<About />} />;
               <Route path='/detail/:id' element={<Detail />} />;
               <Route path='/favorites' element={<Favorites />} />;
            </Routes>
      </div>
   );
}

export default App;