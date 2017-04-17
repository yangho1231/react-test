import { GET_USERS } from '../actions/index';
import { DELETE_USER } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_USERS: 
            console.log("action", action.payload.data);
            return {...state, all: action.payload.data }
        case DELETE_USER:
            console.log("delete", action.payload.data);
            return {...state, all: action.payload.data }
        default:
            return state;    
    }
}