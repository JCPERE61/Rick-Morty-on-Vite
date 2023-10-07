import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions';

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
                myFavorites:state.myFavorites.filter( character => character.id !== Number(payload))}
        case FILTER:
            return {
                
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer