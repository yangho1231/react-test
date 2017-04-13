import { GET_BOOKS } from '../actions/index';
import { BOOK_SELECTED } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_BOOKS: 
            return {...state, all: action.payload.data }
        case BOOK_SELECTED:
             return { ...state, post: action.payload.data }
        default:
            return state;    
    }
}