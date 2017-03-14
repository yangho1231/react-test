import { SIGN_UP_USER } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };
export default function(state = INITIAL_STATE , action) {
    switch(action.type) {
        case SIGN_UP_USER:
            console.log("far away", {...state, post: action.payload.data})
            return {...state, post: action.payload.data};
        default:
            return state;
    }
}