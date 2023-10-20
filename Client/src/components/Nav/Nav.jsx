import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const DivBar = styled.div`
    width:1300px;
    margin:0px;
    border: 3px solid black;
    display:flex;
    flex-direction: row;
    margin-left:-500px;
    padding: 12px;
    background-color: cadetblue;
    border-color: black;
`
export default function Nav({onSearch,logout}) {
    return (
        <DivBar>
            <button>
                <Link to={'/about'}>About</Link>
            </button>
            <button>
                <Link to={'/home'}>Home</Link>
            </button>            
            <SearchBar onSearch={onSearch} />
            <button>
                <Link to={'/favorites'}>Favorites</Link>
            </button>
            <button id='logout' onClick={logout}>Logout</button> 
        </DivBar>        
    )  
    
}

