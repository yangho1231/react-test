import { SIGN_UP_USER } from '../actions/index';
import { LOGIN_USER } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };
export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case SIGN_UP_USER:
            return {...state, post: action.payload.data};
        case LOGIN_USER:
            if(action.payload.data === "Username or Password is wrong"){
                return {...state, post: null}
            }
            else {
                return {...state, post: action.payload.data};
            }
            
        default:
            return state;
    }
}