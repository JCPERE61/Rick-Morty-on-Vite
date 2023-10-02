import { Link } from 'react-router-dom';

import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

const DivBar = styled.div`
    background-color: pink;
    border: 3px solid black;
`
export default function Nav({onSearch}) {
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
        </DivBar>        
    )  
    
}

