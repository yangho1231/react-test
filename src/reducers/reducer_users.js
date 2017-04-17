import { GET_USERS } from '../actions/index';
import { DELETE_USER } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_USERS: 
            return {...state, all: action.payload.data }
        case DELETE_USER:
            return {...state, all: action.payload.data }
        default:
            return state;    
    }
}