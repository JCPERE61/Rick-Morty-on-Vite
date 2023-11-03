import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions';

const initialState = {
    myFavorites:[],
    allCharacters:[],
};

function rootReducer(state=initialState,{type,payload}) {
    switch(type) {
        /* case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites,payload],
                allCharacters: [...state.allCharacters,payload]
            } */
        case 'ADD_FAV':
                return { ...state, myFavorites: payload, allCharacters: payload };
          
       /*  case REMOVE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter( character => character.id !== Number(payload))} */
        case 'REMOVE_FAV':
                    return { ...state, myFavorites: payload };
                    
        case FILTER:

            const genderFilter = state.allCharacters.filter( (char) => {
                if (char.gender === payload) {
                  return true;
                } else if (payload === "Todos") {
                  return true;
                }
                return false
              }
            );

            return {
                ...state,
                myFavorites: genderFilter,
              };

        case ORDER:

            const ordById = state.allCharacters.sort( (a, b) => {
                let may = b.id;
                let min = a.id;
                if (payload === "D") {
                    if(a.id < b.id) return 1;
                    if(b.id < a.id) return -1;
                    return 0;
                    } else 
                if (payload === "A") {
                    if(a.id > b.id) return 1;
                    if(b.id > a.id) return -1;
                    return 0;
                    }
                }
            );

            return {
            ...state,
            myFavorites: ordById,
          };          
        
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer