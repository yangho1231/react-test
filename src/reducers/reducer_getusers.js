import { GET_USERS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_USERS: 
            console.log("action", action.payload.data);
            return {...state, all: action.payload.data }
        default:
            return state;    
    }
}