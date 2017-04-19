import { SEARCH_BOOK } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SEARCH_BOOK: 
                if(action.payload.data.result === "Search didn't match") return { ...state, post: action.payload.data.search, all: [] }
                else return {...state, all: action.payload.data }
        default:
            return state;    
    }
}