import axios from 'axios';
import { useEffect, useState } from 'react';
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

   const [ordChar,setOrdChar] = useState ({
      hecho: [],
      ultimo: 0,
      cerrado:false
   });

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

   useEffect(() => {
      !access && navigate('/');
   }, [access]); 

   axios("https://rickandmortyapi.com/api/character/").then(({ data }) =>{
   setOrdChar ({...ordChar,ultimo: data.info.count});
   })

   let cambios = ordChar.hecho;

   const onSearch = (id) => {
      if (id > 0 && id<=ordChar.ultimo) {         
         if(!cambios.includes(id)) {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) =>
            setCharacters((oldChars) => [...oldChars, data]));
            setOrdChar([...cambios,id])
            } else {window.alert('¡Ya se ha mostrado personaje con este ID!')};

         } else {window.alert('¡No hay personajes con este ID!')}
   }

   const onClose = (id) =>{
      const result = characters.filter(character=> Number(id) !== character.id)
      setCharacters(result);
      setOrdChar({...ordChar,cerrado:true,hecho:result});
   };

   const location = useLocation();
   const path = location.pathname;
   
   return (
      <div className='App'>

            {(path !== '/') && <Nav onSearch={onSearch}/>}
            <Routes>
            {/* <Route path='/' element={<Form />} />; */}
               <Route path='/' element={<Form login={login}/>} />;
               <Route path='/home' element={<Cards onClose={onClose} cerrado={ordChar.cerrado} characters={characters} /> } />;
               <Route path='/about' element={<About />} />;
               <Route path='/detail/:id' element={<Detail />} />;
               <Route path='/favorites' element={<Favorites onClose={onClose} cerrado={ordChar.cerrado}/>} />;
            </Routes>
      </div>
   );
}

export default App;