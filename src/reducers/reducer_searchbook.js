import { SEARCH_BOOK } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SEARCH_BOOK: 
            console.log("payload", action.payload.data)
            return {...state, all: action.payload.data }
        default:
            return state;    
    }
}