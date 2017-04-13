import { SIGN_UP_USER } from '../actions/index';
import { LOGIN_USER } from '../actions/index';
import { LOGOUT_USER } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case LOGIN_USER:
            return action.payload.data === "Username or Password is wrong" ? {...state, post:null} : {...state, post: action.payload.data }
            // if(action.payload.data === "Username or Password is wrong")return {...state, post: null}
            // else return {...state, post: action.payload.data};
        case LOGOUT_USER:
            return {...state, post: null }
        default:
            return state;
    }
}

