import { ADD_FAV, REMOVE_FAV} from './actions';

const initialState = {
    myFavorites:[],
}

function rootReducer(state=initialState,{type,payload}) {
    switch(type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites:[...state.myFavorites,payload]}
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites:state.myFavorites.filter( character => character.id !== payload)}
        default:
            return {
                ...state,
            }
    }
}