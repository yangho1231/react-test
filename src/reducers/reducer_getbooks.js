import { GET_BOOKS } from '../actions/index';
import { BOOK_SELECTED } from '../actions/index';
const INITIAL_STATE = { all: [], post: [] };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_BOOKS: 
            console.log("sample", action.payload.data);
            return {...state, all: action.payload.data }
        case BOOK_SELECTED:
             console.log('reducer received', action.payload.data)
             return { ...state, post: action.payload.data }
        default:
            return state;    
    }

}