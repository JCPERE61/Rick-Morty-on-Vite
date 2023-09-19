import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';

const DivBar = styled.div`
    background-color: pink;
    border: 3px solid black;
`
export default function Nav({onSearch}) {
    return (
        <DivBar>
            <SearchBar onSearch={onSearch} />
        </DivBar>        
    )  
    
}

