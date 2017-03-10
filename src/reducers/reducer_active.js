import { BOOK_SELECTED } from '../actions/index';
const INITIAL_STATE = { all: [], post: null };
export default function(state= INITIAL_STATE, action) {
    switch(action.type) {
        case BOOK_SELECTED:
                return { ...state, post: action.payload }
    }
    return state;
}