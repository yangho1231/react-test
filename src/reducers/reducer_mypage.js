import { GET_MYPAGE } from '../actions/index';
import { DELETE_BOOK } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };
export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_MYPAGE:
            return { ...state, all:action.payload.data }
        case DELETE_BOOK:
            return { ...state, all:action.payload.data }
        default:
            return state;    
    }
}