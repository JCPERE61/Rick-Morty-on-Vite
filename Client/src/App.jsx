import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { removeFav } from './redux/actions';


function App() {

   const [characters,setCharacters] = useState([]);

   const[hecho,setHecho] = useState([]);
   
   const [access,setAccess] = useState(false);

   /* let EMAIL = 'jcpere@gmail.com';
   let PASSWORD = 'Henry2023'; */

   const navigate = useNavigate();

   /* const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
   } */

async function login(userData) {

   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      const data = await axios(URL + `?email=${email}&password=${password}`);

  /*  const { access } = data; */
      setAccess(data);         
      access && navigate('/home');

   } catch (error) {
      
   }
   
   };
   

   function logout() {
      setAccess(false);
         navigate('/');

   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]); 

   
   const onSearch = (id) => {
      axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((res) => {
              if(!hecho.includes(id)){
               setCharacters((oldChars) => [...oldChars, res.data]);
               setHecho([...hecho,id]);
            } else {window.alert('¡Ya se ha mostrado personaje con este ID!')}},
            (reason) => {
               alert (reason.response.data)}
            );      
   }

   /*  console.log(cerrado) */

   const dispatch = useDispatch();

   const onClose = (id) =>{
      const filterChar = characters.filter(character=> Number(id) !== character.id);
      setCharacters(filterChar);
      dispatch(removeFav(id));
   /*    setCerrado(true);*/
   /*    setHecho(result);  */

   };

  

   const location = useLocation();
   const path = location.pathname;
   
   return (
      <div className='App'>

            {(path !== '/') && <Nav onSearch={onSearch} logout={logout}/>}
            <Routes>
               <Route path='/' element={<Form login={login}/>} />;
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} /> } />;
               <Route path='/about' element={<About />} />;
               <Route path='/detail/:id' element={<Detail />} />;
               <Route path='/favorites' element={<Favorites onClose={onClose}/>} />;
            </Routes>
      </div>
   );
}

export default App;